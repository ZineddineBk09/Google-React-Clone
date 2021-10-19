import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { AppProvider } from './Glob_Context_API/context'
import { initialState, reducer } from './Glob_Context_API/reducer'
ReactDOM.render(
  <React.StrictMode>
    <AppProvider initialState={initialState} reducer={reducer}>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
