import { defineConfig } from 'vite';
import * as glob from 'glob';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import htmlPurge from 'vite-plugin-purgecss';
import path, { resolve } from 'path';

export default defineConfig({
  appType: 'mpa',
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        glob
          .sync('./**/*.html', { ignore: ['./dist/**', './node_modules/**'] })
          .map(file => [
            file.slice(2, file.length - path.extname(file).length),
            resolve(__dirname, file)
          ])
      ),
    },
  },
  plugins: [
    htmlPurge(),
    ViteMinifyPlugin()
  ]
});
