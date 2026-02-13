# Outreach Automation System

Manage email outreach campaigns for Primordial Events with tracking, templates, and reporting.

## Overview

This script helps you manage business development outreach campaigns:
- **Venue partnerships** (preferred vendor lists)
- **Bar/restaurant trivia nights** (recurring contracts)
- **School district events** (proms, homecoming, graduations)

**IMPORTANT SAFETY**: This script **NEVER** auto-sends emails. It only generates drafts that you manually review and send.

## Quick Start

### 1. Initialize the Database

```bash
pnpm outreach init
```

This creates `outreach-contacts.json` with 30+ seed contacts:
- 15 venues (Martinez, Concord, Walnut Creek)
- 10 bars (trivia opportunities)
- 5 school districts

### 2. List Contacts

```bash
# List all contacts
pnpm outreach list

# List by type
pnpm outreach list --type venue
pnpm outreach list --type bar
pnpm outreach list --type school

# List by status
pnpm outreach list --status not-contacted
pnpm outreach list --status waiting-response

# Combine filters
pnpm outreach list --type venue --status not-contacted
```

### 3. Generate Email Drafts

```bash
# Single contact
pnpm outreach generate venue-martinez-001

# Use different template variant (0-2)
pnpm outreach generate venue-martinez-001 --template 1

# Generate for all contacts of a type
pnpm outreach generate-all --type venue

# Generate only for specific status
pnpm outreach generate-all --type bar --status not-contacted
```

Drafts are saved to: `outreach-drafts/`

### 4. Send Emails Manually

1. Open draft file: `outreach-drafts/venue-martinez-001.txt`
2. Review and customize
3. Copy into your email client
4. Send manually

### 5. Track Your Outreach

```bash
# Mark as sent
pnpm outreach mark-emailed venue-martinez-001

# Update status after response
pnpm outreach update venue-martinez-001 --status responded --notes "Interested in partnership"

# Mark as converted
pnpm outreach update venue-martinez-001 --status converted --notes "Signed preferred vendor agreement"

# Mark as not interested
pnpm outreach update venue-martinez-001 --status not-interested
```

### 6. Generate Reports

```bash
# Overall report
pnpm outreach report

# Type-specific report
pnpm outreach report --type venue

# Export to CSV
pnpm outreach export-csv
```

## Commands Reference

### `pnpm outreach init`
Initialize or reset the contacts database with seed data.

### `pnpm outreach list [OPTIONS]`
List contacts with optional filtering.

**Options:**
- `--type TYPE` - Filter by type (venue, bar, school, planner)
- `--status STATUS` - Filter by status (not-contacted, waiting-response, responded, not-interested, converted)

**Examples:**
```bash
pnpm outreach list
pnpm outreach list --type venue
pnpm outreach list --status not-contacted
pnpm outreach list --type bar --status not-contacted
```

### `pnpm outreach generate CONTACT_ID [OPTIONS]`
Generate email draft for a specific contact.

**Options:**
- `--template INDEX` - Select template variant (0-2)

**Examples:**
```bash
pnpm outreach generate venue-martinez-001
pnpm outreach generate bar-martinez-001 --template 1
```

### `pnpm outreach generate-all --type TYPE [OPTIONS]`
Generate drafts for all contacts of a type.

**Options:**
- `--type TYPE` - Required: venue, bar, school, planner
- `--status STATUS` - Optional: Only generate for this status

**Examples:**
```bash
pnpm outreach generate-all --type venue
pnpm outreach generate-all --type bar --status not-contacted
```

### `pnpm outreach update CONTACT_ID [OPTIONS]`
Update contact information.

**Options:**
- `--status STATUS` - Update status
- `--notes "NOTES"` - Add notes
- `--response-received` - Mark response received

**Examples:**
```bash
pnpm outreach update venue-001 --status waiting-response
pnpm outreach update venue-001 --status responded --notes "Interested in partnership"
pnpm outreach update venue-001 --status converted --response-received
```

### `pnpm outreach mark-emailed CONTACT_ID`
Quick command to mark contact as emailed (sets status to waiting-response).

**Example:**
```bash
pnpm outreach mark-emailed venue-martinez-001
```

### `pnpm outreach report [OPTIONS]`
Generate outreach campaign report.

**Options:**
- `--type TYPE` - Type-specific report
- `--all` - Full detailed report

**Examples:**
```bash
pnpm outreach report
pnpm outreach report --type venue
pnpm outreach report --all
```

### `pnpm outreach export-csv`
Export all contacts to CSV file (`outreach-contacts.csv`).

**Example:**
```bash
pnpm outreach export-csv
```

### `pnpm outreach help`
Display help and usage information.

## Contact Statuses

- **not-contacted**: Haven't reached out yet
- **waiting-response**: Email sent, awaiting reply
- **responded**: They replied (interested or have questions)
- **not-interested**: Declined or not a fit
- **converted**: Successfully booked/partnered

## Contact Types

### Venue
Event venues for weddings, corporate events, parties.
- Templates: Preferred vendor pitches, venue partnerships
- Goal: Get on preferred vendor lists

### Bar
Bars and restaurants for trivia/karaoke nights.
- Templates: Trivia night pitches, recurring contract offers
- Goal: Monthly recurring contracts ($500-600/month)

### School
School districts for proms, homecoming, graduations.
- Templates: School event production, safety/professionalism focus
- Goal: Get on approved vendor lists, book annual events

### Planner
Wedding planners and event coordinators.
- Templates: Partnership offers, referral commissions
- Goal: Referral partnerships with commission structure

