const ROOT_URL = 
  process.env.NODE_ENV === "production"
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : "http://localhost:3000";

export const minikitConfig = {
  accountAssociation: {
  header: "eyJmaWQiOjE4MzAyMTYxMjQ...",  // paste header kamu
  payload: "eyJkb21haW4iOiJudXdh...",  // paste payload kamu
  signature: "AAAAAAAAAAAAAAAA...",  // paste signature kamu
},
  miniapp: {
    version: "1",
    name: "Nuwa People Search",
    subtitle: "Find Anyone, Anywhere, Instantly",
    description: "Upload a photo or search by name to discover social profiles, news, and connections. Powered by AI and blockchain technology.",
    screenshotUrls: [`${ROOT_URL}/screenshot-portrait.png`],
    iconUrl: `${ROOT_URL}/blue-icon.png`,
    splashImageUrl: `${ROOT_URL}/blue-hero.png`,
    splashBackgroundColor: "#1a1a2e",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "social",
    tags: ["search", "people", "AI", "social", "discovery", "blockchain"],
    heroImageUrl: `${ROOT_URL}/blue-hero.png`,
    tagline: "The Human Search Engine",
    ogTitle: "Nuwa People Search - Find Anyone Instantly",
    ogDescription: "Discover people through AI-powered search. Find social profiles, connections, and more.",
    ogImageUrl: `${ROOT_URL}/blue-hero.png`,
  },
} as const;
