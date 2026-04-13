import { defineConfig } from "vite-plus";

export default defineConfig({
  fmt: {},
  lint: { options: { typeAware: true, typeCheck: true } },
    server: {
    allowedHosts: ['.casinelli.io'],
    strictPort: true,
    port: 3636,
  },
});
