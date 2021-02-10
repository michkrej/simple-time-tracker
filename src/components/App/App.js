import React, { useState, useEffect } from 'react'
import { Overview, Start } from '../../pages/index'
import { Route, Switch } from 'react-router-dom'

import { auth } from '../../firebase/firebase.utils'
import PrivateRoute from '../../utils/PrivateRoute'
import { ContactsOutlined } from '@material-ui/icons'

const useAuthUser = (props) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    // no need for ref here
    const unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setUser(user)
      console.log(user)
    })

    return () => {
      unsubscribeFromAuth()
    }
  }, [])

  return user // return authenticated user
}

function App () {

  const [user, setUser] = useState(null)

  useEffect(() => {
    // no need for ref here
    const unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setUser(user)
    })

    return () => {
      unsubscribeFromAuth()
    }
  }, [])

  console.log(user)

  return (
    <div>
      <Switch>
        <Route path='/login' component={Start} />
        <PrivateRoute
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
