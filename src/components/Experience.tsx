import { experience } from "../data";
import Section from "./Section";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ul className="space-y-10">
        {experience.map((j) => (
          <li key={j.company + j.duration}>
            <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-1">
              <div>
                <h3 className="font-bold">{j.company}</h3>
                <p className="text-muted">{j.role}</p>
              </div>
              <div className="text-sm text-muted sm:text-right">
                <p>{j.location}</p>
                <p>{j.duration}</p>
              </div>
            </div>
            <ul className="mt-4 max-w-[46em] list-disc space-y-2 pl-5 marker:text-muted">
              {j.achievements.map((a) => <li key={a}>{a}</li>)}
            </ul>
            <p className="mt-4 text-muted">
              <span className="font-medium text-ink">Technologies:</span> {j.tech.join(", ")}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
