import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import MomentUtils from '@date-io/moment'
import green from '@material-ui/core/colors/green'
import { Provider } from 'react-redux'

import { App } from './components/index'

import store from './redux/store'

export const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: {
      main: '#f48fb1'
    }
  },
  props: {
    // Name of the component ⚛️
    MuiButtonBase: {
      // The properties to apply
      // disableRipple: true // No more ripple, on the whole application 💣!
    }
  }
})

ReactDOM.render(
    <Provider store={store}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
      <ThemeProvider theme={theme}>
        <Router>
          <Route path="/:filter?" component={App} />
        </Router>
      </ThemeProvider>
      </MuiPickersUtilsProvider>
    </Provider>, document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
