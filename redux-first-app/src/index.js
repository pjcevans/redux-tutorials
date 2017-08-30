import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'
import { composeWithDevTools } from 'redux-devtools-extension';

// Create the store and enable the Chrome devtools extension
let store = createStore(todoApp, composeWithDevTools());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
