import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
// FIXME: Disabled minify due to issues processing scss
export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	base: "https://paramjit.org/chess_simulator/",
	build: {
		minify: false,
	},
});
