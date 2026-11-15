import { useEffect, useState } from "react";
import { profile, sections } from "../data";
import { useActiveSection } from "../hooks/useActiveSection";

const ids = sections.map((s) => s.id);

export default function Nav() {
  const active = useActiveSection(ids);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg text-sm">
      <div className="mx-auto flex h-12 max-w-[760px] items-center gap-6 px-5">
        <a href="#home" className="whitespace-nowrap font-medium">{profile.name}</a>

        <nav
          id="nav-links"
          aria-label="Sections"
          className={`${open ? "flex" : "hidden"} absolute left-0 right-0 top-12 flex-col border-b border-line bg-bg px-5 pb-3 pt-1 lg:static lg:ml-auto lg:flex lg:flex-row lg:gap-5 lg:border-0 lg:bg-transparent lg:p-0`}
        >
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={() => setOpen(false)}
              aria-current={active === s.id ? "true" : undefined}
              className={`whitespace-nowrap py-2 lg:py-0 ${
                active === s.id ? "text-ink underline underline-offset-4" : "text-muted hover:text-ink"
              }`}
            >
              {s.label}
            </a>
          ))}
        </nav>

        <button
          className="ml-auto lg:hidden"
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
    </header>
  );
}
