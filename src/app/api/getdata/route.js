import clientPromise from "@/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  const client = await clientPromise;
  const db = client.db("phishing_data");
  const cursor = await db.collection("phishing_data").find();
  const data = [];
  
  for await (const doc of cursor) {
    data.push(doc);
  }
  

  const response = NextResponse.json({ data: data });
  response.headers.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
  response.headers.set("Pragma", "no-cache");
  response.headers.set("Expires", "0");
  response.headers.set("Surrogate-Control", "no-store");
  return response;
}
