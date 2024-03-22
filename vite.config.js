import { defineConfig } from "vite";
import cssnano from "cssnano";
import imagemin from "vite-plugin-imagemin";
import VitePluginWebpCompress from 'vite-plugin-webp-compress';
import pluginPurgeCss from '@mojojoejo/vite-plugin-purgecss'

export default defineConfig({
    root: ".",
    sourcemap: true,
    server: {
        https: {
            key: 'localhost-key.pem',
            cert: 'localhost.pem',
        },
    },
    build: {
      outDir: "dist",
      assetsDir: "assets",
      minify: "terser",
    },
    plugins: [
        cssnano(),
        imagemin({
        }), 
        VitePluginWebpCompress(),
        pluginPurgeCss({})
    ],
});
