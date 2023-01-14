import { facebookBtn, loginForm, getFieldsValues } from './dom-controls-helpers.js'
import { loginWith, customLogin } from './authentication.js'
import { Providers, events } from './consts.js'
import { emitter } from './emitter.js'

loginForm.onsubmit = event => {
  event.preventDefault()
  const [email, password] = getFieldsValues(loginForm, ['username', 'password'])
  customLogin({ email, password })
}
facebookBtn.onclick = () => loginWith(Providers['facebook'])
emitter.on(events['AUTH-FAILURE'], alert)
emitter.on(events['AUTH-SUCCESS'], ({ user: { displayName, email } }) => {
  alert(`You are logged in as ${displayName} - (${email})`)
})
