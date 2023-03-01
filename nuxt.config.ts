// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from "vite-plugin-vuetify";
export default defineNuxtConfig({
    ssr: true,
    css: ["@/assets/main.scss"],
    build: {
        transpile: ["vuetify"],
        analyze: true,
    },
    vite: {
        ssr: {
            noExternal: ["vuetify"],
        },
        define: {
            "process.env.DEBUG": false,
        },

    },

    modules: [
        async (options, nuxt) => {
            nuxt.hooks.hook("vite:extendConfig", (config) => config.plugins.push(vuetify()));
        },
    ],

})
