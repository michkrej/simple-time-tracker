import React from 'react'
import { SignIn } from '../components/index'

import { signInWithGoogle } from '../firebase/firebase.utils'

const LoginPage = () => {
  return (
    <div>
      <title>Simple Time Tracker</title>
      <SignIn signInWithGoogle={signInWithGoogle} />
    </div>
  )
}

export default LoginPage
