import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import './styles/main.scss'
import { App } from './components/index'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import green from '@material-ui/core/colors/green'

const theme = createMuiTheme({
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
      disableRipple: true // No more ripple, on the whole application 💣!
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Router>
          <Route path="/:filter?" component={App} />
        </Router>
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
