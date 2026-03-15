import { NextResponse } from "next/server";
import { getLinkedinPosts } from "@/lib/linkedin";

export async function GET() {
  const enabled = process.env.NEXT_PUBLIC_ENABLE_LINKEDIN_FEED === "true";
  if (!enabled) {
    return NextResponse.json({ posts: [], enabled: false });
  }

  const posts = await getLinkedinPosts(4);
  return NextResponse.json({ posts, enabled: true });
}
