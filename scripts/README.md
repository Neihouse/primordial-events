# Scripts Directory

This directory contains automation scripts for Primordial Events.

## Available Scripts

### 1. Outreach Automation (`outreach-automation.ts`)

Email campaign management for business development.

**Quick Start:**
```bash
pnpm outreach init          # Initialize database
pnpm outreach list          # List contacts
pnpm outreach generate ID   # Generate email draft
pnpm outreach help          # Full help
```

**Documentation:**
- Quick Start: `OUTREACH-AUTOMATION-QUICKSTART.md`
- Full Docs: `scripts/README-outreach.md`

**Features:**
- Contact database with 29+ seed contacts
- Email template personalization from OUTREACH.md
- Campaign tracking and status management
- Report generation
- CSV export
- NEVER auto-sends emails (draft-only for safety)

---

### 2. Task Orchestrator - Automated TODO Execution

Automatically executes tasks from `TODO.md` using Claude Code agents.

## Quick Start

### Dry Run (See what would execute):
```bash
./scripts/run-tasks.sh dry-run
```

### Interactive Mode (Confirm before executing):
```bash
./scripts/run-tasks.sh
```

### Auto Mode (Execute all automatable tasks):
```bash
./scripts/run-tasks.sh auto
```

## How It Works

1. **Parses TODO.md**: Identifies incomplete tasks
2. **Categorizes Tasks**:
   - ✅ **Automatable** (code, content, research) - Can be done by AI agents
   - 👤 **Manual** (filming, photos, phone calls) - Requires human action
   - 🌐 **External** (account signups, listings) - Requires external services
3. **Launches Agents**: Spawns specialized agents for each automatable task
4. **Reports Results**: Shows success/failure summary

## Task Categories

### Code Tasks (Automatable ✅)
- Adding components
- Updating pages
- Optimizing images
- Creating new pages
- Modifying TypeScript/React files

**Example**: "Add pricing + social proof to homepage"

### Content Tasks (Automatable ✅)
- Writing blog posts
- Creating FAQs
- Drafting email templates
- Writing marketing copy

**Example**: "Write blog post: Why Premium Equipment Matters"

### Research Tasks (Automatable ✅)
- Market analysis
- Competitor research
- Keyword research

**Example**: "Research local wedding venues"

### Manual Tasks (Not Automatable ❌)
- Filming videos
- Taking photos
- Attending events
- Making phone calls

**Example**: "Film equipment walkthrough video"

### External Tasks (Not Automatable ❌)
- Signing up for services
- Creating accounts
- Posting on social media

**Example**: "Claim Google Business Profile"

## Current Automatable Tasks

Based on TODO.md analysis, here are the tasks that will be automated:

### Priority 0 (This Week):
1. ✅ **Homepage: Add Pricing + Social Proof** (1 hour)
   - Add pricing ranges to hero
   - Add review stars and social proof bar
   - Impact: +35-50% conversion rate

2. ✅ **Add Insurance/Credibility Badges** (1 hour)
   - "Fully Insured" badge in header/footer
   - Create `/insurance-info` page
   - Impact: Unblocks B2B sales

3. ✅ **Contact Form: Fast Response Promise** (30 min)
   - Add "We respond within 2 hours" message
   - Impact: +25% form submissions

4. ✅ **Add Click-to-Call Button (Mobile)** (30 min)
   - Sticky mobile call button
   - Impact: +20% mobile conversions

### Priority 1 (Week 1-2):
5. ✅ **Create Martinez Landing Page** (1.5 hours)
   - Local SEO optimized page
   - Mentions local venues
   - Impact: Local search visibility

6. ✅ **Create Concord Landing Page** (1.5 hours)
   - Local SEO optimized page
   - Impact: Local search visibility

7. ✅ **Create Walnut Creek Landing Page** (1.5 hours)
   - Local SEO optimized page
   - Impact: Local search visibility

8. ✅ **Write Blog: Why Equipment Matters** (1.5 hours)
   - 800-1200 word SEO blog post
   - Impact: Content marketing + SEO

9. ✅ **Create "About Our Equipment" Page** (1 hour)
   - Detailed equipment explanations
   - Impact: Education + trust building

**Total Automatable Tasks**: 9
**Total Estimated Time**: 10 hours
**Estimated Agent Time**: 2-3 hours (agents work faster)

## Manual Tasks Remaining

These require your action (cannot be automated):

### Priority 0:
- 📸 **Film Equipment Walkthrough Video** (3 hours)
  - Use iPhone, good lighting
  - 2-minute walkthrough of gear

### Priority 1:
- 🌐 **Claim Google Business Profile** (30 min)
  - Guide created: `GOOGLE-BUSINESS-PROFILE-GUIDE.md`
  - Action: Visit google.com/business

- 🌐 **List on The Knot** (1 hour)
  - Guide created: `THE-KNOT-LISTING-GUIDE.md`
  - Action: Visit theknot.com/vendors

- 🌐 **List on WeddingWire** (45 min)
  - Similar to The Knot
  - Action: Visit weddingwire.com/vendors

## Execution Modes

### Dry Run
Shows what would be executed without actually running agents.

```bash
./scripts/run-tasks.sh dry-run
```

