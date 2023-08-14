// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [['@storyblok/nuxt', { accessToken: 'QpDNTlhZ3K4b5jO9AmD6Zwtt' }]],
    apiOptions: {
    region: "us",
    },
})
