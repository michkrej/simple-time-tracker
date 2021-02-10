import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom'

export default class PrivateRoute extends Component {
  render() {
    const { render, ...rest } = this.props

    return (
      <Route
        {...rest}
        render={(props) =>
          this.props.loggedIn ? (
            <React.Fragment>
              {render(props)}
            </React.Fragment>
          )
            : !this.props.loading ? ( // Makes sure that login verifications is done before redirect
              <Redirect
                to={{
                  pathname: '/login',
                  state: { from: this.props.location }
                }}
              />
            )
              : null // Meaning we render nothing while 'logging in'
        }
      />

    )
  }
}
