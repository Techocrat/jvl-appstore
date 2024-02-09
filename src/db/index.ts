import * as schema from './schema'
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import 'dotenv/config'

const client = postgres(String(process.env.DATABASE_URL))

const db = drizzle(client, {
  schema
})

export default db
