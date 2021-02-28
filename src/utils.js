import { useState, useEffect } from 'react'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

export function isMobileDevice () {
  return (typeof window.orientation !== 'undefined') || (navigator.userAgent.indexOf('IEMobile') !== -1)
};

export const useAuthUser = (props) => {
  const [currentUser, setUser] = useState(null)

  useEffect(() => {
    // no need for ref here
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapshot => {
          setUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        })
      } else {
        setUser(userAuth)
      }
    })

    return () => {
      unsubscribeFromAuth()
    }
  }, [])

  useEffect(() => console.log(currentUser), [currentUser])

  return currentUser // return authenticated user
}

export const generateID = () => {
  return '_' + Math.random().toString(36).substr(2, 9);
}