## Email Templates

Templates are loaded from `OUTREACH.md`:

**Venue Templates:**
1. Initial Venue Outreach (Preferred Vendor List)
2. Venue Cold Outreach (No Response Yet)
3. Venue Introduction with Value Add

**Bar Templates:**
1. Initial Trivia Night Pitch
2. Trivia Night Follow-Up
3. Karaoke Night Pitch

**School Templates:**
1. Activities Director Introduction
2. School RFP Response Template
3. Post-Event Thank You

## Workflow Example

### Venue Partnership Campaign

```bash
# 1. Find targets
pnpm outreach list --type venue --status not-contacted

# 2. Generate drafts for all Martinez venues
pnpm outreach generate venue-martinez-001
pnpm outreach generate venue-martinez-002
# ... etc

# 3. Review drafts in outreach-drafts/
# Customize as needed

# 4. Send emails manually through your client

# 5. Mark as sent
pnpm outreach mark-emailed venue-martinez-001
pnpm outreach mark-emailed venue-martinez-002

# 6. Track responses (3-5 days later)
pnpm outreach update venue-martinez-001 --status responded --notes "Event coordinator wants to schedule call"
pnpm outreach update venue-martinez-002 --status not-interested

# 7. Follow up on interested leads
pnpm outreach generate venue-martinez-001 --template 1

# 8. Track conversion
pnpm outreach update venue-martinez-001 --status converted --notes "Added to preferred vendor list"

# 9. Generate report
pnpm outreach report --type venue
```

## Files

- **`outreach-contacts.json`** - Contact database (auto-created)
- **`outreach-contacts.json.backup`** - Auto-backup before each save
- **`outreach-drafts/`** - Email draft files
- **`outreach-contacts.csv`** - CSV export for spreadsheet import
- **`OUTREACH.md`** - Email templates source

## Database Structure

```json
{
  "contacts": [
    {
      "id": "venue-martinez-001",
      "name": "Martinez Veterans Memorial Hall",
      "type": "venue",
      "email": "events@martinezveteranshall.com",
      "phone": "(925) XXX-XXXX",
      "city": "Martinez",
      "status": "not-contacted",
      "lastContact": null,
      "notes": "Large hall, city-owned",
      "responseReceived": false,
      "contactHistory": []
    }
  ],
  "lastUpdated": "2026-02-12T10:30:00.000Z"
}
```

## Adding Custom Contacts

Edit `outreach-contacts.json` directly:

```json
{
  "id": "venue-custom-001",
  "name": "Custom Venue Name",
  "type": "venue",
  "email": "events@customvenue.com",
  "phone": "(925) XXX-XXXX",
  "city": "Your City",
  "status": "not-contacted",
  "lastContact": null,
  "notes": "Custom notes here",
  "responseReceived": false,
  "contactHistory": []
}
```

## Safety Features

1. **No Auto-Send**: Script only generates drafts, never sends
2. **Auto-Backup**: Database backed up before each save
3. **Confirmation**: Batch operations show warning with delay
4. **Logging**: All actions logged in contact history
5. **Manual Review**: Forces you to review before sending

## Reporting & Metrics

Reports show:
- Total contacts by type
- Response rates
- Conversion rates
- Status breakdown
- Performance metrics

Example output:
```
=== OUTREACH REPORT ===

Type: VENUE
Report Date: 2/12/2026
Database Last Updated: 2/12/2026, 10:30:00 AM

--- OVERALL STATISTICS ---
Total Contacts: 15
Not Contacted: 8 (53.3%)
Waiting Response: 4 (26.7%)
Responded: 2 (13.3%)
Not Interested: 1 (6.7%)
Converted: 0 (0.0%)

--- PERFORMANCE METRICS ---
Contacts Reached: 7/15
Response Rate: 28.6%
Conversion Rate: 0.0%
```

## Best Practices

### Email Timing
- Send Tuesday-Thursday, 10am-2pm (best open rates)
- Follow up 3-5 days after initial email
- Final follow-up 1 week after first follow-up
- Stop after 2-3 follow-ups

### Personalization
- Always customize generated drafts
- Research the venue/business first
- Mention specific details about their space
- Reference mutual connections if possible

### Tracking
- Mark emails sent immediately
- Update status as soon as you get responses
- Add detailed notes for context
- Review reports weekly

### Follow-Up Strategy
1. Initial email (Template 0)
2. Wait 3-5 days
3. First follow-up (Template 1) if no response
4. Wait 7 days
5. Final follow-up if still no response
6. Move to "not-interested" and revisit in 3-6 months

## Goals (90-Day Campaign)

**Venue Partnerships:** 3 preferred vendor agreements
**Trivia Contracts:** 2 monthly recurring contracts
**School Contacts:** 1 district on file for upcoming events

## Troubleshooting

### Database not found
Run `pnpm outreach init` to create it.

### Templates not loading
Ensure `OUTREACH.md` exists in project root.

### Drafts directory not created
Will be auto-created on first email generation.

### Contact ID not found
Use `pnpm outreach list` to see all IDs.

## Next Steps

1. Initialize database: `pnpm outreach init`
2. Review seed contacts: `pnpm outreach list`
3. Update placeholder emails/phones with real data
4. Generate your first campaign: `pnpm outreach generate-all --type venue`
5. Review drafts in `outreach-drafts/`
6. Start sending and tracking!

## Support

For questions or issues:
- See `OUTREACH.md` for email templates and strategy
- Run `pnpm outreach help` for command reference
- Check contact history in database for past actions

## License

Part of Primordial Events project - internal use only.
