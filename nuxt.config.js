// nuxt.config.js
export default {
  // Vuetify configuration
  buildModules: ['@nuxtjs/vuetify'],
  
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      themes: {
        light: {
          primary: '#ff6b00',
          secondary: '#424242',
          accent: '#ffd700',
        }
      }
    }
  },
  
  // Head configuration
  head: {
    title: 'StudyFellow - Z世代のためのAIノートアプリ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 
        hid: 'description', 
        name: 'description', 
        content: 'StudyFellowは、Z世代のための革新的なAI搭載ノートアプリです。手書きノートやPDFを一括管理し、AIがあなたの学習を効率化します。'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  }
}