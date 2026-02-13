#!/usr/bin/env ts-node

/**
 * Primordial Events - Automated Task Orchestrator
 *
 * This script reads TODO.md, categorizes tasks, and launches Claude Code agents
 * to complete automatable tasks in parallel or sequence.
 *
 * Usage:
 *   pnpm task-orchestrator           # Interactive mode - select tasks
 *   pnpm task-orchestrator --auto    # Auto mode - run all automatable tasks
 *   pnpm task-orchestrator --dry-run # Show what would run without executing
 */

import * as fs from 'fs'
import * as path from 'path'
import { spawn } from 'child_process'

// ============================================================================
// TYPES
// ============================================================================

type TaskType = 'code' | 'content' | 'research' | 'manual' | 'external'
type TaskPriority = 'P0' | 'P1' | 'P2' | 'P3'
type TaskStatus = 'pending' | 'in-progress' | 'completed' | 'blocked' | 'skipped'

interface Task {
  id: string
  title: string
  description: string
  estimatedTime: string
  priority: TaskPriority
  type: TaskType
  status: TaskStatus
  dependencies: string[]
  automatable: boolean
  agentPrompt?: string
  files?: string[]
  blockingReason?: string
}

interface TaskResult {
  taskId: string
  success: boolean
  output: string
  duration: number
  error?: string
}

// ============================================================================
// TASK CATEGORIZATION
// ============================================================================

const TASK_PATTERNS = {
  code: [
    /add.*to.*component/i,
    /create.*component/i,
    /update.*page/i,
    /optimize.*images/i,
    /implement.*lazy loading/i,
    /add.*badge/i,
    /create.*button/i,
    /modify.*tsx/i,
    /edit.*file/i,
  ],
  content: [
    /write.*blog/i,
    /create.*content/i,
    /write.*copy/i,
    /create.*faq/i,
    /draft.*email/i,
    /create.*template/i,
  ],
  research: [
    /research.*competitors/i,
    /analyze.*market/i,
    /identify.*keywords/i,
    /study.*trends/i,
  ],
  manual: [
    /film.*video/i,
    /take.*photo/i,
    /attend.*event/i,
    /call.*client/i,
    /meet.*vendor/i,
    /schedule.*call/i,
  ],
  external: [
    /list on.*knot/i,
    /claim.*google/i,
    /sign up.*weddingwire/i,
    /create.*account/i,
    /post.*social/i,
  ],
}

function categorizeTask(title: string, description: string): TaskType {
  const text = `${title} ${description}`.toLowerCase()

  // Check patterns in priority order
  if (TASK_PATTERNS.manual.some((pattern) => pattern.test(text))) return 'manual'
  if (TASK_PATTERNS.external.some((pattern) => pattern.test(text))) return 'external'
  if (TASK_PATTERNS.code.some((pattern) => pattern.test(text))) return 'code'
  if (TASK_PATTERNS.content.some((pattern) => pattern.test(text))) return 'content'
  if (TASK_PATTERNS.research.some((pattern) => pattern.test(text))) return 'research'

  // Default to manual if uncertain
  return 'manual'
}

function isAutomatable(type: TaskType): boolean {
  return type === 'code' || type === 'content' || type === 'research'
}

// ============================================================================
// TODO.md PARSER
// ============================================================================

