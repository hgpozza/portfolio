export const site = {
  name: "Higor G. Pozza",
  headline: "Mechanical Engineer",
  valueStatement:
    "Bridging engineering research and industry—from FEA and solid mechanics to sustainable mobility.",
  location: "Campinas, Brazil",
  email: "h198880@dac.unicamp.br",
  phone: "+55 19 9 9978 5276",
  linkedin: "https://www.linkedin.com/in/higor-gpozza/?locale=en_US",
  linkedinHandle: "higor-gpozza",
  github: "https://github.com/hgpozza",
  resumePdf: "/resume.pdf",
  /** Cover image: put your image in public/ and set e.g. "/cover.jpg" (leave "" for placeholder) */
  coverImage: "/cover.jpg",
  /** Profile photo: put your image in public/ and set e.g. "/profile.jpg" (leave "" for placeholder) */
  profileImage: "/profile.jpg",
} as const;

export const about = {
  summary: [
    "BSc in Mechanical Engineering from UNICAMP and M2 (MSc) from ENSTA Paris, with a focus on sustainable and intelligent mobility.",
    "Experience in mechanical simulations (FEA), structural design, and experimental methods—from Technip Energies offshore systems to research at IMSIA Lab and Purdue.",
    "Strong foundation in continuum and solid mechanics, computational methods, fluid-structure interactions, and instrumentation.",
    "Academic tutor and volunteer physics teacher; committed to clear communication and knowledge sharing.",
    "Proficient in MATLAB, Python, Ansys Mechanical, and AutoDesk Inventor; fluent in Portuguese, English (C1+), and French (C2).",
  ],
};

export const experience = [
  {
    company: "Purdue University",
    role: "Research Scholar",
    location: "West Lafayette, IN, USA",
    dates: "January 2026 – May 2026",
    bullets: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    ],
  },
  {
    company: "Technip Energies",
    role: "Engineering Intern",
    location: "Paris, France",
    dates: "April 2024 – September 2024",
    bullets: [
      "Integrated the Advanced Mechanical Systems department to support the development of a novel bottom connector design.",
      "Led mechanical simulations using finite element analysis (FEA) and contributed to validating offshore installation steps.",
      "Estimated a potential 25% reduction in material and installation costs thanks to the new solution.",
    ],
  },
  {
    company: "IMSIA Lab, ENSTA Paris",
    role: "Research Intern",
    location: "Paris, France",
    dates: "May 2023 – August 2023",
    bullets: [
      "Improved the experimental methodology to measure the stress intensity factor in two steel alloys using DCPD method.",
      "Participated in all phases, from specimen preparation to data collection and analysis.",
      "Suggested a filter that improved the data processing time, allowing the tests to be carried out more quickly.",
    ],
  },
];

export const projects = [
  {
    title: "Volunteer physics teacher and simulated exams coordinator",
    organization: "Cursinho Popular de Vinhedo",
    dates: "Jan. 2025 – Present / Mar. 2019 – Dec. 2020",
    bullets: [
      "Volunteer physics teacher for low-income high school students preparing for university entrance exams, focusing on kinematics, electricity, and thermodynamics.",
      "Responsible for the simulated exams committee, from planning and logistics to application and feedback to teachers.",
    ],
    tech: ["Teaching", "Coordination", "Physics"],
  },
];

export const skills = {
  languages: ["Portuguese (native)", "English (C1+, LinguaSkill Mar 2024)", "French (C2, TCF June 2024)"],
  frameworks: [],
  tools: ["MATLAB", "Python", "Ansys Mechanical", "AutoDesk Inventor", "Fiji"],
  cloud: [],
  databases: [],
};

export const education = [
  {
    school: "UNICAMP",
    degree: "BSc in Mechanical Engineering",
    dates: "March 2019 – July 2022 / March 2025 – Dec. 2026",
    bullets: [
      "GPA: 3.60/4.00",
      "Coursework: Instrumentation, Materials Properties, Calculus & Physics, Thermodynamics & Heat Transfer, Mechanical Design & Manufacturing Processes, Fluid Mechanics, Dynamic Systems Control.",
      "Academic tutor for undergraduate courses in statics and mechanical forming for eight months.",
    ],
  },
  {
    school: "ENSTA Paris",
    degree: "M2 (MSc) in Mechanical Engineering, with focus on Sustainable and intelligent mobility",
    note: "Auditing student in the Solid Mechanics course at the Polytechnic Institute of Paris.",
    dates: "August 2022 – October 2024",
    bullets: [
      "GPA: 3.58/4.00",
      "Coursework: Continuum Mechanics & Solid Mechanics, Computational Methods in Engineering, Structural Mechanics & Finite Element Analysis, Compressible flows, Turbulence & Fluid-structure interactions.",
      "Honored with the BRAFITEC academic excellence scholarship by CAPES for two years.",
    ],
  },
];

export const certifications = [
  { name: "LinguaSkill (English C1+)", date: "March 2024" },
  { name: "TCF (French C2)", date: "June 2024" },
];

export const publications = [
  {
    title: "Noise control in ducts using local resonator acoustic metamaterial arrays.",
    authors: "Higor G Pozza, José M. C. Dos Santos",
    venue: "XLII CILAMCE, 2021, Congress proceedings",
    url: "https://publicacoes.softaliza.com.br/cilamce2021/article/view/5861/4923",
  },
];

export type Site = typeof site;
export type ExperienceEntry = (typeof experience)[number];
export type ProjectEntry = (typeof projects)[number];
export type EducationEntry = (typeof education)[number];
