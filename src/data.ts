/**
 * Any link with an empty `url` is hidden. To add one, paste the URL.
 * To add a new kind of link (e.g. "Blog", "Kaggle"), add another { label, url } entry.
 */
export interface Link {
  label: string;
  url: string;
}

export const profile = {
  name: "Priyadarshi Satyakam",
  title: "",
  status:
    "B.Tech CSE, IIIT Naya Raipur · Open to internships and full-time roles",
  intro:
    "I am a computer science undergraduate building applied AI systems and dependable backends.",
  highlights:
    "6 hackathon wins · Internal AI tools serving clients · Production Systems ",
  email: "priyadarshisatyakam77@gmail.com",
  resume: "https://drive.google.com/file/d/1HX6YT75kmrWVH4d1doZNDAbQMfhepQHP/view?usp=sharing",
  links: [
    { label: "GitHub", url: "https://github.com/priyadarshi7" },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/priyadarshi-satyakam-688127290/",
    },
    // { label: "LeetCode", url: "https://leetcode.com/u/ghostx007/" },
    // { label: "CodeChef", url: "https://www.codechef.com/users/ghostx007" },
    // { label: "Codeforces", url: "https://codeforces.com/profile/Ghost007_" },
  ] as Link[],
};

export const sections = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "achievements", label: "Achievements" },
  { id: "coding", label: "Coding" },
  { id: "contact", label: "Contact" },
] as const;

export interface Project {
  title: string;
  year?: string;
  /** Optional screenshot, e.g. "/projects/cargoone.png" (file goes in public/projects/). */
  image?: string;
  description: string;
  tags: string[];
  links: Link[];
}

export const projects: Project[] = [
  {
    title: "CargoOne",
    description:
      "An offline-first app that reads photos of signed delivery receipts with AI, checks where each one was taken with GPS, and turns verified deliveries into Tally invoices. It scored 96.4% on a 28-photo benchmark with zero unsafe auto-verifications.",
    tags: ["Typescript","FastAPI", "PWA", "Meta API", "OCR", "AI"],
    links: [
      { label: "GitHub", url: "https://github.com/priyadarshi7/CargoOne" },
      { label: "Live demo", url: "" },
      {
        label: "Video demo",
        url: "https://drive.google.com/file/d/1FuzwDm-E7bZ0MhHoBEXw8TLZCZ6-6KQ7/view",
      },
    ],
    image: "/projects/cargoone.png",
  },
  {
    title: "AuctionX",
    description:
      "Real-time auction platform with concurrent bidding. Bid correctness under contention via row-level locking and DB-enforced idempotency; bid latency cut from ~1.08s to ~0.7s.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Redis", "Kafka"],
    links: [
      { label: "GitHub", url: "https://github.com/priyadarshi7/AuctionX" },
      { label: "Live demo", url: "https://auctionx-app.vercel.app/" },
      { label: "Video demo", url: "" },
    ],
    image: "/projects/auctionx.png",
  },
  {
    title: "RenderPixelAI",
    description:
      "Constraint-aware multimodal image editing pipeline for interior rendering, integrating 4+ models to keep layouts and textures consistent across views. Validated over 800+ test runs; per-render cost around Rs. 40–50.",
    tags: ["Grounding DINO", "SAM2", "Stable Diffusion", "LLMs"],
    links: [
      { label: "GitHub", url: "" },
      { label: "Live demo", url: "" },
      {
        label: "Output",
        url: "https://drive.google.com/file/d/1FAESjCU6pDbDiizMh-O_P1SizDQ0O5nM/view?usp=sharing",
      },
    ],
    image: "/projects/render.png",
  },
{
  title: "Orbit",
  description:
    "An agentic web-search chat system. A router model picks a fast loop or a deep path. The deep path plans sub-questions, runs parallel researcher agents on live web search, writes one cited report and has a verifier agent check every claim against its source before it ships. Each turn is a durable run that checkpoints after every step, so a crash resumes mid-research instead of restarting.",
  tags: ["Agentic AI", "Multi-agent", "RAG", "Tool use", "TypeScript", "Vercel AI SDK", "Gemini", "React", "SQLite"],
  links: [
    { label: "GitHub", url: "https://github.com/priyadarshi7/Orbit" },
    { label: "Live demo", url: "" },
    { label: "Video demo", url: "" },
  ],
  image:"/projects/orbit.png"
},

  // {
  //   title: "JurisMindAI",
  //   description:
  //     "Agentic RAG platform for Indian legal research: an 8-stage pipeline on self-hosted Qwen3 with hybrid BM25 + dense retrieval, reranking and citation validation over statutes and case law.",
  //   tags: ["Qwen3", "Ollama", "Qdrant", "PostgreSQL"],
  //   links: [
  //     { label: "GitHub", url: "https://github.com/priyadarshi7/JurisMindAI" },
  //     { label: "Live demo", url: "" },
  //     { label: "Video demo", url: "" },
  //   ],
  // },
];

