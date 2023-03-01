import {createVuetify} from "vuetify";
import {aliases, mdi} from 'vuetify/iconsets/mdi-svg'


export default defineNuxtPlugin((app) => {
	const vuetify = createVuetify({
		ssr: true,
		theme: {
			defaultTheme: 'light',
		},
		icons: {
			defaultSet: 'mdi',
			aliases,
			sets: {
				mdi,
			},
		},
	})
	app.vueApp.use(vuetify);
})