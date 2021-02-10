import React, { useState, useEffect } from 'react'
import { Overview, Start } from '../../pages/index'
import { Route, Switch } from 'react-router-dom'
import { isMobileDevice } from '../../utils'

import { auth } from '../../firebase/firebase.utils'

function App () {
  const [currentUser, setUser] = useState(null)

  const isMobile = isMobileDevice()

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setUser(user)

      console.log(user)
    })
  }, [])

  return (
    <div>
      <Switch>
        <Route exact path='/' component={Start} />
        <Route path='/overview' component={Overview} />
      </Switch>
    </div>
  )
}
export default App