function parseTodoFile(filePath: string): Task[] {
  const content = fs.readFileSync(filePath, 'utf-8')
  const lines = content.split('\n')

  const tasks: Task[] = []
  let currentPriority: TaskPriority = 'P1'
  let currentTaskId = 0

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    // Detect priority sections
    if (line.includes('PRIORITY 0')) currentPriority = 'P0'
    else if (line.includes('PRIORITY 1')) currentPriority = 'P1'
    else if (line.includes('PRIORITY 2')) currentPriority = 'P2'
    else if (line.includes('PRIORITY 3')) currentPriority = 'P3'

    // Detect tasks (markdown checkbox format)
    const taskMatch = line.match(/^- \[([ x])\] \*\*(.+?)\*\*/)
    if (taskMatch) {
      const isComplete = taskMatch[1] === 'x'
      const title = taskMatch[2]

      // Extract time estimate if present
      const timeMatch = title.match(/\((\d+(?:\.\d+)?\s*(?:min|hour|hours))\)/)
      const estimatedTime = timeMatch ? timeMatch[1] : '1 hour'

      // Look ahead for description (indented lines after task)
      let description = ''
      let j = i + 1
      while (j < lines.length && (lines[j].startsWith('  ') || lines[j].trim() === '')) {
        if (lines[j].trim()) {
          description += lines[j].trim() + ' '
        }
        j++
      }

      const type = categorizeTask(title, description)
      const automatable = isAutomatable(type) && !isComplete

      tasks.push({
        id: `task-${currentPriority}-${currentTaskId++}`,
        title: title.replace(/\s*\(.*?\)\s*/g, '').trim(), // Remove time estimate from title
        description: description.trim(),
        estimatedTime,
        priority: currentPriority,
        type,
        status: isComplete ? 'completed' : 'pending',
        dependencies: [],
        automatable,
      })
    }
  }

  return tasks
}

// ============================================================================
// AGENT PROMPTS
// ============================================================================

function generateAgentPrompt(task: Task): string {
  const baseContext = `
You are working on a task for Primordial Events, a professional DJ and event production services website.

Project Context:
- Next.js 15 app with App Router
- PayloadCMS 3.x for content management
- Tailwind CSS + shadcn/ui components
- TypeScript
- Working directory: /Users/chanceneihouse/__code-sandbox/pg/pg-events

Task Details:
- Title: ${task.title}
- Description: ${task.description}
- Priority: ${task.priority}
- Estimated Time: ${task.estimatedTime}
`

  if (task.type === 'code') {
    return `${baseContext}

Your task is to make code changes to implement this feature.

Instructions:
1. Read relevant files to understand current implementation
2. Make the necessary code changes
3. Ensure code follows existing patterns and TypeScript standards
4. Test that changes don't break the build (run 'pnpm build' if needed)
5. Provide a summary of changes made

Important Files (if mentioned in task):
${task.files?.map((f) => `- ${f}`).join('\n') || 'See task description'}

Complete this task and report back with what you did.
`
  }

  if (task.type === 'content') {
    return `${baseContext}

Your task is to create content (documentation, copy, blog posts, etc.).

Instructions:
1. Research the topic if needed
2. Write clear, engaging content that matches the brand voice
3. Follow existing content patterns in the project
4. Save content to appropriate files
5. Provide a summary of what you created

Brand Voice: Professional but approachable, technical but not jargon-heavy, premium but accessible.

Complete this task and report back with what you created.
`
  }

  if (task.type === 'research') {
    return `${baseContext}

Your task is to conduct research and provide findings.

Instructions:
1. Research the topic thoroughly
2. Synthesize findings into actionable insights
3. Create a markdown document with your research
4. Include sources and recommendations
5. Provide a summary of key findings

Complete this task and report back with your findings.
`
  }

  return `${baseContext}

Complete this task to the best of your ability and report back with what you did.
`
}

// ============================================================================
// AGENT LAUNCHER
// ============================================================================

async function launchAgent(task: Task): Promise<TaskResult> {
  const startTime = Date.now()

  console.log(`\n${'='.repeat(80)}`)
  console.log(`🤖 Launching agent for: ${task.title}`)
  console.log(`   Type: ${task.type} | Priority: ${task.priority} | ETA: ${task.estimatedTime}`)
  console.log(`${'='.repeat(80)}\n`)

  const prompt = task.agentPrompt || generateAgentPrompt(task)

  // In a real implementation, this would launch a Claude Code Task agent
  // For now, we'll simulate with a placeholder

  return new Promise((resolve) => {
    // Simulated agent execution
    setTimeout(() => {
      const duration = Date.now() - startTime

      resolve({
        taskId: task.id,
        success: true,
        output: `Agent completed task: ${task.title}`,
        duration,
      })
    }, 2000) // Simulate 2-second execution
  })
}

