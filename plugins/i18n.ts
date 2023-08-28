import { Context } from '@nuxt/types/app'

export default function ({ app, $vuetify, $dayjs, $axios }: Context) {
  $vuetify.lang.current = app.i18n.locale
  $dayjs.locale(app.i18n.locale || 'en')
  app.i18n.onLanguageSwitched = (_, locale) => {
    $dayjs.locale(locale || 'en')
    $vuetify.lang.current = locale || 'en'
    $axios.setHeader('Accept-Language', app.i18n.locale || 'en')
  }
}
