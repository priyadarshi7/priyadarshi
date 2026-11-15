import type { Link } from "../data";

interface Props {
  links: Link[];
  className?: string;
}

/** Renders only links that have a URL. External links open in a new tab. */
export default function Links({ links, className = "" }: Props) {
  const shown = links.filter((l) => l.url.trim() !== "");
  if (shown.length === 0) return null;
  return (
    <p className={`flex flex-wrap gap-x-4 gap-y-1 ${className}`}>
      {shown.map((l) => {
        const external = /^https?:/i.test(l.url);
        return (
          <a
            key={l.label}
            className="underline"
            href={l.url}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            {l.label}
          </a>
        );
      })}
    </p>
  );
}
