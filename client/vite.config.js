import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => {
  // Load env file based on the mode (development, production, etc.)
  const env = loadEnv(mode, process.cwd(), "");

  return {
    server: {
      proxy: {
        "/api": {
          target: env.VITE_BACKEND_URL, // Use the loaded environment variable
          changeOrigin: true,
          secure: false,
        },
      },
    },
    plugins: [react()],
  };
});
