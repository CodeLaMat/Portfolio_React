import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaVuejs,
  FaDatabase,
  FaMicrosoft,
  FaAws,
  FaGit,
  FaDocker,
  FaJenkins,
  FaFigma,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiFirebase,
  SiAzuredevops,
  SiJest,
  SiTestinglibrary,
  SiZod,
  SiTailwindcss,
  SiSass,
  SiAgile,
  SiJira,
  SiTrello,
  SiMiro,
} from "react-icons/si";
import { DiScrum } from "react-icons/di";
import { VscJson } from "react-icons/vsc";

const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      { name: "JavaScript (ES6)", proficiency: 80, Icon: FaJs },
      { name: "TypeScript", proficiency: 80, Icon: SiTypescript },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      {
        name: "Node.js (Express, Morgan)",
        proficiency: 60,
        Icon: FaNodeJs,
      },
      { name: "React (Redux, Axios)", proficiency: 80, Icon: FaReact },
      {
        name: "Next.js (NextAuth, NextAPI)",
        proficiency: 70,
        Icon: SiNextdotjs,
      },
      { name: "Vue (Quasar, Nuxt)", proficiency: 50, Icon: FaVuejs },
    ],
  },
  {
    category: "Database & Cloud Technologies",
    skills: [
      { name: "MongoDB/Firebase", proficiency: 60, Icon: SiMongodb },
      { name: "Azure", proficiency: 50, Icon: FaMicrosoft },
      { name: "AWS (EC2, CodeCommit)", proficiency: 50, Icon: FaAws },
    ],
  },
  {
    category: "Testing & Quality Assurance",
    skills: [
      { name: "Jest", proficiency: 50, Icon: SiJest },
      {
        name: "React Testing Library",
        proficiency: 50,
        Icon: SiTestinglibrary,
      },
      {
        name: "Zod (Schema Validation)",
        proficiency: 60,
        Icon: SiZod,
      },
    ],
  },
  {
    category: "Web Design & Development",
    skills: [
      { name: "RESTful API Design", proficiency: 70, Icon: VscJson },
      { name: "Tailwind CSS", proficiency: 65, Icon: SiTailwindcss },
      { name: "SCSS/CSS", proficiency: 70, Icon: SiSass },
    ],
  },
  {
    category: "DevOps & Version Control",
    skills: [
      { name: "Git/GitHub Actions", proficiency: 60, Icon: FaGit },
      { name: "Docker", proficiency: 50, Icon: FaDocker },
      { name: "Jenkins (CI/CD)", proficiency: 50, Icon: FaJenkins },
      { name: "Agile Development", proficiency: 70, Icon: DiScrum },
    ],
  },
  {
    category: "Project & Design Tools",
    skills: [
      { name: "Jira, Monday, Trello", proficiency: 60, Icon: SiJira },
      { name: "Miro (Whiteboarding)", proficiency: 60, Icon: SiMiro },
      { name: "Figma (UI/UX Design)", proficiency: 60, Icon: FaFigma },
    ],
  },
];

export default skillsData;
