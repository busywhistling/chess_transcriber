/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// Vite config docs: https://vitejs.dev/config/
// Vitest config docs: https://vitest.dev/config/
// FIXME: Disabled minify due to issues processing scss
export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	base: "https://paramjit.org/chess_transcriber/",
	build: {
		minify: false,
	},
	test: {
		include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
		exclude: ["tests/**", "tests-examples/**"], // exclude playwright tests
	},
});
