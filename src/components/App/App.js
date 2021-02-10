import React, { useState, useEffect } from 'react'
import { Overview, Start } from '../../pages/index'
import { Route, Switch } from 'react-router-dom'

import { useAuthUser } from '../../utils'

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
