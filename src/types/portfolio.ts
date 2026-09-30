export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: 'Agency & Marketing' | 'AI & Systems' | 'Interactive & Gaming' | 'E-Commerce & Web';
  summary: string;
  heroImage: string;
  tags: string[];
  keyHighlights: string[];
  caseStudy: CaseStudy;
  liveDemoType?: 'campaign-calc' | 'ai-debugger' | 'luna-physics' | 'racing-canvas' | 'store-preview';
}

export interface CaseStudy {
  overview: string;
  theIdea: string;
  myRole: string;
  technologies: string[];
  build: string;
  challenges: string;
  solutions: string;
  result: string;
  nextSteps: string;
  metricsOrOutcomes?: { label: string; value: string }[];
}

export interface SkillItem {
  name: string;
  description: string;
  tools: string[];
  practicalApplication: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  skills: SkillItem[];
}

export interface ProcessStep {
  number: string;
  title: string;
  shortDesc: string;
  detail: string;
  deliverables: string[];
  kashifApproach: string;
}

export interface ExploreTopic {
  title: string;
  domain: string;
  status: 'Actively Practicing' | 'In Progress' | 'Hands-on Labs';
  description: string;
  keyConcepts: string[];
  currentMilestone: string;
}

export interface TechItem {
  name: string;
  category: 'Development' | 'Data & Python' | 'Systems & Security' | 'E-Commerce' | 'Design & Media' | 'AI Tools';
  usage: string;
  level: string;
}

export interface JourneyMilestone {
  stage: string;
  domain: string;
  narrative: string;
  skillsGained: string[];
  keyRealization: string;
}
