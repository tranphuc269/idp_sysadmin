import attributes from './attributes'
import messages from './messages'
import login from './login'
import dialog from './dialog'
import common from './common'
import vuetify from './vuetify'

export { attributes, common, login, messages }

export default {
  attributes,
  app: {
    title: 'IDP system admin',
  },
  common,
  login,
  messages,
  $vuetify: vuetify,
  $dialog: dialog,
}
