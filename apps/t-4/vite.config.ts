/// <reference types="vitest" />
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5174,
  },
  test: {
    setupFiles: ["./__tests__/setup.ts"],
    globals: true,
    environment: "happy-dom",
  },
});
