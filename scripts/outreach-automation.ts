#!/usr/bin/env tsx
/**
 * Outreach Automation Script
 *
 * Manages email outreach campaigns for Primordial Events
 * - Venue partnerships
 * - Bar/restaurant trivia nights
 * - School district outreach
 *
 * Features:
 * - Contact database management
 * - Email template personalization
 * - Campaign tracking
 * - Status management
 * - Report generation
 *
 * SAFETY: This script NEVER auto-sends emails. It only generates drafts.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const PROJECT_ROOT = path.join(__dirname, '..');
const CONTACTS_DB_PATH = path.join(PROJECT_ROOT, 'outreach-contacts.json');
const OUTREACH_MD_PATH = path.join(PROJECT_ROOT, 'OUTREACH.md');
const DRAFTS_DIR = path.join(PROJECT_ROOT, 'outreach-drafts');

// Types
type ContactType = 'venue' | 'bar' | 'school' | 'planner';
type ContactStatus = 'not-contacted' | 'waiting-response' | 'responded' | 'not-interested' | 'converted';

interface Contact {
  id: string;
  name: string;
  type: ContactType;
  email: string;
  phone?: string;
  city?: string;
  status: ContactStatus;
  lastContact: string | null;
  notes: string;
  responseReceived: boolean;
  contactHistory: ContactEvent[];
  metadata?: Record<string, any>;
}

interface ContactEvent {
  date: string;
  type: 'email-sent' | 'response-received' | 'status-change' | 'note-added';
  description: string;
}

interface ContactsDatabase {
  contacts: Contact[];
  lastUpdated: string;
}

interface EmailTemplate {
  subject: string;
  body: string;
}

// Template Variables
const TEMPLATE_VARS = {
  name: '{name}',
  venue: '{venue}',
  city: '{city}',
  phone: '{phone}',
  email: '{email}',
};

// Initialize contacts database with seed data
function initializeDatabase(): ContactsDatabase {
  const seedContacts: Contact[] = [
    // Martinez Venues
    {
      id: 'venue-martinez-001',
      name: 'Martinez Veterans Memorial Hall',
      type: 'venue',
      email: 'events@martinezveteranshall.com',
      phone: '(925) XXX-XXXX',
      city: 'Martinez',
      status: 'not-contacted',
      lastContact: null,
      notes: 'Large hall, city-owned, popular for community events',
      responseReceived: false,
      contactHistory: [],
    },
    {
      id: 'venue-martinez-002',
      name: 'The Vineyard at Martinez',
      type: 'venue',
      email: 'info@vineyardmartinez.com',
      phone: '(925) XXX-XXXX',
      city: 'Martinez',
      status: 'not-contacted',
      lastContact: null,
      notes: 'Wine country venue, weddings and events',
      responseReceived: false,
      contactHistory: [],
    },
    {
      id: 'venue-martinez-003',
      name: 'Martinez Marina',
      type: 'venue',
      email: 'events@martinezmarina.com',
      phone: '(925) XXX-XXXX',
      city: 'Martinez',
      status: 'not-contacted',
      lastContact: null,
      notes: 'Waterfront venue, scenic views',
      responseReceived: false,
      contactHistory: [],
    },
    {
      id: 'venue-martinez-004',
      name: 'Hidden Valley Ranch',
      type: 'venue',
      email: 'info@hiddenvalleyranch.com',
      phone: '(925) XXX-XXXX',
      city: 'Martinez',
      status: 'not-contacted',
      lastContact: null,
      notes: 'Ranch-style venue, rustic weddings',
      responseReceived: false,
      contactHistory: [],
    },
    {
      id: 'venue-martinez-005',
      name: "Armando's Restaurant & Banquet Hall",
      type: 'venue',
      email: 'events@armandosrestaurant.com',
      phone: '(925) 229-2082',
      city: 'Martinez',
      status: 'not-contacted',
      lastContact: null,
      notes: 'Restaurant with banquet facilities',
      responseReceived: false,
      contactHistory: [],
    },

    // Concord Venues
    {
      id: 'venue-concord-001',
      name: 'Todos Santos Plaza Event Space',
      type: 'venue',
      email: 'events@concordca.gov',
      phone: '(925) XXX-XXXX',
      city: 'Concord',
      status: 'not-contacted',
      lastContact: null,
      notes: 'Downtown plaza, city events',
      responseReceived: false,
      contactHistory: [],
    },
    {
      id: 'venue-concord-002',
      name: 'Diablo Creek Golf Course',
      type: 'venue',
      email: 'events@diablocreek.com',
      phone: '(925) 686-6262',
      city: 'Concord',
      status: 'not-contacted',
      lastContact: null,
      notes: 'Golf course clubhouse, weddings',
      responseReceived: false,
      contactHistory: [],
    },
    {
      id: 'venue-concord-003',
      name: 'Crowne Plaza Concord',
      type: 'venue',
      email: 'events@cpconford.com',
      phone: '(925) 825-7700',
      city: 'Concord',
      status: 'not-contacted',
      lastContact: null,
      notes: 'Hotel ballroom, corporate events',
      responseReceived: false,
      contactHistory: [],
    },
    {
      id: 'venue-concord-004',
      name: 'Concord Community Center',
      type: 'venue',
      email: 'recreation@concordca.gov',
      phone: '(925) XXX-XXXX',
      city: 'Concord',
      status: 'not-contacted',
      lastContact: null,
      notes: 'Community center, city-run',
      responseReceived: false,
      contactHistory: [],
    },
    {
      id: 'venue-concord-005',
      name: 'Veranda Clubhouse',
      type: 'venue',
      email: 'events@verandaclubhouse.com',
      phone: '(925) XXX-XXXX',
      city: 'Concord',
      status: 'not-contacted',
      lastContact: null,
      notes: 'Private club, upscale events',
      responseReceived: false,
      contactHistory: [],
    },

    // Walnut Creek Venues
    {
      id: 'venue-wc-001',
      name: 'Boundary Oak Golf Course',
      type: 'venue',
      email: 'events@boundaryoak.com',
      phone: '(925) 934-4775',
      city: 'Walnut Creek',
      status: 'not-contacted',
      lastContact: null,
      notes: 'Golf course, views of Mt. Diablo',
      responseReceived: false,
      contactHistory: [],
    },
    {
      id: 'venue-wc-002',
      name: 'Lafayette Park Hotel & Spa',
      type: 'venue',
      email: 'events@lafayetteparkhotel.com',
      phone: '(925) 283-3700',
      city: 'Lafayette',
      status: 'not-contacted',
      lastContact: null,
      notes: 'Upscale hotel, luxury weddings',
      responseReceived: false,
      contactHistory: [],
    },
    {
      id: 'venue-wc-003',
      name: 'Walnut Creek Yacht Club',
      type: 'venue',
      email: 'events@wcyc.org',
      phone: '(925) XXX-XXXX',
      city: 'Walnut Creek',
      status: 'not-contacted',
      lastContact: null,
      notes: 'Private club on water, elegant',
      responseReceived: false,
      contactHistory: [],
    },
    {
      id: 'venue-wc-004',
      name: 'Gardens at Heather Farm',
      type: 'venue',
      email: 'events@gardenheatherfarm.org',
      phone: '(925) XXX-XXXX',
      city: 'Walnut Creek',
      status: 'not-contacted',
      lastContact: null,
      notes: 'Garden venue, outdoor ceremonies',
      responseReceived: false,
      contactHistory: [],
    },
    {
      id: 'venue-wc-005',
      name: 'Casa Bella Event Center',
      type: 'venue',
      email: 'events@casabellaevents.com',
      phone: '(925) XXX-XXXX',
      city: 'Walnut Creek',
      status: 'not-contacted',
      lastContact: null,
      notes: 'Full-service event center',
      responseReceived: false,
      contactHistory: [],
    },

    // Martinez Bars (Trivia)
    {
      id: 'bar-martinez-001',
      name: "Armando's Restaurant",
      type: 'bar',
      email: 'info@armandosrestaurant.com',
      phone: '(925) 229-2082',
      city: 'Martinez',
      status: 'not-contacted',
      lastContact: null,
      notes: 'Restaurant with bar, good for trivia nights',
      responseReceived: false,
      contactHistory: [],
    },
    {
      id: 'bar-martinez-002',
      name: 'Vine Cafe',
      type: 'bar',
      email: 'info@vinecafemartinez.com',
      phone: '(925) XXX-XXXX',
      city: 'Martinez',
      status: 'not-contacted',
      lastContact: null,
      notes: 'Wine bar, downtown Martinez',
      responseReceived: false,
      contactHistory: [],
    },
    {
      id: 'bar-martinez-003',
      name: "Pelican's Roost",
      type: 'bar',
      email: 'info@pelicansroost.com',
      phone: '(925) XXX-XXXX',
      city: 'Martinez',
      status: 'not-contacted',
      lastContact: null,
      notes: 'Sports bar, waterfront location',
      responseReceived: false,
      contactHistory: [],
    },

    // Concord Bars (Trivia)
    {
      id: 'bar-concord-001',
      name: 'Todos Santos Plaza - Bar/Restaurant',
      type: 'bar',
      email: 'info@todossantosbar.com',
      phone: '(925) XXX-XXXX',
      city: 'Concord',
      status: 'not-contacted',
      lastContact: null,
      notes: 'Research needed - multiple options in plaza',
      responseReceived: false,
      contactHistory: [],
    },
    {
      id: 'bar-concord-002',
      name: 'Concord Brewery & Taproom',
      type: 'bar',
      email: 'events@concordbrewery.com',
      phone: '(925) XXX-XXXX',
      city: 'Concord',
      status: 'not-contacted',
      lastContact: null,
      notes: 'Local brewery - research needed',
      responseReceived: false,
      contactHistory: [],
    },
    {
      id: 'bar-concord-003',
      name: 'Downtown Concord Bar',
      type: 'bar',
      email: 'info@concordbar.com',
      phone: '(925) XXX-XXXX',
      city: 'Concord',
      status: 'not-contacted',
      lastContact: null,
      notes: 'Placeholder - research downtown bars',
      responseReceived: false,
      contactHistory: [],
    },

    // Walnut Creek Bars (Trivia)
    {
      id: 'bar-wc-001',
      name: 'Downtown WC Bar #1',
      type: 'bar',
      email: 'info@wcbar1.com',
      phone: '(925) XXX-XXXX',
      city: 'Walnut Creek',
      status: 'not-contacted',
      lastContact: null,
      notes: 'Research needed - downtown bar',
      responseReceived: false,
      contactHistory: [],
    },
    {
      id: 'bar-wc-002',
      name: 'Downtown WC Bar #2',
      type: 'bar',
      email: 'info@wcbar2.com',
      phone: '(925) XXX-XXXX',
      city: 'Walnut Creek',
      status: 'not-contacted',
      lastContact: null,
      notes: 'Research needed - downtown bar',
      responseReceived: false,
      contactHistory: [],
    },
    {
      id: 'bar-wc-003',
      name: 'Downtown WC Bar #3',
      type: 'bar',
      email: 'info@wcbar3.com',
      phone: '(925) XXX-XXXX',
      city: 'Walnut Creek',
      status: 'not-contacted',
      lastContact: null,
      notes: 'Research needed - downtown bar',
      responseReceived: false,
      contactHistory: [],
    },

    // Schools
    {
      id: 'school-001',
      name: 'Martinez Unified School District',
      type: 'school',
      email: 'activities@martinez.k12.ca.us',
      phone: '(925) 335-5800',
      city: 'Martinez',
      status: 'not-contacted',
      lastContact: null,
      notes: 'District office - contact activities director',
      responseReceived: false,
      contactHistory: [],
    },
    {
      id: 'school-002',
      name: 'Mt. Diablo Unified School District',
      type: 'school',
      email: 'events@mdusd.org',
      phone: '(925) 682-8000',
      city: 'Concord',
      status: 'not-contacted',
      lastContact: null,
      notes: 'Large district - multiple high schools',
      responseReceived: false,
      contactHistory: [],
    },
    {
      id: 'school-003',
      name: 'Acalanes Union High School District',
      type: 'school',
      email: 'info@acalanes.k12.ca.us',
      phone: '(925) 280-3900',
      city: 'Lafayette',
      status: 'not-contacted',
      lastContact: null,
      notes: 'Upscale district, strong prom tradition',
      responseReceived: false,
      contactHistory: [],
    },
    {
      id: 'school-004',
      name: 'Clayton Valley Charter High School',
      type: 'school',
      email: 'activities@claytonvalley.org',
      phone: '(925) 682-7474',
      city: 'Concord',
      status: 'not-contacted',
      lastContact: null,
      notes: 'Charter school, independent',
      responseReceived: false,
      contactHistory: [],
    },
    {
      id: 'school-005',
      name: 'Benicia Unified School District',
      type: 'school',
      email: 'events@beniciaunified.org',
      phone: '(707) 747-8300',
      city: 'Benicia',
      status: 'not-contacted',
      lastContact: null,
      notes: 'Adjacent to Martinez, good opportunity',
      responseReceived: false,
      contactHistory: [],
    },
  ];

  return {
    contacts: seedContacts,
    lastUpdated: new Date().toISOString(),
  };
}

// Load contacts database
function loadDatabase(): ContactsDatabase {
  if (!fs.existsSync(CONTACTS_DB_PATH)) {
    console.log('No contacts database found. Initializing with seed data...');
    const db = initializeDatabase();
    saveDatabase(db);
    console.log(`Created ${CONTACTS_DB_PATH} with ${db.contacts.length} seed contacts.\n`);
    return db;
  }

  const data = fs.readFileSync(CONTACTS_DB_PATH, 'utf-8');
  return JSON.parse(data);
}

// Save contacts database
function saveDatabase(db: ContactsDatabase): void {
  // Backup before saving
  if (fs.existsSync(CONTACTS_DB_PATH)) {
    const backupPath = `${CONTACTS_DB_PATH}.backup`;
    fs.copyFileSync(CONTACTS_DB_PATH, backupPath);
  }

  db.lastUpdated = new Date().toISOString();
  fs.writeFileSync(CONTACTS_DB_PATH, JSON.stringify(db, null, 2));
}

// Get contact by ID
function getContact(db: ContactsDatabase, contactId: string): Contact | undefined {
  return db.contacts.find(c => c.id === contactId);
}

// Parse OUTREACH.md to extract templates
function parseOutreachTemplates(): Record<string, EmailTemplate[]> {
  if (!fs.existsSync(OUTREACH_MD_PATH)) {
    console.error(`Error: OUTREACH.md not found at ${OUTREACH_MD_PATH}`);
    process.exit(1);
  }

  const content = fs.readFileSync(OUTREACH_MD_PATH, 'utf-8');
  const templates: Record<string, EmailTemplate[]> = {
    venue: [],
    bar: [],
    school: [],
    planner: [],
  };

  // Extract venue templates
  const venueSection = content.match(/## Venue Partnership Emails([\s\S]*?)(?=---\n\n##|$)/);
  if (venueSection) {
    const templateMatches = venueSection[1].matchAll(/\*\*Subject\*\*:\s*(.+?)\n\n```\n([\s\S]*?)\n```/g);
    for (const match of templateMatches) {
      templates.venue.push({
        subject: match[1].trim(),
        body: match[2].trim(),
      });
    }
  }

  // Extract bar/trivia templates
  const barSection = content.match(/## Bar & Restaurant Trivia Nights([\s\S]*?)(?=---\n\n##|$)/);
  if (barSection) {
    const templateMatches = barSection[1].matchAll(/\*\*Subject\*\*:\s*(.+?)\n\n```\n([\s\S]*?)\n```/g);
    for (const match of templateMatches) {
      templates.bar.push({
        subject: match[1].trim(),
        body: match[2].trim(),
      });
    }
  }

  // Extract school templates
  const schoolSection = content.match(/## School District Outreach([\s\S]*?)(?=---\n\n##|$)/);
  if (schoolSection) {
    const templateMatches = schoolSection[1].matchAll(/\*\*Subject\*\*:\s*(.+?)\n\n```\n([\s\S]*?)\n```/g);
    for (const match of templateMatches) {
      templates.school.push({
        subject: match[1].trim(),
        body: match[2].trim(),
      });
    }
  }

  return templates;
}

// Personalize email template
function personalizeTemplate(template: EmailTemplate, contact: Contact): EmailTemplate {
  let subject = template.subject;
  let body = template.body;

  // Replace placeholders
  subject = subject.replace(/\[Venue Name\]/g, contact.name);
  subject = subject.replace(/\[Bar Name\]/g, contact.name);
  subject = subject.replace(/\[School Name\]/g, contact.name);
  subject = subject.replace(/\[Bar\/Restaurant Owner Name\]/g, '[Contact Name]');

  body = body.replace(/\[Contact Name\]/g, '[First Name]');
  body = body.replace(/\[Venue Name\]/g, contact.name);
  body = body.replace(/\[Venue Coordinator Name\]/g, '[Contact Name]');
  body = body.replace(/\[Bar\/Restaurant Owner Name\]/g, '[Owner/Manager Name]');
  body = body.replace(/\[Bar Name\]/g, contact.name);
  body = body.replace(/\[Name\]/g, '[Contact Name]');
  body = body.replace(/\[Activities Director Name\]/g, '[Activities Director]');
  body = body.replace(/\[School District Name\]/g, contact.name);
  body = body.replace(/\[School Name\]/g, contact.name);
  body = body.replace(/\[County Name\]/g, 'Contra Costa County');
  body = body.replace(/\[City\]/g, contact.city || '[City]');
  body = body.replace(/\[Phone Number\]/g, contact.phone || '[Your Phone]');
  body = body.replace(/\[Phone\]/g, contact.phone || '[Your Phone]');
  body = body.replace(/\[Martinez\/Concord\/Walnut Creek\]/g, contact.city || '[City]');
  body = body.replace(/\[Day 1\]/g, '[Day/Time Option 1]');
  body = body.replace(/\[Day 2\]/g, '[Day/Time Option 2]');

  return { subject, body };
}

// Generate draft email
function generateDraftEmail(contact: Contact, templateIndex: number = 0): string {
  const templates = parseOutreachTemplates();
  const contactTemplates = templates[contact.type];

  if (!contactTemplates || contactTemplates.length === 0) {
    throw new Error(`No templates found for contact type: ${contact.type}`);
  }

  const template = contactTemplates[templateIndex] || contactTemplates[0];
  const personalized = personalizeTemplate(template, contact);

  const draft = `
TO: ${contact.email}
SUBJECT: ${personalized.subject}

${personalized.body}

---
Contact Information:
Name: ${contact.name}
Type: ${contact.type}
City: ${contact.city || 'N/A'}
Phone: ${contact.phone || 'N/A'}
Status: ${contact.status}
Notes: ${contact.notes || 'None'}
---
`.trim();

  return draft;
}

// Save draft to file
function saveDraftToFile(contact: Contact, draft: string): string {
  if (!fs.existsSync(DRAFTS_DIR)) {
    fs.mkdirSync(DRAFTS_DIR, { recursive: true });
  }

  const filename = `${contact.type}-${contact.id}.txt`;
  const filepath = path.join(DRAFTS_DIR, filename);

  fs.writeFileSync(filepath, draft);
  return filepath;
}

// List contacts
function listContacts(type?: ContactType, status?: ContactStatus): void {
  const db = loadDatabase();
  let filtered = db.contacts;

  if (type) {
    filtered = filtered.filter(c => c.type === type);
  }

  if (status) {
    filtered = filtered.filter(c => c.status === status);
  }

  console.log(`\n=== CONTACTS (${filtered.length} found) ===\n`);

  if (filtered.length === 0) {
    console.log('No contacts match the criteria.');
    return;
  }

  // Group by type
  const grouped = filtered.reduce((acc, contact) => {
    if (!acc[contact.type]) acc[contact.type] = [];
    acc[contact.type].push(contact);
    return acc;
  }, {} as Record<ContactType, Contact[]>);

  for (const [contactType, contacts] of Object.entries(grouped)) {
    console.log(`\n--- ${contactType.toUpperCase()} (${contacts.length}) ---`);

    for (const contact of contacts) {
      console.log(`\nID: ${contact.id}`);
      console.log(`Name: ${contact.name}`);
      console.log(`Email: ${contact.email}`);
      console.log(`City: ${contact.city || 'N/A'}`);
      console.log(`Status: ${contact.status}`);
      console.log(`Last Contact: ${contact.lastContact || 'Never'}`);
      console.log(`Response Received: ${contact.responseReceived ? 'Yes' : 'No'}`);
      if (contact.notes) {
        console.log(`Notes: ${contact.notes}`);
      }
    }
  }

  console.log('\n');
}

// Generate email for a contact
function generateEmail(contactId: string, templateIndex: number = 0): void {
  const db = loadDatabase();
  const contact = getContact(db, contactId);

  if (!contact) {
    console.error(`Error: Contact ${contactId} not found.`);
    process.exit(1);
  }

  console.log(`\nGenerating email for: ${contact.name}`);
  console.log(`Type: ${contact.type}`);
  console.log(`Template: ${templateIndex}\n`);

  const draft = generateDraftEmail(contact, templateIndex);
  const filepath = saveDraftToFile(contact, draft);

  console.log('--- EMAIL DRAFT ---\n');
  console.log(draft);
  console.log('\n--- END DRAFT ---\n');
  console.log(`Draft saved to: ${filepath}`);
  console.log('\nREMINDER: Review and manually send this email. This script does NOT auto-send.\n');
}

// Generate all emails for a type
function generateAllEmails(type: ContactType, status?: ContactStatus): void {
  const db = loadDatabase();
  let contacts = db.contacts.filter(c => c.type === type);

  if (status) {
    contacts = contacts.filter(c => c.status === status);
  }

  console.log(`\nGenerating ${contacts.length} email drafts for ${type}...\n`);

  // Confirmation prompt
  console.log('WARNING: This will generate multiple email drafts.');
  console.log('Continue? (This script will NOT auto-send emails)');
  console.log('Press Ctrl+C to cancel, or wait 3 seconds to continue...\n');

  // Simple delay (in production, use a proper prompt library)
  setTimeout(() => {
    let count = 0;
    for (const contact of contacts) {
      try {
        const draft = generateDraftEmail(contact);
        const filepath = saveDraftToFile(contact, draft);
        console.log(`[${++count}/${contacts.length}] Generated: ${filepath}`);
      } catch (error) {
        console.error(`Error generating email for ${contact.id}:`, error);
      }
    }

    console.log(`\nGenerated ${count} email drafts in: ${DRAFTS_DIR}`);
    console.log('REMINDER: Review each draft and manually send. This script does NOT auto-send.\n');
  }, 3000);
}

// Update contact status
function updateContact(
  contactId: string,
  status?: ContactStatus,
  notes?: string,
  responseReceived?: boolean
): void {
  const db = loadDatabase();
  const contact = getContact(db, contactId);

  if (!contact) {
    console.error(`Error: Contact ${contactId} not found.`);
    process.exit(1);
  }

  const changes: string[] = [];

  if (status && status !== contact.status) {
    contact.status = status;
    contact.contactHistory.push({
      date: new Date().toISOString(),
      type: 'status-change',
      description: `Status changed to: ${status}`,
    });
    changes.push(`Status: ${status}`);
  }

  if (notes) {
    contact.notes = notes;
    contact.contactHistory.push({
      date: new Date().toISOString(),
      type: 'note-added',
      description: notes,
    });
    changes.push(`Notes: ${notes}`);
  }

  if (responseReceived !== undefined) {
    contact.responseReceived = responseReceived;
    changes.push(`Response Received: ${responseReceived}`);
  }

  contact.lastContact = new Date().toISOString();

  saveDatabase(db);

  console.log(`\nUpdated contact: ${contact.name}`);
  console.log(`Changes: ${changes.join(', ')}`);
  console.log('Contact database saved.\n');
}

// Mark contact as emailed
function markEmailed(contactId: string): void {
  const db = loadDatabase();
  const contact = getContact(db, contactId);

  if (!contact) {
    console.error(`Error: Contact ${contactId} not found.`);
    process.exit(1);
  }

  contact.status = 'waiting-response';
  contact.lastContact = new Date().toISOString();
  contact.contactHistory.push({
    date: new Date().toISOString(),
    type: 'email-sent',
    description: 'Email sent - awaiting response',
  });

  saveDatabase(db);

  console.log(`\nMarked ${contact.name} as emailed (status: waiting-response)`);
  console.log('Last contact updated to now.\n');
}

// Generate report
function generateReport(type?: ContactType): void {
  const db = loadDatabase();
  let contacts = db.contacts;

  if (type) {
    contacts = contacts.filter(c => c.type === type);
  }

  console.log('\n=== OUTREACH REPORT ===\n');

  if (type) {
    console.log(`Type: ${type.toUpperCase()}`);
  } else {
    console.log('Type: ALL');
  }

  console.log(`Report Date: ${new Date().toLocaleDateString()}`);
  console.log(`Database Last Updated: ${new Date(db.lastUpdated).toLocaleString()}`);
  console.log('');

  // Overall stats
  const stats = {
    total: contacts.length,
    notContacted: contacts.filter(c => c.status === 'not-contacted').length,
    waitingResponse: contacts.filter(c => c.status === 'waiting-response').length,
    responded: contacts.filter(c => c.status === 'responded').length,
    notInterested: contacts.filter(c => c.status === 'not-interested').length,
    converted: contacts.filter(c => c.status === 'converted').length,
  };

  console.log('--- OVERALL STATISTICS ---');
  console.log(`Total Contacts: ${stats.total}`);
  console.log(`Not Contacted: ${stats.notContacted} (${((stats.notContacted / stats.total) * 100).toFixed(1)}%)`);
  console.log(`Waiting Response: ${stats.waitingResponse} (${((stats.waitingResponse / stats.total) * 100).toFixed(1)}%)`);
  console.log(`Responded: ${stats.responded} (${((stats.responded / stats.total) * 100).toFixed(1)}%)`);
  console.log(`Not Interested: ${stats.notInterested} (${((stats.notInterested / stats.total) * 100).toFixed(1)}%)`);
  console.log(`Converted: ${stats.converted} (${((stats.converted / stats.total) * 100).toFixed(1)}%)`);
  console.log('');

  // Response rate
  const contacted = stats.total - stats.notContacted;
  const responseRate = contacted > 0 ? ((stats.responded / contacted) * 100).toFixed(1) : '0.0';
  const conversionRate = contacted > 0 ? ((stats.converted / contacted) * 100).toFixed(1) : '0.0';

  console.log('--- PERFORMANCE METRICS ---');
  console.log(`Contacts Reached: ${contacted}/${stats.total}`);
  console.log(`Response Rate: ${responseRate}%`);
  console.log(`Conversion Rate: ${conversionRate}%`);
  console.log('');

  // Breakdown by type
  if (!type) {
    console.log('--- BREAKDOWN BY TYPE ---');
    const types: ContactType[] = ['venue', 'bar', 'school', 'planner'];

    for (const contactType of types) {
      const typeContacts = db.contacts.filter(c => c.type === contactType);
      const typeStats = {
        total: typeContacts.length,
        notContacted: typeContacts.filter(c => c.status === 'not-contacted').length,
        waitingResponse: typeContacts.filter(c => c.status === 'waiting-response').length,
        responded: typeContacts.filter(c => c.status === 'responded').length,
        converted: typeContacts.filter(c => c.status === 'converted').length,
      };

      console.log(`\n${contactType.toUpperCase()}:`);
      console.log(`  Total: ${typeStats.total}`);
      console.log(`  Not Contacted: ${typeStats.notContacted}`);
      console.log(`  Waiting Response: ${typeStats.waitingResponse}`);
      console.log(`  Responded: ${typeStats.responded}`);
      console.log(`  Converted: ${typeStats.converted}`);
    }
  }

  console.log('\n');
}

// Export contacts to CSV
function exportToCSV(): void {
  const db = loadDatabase();
  const csvPath = path.join(PROJECT_ROOT, 'outreach-contacts.csv');

  const headers = ['ID', 'Name', 'Type', 'Email', 'Phone', 'City', 'Status', 'Last Contact', 'Response Received', 'Notes'];
  const rows = db.contacts.map(c => [
    c.id,
    c.name,
    c.type,
    c.email,
    c.phone || '',
    c.city || '',
    c.status,
    c.lastContact || '',
    c.responseReceived ? 'Yes' : 'No',
    c.notes.replace(/,/g, ';'), // Escape commas
  ]);

  const csv = [
    headers.join(','),
    ...rows.map(row => row.join(',')),
  ].join('\n');

  fs.writeFileSync(csvPath, csv);
  console.log(`\nExported contacts to: ${csvPath}\n`);
}

// Show help
function showHelp(): void {
  console.log(`
=== OUTREACH AUTOMATION TOOL ===

Manage email outreach campaigns for Primordial Events.

SAFETY: This script NEVER auto-sends emails. It only generates drafts.

COMMANDS:

  list [--type TYPE] [--status STATUS]
    List all contacts, optionally filtered by type and/or status
    Types: venue, bar, school, planner
    Statuses: not-contacted, waiting-response, responded, not-interested, converted

    Examples:
      pnpm outreach list
      pnpm outreach list --type venue
      pnpm outreach list --status not-contacted
      pnpm outreach list --type bar --status not-contacted

  generate CONTACT_ID [--template INDEX]
    Generate email draft for a specific contact
    Template index (0-2) selects which template variant to use

    Examples:
      pnpm outreach generate venue-martinez-001
      pnpm outreach generate bar-martinez-001 --template 1

  generate-all --type TYPE [--status STATUS]
    Generate email drafts for all contacts of a type

    Examples:
      pnpm outreach generate-all --type venue
      pnpm outreach generate-all --type bar --status not-contacted

  update CONTACT_ID [--status STATUS] [--notes "NOTES"] [--response-received]
    Update contact information

    Examples:
      pnpm outreach update venue-001 --status waiting-response
      pnpm outreach update venue-001 --status responded --notes "Interested in partnership"
      pnpm outreach update venue-001 --status converted --response-received

  mark-emailed CONTACT_ID
    Quick command to mark contact as emailed (sets status to waiting-response)

    Example:
      pnpm outreach mark-emailed venue-martinez-001

  report [--type TYPE] [--all]
    Generate outreach campaign report

    Examples:
      pnpm outreach report
      pnpm outreach report --type venue
      pnpm outreach report --all

  export-csv
    Export all contacts to CSV file

    Example:
      pnpm outreach export-csv

  init
    Initialize/reset contacts database with seed data

  help
    Show this help message

EXAMPLES:

  # Start a venue campaign
  pnpm outreach list --type venue --status not-contacted
  pnpm outreach generate venue-martinez-001
  # (Review draft, send email manually)
  pnpm outreach mark-emailed venue-martinez-001

  # Follow up on responses
  pnpm outreach update venue-martinez-001 --status responded --notes "Interested - schedule call"

  # Generate campaign report
  pnpm outreach report --type venue

FILES:

  outreach-contacts.json - Contact database (auto-created)
  outreach-drafts/ - Email draft files
  OUTREACH.md - Email templates

WORKFLOW:

  1. List contacts to find targets
  2. Generate email drafts (NOT auto-sent)
  3. Review drafts manually
  4. Send emails through your email client
  5. Mark contacts as emailed
  6. Update status when you get responses
  7. Generate reports to track progress

SAFETY:

  - All emails are drafts only - you must send manually
  - Database is backed up before each save
  - No automatic sending or modification
  - All actions require explicit commands

For more info: See OUTREACH.md for email templates and strategy.
  `.trim());
}

// Main CLI
function main(): void {
  const args = process.argv.slice(2);
  const command = args[0];

  if (!command || command === 'help') {
    showHelp();
    return;
  }

  if (command === 'init') {
    console.log('Initializing contacts database with seed data...');
    const db = initializeDatabase();
    saveDatabase(db);
    console.log(`Database initialized with ${db.contacts.length} contacts.`);
    console.log(`File: ${CONTACTS_DB_PATH}\n`);
    return;
  }

  if (command === 'list') {
    const typeIndex = args.indexOf('--type');
    const statusIndex = args.indexOf('--status');

    const type = typeIndex !== -1 ? args[typeIndex + 1] as ContactType : undefined;
    const status = statusIndex !== -1 ? args[statusIndex + 1] as ContactStatus : undefined;

    listContacts(type, status);
    return;
  }

  if (command === 'generate') {
    const contactId = args[1];
    if (!contactId) {
      console.error('Error: Contact ID required.');
      console.log('Usage: pnpm outreach generate CONTACT_ID [--template INDEX]');
      process.exit(1);
    }

    const templateIndex = args.indexOf('--template');
    const template = templateIndex !== -1 ? parseInt(args[templateIndex + 1]) : 0;

    generateEmail(contactId, template);
    return;
  }

  if (command === 'generate-all') {
    const typeIndex = args.indexOf('--type');
    const statusIndex = args.indexOf('--status');

    if (typeIndex === -1) {
      console.error('Error: --type required for generate-all');
      console.log('Usage: pnpm outreach generate-all --type TYPE [--status STATUS]');
      process.exit(1);
    }

    const type = args[typeIndex + 1] as ContactType;
    const status = statusIndex !== -1 ? args[statusIndex + 1] as ContactStatus : undefined;

    generateAllEmails(type, status);
    return;
  }

  if (command === 'update') {
    const contactId = args[1];
    if (!contactId) {
      console.error('Error: Contact ID required.');
      console.log('Usage: pnpm outreach update CONTACT_ID [--status STATUS] [--notes "NOTES"]');
      process.exit(1);
    }

    const statusIndex = args.indexOf('--status');
    const notesIndex = args.indexOf('--notes');
    const responseIndex = args.indexOf('--response-received');

    const status = statusIndex !== -1 ? args[statusIndex + 1] as ContactStatus : undefined;
    const notes = notesIndex !== -1 ? args[notesIndex + 1] : undefined;
    const responseReceived = responseIndex !== -1 ? true : undefined;

    updateContact(contactId, status, notes, responseReceived);
    return;
  }

  if (command === 'mark-emailed') {
    const contactId = args[1];
    if (!contactId) {
      console.error('Error: Contact ID required.');
      console.log('Usage: pnpm outreach mark-emailed CONTACT_ID');
      process.exit(1);
    }

    markEmailed(contactId);
    return;
  }

  if (command === 'report') {
    const typeIndex = args.indexOf('--type');
    const type = typeIndex !== -1 ? args[typeIndex + 1] as ContactType : undefined;

    generateReport(type);
    return;
  }

  if (command === 'export-csv') {
    exportToCSV();
    return;
  }

  console.error(`Unknown command: ${command}`);
  console.log('Run "pnpm outreach help" for usage information.\n');
  process.exit(1);
}

// Run
main();
