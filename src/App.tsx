import React from 'react'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import './scss/App.scss'

import Auth from './pages/Auth/Auth'

function App() {

  return (
    <BrowserRouter>
      <div className="App wrapper">
        <Switch>
          <Route path={'/auth/:slug'} component={Auth}/>
          <Redirect to={'/auth/login'}/>
        </Switch>
      </div>
    </BrowserRouter>

  )
}

export default App