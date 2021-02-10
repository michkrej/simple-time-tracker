import { SignIn } from '../components/index'

import { signInWithGoogle } from '../firebase/firebase.utils'


const StartPage = () => {
  return (
    <div>
      <title>Simple Time Tracker</title>
      <SignIn signInWithGoogle={signInWithGoogle} />;
    </div>
  )

}

export default StartPage