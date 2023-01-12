import './initialize-firebase.js'
import {
  getAuth,
  signInWithPopup,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js'
import { emitter } from './emitter.js'
import { events } from './consts.js'

const emitAuthEvents = auth => {
  auth
    .then(emitter.emit(events['AUTH-SUCCESS']))
    .catch(emitter.emit(events['AUTH-FAILURE']))
}

export const loginWith = provider => {
  const selectedProvider = {
    facebook: new FacebookAuthProvider(),
    google: new GoogleAuthProvider(),
  }[provider]
  emitAuthEvents(signInWithPopup(getAuth(), selectedProvider))
}

export const customLogin = ({ email, password }) => {
  emitAuthEvents(signInWithEmailAndPassword(getAuth(), email, password))
}
