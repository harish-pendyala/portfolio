import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './Styles/index.css'
import registerServiceWorker from './Utils/registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

registerServiceWorker()