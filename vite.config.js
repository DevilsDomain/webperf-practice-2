// vite.config.js
import { defineConfig } from "vite";
import cssnano from "cssnano";
import imagemin from "vite-plugin-imagemin";
import VitePluginWebpCompress from 'vite-plugin-webp-compress';


export default defineConfig({
    root: ".",
    sourcemap: true,
    build: {
      outDir: "dist",
      assetsDir: "assets",
      minify: "terser",
      sourcemap: true
    },
    plugins: [
        imagemin(), 
        cssnano(),
        VitePluginWebpCompress()
    ],
  });