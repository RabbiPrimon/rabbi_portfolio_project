"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/lib/site-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const terminalLines = [
  "$ python manage.py runserver --production",
  "[OK] DRF services initialized",
  "[OK] PostgreSQL connection stable",
  "[OK] Redis cache and Celery workers online",
  "[READY] Backend architecture optimized for scale",
];

export function HeroTerminal() {
  return (
    <section id="hero" className="mx-auto grid w-full max-w-7xl gap-6 px-4 pt-10 pb-8 md:grid-cols-[1.2fr_0.8fr] md:px-8 md:pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <div className="space-y-4">
          <Badge className="bg-sky-100 text-sky-800 dark:bg-sky-500/20 dark:text-sky-300">Senior Backend Engineer Portfolio</Badge>
          <h1 className="text-4xl font-semibold leading-tight text-slate-900 dark:text-white md:text-6xl">
            Building reliable backend systems for global-scale products.
          </h1>
          <p className="max-w-2xl text-base text-slate-700 dark:text-slate-300 md:text-lg">{profile.summary}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <a href="#projects">View Projects</a>
          </Button>
          <Button asChild variant="outline">
            <a href="#contact">Contact Me</a>
          </Button>
        </div>

        <div className="grid gap-2 text-sm text-slate-700 dark:text-slate-300">
          <span className="inline-flex items-center gap-2">
            <Mail className="h-4 w-4 text-sky-600 dark:text-sky-400" /> {profile.email}
          </span>
          <span className="inline-flex items-center gap-2">
            <Phone className="h-4 w-4 text-sky-600 dark:text-sky-400" /> {profile.phone}
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-sky-600 dark:text-sky-400" /> {profile.location}
          </span>
        </div>
      </motion.div>

      <div className="space-y-4">
        <Card className="overflow-hidden p-0">
          <Image
            src="/images/profile.jpg"
            alt="MD Rabbi Islam"
            width={900}
            height={1200}
            className="h-full w-full object-cover"
            priority
          />
        </Card>

        <Card className="overflow-hidden p-0">
          <div className="border-b border-slate-300/70 dark:border-white/10 bg-slate-100 px-4 py-2 text-xs text-slate-600 dark:bg-slate-900 dark:text-slate-400">backend-terminal.sh</div>
          <div className="space-y-2 px-4 py-4 font-mono text-xs md:text-sm">
            {terminalLines.map((line, idx) => (
              <motion.p
                key={line}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 * idx, duration: 0.35 }}
                className="text-slate-700 dark:text-slate-300"
              >
                {line}
              </motion.p>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}

