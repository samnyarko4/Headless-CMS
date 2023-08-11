// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [['@storyblok/nuxt', { accessToken: 'Gc2eoiQz5sEwqqMLJyO4lgtt' }]],
apiOptions: {
    region: "us",
},
})