// ============================================================================
// TASK EXECUTOR
// ============================================================================

interface ExecutionPlan {
  automatable: Task[]
  manual: Task[]
  external: Task[]
  completed: Task[]
  blocked: Task[]
}

function createExecutionPlan(tasks: Task[]): ExecutionPlan {
  return {
    automatable: tasks.filter((t) => t.automatable && t.status === 'pending'),
    manual: tasks.filter((t) => t.type === 'manual' && t.status === 'pending'),
    external: tasks.filter((t) => t.type === 'external' && t.status === 'pending'),
    completed: tasks.filter((t) => t.status === 'completed'),
    blocked: tasks.filter((t) => t.status === 'blocked'),
  }
}

async function executeTasksSequential(tasks: Task[]): Promise<TaskResult[]> {
  const results: TaskResult[] = []

  for (const task of tasks) {
    const result = await launchAgent(task)
    results.push(result)

    if (!result.success) {
      console.error(`❌ Task failed: ${task.title}`)
      console.error(`   Error: ${result.error}`)
      // Continue with other tasks even if one fails
    } else {
      console.log(`✅ Task completed: ${task.title}`)
      console.log(`   Duration: ${(result.duration / 1000).toFixed(1)}s`)
    }
  }

  return results
}

async function executeTasksParallel(tasks: Task[], maxConcurrent = 3): Promise<TaskResult[]> {
  const results: TaskResult[] = []
  const executing: Promise<TaskResult>[] = []

  for (const task of tasks) {
    const promise = launchAgent(task)
    executing.push(promise)

    if (executing.length >= maxConcurrent) {
      const result = await Promise.race(executing)
      results.push(result)
      executing.splice(
        executing.findIndex((p) => p === promise),
        1
      )
    }
  }

  // Wait for remaining tasks
  const remaining = await Promise.all(executing)
  results.push(...remaining)

  return results
}

// ============================================================================
// REPORTING
// ============================================================================

function printExecutionPlan(plan: ExecutionPlan) {
  console.log('\n' + '='.repeat(80))
  console.log('📋 EXECUTION PLAN')
  console.log('='.repeat(80))

  console.log(`\n✅ Completed Tasks: ${plan.completed.length}`)
  console.log(`🤖 Automatable Tasks: ${plan.automatable.length}`)
  console.log(`👤 Manual Tasks: ${plan.manual.length}`)
  console.log(`🌐 External Tasks: ${plan.external.length}`)
  console.log(`🚫 Blocked Tasks: ${plan.blocked.length}`)

  if (plan.automatable.length > 0) {
    console.log('\n🤖 AUTOMATABLE TASKS (Will be executed):')
    console.log('-'.repeat(80))
    plan.automatable.forEach((task, i) => {
      console.log(`${i + 1}. [${task.priority}] ${task.title}`)
      console.log(`   Type: ${task.type} | ETA: ${task.estimatedTime}`)
      if (task.description) {
        console.log(`   ${task.description.substring(0, 60)}...`)
      }
    })
  }

  if (plan.manual.length > 0) {
    console.log('\n👤 MANUAL TASKS (Require user action):')
    console.log('-'.repeat(80))
    plan.manual.forEach((task, i) => {
      console.log(`${i + 1}. [${task.priority}] ${task.title}`)
      console.log(`   ${task.description.substring(0, 60)}...`)
    })
  }

  if (plan.external.length > 0) {
    console.log('\n🌐 EXTERNAL TASKS (Require external services):')
    console.log('-'.repeat(80))
    plan.external.forEach((task, i) => {
      console.log(`${i + 1}. [${task.priority}] ${task.title}`)
      console.log(`   ${task.description.substring(0, 60)}...`)
    })
  }

  console.log('\n' + '='.repeat(80))
}

