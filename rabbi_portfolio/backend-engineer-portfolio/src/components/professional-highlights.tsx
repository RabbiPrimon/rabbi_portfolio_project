import { certifications, education, leadership, volunteering } from "@/lib/site-data";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/section-heading";

export function ProfessionalHighlights() {
  return (
    <section id="about" className="mx-auto w-full max-w-7xl px-4 py-14 md:px-8">
      <SectionHeading
        eyebrow="Professional Foundation"
        title="Certifications, education, leadership, and volunteering"
        description="Signals of technical discipline, structured learning, and team leadership beyond code delivery."
      />

      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">Certifications</h3>
          <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
            {certifications.map((cert) => (
              <li key={cert.name}>
                <span className="font-medium text-slate-900 dark:text-white">{cert.name}</span>
                <p className="text-slate-600 dark:text-slate-400">{cert.issuer}</p>
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">Education</h3>
          <p className="font-medium text-slate-900 dark:text-white">{education.degree}</p>
          <p className="text-sm text-slate-600 dark:text-slate-400">{education.institution}</p>
          <p className="mt-2 text-sm text-sky-700 dark:text-sky-300">CGPA: {education.cgpa}</p>
        </Card>

        <Card>
          <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">Leadership</h3>
          <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
            {leadership.map((item) => (
              <li key={item.role + item.org}>
                <span className="font-medium text-slate-900 dark:text-white">{item.role}</span>
                <p className="text-slate-600 dark:text-slate-400">{item.org}</p>
                <p className="text-xs text-slate-500">{item.period}</p>
              </li>
            ))}
          </ul>
        </Card>

        <Card>
          <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">Volunteering</h3>
          <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
            {volunteering.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
}

