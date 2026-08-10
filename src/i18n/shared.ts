import type { StackGroup } from "./types";

export const stackPrincipal = [
  "Java",
  "Spring Boot",
  "Vue",
  "Capacitor",
  "PostgreSQL",
  "GitLab CI",
  "Docker",
  "Claude",
  "Codex"
];

const stackGroupKeys = ["frontend", "backend", "data", "devops", "cloud", "iot"] as const;
export type StackGroupKey = (typeof stackGroupKeys)[number];

const stackGroupItems: Record<StackGroupKey, readonly string[]> = {
  frontend: ["TypeScript", "Angular", "Astro"],
  backend: ["Node.js", "NestJS", "Python", "FastAPI"],
  data: ["MySQL", "MSSQL", "MongoDB"],
  devops: ["Kubernetes", "GitHub Actions"],
  cloud: ["Google Cloud", "Azure", "AWS", "Cloudflare"],
  iot: ["RabbitMQ", "FIWARE", "Raspberry Pi"]
};

export function buildStackGroups(labels: Record<StackGroupKey, string>): StackGroup[] {
  return stackGroupKeys.map((key) => ({ label: labels[key], items: stackGroupItems[key] }));
}
