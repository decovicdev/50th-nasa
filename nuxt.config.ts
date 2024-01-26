// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ["@tresjs/nuxt", "@nuxtjs/tailwindcss"],
	css: ["~/assets/css/main.css"],

	// imports: {
	// 	autoImport: false,
	// },
});
