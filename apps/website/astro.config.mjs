import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  output: "server",
  build: {
    split: true,
  },
  adapter: vercel(),
});
