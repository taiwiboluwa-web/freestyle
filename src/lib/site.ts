import { publicEnv } from "@/env";

export const siteConfig = {
  name: "BlueHaven Studios",
  description:
    "BlueHaven Studios is a multidisciplinary creative studio creating brands, digital experiences, content and visual stories beyond limits.",
  url: publicEnv.NEXT_PUBLIC_SITE_URL ?? "https://bluehavens.name.ng",
  ogImage: "/open-graph.png",
  twitterHandle: "@bluehavenstudios",
  author: "BlueHaven Studios",
  themeColor: "#111111",
} as const;
