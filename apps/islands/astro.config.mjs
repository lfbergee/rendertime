import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  integrations: [preact()],
  output: "server",
  adapter: vercel(),
});