export interface Job {
  duration: string;
  role: string;
  company: string;
  location: string;
  achievements: string[];
  tech: string[];
}

export const experience: Job[] = [
  {
    duration: "Jun – Jul 2026",
    role: "Software Development Engineer Intern",
    company: "Build91",
    location: "Raipur, India",
    achievements: [
      "Built a production multimodal AI pipeline for automated interior rendering, serving active clients.",
      "Cut rendering turnaround from 5–7 hours to 15–20 minutes (~95%) by optimizing inference and parallelizing execution.",
      "Developed an AI Floor Plan Analyzer with multimodal LLMs; on a 30+ plan benchmark it reached 90%+ room recall and 99.5%+ room precision.",
      "Lowered generative AI inference cost by 3× through token usage optimization and selective context extraction.",
    ],
    tech: ["LLMs", "Segmentation", "Diffusion models", "Computer vision"],
  },
];

export const about = [

];

export const skills: { group: string; items: string }[] = [
  { group: "Languages", items: "C++, JavaScript, TypeScript, Python" },
  { group: "Technologies", items: "React.js, Next.js, Tailwind CSS, Node.js, Express.js, FastAPI, Kafka" },
  { group: "Databases", items: "MongoDB, MySQL, PostgreSQL, Redis, Vector DB" },
  { group: "AI / ML", items: "Transformers, LLMs, Generative AI, RAG, Hybrid Search, Reranking, Agentic AI, LangChain, LangGraph, Hugging Face, SAM2, Grounding DINO, Ollama" },
  { group: "AI tools", items: "Claude Code, Antigravity, OpenCode, Model Context Protocol" },
  { group: "DevOps", items: "Git, GitHub Actions, Docker, Nginx, AWS (EC2, S3)" },
];

export const achievements: { label: string; text: string }[] = [
  { label: "HackPrix 2.0, Hyderabad", text: "Winner (150+ teams)" },
  { label: "HackByte 3.0, IIIT Jabalpur", text: "Winner, Midnight Blockchain Track (125+ teams)" },
  { label: "DSU Dev Hack 2.0, Bangalore", text: "Winner, MongoDB Track (100+ teams)" },
  { label: "Hack-o-Harbor, IIIT Naya Raipur", text: "Runner-up (50+ teams)" },
  { label: "GHR Hacks 1.0", text: "Special Mention Prize, Jalgaon (40+ teams)" },
  { label: "Bit2Byte, IIIT NR", text: "Overall Winner" },
];

export const codingProfiles: { platform: string; rating: string; url: string }[] = [
  {platform: "GitHub", rating: "priyadarshi7", url: "https://github.com/priyadarshi7"},
  { platform: "LeetCode", rating: "Rating 1797", url: "https://leetcode.com/u/ghostx007/" },
  { platform: "Codeforces", rating: "Pupil (1283)", url: "https://codeforces.com/profile/Ghost007_" },
  { platform: "CodeChef", rating: "3 star (1615)", url: "https://www.codechef.com/users/ghostx007" },
];
