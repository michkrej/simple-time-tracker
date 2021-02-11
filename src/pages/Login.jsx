import React from 'react'
import { Footer, SignIn } from '../components/index'

import { signInWithGoogle } from '../firebase/firebase.utils'
import { containerStyle } from './contants'

const LoginPage = () => {
  return (
    <div className={containerStyle().root}>
      <SignIn signInWithGoogle={signInWithGoogle} />
      <Footer />
    </div>
  )
}

export default LoginPage
