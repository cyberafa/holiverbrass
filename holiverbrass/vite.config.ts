import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import * as path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@app.scss": path.resolve(__dirname, "src/assets/scss/app.scss"),
      "@breakpoints": path.resolve(
        __dirname,
        "src/assets/scss/mixins/breakpoints.scss"
      ),
      "@functions": path.resolve(__dirname, "src/assets/scss/functions"),
      "@hooks": path.resolve(__dirname, "src/hooks/hooks.ts"),
      "@images": path.resolve(__dirname, "src/assets/images"),
      "@logo": path.resolve(__dirname, "src/assets/images/company/logo.png"),
      "@mocks": path.resolve(__dirname, "mocks/mocks.ts"),
      "@schemas": path.resolve(__dirname, "src/assets/schemas/index.ts"),
      "@sections": path.resolve(
        __dirname,
        "src/components/sections/sections.ts"
      ),
      "@services": path.resolve(__dirname, "src/services/services.ts"),
      "@types": path.resolve(__dirname, "src/types/types.ts"),
      "@ui": path.resolve(__dirname, "src/components/ui/ui.ts"),
    },
  },
})
