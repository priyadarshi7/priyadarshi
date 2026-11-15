import { profile } from "../data";
import Links from "./Links";

export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-[760px] px-5 pb-6 pt-16 text-center">
      <h1 className="text-[2rem] font-semibold leading-tight sm:text-4xl">{profile.name}</h1>
      <p className="mt-3 text-lg italic">{profile.title}</p>
      <p className="mt-1 text-muted">{profile.status}</p>
      <Links
        className="mt-4 justify-center"
        links={[
          { label: "Resume", url: profile.resume },
          { label: "Email", url: `mailto:${profile.email}` },
          ...profile.links,
        ]}
      />
      <div className="mx-auto mt-10 max-w-[34em] text-left">
        <p className="mb-1 text-center font-semibold">Abstract</p>
        <p className="text-justify">{profile.intro}</p>
        <p className="mt-2 text-justify text-muted">{profile.highlights}</p>
      </div>
    </section>
  );
}
