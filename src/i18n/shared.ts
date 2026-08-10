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

const stackGroupItems = [
  ["TypeScript", "Angular", "Astro"],
  ["Node.js", "NestJS", "Python", "FastAPI"],
  ["MySQL", "MSSQL", "MongoDB"],
  ["Kubernetes", "GitHub Actions"],
  ["Google Cloud", "Azure", "AWS", "Cloudflare"],
  ["RabbitMQ", "FIWARE", "Raspberry Pi"]
];

export function buildStackGroups(labels: readonly string[]): StackGroup[] {
  return labels.map((label, i) => ({ label, items: stackGroupItems[i] }));
}
