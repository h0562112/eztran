import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ... your configuration
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          dark: false,
          colors: {
            // background: '#FFFFFF',
            // surface: '#FFFFFF',
            primary: '#DB763E',
            subprimary: '#F69A67',
            orange: '#EC971F',
            // 'primary-darken-1': '#3700B3',
            secondary: '#4CA44B',
            // 'secondary-darken-1': '#018786',
            // error: '#B00020',
            info: '#067D41',
            // success: '#4CAF50',
            // warning: '#FB8C00',
          }
        }
      }
    }
  })
  app.vueApp.use(vuetify)
})