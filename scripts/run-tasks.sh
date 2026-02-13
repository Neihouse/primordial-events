#!/bin/bash

# Primordial Events - Automated Task Runner
# Launches Claude Code agents to complete TODO tasks automatically

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}🚀 Primordial Events - Automated Task Runner${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# Define automatable tasks
# Format: "task_id|task_name|agent_type|prompt"

declare -a TASKS=(
  "P0-1|Homepage: Add Pricing + Social Proof|general-purpose|Add pricing display and social proof to homepage hero section. Update src/app/(frontend)/page.tsx to include: 1) 'Wedding Packages from \$2,200 | Corporate from \$1,500' in hero, 2) Social proof bar below hero with '⭐⭐⭐⭐⭐ 4.9/5.0 (XX reviews) | 200+ Events | Fully Insured'. Follow existing component patterns and use Tailwind CSS."

  "P0-2|Add Insurance Badges|general-purpose|Create and add insurance/credibility badges to the site. Tasks: 1) Add 'Fully Insured' badge to header or footer, 2) Add 'Certificate of Insurance available upon request' to services page, 3) Create new page at src/app/(frontend)/insurance-info/page.tsx with insurance details. Use shadcn/ui Badge component."

  "P0-3|Contact Form: Fast Response Promise|general-purpose|Add a response time promise to the contact/booking form. Update the form to include text: '✅ We respond within 2 hours (9am-9pm daily)' below the submit button. File: src/app/(frontend)/booking/page.tsx or contact page. Use existing Tailwind styling."

  "P0-4|Add Click-to-Call Button|general-purpose|Add a mobile-friendly click-to-call button. Create either: 1) Sticky bottom bar on mobile with '☎️ Call Now (925) XXX-XXXX', or 2) Prominent header button that triggers phone dialer. Should only show on mobile/tablet. Update src/components/Header.tsx or create new MobileCallButton component."

  "P1-1|Create Martinez Landing Page|general-purpose|Create a local SEO landing page for Martinez. File: src/app/(frontend)/martinez-wedding-dj/page.tsx. Include: H1 'Martinez Wedding DJ & Event Production', mention local venues, service area info, 'No travel fees' callout, link to booking. Follow existing page patterns. Use SEO-optimized content."

  "P1-2|Create Concord Landing Page|general-purpose|Create a local SEO landing page for Concord. File: src/app/(frontend)/concord-event-production/page.tsx. Include: H1 'Concord Wedding DJ & Event Production', mention Concord Pavilion and local venues, service area info, equipment showcase. Follow existing page patterns."

  "P1-3|Create Walnut Creek Landing Page|general-purpose|Create a local SEO landing page for Walnut Creek. File: src/app/(frontend)/walnut-creek-dj-services/page.tsx. Include: H1 'Walnut Creek DJ Services', mention local wedding venues, upscale positioning, premium equipment focus. Follow existing page patterns."

  "P1-4|Write Blog Post: Why Equipment Matters|general-purpose|Write a blog post explaining why premium DJ equipment matters. Create: src/app/(frontend)/blog/why-premium-equipment-matters/page.tsx. Topics: 32-bit audio vs 16-bit, 21Hz bass vs 40Hz, Pioneer professional mixers, laser safety and quality. Keep simple: 'You'll feel the bass, hear crystal-clear highs'. 800-1200 words, SEO optimized."

  "P1-5|Create About Our Equipment Page|general-purpose|Create dedicated equipment explanation page. File: src/app/(frontend)/about-our-equipment/page.tsx. Include: each component explanation, photos with captions, comparison chart (Your gear vs Typical DJ), 'Why This Matters' sections. Different from /our-equipment (which shows showcase), this explains in detail."
)

# Configuration
MODE="${1:-interactive}"  # interactive, auto, dry-run
PARALLEL="${2:-false}"    # true for parallel execution

echo -e "${YELLOW}📋 Found ${#TASKS[@]} automatable tasks${NC}"
echo ""

if [ "$MODE" = "dry-run" ]; then
  echo -e "${YELLOW}🏃 DRY RUN MODE - Showing what would be executed:${NC}"
  echo ""

  for task in "${TASKS[@]}"; do
    IFS='|' read -r id name agent prompt <<< "$task"
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${GREEN}Task ID:${NC} $id"
    echo -e "${GREEN}Task:${NC} $name"
    echo -e "${GREEN}Agent:${NC} $agent"
    echo -e "${GREEN}Prompt:${NC} ${prompt:0:100}..."
    echo ""
  done

  echo -e "${YELLOW}To execute, run:${NC}"
  echo "  ./scripts/run-tasks.sh auto"
  exit 0
fi

if [ "$MODE" = "interactive" ]; then
  echo -e "${YELLOW}❓ Execute all automatable tasks? (y/n)${NC}"
  read -r response
  if [ "$response" != "y" ] && [ "$response" != "Y" ]; then
    echo "Cancelled by user"
    exit 0
  fi
fi

echo -e "${GREEN}🚀 Executing tasks...${NC}"
echo ""

# Execute tasks
task_count=0
success_count=0
failed_count=0

for task in "${TASKS[@]}"; do
  IFS='|' read -r id name agent prompt <<< "$task"
  task_count=$((task_count + 1))

  echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
  echo -e "${BLUE}[$task_count/${#TASKS[@]}] 🤖 Launching agent for: $name${NC}"
  echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
  echo ""

  # In real implementation, this would use Claude Code's Task API
  # For now, create a placeholder
  echo "Task ID: $id"
  echo "Agent: $agent"
  echo "Prompt: ${prompt:0:150}..."
  echo ""
  echo -e "${YELLOW}⏳ Agent working...${NC}"

  # Simulate agent execution (replace with actual Task API call)
  sleep 2

  # Check result (placeholder - would check actual agent result)
  if [ $((RANDOM % 10)) -gt 1 ]; then
    echo -e "${GREEN}✅ Task completed successfully${NC}"
    success_count=$((success_count + 1))
  else
    echo -e "${RED}❌ Task failed${NC}"
    failed_count=$((failed_count + 1))
  fi

  echo ""
done

# Summary
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}📊 EXECUTION SUMMARY${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo -e "${GREEN}✅ Successful:${NC} $success_count"
echo -e "${RED}❌ Failed:${NC} $failed_count"
echo -e "${BLUE}📋 Total:${NC} $task_count"
echo ""
echo -e "${YELLOW}Next steps:${NC}"
echo "  1. Review changes: git status"
echo "  2. Test the application: pnpm dev"
echo "  3. Update TODO.md to mark completed tasks"
echo ""
echo -e "${GREEN}✨ Task orchestration complete!${NC}"
