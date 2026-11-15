import { projects } from "../data";
import Links from "./Links";
import Section from "./Section";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <article key={p.title} className="flex flex-col border border-line p-5">
            {p.image && (
              <img
                src={p.image}
                alt={`${p.title} screenshot`}
                loading="lazy"
                onError={(e) => (e.currentTarget.style.display = "none")}
                className="-mx-5 -mt-5 mb-4 aspect-[16/10] w-[calc(100%+2.5rem)] max-w-none border-b border-line object-cover object-top"
              />
            )}
            <div className="flex items-baseline justify-between gap-2">
              <h3 className="font-semibold">{p.title}</h3>
              {p.year && <span className="text-sm text-muted">{p.year}</span>}
            </div>
            <p className="mt-2 flex-1 text-[15px] text-muted">{p.description}</p>
            {p.tags.length > 0 && <p className="mt-3 text-sm text-muted">{p.tags.join(", ")}</p>}
            <Links links={p.links} className="mt-3 text-sm" />
          </article>
        ))}
      </div>
    </Section>
  );
}
