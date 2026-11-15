import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="mx-auto mt-16 flex max-w-[760px] justify-between gap-4 border-t border-line px-5 pb-10 pt-5 text-sm text-muted">
      <span>© {new Date().getFullYear()} {profile.name}</span>
      <a className="underline" href="#home">Back to top</a>
    </footer>
  );
}
