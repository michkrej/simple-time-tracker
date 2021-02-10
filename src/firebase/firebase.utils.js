import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyAJLNRMI4-ArucfdGOFjddRuSGrYxfXqLo',
  authDomain: 'simple-time-tracker-2284e.firebaseapp.com',
  projectId: 'simple-time-tracker-2284e',
  storageBucket: 'simple-time-tracker-2284e.appspot.com',
  messagingSenderId: '269689453723',
  appId: '1:269689453723:web:05dc1bf4b6e7426b379a3e'
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
