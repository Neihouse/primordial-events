import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-vercel-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_equipment_category" AS ENUM('audio', 'dj', 'lighting', 'laser', 'atmospherics', 'video', 'structure', 'cases', 'accessories');
  CREATE TYPE "public"."enum_equipment_condition" AS ENUM('excellent', 'good', 'fair', 'repair');
  CREATE TYPE "public"."enum_equipment_status" AS ENUM('available', 'rented', 'reserved', 'maintenance', 'retired');
  CREATE TYPE "public"."enum_bookings_type" AS ENUM('rental', 'dj', 'trivia', 'karaoke', 'production', 'lighting', 'audio', 'custom');
  CREATE TYPE "public"."enum_bookings_payment_method" AS ENUM('cash', 'venmo', 'zelle', 'card', 'invoice');
  CREATE TYPE "public"."enum_bookings_status" AS ENUM('inquiry', 'quoted', 'confirmed', 'deposit-paid', 'active', 'completed', 'cancelled');
  CREATE TYPE "public"."enum_inquiries_type" AS ENUM('service', 'rental', 'general');
  CREATE TYPE "public"."enum_gallery_event_type" AS ENUM('dj-night', 'trivia', 'karaoke', 'production', 'private-event', 'rental-showcase');
  CREATE TABLE "equipment_specs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE "equipment" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"asset_id" varchar NOT NULL,
  	"category" "enum_equipment_category" NOT NULL,
  	"description" jsonb,
  	"pricing_replacement_value" numeric NOT NULL,
  	"pricing_daily_rate" numeric NOT NULL,
  	"pricing_weekend_rate" numeric NOT NULL,
  	"pricing_weekly_rate" numeric,
  	"pricing_deposit_required" numeric NOT NULL,
  	"serial_number" varchar,
  	"condition" "enum_equipment_condition" DEFAULT 'excellent',
  	"status" "enum_equipment_status" DEFAULT 'available' NOT NULL,
  	"current_renter" varchar,
  	"date_out" timestamp(3) with time zone,
  	"date_due_back" timestamp(3) with time zone,
  	"purchase_date" timestamp(3) with time zone,
  	"notes" varchar,
  	"rentable" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "equipment_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"media_id" integer
  );
  
  CREATE TABLE "bookings" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"client_name" varchar NOT NULL,
  	"client_email" varchar NOT NULL,
  	"client_phone" varchar NOT NULL,
  	"company" varchar,
  	"type" "enum_bookings_type" NOT NULL,
  	"event_date" timestamp(3) with time zone NOT NULL,
  	"event_end_date" timestamp(3) with time zone,
  	"return_date" timestamp(3) with time zone,
  	"venue" varchar,
  	"venue_address" varchar,
  	"event_description" varchar,
  	"expected_attendance" numeric,
  	"total_price" numeric NOT NULL,
  	"deposit_amount" numeric,
  	"deposit_paid" boolean DEFAULT false,
  	"damage_waiver_paid" boolean DEFAULT false,
  	"payment_method" "enum_bookings_payment_method",
  	"status" "enum_bookings_status" DEFAULT 'inquiry' NOT NULL,
  	"internal_notes" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "bookings_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"equipment_id" integer
  );
  
  CREATE TABLE "inquiries" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"email" varchar NOT NULL,
  	"phone" varchar,
  	"type" "enum_inquiries_type",
  	"message" varchar NOT NULL,
  	"preferred_date" timestamp(3) with time zone,
  	"responded" boolean DEFAULT false,
  	"response_notes" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "services_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"feature" varchar NOT NULL
  );
  
  CREATE TABLE "services_packages_includes" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item" varchar
  );
  
  CREATE TABLE "services_packages" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"price" varchar NOT NULL,
  	"description" varchar
  );
  
  CREATE TABLE "services" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"tagline" varchar,
  	"description" jsonb NOT NULL,
  	"hero_image_id" integer,
  	"starting_price" numeric,
  	"sort_order" numeric DEFAULT 0,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "services_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"media_id" integer
  );
  
  CREATE TABLE "gallery" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"event_type" "enum_gallery_event_type",
  	"date" timestamp(3) with time zone,
  	"venue" varchar,
  	"video_url" varchar,
  	"description" varchar,
  	"featured" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "gallery_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"media_id" integer
  );
  
  CREATE TABLE "testimonials" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"client_name" varchar NOT NULL,
  	"role" varchar,
  	"quote" varchar NOT NULL,
  	"rating" numeric,
  	"photo_id" integer,
  	"featured" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "equipment_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "bookings_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "inquiries_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "services_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "gallery_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "testimonials_id" integer;
  ALTER TABLE "equipment_specs" ADD CONSTRAINT "equipment_specs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."equipment"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "equipment_rels" ADD CONSTRAINT "equipment_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."equipment"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "equipment_rels" ADD CONSTRAINT "equipment_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "bookings_rels" ADD CONSTRAINT "bookings_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."bookings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "bookings_rels" ADD CONSTRAINT "bookings_rels_equipment_fk" FOREIGN KEY ("equipment_id") REFERENCES "public"."equipment"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_features" ADD CONSTRAINT "services_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_packages_includes" ADD CONSTRAINT "services_packages_includes_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services_packages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_packages" ADD CONSTRAINT "services_packages_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services" ADD CONSTRAINT "services_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_rels" ADD CONSTRAINT "services_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_rels" ADD CONSTRAINT "services_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "gallery_rels" ADD CONSTRAINT "gallery_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "gallery_rels" ADD CONSTRAINT "gallery_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "testimonials" ADD CONSTRAINT "testimonials_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "equipment_specs_order_idx" ON "equipment_specs" USING btree ("_order");
  CREATE INDEX "equipment_specs_parent_id_idx" ON "equipment_specs" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "equipment_asset_id_idx" ON "equipment" USING btree ("asset_id");
  CREATE INDEX "equipment_updated_at_idx" ON "equipment" USING btree ("updated_at");
  CREATE INDEX "equipment_created_at_idx" ON "equipment" USING btree ("created_at");
  CREATE INDEX "equipment_rels_order_idx" ON "equipment_rels" USING btree ("order");
  CREATE INDEX "equipment_rels_parent_idx" ON "equipment_rels" USING btree ("parent_id");
  CREATE INDEX "equipment_rels_path_idx" ON "equipment_rels" USING btree ("path");
  CREATE INDEX "equipment_rels_media_id_idx" ON "equipment_rels" USING btree ("media_id");
  CREATE INDEX "bookings_updated_at_idx" ON "bookings" USING btree ("updated_at");
  CREATE INDEX "bookings_created_at_idx" ON "bookings" USING btree ("created_at");
  CREATE INDEX "bookings_rels_order_idx" ON "bookings_rels" USING btree ("order");
  CREATE INDEX "bookings_rels_parent_idx" ON "bookings_rels" USING btree ("parent_id");
  CREATE INDEX "bookings_rels_path_idx" ON "bookings_rels" USING btree ("path");
  CREATE INDEX "bookings_rels_equipment_id_idx" ON "bookings_rels" USING btree ("equipment_id");
  CREATE INDEX "inquiries_updated_at_idx" ON "inquiries" USING btree ("updated_at");
  CREATE INDEX "inquiries_created_at_idx" ON "inquiries" USING btree ("created_at");
  CREATE INDEX "services_features_order_idx" ON "services_features" USING btree ("_order");
  CREATE INDEX "services_features_parent_id_idx" ON "services_features" USING btree ("_parent_id");
  CREATE INDEX "services_packages_includes_order_idx" ON "services_packages_includes" USING btree ("_order");
  CREATE INDEX "services_packages_includes_parent_id_idx" ON "services_packages_includes" USING btree ("_parent_id");
  CREATE INDEX "services_packages_order_idx" ON "services_packages" USING btree ("_order");
  CREATE INDEX "services_packages_parent_id_idx" ON "services_packages" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "services_slug_idx" ON "services" USING btree ("slug");
  CREATE INDEX "services_hero_image_idx" ON "services" USING btree ("hero_image_id");
  CREATE INDEX "services_updated_at_idx" ON "services" USING btree ("updated_at");
  CREATE INDEX "services_created_at_idx" ON "services" USING btree ("created_at");
  CREATE INDEX "services_rels_order_idx" ON "services_rels" USING btree ("order");
  CREATE INDEX "services_rels_parent_idx" ON "services_rels" USING btree ("parent_id");
  CREATE INDEX "services_rels_path_idx" ON "services_rels" USING btree ("path");
  CREATE INDEX "services_rels_media_id_idx" ON "services_rels" USING btree ("media_id");
  CREATE INDEX "gallery_updated_at_idx" ON "gallery" USING btree ("updated_at");
  CREATE INDEX "gallery_created_at_idx" ON "gallery" USING btree ("created_at");
  CREATE INDEX "gallery_rels_order_idx" ON "gallery_rels" USING btree ("order");
  CREATE INDEX "gallery_rels_parent_idx" ON "gallery_rels" USING btree ("parent_id");
  CREATE INDEX "gallery_rels_path_idx" ON "gallery_rels" USING btree ("path");
  CREATE INDEX "gallery_rels_media_id_idx" ON "gallery_rels" USING btree ("media_id");
  CREATE INDEX "testimonials_photo_idx" ON "testimonials" USING btree ("photo_id");
  CREATE INDEX "testimonials_updated_at_idx" ON "testimonials" USING btree ("updated_at");
  CREATE INDEX "testimonials_created_at_idx" ON "testimonials" USING btree ("created_at");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_equipment_fk" FOREIGN KEY ("equipment_id") REFERENCES "public"."equipment"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_bookings_fk" FOREIGN KEY ("bookings_id") REFERENCES "public"."bookings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_inquiries_fk" FOREIGN KEY ("inquiries_id") REFERENCES "public"."inquiries"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_gallery_fk" FOREIGN KEY ("gallery_id") REFERENCES "public"."gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_testimonials_fk" FOREIGN KEY ("testimonials_id") REFERENCES "public"."testimonials"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_equipment_id_idx" ON "payload_locked_documents_rels" USING btree ("equipment_id");
  CREATE INDEX "payload_locked_documents_rels_bookings_id_idx" ON "payload_locked_documents_rels" USING btree ("bookings_id");
  CREATE INDEX "payload_locked_documents_rels_inquiries_id_idx" ON "payload_locked_documents_rels" USING btree ("inquiries_id");
  CREATE INDEX "payload_locked_documents_rels_services_id_idx" ON "payload_locked_documents_rels" USING btree ("services_id");
  CREATE INDEX "payload_locked_documents_rels_gallery_id_idx" ON "payload_locked_documents_rels" USING btree ("gallery_id");
  CREATE INDEX "payload_locked_documents_rels_testimonials_id_idx" ON "payload_locked_documents_rels" USING btree ("testimonials_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "equipment_specs" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "equipment" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "equipment_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "bookings" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "bookings_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "inquiries" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_features" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_packages_includes" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_packages" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "services_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "gallery" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "gallery_rels" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "testimonials" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "equipment_specs" CASCADE;
  DROP TABLE "equipment" CASCADE;
  DROP TABLE "equipment_rels" CASCADE;
  DROP TABLE "bookings" CASCADE;
  DROP TABLE "bookings_rels" CASCADE;
  DROP TABLE "inquiries" CASCADE;
  DROP TABLE "services_features" CASCADE;
  DROP TABLE "services_packages_includes" CASCADE;
  DROP TABLE "services_packages" CASCADE;
  DROP TABLE "services" CASCADE;
  DROP TABLE "services_rels" CASCADE;
  DROP TABLE "gallery" CASCADE;
  DROP TABLE "gallery_rels" CASCADE;
  DROP TABLE "testimonials" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_equipment_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_bookings_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_inquiries_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_services_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_gallery_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_testimonials_fk";
  
  DROP INDEX "payload_locked_documents_rels_equipment_id_idx";
  DROP INDEX "payload_locked_documents_rels_bookings_id_idx";
  DROP INDEX "payload_locked_documents_rels_inquiries_id_idx";
  DROP INDEX "payload_locked_documents_rels_services_id_idx";
  DROP INDEX "payload_locked_documents_rels_gallery_id_idx";
  DROP INDEX "payload_locked_documents_rels_testimonials_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "equipment_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "bookings_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "inquiries_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "services_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "gallery_id";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "testimonials_id";
  DROP TYPE "public"."enum_equipment_category";
  DROP TYPE "public"."enum_equipment_condition";
  DROP TYPE "public"."enum_equipment_status";
  DROP TYPE "public"."enum_bookings_type";
  DROP TYPE "public"."enum_bookings_payment_method";
  DROP TYPE "public"."enum_bookings_status";
  DROP TYPE "public"."enum_inquiries_type";
  DROP TYPE "public"."enum_gallery_event_type";`)
}
