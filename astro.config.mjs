import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site:'https://reduhq.github.io',
  base: '/portfolio',
  integrations: [tailwind(), icon()]
});