"use client";

import { FormEvent, useState } from "react";
import { SendHorizonal } from "lucide-react";
import { profile } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeading } from "@/components/section-heading";

export function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string>("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Failed to send message");
      setStatus("Message sent successfully.");
      event.currentTarget.reset();
    } catch {
      setStatus("Could not send message now. Please email directly.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="mx-auto w-full max-w-7xl px-4 py-14 md:px-8">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something impactful"
        description="Professional contact form backed by API route, Prisma persistence, and optional Resend integration."
      />

      <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <Card className="space-y-3">
          <p className="text-sm text-slate-700 dark:text-slate-300">
            Email:{" "}
            <a href={`mailto:${profile.email}`} className="text-sky-700 hover:text-sky-800 dark:text-sky-300 dark:hover:text-sky-200">
              {profile.email}
            </a>
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300">Phone: {profile.phone}</p>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            GitHub:{" "}
            <a href={profile.github} target="_blank" rel="noreferrer" className="text-sky-700 hover:text-sky-800 dark:text-sky-300 dark:hover:text-sky-200">
              {profile.github}
            </a>
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            LinkedIn:{" "}
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-sky-700 hover:text-sky-800 dark:text-sky-300 dark:hover:text-sky-200">
              {profile.linkedin}
            </a>
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400">Location: {profile.location}</p>
        </Card>

        <Card>
          <form onSubmit={onSubmit} className="space-y-3">
            <Input name="name" placeholder="Name" required />
            <Input name="email" type="email" placeholder="Email" required />
            <Textarea name="message" placeholder="Message" required />
            <Button type="submit" disabled={loading} className="w-full">
              <SendHorizonal className="mr-2 h-4 w-4" />
              {loading ? "Sending..." : "Send Message"}
            </Button>
            {status ? <p className="text-sm text-slate-700 dark:text-slate-300">{status}</p> : null}
          </form>
        </Card>
      </div>
    </section>
  );
}