**Output**:
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Task ID: P0-1
Task: Homepage: Add Pricing + Social Proof
Agent: general-purpose
Prompt: Add pricing display and social proof to homepage hero...
```

### Interactive Mode
Prompts for confirmation before executing.

```bash
./scripts/run-tasks.sh
# or just:
./scripts/run-tasks.sh interactive
```

**Prompt**:
```
❓ Execute all automatable tasks? (y/n)
```

### Auto Mode
Executes all automatable tasks immediately.

```bash
./scripts/run-tasks.sh auto
```

**Use case**: CI/CD pipeline, scheduled automation

## Monitoring Execution

While agents work, you'll see:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[1/9] 🤖 Launching agent for: Homepage: Add Pricing + Social Proof
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Task ID: P0-1
Agent: general-purpose
Prompt: Add pricing display and social proof to homepage...

⏳ Agent working...

✅ Task completed successfully
```

## After Execution

### 1. Review Changes
```bash
git status
git diff
```

### 2. Test Application
```bash
pnpm dev
```

Visit http://localhost:3000 and verify changes.

### 3. Update TODO.md

Mark completed tasks with `[x]`:
```markdown
- [x] **Homepage: Add Pricing + Social Proof** (1 hour) ✅ COMPLETE
```

### 4. Commit Changes
```bash
git add .
git commit -m "Auto-complete: Homepage pricing + social proof, insurance badges, call buttons"
```

## Safety Features

### What Agents WON'T Do:
- ❌ Delete files
- ❌ Push to production
- ❌ Make breaking changes
- ❌ Modify configuration files without review

### What Agents WILL Do:
- ✅ Read existing code
- ✅ Follow existing patterns
- ✅ Create new files
- ✅ Update components
- ✅ Write content
- ✅ Test builds

## Troubleshooting

### Agent Fails
**Issue**: Agent fails to complete task

**Solution**:
1. Check error message
2. Review task prompt in `run-tasks.sh`
3. Make prompt more specific
4. Run individual task manually

### Build Errors After Execution
**Issue**: `pnpm build` fails after agent changes

**Solution**:
1. Review git diff to see changes
2. Fix TypeScript errors
3. Ensure imports are correct
4. Test again

### Changes Not as Expected
**Issue**: Agent made changes but they're not what you wanted

**Solution**:
1. Revert: `git checkout -- <file>`
2. Adjust prompt in `run-tasks.sh`
3. Re-run specific task
4. Or make manual adjustments

## Advanced Usage

### Run Specific Task Only

Edit `run-tasks.sh` and comment out tasks you don't want:

```bash
declare -a TASKS=(
  "P0-1|Homepage: Add Pricing + Social Proof|..."
  # "P0-2|Add Insurance Badges|..."  # Skip this one
  "P0-3|Contact Form: Fast Response Promise|..."
)
```

### Add Custom Tasks

Add to TASKS array in `run-tasks.sh`:

```bash
"CUSTOM-1|My Custom Task|general-purpose|Your detailed prompt here..."
```

Format: `task_id|task_name|agent_type|prompt`

### Parallel Execution (Future)

```bash
./scripts/run-tasks.sh auto parallel
```

Runs multiple agents concurrently (not implemented yet).

## Integration with TODO.md

The orchestrator parses `TODO.md` to:
1. Identify task priority (P0, P1, P2, P3)
2. Detect completion status `[ ]` vs `[x]`
3. Extract time estimates `(1 hour)`
4. Categorize by keywords

## Files Created

After running the orchestrator:

```
/Users/chanceneihouse/__code-sandbox/pg/pg-events/
├── src/
│   ├── app/
│   │   ├── (frontend)/
│   │   │   ├── page.tsx                          # Modified (pricing + social proof)
│   │   │   ├── insurance-info/page.tsx           # Created
│   │   │   ├── martinez-wedding-dj/page.tsx      # Created
│   │   │   ├── concord-event-production/page.tsx # Created
│   │   │   ├── walnut-creek-dj-services/page.tsx # Created
│   │   │   ├── blog/
│   │   │   │   └── why-premium-equipment-matters/page.tsx  # Created
│   │   │   └── about-our-equipment/page.tsx      # Created
│   ├── components/
│   │   ├── Header.tsx                            # Modified (insurance badge)
│   │   └── MobileCallButton.tsx                  # Created (maybe)
```

## Performance Expectations

| Metric | Manual | Agent |
|--------|--------|-------|
| Time per task | 1-2 hours | 5-15 minutes |
| Code quality | Varies | Consistent |
| Pattern following | Manual | Automatic |
| Mistakes | Higher | Lower |
| **Total time (9 tasks)** | **~10 hours** | **~2 hours** |

## Next Steps

After running the orchestrator:

1. **Review and Test**: Check all changes work correctly
2. **Manual Tasks**: Complete filming, photos, external signups
3. **Launch**: Once ready, publish listings and go live
4. **Monitor**: Track conversion rate improvements from changes

## Support

If agents fail or produce unexpected results:
1. Check task prompts are clear and specific
2. Review agent output for error messages
3. Adjust prompts and re-run
4. File issue if consistent failures

---

**Last Updated**: February 12, 2026
**Status**: Ready to execute 9 automatable tasks
**Estimated Time Savings**: 7-8 hours of manual work
