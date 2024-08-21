import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
let envFileName = (process.env.NODE_ENV === "development") ? ".env.dev" : ".env";
import dotenv from "dotenv"
const envs = dotenv.config({ path: envFileName }).parsed;
let options = {}
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ...options,
  runtimeConfig: {
    public: {
      // @ts-expect-error
      WEB_URL: envs.WEB_URL,
      // @ts-expect-error
      API_URL: envs.API_URL,
    },
  },
  devtools: { enabled: false },
  devServer: {
    host: "0.0.0.0",
    port: 3030,
  },
  //
  app: {
    head: {
      title: "2024 Ez training program",
      titleTemplate: "Ez training program",
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Cinzel&family=Noto+Sans+TC:wght@400;700;900&display=swap",
        },
      ],
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" },
        { name: "format-detection", content: "telephone=no" },
        { hid: "robots", name: "robots", content: "noindex" }, // 防止搜尋
      ],
      script: [
        // { src: `https://maps.googleapis.com/maps/api/js?key=${envs.GOOGLE_MAPS_API_KEY}&libraries=places`, async: false, defer: false },
      ],
    },
  },
  css: ["~/assets/main.scss"],
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    //vuetify
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    //
    "@pinia/nuxt",
    "nuxt-scheduler",
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
