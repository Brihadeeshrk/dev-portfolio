export interface Project {
  name: string;
  points: string[];
}

export interface WorkExperience {
  id: number;
  title: string;
  company: string;
  company_link: string;
  startDate: string;
  endDate: string;
  description: string;
  projects: Project[];
  technologies: string[];
}

export interface Achievements {
  id: number;
  title: string;
  description: string;
  awardee: string;
  year: number;
}
