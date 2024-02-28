import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './App'
import './TwitterFollowCard.css'
import './main.css'
import { MenuLateral } from './MenuLateral'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="main">
    <div className="menuLateral">
      <MenuLateral />
    </div>
    <div className="home">

    </div>
    <div className="aside">
      <App />
    </div>
  </div>
)
