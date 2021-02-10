import React, { useState, useEffect } from 'react'
import { Overview, Start } from '../../pages/index'
import { Route, Switch } from 'react-router-dom'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

const useAuthUser = (props) => {
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

function App () {
  const user = useAuthUser()

  return (
    <div>
      <Switch>
        <Route path='/login' component={Start} />
        <Route
          path='/overview'
          render={(props) => (
            <Overview currentUser={user} />
          )}
        />
      </Switch>
    </div>
  )
}
export default App
