import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import vercel from "@astrojs/vercel/edge";

export default defineConfig({
  integrations: [preact()],
  adapter: vercel(),
});
