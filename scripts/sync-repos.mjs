import { writeFile } from "node:fs/promises";

const owner = "beatviral";
const outputPath = new URL("../src/data/projects.generated.ts", import.meta.url);

const titleFromRepo = (name) =>
  name
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase())
    .replace(/\bAi\b/g, "AI")
    .replace(/\bSaas\b/g, "SaaS");

async function main() {
  const response = await fetch(
    `https://api.github.com/users/${owner}/repos?per_page=100&sort=updated`,
    {
      headers: {
        "Accept": "application/vnd.github+json",
        "User-Agent": "founder-lab-sync",
      },
    },
  );

  if (!response.ok) {
    throw new Error(`GitHub API returned ${response.status} ${response.statusText}`);
  }

  const repos = await response.json();
  const pageProjects = repos
    .filter((repo) => !repo.fork && !repo.archived && repo.has_pages)
    .map((repo) => ({
      name: titleFromRepo(repo.name),
      slug: repo.name.toLowerCase(),
      url: `https://${owner}.github.io/${repo.name}/`,
      tagline: repo.description || "GitHub Pages project.",
      description: repo.description || "A live project discovered from the Beat Viral GitHub account.",
      category: "Discovered / GitHub Pages",
      status: "Prototype",
      needs: "Review copy, category, status, and next step.",
      accent: "blue",
    }));

  const file = `import type { Project } from "./projects";\n\nexport const generatedProjects: Project[] = ${JSON.stringify(
    pageProjects,
    null,
    2,
  )};\n`;

  await writeFile(outputPath, file, "utf8");
  console.log(`Wrote ${pageProjects.length} discovered projects to ${outputPath.pathname}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