function printResults(results: TaskResult[]) {
  console.log('\n' + '='.repeat(80))
  console.log('📊 EXECUTION RESULTS')
  console.log('='.repeat(80))

  const successful = results.filter((r) => r.success)
  const failed = results.filter((r) => !r.success)
  const totalDuration = results.reduce((sum, r) => sum + r.duration, 0)

  console.log(`\n✅ Successful: ${successful.length}`)
  console.log(`❌ Failed: ${failed.length}`)
  console.log(`⏱️  Total Duration: ${(totalDuration / 1000 / 60).toFixed(1)} minutes`)

  if (failed.length > 0) {
    console.log('\n❌ FAILED TASKS:')
    console.log('-'.repeat(80))
    failed.forEach((result) => {
      console.log(`- ${result.taskId}`)
      console.log(`  Error: ${result.error}`)
    })
  }

  console.log('\n' + '='.repeat(80))
}

// ============================================================================
// MAIN
// ============================================================================

async function main() {
  const args = process.argv.slice(2)
  const dryRun = args.includes('--dry-run')
  const autoMode = args.includes('--auto')
  const parallel = args.includes('--parallel')
  const maxConcurrent = parseInt(args.find((a) => a.startsWith('--max='))?.split('=')[1] || '3')

  console.log('🚀 Primordial Events - Task Orchestrator')
  console.log('='.repeat(80))

  // Parse TODO.md
  const todoPath = path.join(__dirname, '..', 'TODO.md')
  if (!fs.existsSync(todoPath)) {
    console.error('❌ TODO.md not found at:', todoPath)
    process.exit(1)
  }

  console.log('📖 Reading TODO.md...')
  const tasks = parseTodoFile(todoPath)
  console.log(`   Found ${tasks.length} total tasks`)

  // Create execution plan
  const plan = createExecutionPlan(tasks)
  printExecutionPlan(plan)

  // Dry run mode
  if (dryRun) {
    console.log('\n🏃 DRY RUN MODE - No tasks will be executed')
    console.log('\nTo execute tasks, run without --dry-run flag:')
    console.log('  pnpm task-orchestrator --auto')
    process.exit(0)
  }

  // Interactive mode
  if (!autoMode && plan.automatable.length > 0) {
    console.log('\n❓ Execute all automatable tasks? (y/n)')
    // In real implementation, would prompt for user input
    // For now, default to no in interactive mode
    console.log('   Skipping execution in interactive mode (use --auto flag to execute)')
    process.exit(0)
  }

  // Execute automatable tasks
  if (plan.automatable.length === 0) {
    console.log('\n✨ No automatable tasks to execute!')
    console.log('   All automatable tasks are complete or blocked.')
    process.exit(0)
  }

  console.log(`\n🚀 Executing ${plan.automatable.length} tasks...`)
  console.log(`   Mode: ${parallel ? 'Parallel' : 'Sequential'}`)
  if (parallel) {
    console.log(`   Max concurrent: ${maxConcurrent}`)
  }

  const results = parallel
    ? await executeTasksParallel(plan.automatable, maxConcurrent)
    : await executeTasksSequential(plan.automatable)

  printResults(results)

  // Summary
  console.log('\n✨ Task orchestration complete!')
  console.log('\nNext steps:')
  if (plan.manual.length > 0) {
    console.log(`- Complete ${plan.manual.length} manual tasks`)
  }
  if (plan.external.length > 0) {
    console.log(`- Complete ${plan.external.length} external tasks`)
  }
  console.log('- Review changes and test the application')
  console.log('- Update TODO.md to mark completed tasks')
}

// ============================================================================
// RUN
// ============================================================================

if (require.main === module) {
  main().catch((error) => {
    console.error('❌ Fatal error:', error)
    process.exit(1)
  })
}

export type { Task, TaskResult }
export { parseTodoFile, createExecutionPlan, launchAgent }
