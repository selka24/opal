// https://nuxt.com/docs/api/configuration/nuxt-config
import {sharkInfo} from "./constants.js";

const telephone = sharkInfo.phone.replace(' ', '')

export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'en'
      }
    },
    layoutTransition: { name: 'page', mode: 'out-in' },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  css: [
      '~/assets/css/main.css',
  ],
  modules: ['nuxt-icons', '@nuxtjs/tailwindcss', '@nuxt/image', '@nuxtjs/seo', '@nuxtjs/sitemap', '@nuxtjs/robots', 'nuxt-schema-org'],
  schemaOrg: {
    identity: {
      type: 'Organization',
      name: 'Shark Technologies | Microsoft D365 F&O, Software Development, Cyber Security in Albania',
      url: 'https://shark-technologies.com',
      logo: '/default-social-image.png'
    }
  },
  site: {
    url: 'https://shark-technologies.com',
    name: 'Shark Technologies | Microsoft D365 F&O, Software Development, Cyber Security in Albania',
    routes: [
      '/', '/portfolio', '/contact', '/about', '/privacy-policy', '/terms-of-service',
    ]
  },
  robots: {
    sitemap: '/sitemap.xml',
    allow: ['/'],
  }
})
