import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
 base: "/",
 plugins: [react()],
 preview: {
  host: true,
  port: 8000,
  strictPort: true,
 },
 server: {
  port: 8000,
  strictPort: true,
  host: true,
  origin: "http://0.0.0.0:8080",
 },
});