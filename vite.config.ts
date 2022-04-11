import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import html from "vite-plugin-html";
import { resolve } from 'path'
import iconsResolver from 'unplugin-icons/resolver'
import components from 'unplugin-vue-components/vite'
import autoImport from 'unplugin-auto-import/vite'
import dotenv from 'dotenv';

import { accessSync } from 'fs';


const getApiBase = (url: string) => {

  if (url == null) {
    return 'localhost';
  }
  const portIndex = url.lastIndexOf(':');
  return portIndex > 0 ? url.substring(0, portIndex) : url;

}

const getEnvFile = (mode: string) => {

  if (mode != '' && mode !== 'production') {

    try {
      /// check if mode file exists.
      const file = `.env.${mode}`;
      accessSync(file);
      return file;
    } catch (err) {
      //
    }

  }
  return '.env';

}

// https://vitejs.dev/config/
export default async function ({ mode, command }) {

  const isProduction = mode === 'production';

  console.log(`running in mode: ${mode}`);
  dotenv.config({ path: getEnvFile(mode) });

  const api_base = getApiBase(process.env.VITE_API_BASE);

  let securityPolicies = [
    "default-src 'self'",
    "connect-src 'self' " +
    [
      api_base,
    ].join(" "),
    "font-src 'self' data:",
    isProduction ? "style-src 'self'" : "style-src 'self' 'unsafe-inline' 'unsafe-eval'",
  ];

  return defineConfig({
    resolve: {
      alias: [
        { find: /^@\//, replacement: `${resolve(__dirname, './src')}/` },
        { find: /^assets\//, replacement: `${resolve(__dirname, './assets')}/` },
      ]
    },

    plugins: [

      html({
        inject: {
          injectData: {
            contentSecurityPolicy: securityPolicies.join("; "),
          },
        },
      }),
      vue(),

      // auto-import listed packages
      autoImport({
        dts: resolve(__dirname, 'src/auto-imports.d.ts'),
        imports: ["vue"]

      }),
      // auto-import components by naming in template
      components({
        dirs: [resolve(__dirname, 'src/components'), resolve(__dirname, 'src/views')],
        dts: resolve(__dirname, 'src/components.d.ts'),
      }),
    ],

    optimizeDeps: {


      include: [
        "vue",
        "@fontsource/montserrat",
        "@vueuse/core",

      ]
    },

    preview: {
      port: 5000,
      cors: true,
      https: true,
    },


    server: {
      port: 3001,
      cors: true,
      https: true,
      hmr: {
        host: 'localhost',
      },
      watch: {
        ignored: [
          resolve(__dirname, "src/auto-imports.d.ts"),
          resolve(__dirname, "src/components.d.ts")
        ],
      },
    }

  });
}
