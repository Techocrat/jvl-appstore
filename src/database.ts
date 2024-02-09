import db from "@/db";
import { NextResponse } from "next/server";
import * as schema from "@/db/schema";
import { eq, sql } from "drizzle-orm";


export async function getUsers() {
  try {
    const user = await db.select().from(schema.users);
    return user;
  } catch (error: any) {
    console.error("Error occurred while retrieving all users:", error);
    throw error;
}
}

export async function getAllApps() {
  try {
    const apps = await db.select().from(schema.apps);
    return apps;
  } catch (error: any) {
    console.error("Error occurred while retrieving all apps:", error);
    throw error;
  }
}

export async function getApp(id: number) {
  try {
    const apps = await db
      .select()
      .from(schema.apps)
      .where(eq(schema.apps.id, id));
    return apps?.[0];
  } catch (error: any) {
    console.error(`Error occurred while retrieving app with id ${id}:`, error);
    throw error;
  }
}

export async function getUsersApp(id: bigint) {
  try {
    const apps = await db
      .select()
      .from(schema.apps)
      .where(eq(schema.apps.created_by, id));
    return apps;
  } catch (error: any) {
    console.error(`Error occurred while retrieving apps for user with id ${id}:`, error);
    throw error;
  }
}
