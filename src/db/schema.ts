import {
    pgTable,
    serial,
    varchar,
    timestamp,
    bigint,
    pgEnum
  } from 'drizzle-orm/pg-core'
  
  export const roleType = pgEnum('role', ['user', 'developer'])
  
  export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    username: varchar('username', { length: 100 }).unique().notNull(),
    email: varchar('email', { length: 255 }).unique().notNull(),
    password_hash: varchar('password_hash', { length: 255 }).notNull(),
    role: roleType('role').notNull().default('user'),
    created_at: timestamp('created_at').defaultNow()
  })
  
  export const apps = pgTable('apps', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 100 }).notNull(),
    app_url: varchar('app_url', { length: 255 }).notNull(),
    organization: varchar('organization', { length: 100 }).notNull(),
    description: varchar('description', { length: 255 }).notNull(),
    created_by: bigint('created_by', { mode: 'bigint' }).notNull().references(() => users.id,{ onDelete: 'cascade', onUpdate: 'cascade' }),
    created_at: timestamp('created_at').defaultNow()
  })
  