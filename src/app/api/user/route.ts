import db from '@/db'
import { NextResponse } from 'next/server'
import { hash } from 'bcrypt'
import * as schema from '@/db/schema'
import { sql } from 'drizzle-orm'
import * as z from 'zod'

// define a schema for input validation

const userSchema = z
  .object({
    username: z.string().min(1, 'Username is required').max(100),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must have than 8 characters')
  })

export async function POST (request: Request) {
  try {
    const body = await request.json()
    const { email, username, password } = userSchema.parse(body)

    // Check if the user already exists
    const existingUserByEmail = await db
      .select()
      .from(schema.users)
      .where(sql`email = ${email}`)
    if (existingUserByEmail.length > 0) {
      return new NextResponse('User already exists', { status: 409 })
    }

    // check if the username already exists
    const existingUserByUsername = await db
      .select()
      .from(schema.users)
      .where(sql`username = ${username}`)
    if (existingUserByUsername.length > 0) {
      return new NextResponse('User already exists', { status: 409 })
    }

    const hashedPassword = await hash(password, 10)
    await db.insert(schema.users).values({
      email,
      username,
      password_hash: hashedPassword
    })
    return new NextResponse('User created', { status: 201 })
  } catch (error: any) {
    console.log('Sign up Error', error)
    return new NextResponse('Internal Error', { status: 500 })
  }
}

// export async function signIn(request: Request) {
//     try {
//       const body = await request.json();
//       const { email, password } = body;
  
//       // Check if the user exists
//       const user = await db
//         .select()
//         .from(schema.users)
//         .where(sql`email = ${email}`)
  
//       if (!user) {
//         return new NextResponse('User not found', { status: 404 });
//       }
  
//       // Verify password
//       const hashedPassword = await hash(password, 10);
//       const passwordMatch = await compare(password, hashedPassword);
//       if (!passwordMatch) {
//         return new NextResponse('Invalid password', { status: 401 });
//       }
  
//       // Successful login
//       return new NextResponse('Login successful', { status: 200 });
//     } catch (error: any) {
//       console.log('Login Error', error);
//       return new NextResponse('Internal Error', { status: 500 });
//     }
//   }
  

export async function GET (request: Request) {
  try {
    const user = await db.select().from(schema.users)
    return NextResponse.json(user)
  } catch (error: any) {
    console.log('Registration Error', error)
    return new NextResponse('Internal Error', { status: 500 })
  }
}
