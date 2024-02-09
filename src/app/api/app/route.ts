import db from '@/db'
import { NextResponse } from 'next/server'
import * as schema from '@/db/schema'
import * as z from 'zod'
import { getSession } from '@/lib/auth'

// define a schema for input validation

const appSchema = z
  .object({
    appname: z.string().min(1, 'Appname is required').max(100),
    appurl: z.string().min(1, 'App url is required'),
    organization: z.string().min(1, 'Organization is required'),
    description: z.string().min(1, 'Description is required'),
  })

export async function POST (request: Request) {
  const session = await getSession()
  try {
    const body = await request.json()
    const { appname, appurl, organization, description } = appSchema.parse(body)
    
    // check if the user role is developer
    if (session?.user.role !== 'user') {
      return new NextResponse('Unauthorized', { status: 401 })
    }
    await db.insert(schema.apps).values({
        name: appname,
        app_url: appurl,
        organization,
        description,
        created_by: session?.user.id
    })
    return new NextResponse('App created', { status: 201 })
  } catch (error: any) {
    console.log('Oops!!', error)
    return new NextResponse('Internal Error', { status: 500 })
  }
}