import { about, achievements, codingProfiles, profile, skills } from "../data";
import Links from "./Links";
import Section from "./Section";

const row = "grid gap-0.5 py-1.5 sm:grid-cols-[280px_1fr] sm:gap-6";

export function About() {
  return (
    <Section id="about" title="About">
      <div className="max-w-[34em] space-y-4">
        {about.map((p) => <p key={p}>{p}</p>)}
      </div>
    </Section>
  );
}

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl>
        {skills.map((s) => (
          <div key={s.group} className={row}>
            <dt className="text-muted">{s.group}</dt>
            <dd>{s.items}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

export function Achievements() {
  return (
    <Section id="achievements" title="Achievements">
      <dl>
        {achievements.map((a) => (
          <div key={a.label} className={row}>
            <dt>{a.label}</dt>
            <dd className="text-muted">{a.text}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

export function CodingProfiles() {
  return (
    <Section id="coding" title="Coding Profiles">
      <dl>
        {codingProfiles.map((c) => (
          <div key={c.platform} className={row}>
            <dt>
              <a className="underline" href={c.url} target="_blank" rel="noopener noreferrer">{c.platform}</a>
            </dt>
            <dd className="text-muted">{c.rating}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p>Lets Connect.</p>
      <Links
        className="mt-3"
        links={[
          { label: profile.email, url: `mailto:${profile.email}` },
          ...profile.links,
          { label: "Resume", url: profile.resume },
        ]}
      />
    </Section>
  );
}
