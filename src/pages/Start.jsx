import { SignIn } from '../components/index'

import { signInWithGoogle } from '../firebase/firebase.utils'


const StartPage = () => {
  return (
    <SignIn signInWithGoogle={signInWithGoogle} />
  )

}

export default StartPage