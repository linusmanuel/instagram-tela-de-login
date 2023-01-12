import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js'

const handleIfNoCredentials = () => {
  const errorMessage = `No Firebase credentials found. Please create a  file named "environment.json" in the root of  your project and add your Firebase credentials to it.`
  alert(errorMessage)
  console.error(errorMessage)
  throw new Error(errorMessage)
}

const REQUIRED_KEYS = [
  'apiKey',
  'authDomain',
  'projectId',
  'storageBucket',
  'messagingSenderId',
  'appId',
  'measurementId',
]
Object.freeze(REQUIRED_KEYS)

const getFirebaseCredentials = async (
  filename = 'environment.json',
  _handleIfNoCredentials = handleIfNoCredentials,
) => {
  const credentialsResponse = await fetch(filename)
  const credentials = await credentialsResponse.json()
  const hasValidCredentials = REQUIRED_KEYS.every(key => credentials[key])
  !hasValidCredentials && _handleIfNoCredentials()
  return credentials
}

getFirebaseCredentials().then(initializeApp)
