import { defineConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular';
import react from "@vitejs/plugin-react";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [
    angular({workspaceRoot: "angular"}),
    vue(),
    react()
  ],
  resolve: {
    mainFields: ['module'],
  },
  base: "/multi-framework-redux"
});
