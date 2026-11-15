import type { ReactNode } from "react";
import Reveal from "./Reveal";

interface Props {
  id: string;
  title: string;
  children: ReactNode;
}

export default function Section({ id, title, children }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className="mx-auto mt-14 max-w-[760px] px-5">
      <Reveal>
        <h2 id={`${id}-h`} className="mb-5 text-xl font-semibold">{title}</h2>
        {children}
      </Reveal>
    </section>
  );
}
