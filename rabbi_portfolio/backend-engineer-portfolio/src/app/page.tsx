import { AboutSection } from "@/components/about-section";
import { BackendArchitectureShowcase } from "@/components/backend-architecture";
import { BlogPreview } from "@/components/blog-preview";
import { ContactSection } from "@/components/contact-section";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { GithubSection } from "@/components/github-section";
import { HeroTerminal } from "@/components/hero-terminal";
import { LinkedinFeed } from "@/components/linkedin-feed";
import { MetricsStrip } from "@/components/metrics-strip";
import { ProfessionalHighlights } from "@/components/professional-highlights";
import { ProjectShowcase } from "@/components/project-showcase";
import { SkillsArchitecture } from "@/components/skills-architecture";

export default function Home() {
  return (
    <main>
      <HeroTerminal />
      <MetricsStrip />
      <AboutSection />
      <SkillsArchitecture />
      <ExperienceTimeline />
      <ProjectShowcase />
      <BackendArchitectureShowcase />
      <GithubSection />
      <LinkedinFeed />
      <BlogPreview />
      <ProfessionalHighlights />
      <ContactSection />
    </main>
  );
}

