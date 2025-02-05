import { defineConfig } from "vite";

export default defineConfig({
	base: "/portfolio/",
	build: {
		outDir: "dist",
		rollupOptions: {
			output: {
				manualChunks: {
					vendor: ["react", "react-dom"],
				},
			},
		},
	},
	resolve: {
		alias: {
			"@": "/src",
		},
	},
});
