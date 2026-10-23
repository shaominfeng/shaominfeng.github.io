export interface GithubStats {
  stars: number;
  followers: number;
  repos: number;
}

const FALLBACK: GithubStats = { stars: 2, followers: 2, repos: 8 };

export async function getGithubStats(): Promise<GithubStats> {
  try {
    const headers = { 'User-Agent': 'shaominfeng-site', Accept: 'application/vnd.github+json' };
    const [userRes, reposRes] = await Promise.all([
      fetch('https://api.github.com/users/shaominfeng', { headers }),
      fetch('https://api.github.com/users/shaominfeng/repos?per_page=100', { headers }),
    ]);
    if (!userRes.ok || !reposRes.ok) return FALLBACK;
    const user = await userRes.json();
    const repos = await reposRes.json();
    const stars = Array.isArray(repos)
      ? repos.reduce((sum: number, repo: { stargazers_count?: number }) => sum + (repo.stargazers_count ?? 0), 0)
      : FALLBACK.stars;
    return {
      stars,
      followers: typeof user.followers === 'number' ? user.followers : FALLBACK.followers,
      repos: typeof user.public_repos === 'number' ? user.public_repos : FALLBACK.repos,
    };
  } catch {
    return FALLBACK;
  }
}
