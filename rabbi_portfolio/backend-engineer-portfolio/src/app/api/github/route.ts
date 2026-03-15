import { NextResponse } from "next/server";
import { getLatestRepos } from "@/lib/github";

export async function GET() {
  const repos = await getLatestRepos("RabbiPrimon", 8);
  return NextResponse.json({ repos });
}

