# Outreach Automation - Quick Start Guide

Get your email outreach campaigns running in 5 minutes.

## Step 1: Initialize Database

```bash
pnpm outreach init
```

This creates `outreach-contacts.json` with 29 seed contacts:
- 15 event venues
- 9 bars/restaurants (for trivia nights)
- 5 school districts

## Step 2: Review Your Contacts

```bash
# List all venues
pnpm outreach list --type venue

# List all bars
pnpm outreach list --type bar

# List schools
pnpm outreach list --type school
```

## Step 3: Generate Your First Email

```bash
# Generate email for a venue
pnpm outreach generate venue-martinez-001

# Generate trivia pitch for a bar
pnpm outreach generate bar-martinez-001

# Generate school outreach
pnpm outreach generate school-001
```

Emails are saved to: `outreach-drafts/`

## Step 4: Send Manually

1. Open the draft file (e.g., `outreach-drafts/venue-venue-martinez-001.txt`)
2. Review and customize the email
3. Copy into Gmail/Outlook/your email client
4. Send it manually

**IMPORTANT**: This script NEVER auto-sends. You're in control.

## Step 5: Track Your Outreach

After sending:

```bash
# Mark as sent
pnpm outreach mark-emailed venue-martinez-001
```

When you get a response:

```bash
# Interested response
pnpm outreach update venue-martinez-001 --status responded --notes "Wants to schedule call"

# Not interested
pnpm outreach update venue-martinez-001 --status not-interested

# Converted to customer!
pnpm outreach update venue-martinez-001 --status converted --notes "Added to preferred vendor list"
```

## Step 6: Generate Reports

```bash
# Check your progress
pnpm outreach report --type venue

# Full campaign report
pnpm outreach report --all
```

## Common Workflows

### Venue Partnership Campaign

```bash
# 1. Find all not-contacted venues
pnpm outreach list --type venue --status not-contacted

# 2. Generate email for first venue
pnpm outreach generate venue-martinez-001

# 3. Review draft, send manually

# 4. Mark as sent
pnpm outreach mark-emailed venue-martinez-001

# 5. Wait 3-5 days, check for responses

# 6. Update status
pnpm outreach update venue-martinez-001 --status responded --notes "Interested in partnership"
```

### Trivia Night Batch Campaign

```bash
# 1. Generate all bar emails
pnpm outreach generate-all --type bar --status not-contacted

# 2. Review all drafts in outreach-drafts/

# 3. Send them manually over 2-3 days

# 4. Mark each as sent after sending
pnpm outreach mark-emailed bar-martinez-001
pnpm outreach mark-emailed bar-martinez-002
# ... etc

# 5. Track responses as they come in
```

### School Outreach for Prom Season

```bash
# 1. List all schools
pnpm outreach list --type school

# 2. Generate school emails
pnpm outreach generate school-001
pnpm outreach generate school-002

# 3. Send and track
pnpm outreach mark-emailed school-001

# 4. Update when districts respond
pnpm outreach update school-001 --status responded --notes "Prom scheduled April 2026"
```

## Available Commands

| Command | Description |
|---------|-------------|
| `pnpm outreach init` | Create/reset database with seed data |
| `pnpm outreach list` | List all contacts |
| `pnpm outreach list --type venue` | List venues only |
| `pnpm outreach list --status not-contacted` | List un-contacted leads |
| `pnpm outreach generate CONTACT_ID` | Generate email for one contact |
| `pnpm outreach generate-all --type bar` | Generate emails for all bars |
| `pnpm outreach mark-emailed CONTACT_ID` | Mark as sent (waiting response) |
| `pnpm outreach update CONTACT_ID --status STATUS` | Update contact status |
| `pnpm outreach update CONTACT_ID --notes "..."` | Add notes |
| `pnpm outreach report` | Generate campaign report |
| `pnpm outreach report --type venue` | Report for venues only |
| `pnpm outreach export-csv` | Export to CSV file |
| `pnpm outreach help` | Full help documentation |

## Contact Statuses

- **not-contacted** - Haven't reached out yet
- **waiting-response** - Email sent, awaiting reply
- **responded** - They replied
- **not-interested** - Declined or not a fit
- **converted** - Booked or partnered successfully

## Tips for Success

### Email Best Practices
- Send Tuesday-Thursday, 10am-2pm for best open rates
- Customize every draft before sending
- Add personal details about their venue/business
- Follow up after 3-5 days if no response

### Tracking
- Update status immediately after sending
- Add detailed notes to track conversations
- Review reports weekly to measure progress

### Follow-Up Strategy
1. Send initial email (Template 0)
2. Wait 3-5 days
3. Send follow-up if no response (Template 1)
4. Wait 7 days
5. Final follow-up
6. Mark "not-interested" and revisit in 3-6 months

## 90-Day Campaign Goals

**Venues**: 3 preferred vendor agreements
**Bars**: 2 monthly trivia contracts ($600/month each)
**Schools**: 1 district relationship for annual events

## Files & Directories

- `outreach-contacts.json` - Your contact database
- `outreach-drafts/` - Generated email drafts
- `outreach-contacts.csv` - CSV export for spreadsheets
- `OUTREACH.md` - Email templates source

## Safety Features

- **No auto-send**: Script only creates drafts
- **Auto-backup**: Database backed up before changes
- **Manual review**: You control when emails go out
- **Full tracking**: Every action logged in contact history

## Next Steps

1. Run `pnpm outreach init` to start
2. Update placeholder emails/phones with real contact info
3. Generate your first batch of emails
4. Start sending and tracking!

## Full Documentation

See `scripts/README-outreach.md` for complete documentation.

Run `pnpm outreach help` for all commands.

---

**Questions?** Check the full docs or run individual commands with `--help`.
