import {createVuetify} from "vuetify";
import {aliases, mdi} from 'vuetify/iconsets/mdi-svg'
import "@mdi/font/css/materialdesignicons.css";


export default defineNuxtPlugin((app) => {
	const vuetify = createVuetify({
		ssr: true,
		theme: {
			defaultTheme: 'light',
		},
		icons: {
			defaultSet: 'mdi'
		},
	})
	app.vueApp.use(vuetify);
})