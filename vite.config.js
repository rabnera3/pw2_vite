import { defineConfig } from 'vite';
import * as glob from 'glob';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import htmlPurge from 'vite-plugin-purgecss';
import path, { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
  appType: 'mpa',
  base: "/pw2_vite/",
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
    handlebars({
      partialDirectory: resolve(__dirname, 'partials')
    }),
    htmlPurge(),
    ViteMinifyPlugin()
  ]
});
