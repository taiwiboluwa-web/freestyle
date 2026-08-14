import { publicEnv } from "@/env";

export const siteConfig = {
  name: "Freestyle",
  description: "Independent creative studio building identities, digital experiences and campaigns for ambitious brands.",
  url: publicEnv.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ogImage: "/open-graph.png",
  twitterHandle: "@freestyle",
  author: "Freestyle Studio",
  themeColor: "#101010",
} as const;
