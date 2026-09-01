export interface Skill {
  name: string;
  icon: string; // I'll use SVG paths or simple emoji for now, or I can provide internal SVG components
  level: number; // 0 to 100
  color: string;
  logoDomain?: string; // Optional domain for Logo.dev
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "BACKEND DEVELOPMENT",
    icon: "backend",
    skills: [
      { name: "NODE.JS", icon: "nodejs", level: 90, color: "#68a063", logoDomain: "nodejs.org" },
      { name: "C#", icon: "csharp", level: 85, color: "#9b4993", logoDomain: "microsoft.com" },
      { name: ".NET", icon: "dotnet", level: 80, color: "#512bd4", logoDomain: "dotnet.microsoft.com" },
      { name: "AUTHENTICATION", icon: "java", level: 75, color: "#eccd20ff", logoDomain: "google.com" },
      { name: "PYTHON", icon: "python", level: 95, color: "#3776ab", logoDomain: "python.org" },
      { name: "Microservices", icon: "microservice", level: 80, color: "#297ad6ff", logoDomain: "isocpp.org" },
      { name: "PRISMA", icon: "prisma", level: 80, color: "#003b57", logoDomain: "prisma.io" },
      { name: "REDIS", icon: "redis", level: 60, color: "#ed3333ff", logoDomain: "redis.com" },
    ],
  },
  {
    title: "FRONTEND DEVELOPMENT",
    icon: "frontend",
    skills: [
      { name: "REACT", icon: "react", level: 100, color: "#61dafb", logoDomain: "react.dev" },
      { name: "TYPESCRIPT", icon: "typescript", level: 95, color: "#3178c6", logoDomain: "typescriptlang.org" },
      { name: "NEXT.JS", icon: "nextjs", level: 90, color: "#585916ff", logoDomain: "nextjs.org" },
      { name: "STATE MANAGEMENT", icon: "tailwind", level: 85, color: "#06b6d4", logoDomain: "tailwindcss.com" },
      { name: "BUILD TOOLS", icon: "css3", level: 70, color: "#1572b6", logoDomain: "w3.org" },
      { name: "WEB APPS", icon: "html5", level: 75, color: "#2bae1fff", logoDomain: "w3.org" },
      { name: "VITE", icon: "vite", level: 80, color: "#6526e3ff", logoDomain: "vite.dev" },
      { name: "EXPO", icon: "expo", level: 80, color: "#000000", logoDomain: "expo.dev" },
    ],
  },
  {
    title: "DATABASES",
    icon: "database",
    skills: [
      { name: "POSTGRESQL", icon: "postgresql", level: 90, color: "#336791", logoDomain: "postgresql.org" },
      { name: "MONGODB", icon: "mongodb", level: 80, color: "#47a248", logoDomain: "mongodb.com" },
      { name: "MYSQL", icon: "mysql", level: 85, color: "#e7e73dff", logoDomain: "mysql.com" },
      { name: "NEO4J", icon: "neo4j", level: 75, color: "#b02ddcff", logoDomain: "neo4j.com" },
      { name: "SQLITE", icon: "sqlite", level: 70, color: "#6cc232ff", logoDomain: "sqlite.org" },
      { name: "FIREBASE", icon: "firebase", level: 100, color: "#ff2828ff", logoDomain: "firebase.blog" },
      { name: "Supabase", icon: "supabase", level: 80, color: "#3ea1cfff", logoDomain: "supabase.com" },
      { name: "PgBouncer", icon: "pgbouncer", level: 80, color: "#003b57", logoDomain: "pgbouncer.org" },
    ],
  },
  {
    title: "DEVOPS & CLOUD",
    icon: "cloud",
    skills: [
      { name: "DOCKER", icon: "docker", level: 80, color: "#2496ed", logoDomain: "docker.com" },
      { name: "KUBERNETES", icon: "kubernetes", level: 70, color: "#326ce5", logoDomain: "kubernetes.io" },
      { name: "AWS", icon: "aws", level: 75, color: "#ff9900", logoDomain: "aws.amazon.com" },
      { name: "GCP", icon: "gcp", level: 75, color: "#32ef6bff", logoDomain: "cloud.google.com" },
      { name: "GITLAB", icon: "gitlab", level: 80, color: "#b520ffff", logoDomain: "gitlab.com" },
      { name: "AZURE", icon: "azure", level: 65, color: "#0078d4", logoDomain: "azure.microsoft.com" },
      { name: "TERRAFORM", icon: "terraform", level: 70, color: "#7b42bc", logoDomain: "terraform.io" },
      { name: "GIT", icon: "git", level: 80, color: "#000000ff", logoDomain: "github.com" },
    ],
  },
  {
    title: "AI/LLM SYSTEMS",
    icon: "ai",
    skills: [
      { name: "Agents", icon: "agents", level: 80, color: "#2496ed", logoDomain: "openai.com" },
      { name: "MCP", icon: "mcp", level: 70, color: "#326ce5", logoDomain: "modelcontextprotocol.io" },
      { name: "Skills", icon: "skills", level: 75, color: "#ff9900", logoDomain: "platform.claude.com" },
      { name: "Vectorization", icon: "claude", level: 75, color: "#4285f4", logoDomain: "anthropic.com" },
      { name: "RAG", icon: "openai", level: 80, color: "#2088ff", logoDomain: "openai.com" },
      { name: "Model APIs", icon: "gemini", level: 65, color: "#0078d4", logoDomain: "deepmind.google" },
      { name: "Orchestration", icon: "agentmail", level: 70, color: "#7b42bc", logoDomain: "gmail.com" },
      { name: "Prompt Engineering", icon: "promptengineering", level: 70, color: "#7b42bc", logoDomain: "openai.com" },
    ],
  },
  {
    title: "STYLING AND DESIGN",
    icon: "styling",
    skills: [
      { name: "Figma", icon: "figma", level: 80, color: "#ed2424ff", logoDomain: "figma.com" },
      { name: "Qt", icon: "qt", level: 70, color: "#000000ff", logoDomain: "qt.io" },
      { name: "CSS3", icon: "css3", level: 75, color: "#11ff00ff", logoDomain: "css3.com" },
      { name: "HTML5", icon: "html5", level: 75, color: "#f07e28ff", logoDomain: "https://logos.fandom.com/wiki/HTML5" },
      { name: "Tailwind", icon: "tailwind", level: 80, color: "#2088ff", logoDomain: "tailwindcss.com" },
      { name: "Bootstrap", icon: "bootstrap", level: 65, color: "#fae73cff", logoDomain: "bootstrap.com" },
      { name: "Material UI", icon: "materialui", level: 70, color: "#496dffff", logoDomain: "mui.com" },
      { name: "Astro", icon: "astro", level: 70, color: "#7b42bc", logoDomain: "astro.build" },
    ],
  },
];
