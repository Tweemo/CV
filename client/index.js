import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
// import { applyMiddleware, compose } from 'redux'
// import thunkMiddleware from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit'

import reducers from './reducers'
import App from './components/App'

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = configureStore({
  reducer: {
    reducers,
  },
})

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  )
})
