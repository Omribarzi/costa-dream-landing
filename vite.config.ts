import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

const REPO_NAME = "costa-dream-landing";
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: isGitHubActions ? `/${REPO_NAME}/` : "/",
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
