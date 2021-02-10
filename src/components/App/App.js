import React, { useState, useEffect } from 'react'
import { Overview, Start } from '../../pages/index'
import { Route, Switch, Redirect } from 'react-router-dom'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'
import { setCurrentUser } from '../../redux/user/user.actions'
import { connect } from 'react-redux'

function App (props) {
  useEffect(() => {
    const { setCurrentUser } = props
    // no need for ref here
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        })
      } else {
        setCurrentUser(userAuth)
      }
    })

    return () => {
      unsubscribeFromAuth()
    }
  }, [])

  return (
    <div>
      <Switch>
        <Route
          path='/overview'
          render={() => (
            <Overview />
          )}
        />
        <Route exact path='/login' render={
          () => props.currentUser ? (<Redirect to='/overview' />) : (<Start />)
        }/>
      </Switch>
    </div>
  )
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
