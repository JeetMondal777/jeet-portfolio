import appnest from "../public/company/appnest.jpg"
import finarics from "../public/company/finarics.jpg"
import sixty4sec from "../public/company/64sec.jpg"
import vtex from "../public/company/vtex.jpg"
import { StaticImageData } from "next/image";


export type Experience = {
  id: string;
  company: string;
  role: string;
  tech: string;
  logo: StaticImageData;
};

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Appnest IT",
    role: "Full Stack Developer",
    tech: "React, Tailwind, NodeJS, ElectronJS",
    logo: appnest,
  },
  {
    id: "2",
    company: "Vtex AI",
    role: "Full Stack Developer",
    tech: "NextJS, Node.js, PostgreSQL, Redis, GraphQL",
    logo: vtex,
  },
  {
    id: "3",
    company: "64Sec",
    role: "Full Stack AI Engineer",
    tech: "React, SCSS, Bootstrap, CFML, Ollama, LLM",
    logo: sixty4sec,
  },
  {
    id: "4",
    company: "Finarics AI",
    role: "Full Stack Software Engineer",
    tech: "React, NextJS, Node.js, PostgreSQL, Redis, GraphQL, Pipedream, AWS",
    logo: finarics,
  },
];
