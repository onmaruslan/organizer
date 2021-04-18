import React from 'react'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import './scss/App.scss'
import Auth from './pages/Auth/Auth'
import {useTypedSelector} from './hooks/useTypedSelector'

import Home from './pages/Home/Home'

function App() {
  const user = useTypedSelector(state => state.auth.user)

  return (
    <BrowserRouter>
      <div className="App wrapper">

        {(user)
          ? (
            <Switch>
              <Route path={'/'} exact component={Home}/>
              <Redirect to={'/'}/>
            </Switch>
          )
          : (
            <Switch>
              <Route path={'/auth/:slug'} component={Auth}/>
              <Redirect to={'/auth/login'}/>
            </Switch>
          )}

      </div>
    </BrowserRouter>

  )
}

export default App