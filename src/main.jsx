import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {Provider} from 'react-redux'
import store from './Components/StoreCounter'
import fatchStore from './FetchComponents/FetchStore'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={fatchStore}>
      <App />
    </Provider>
  </React.StrictMode>,
)
