import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Welcome from '../src/pages/Welcome'
import Timer from '../src/pages/Timer'

export default function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Welcome} />
        <Route path='/Timer' exact component={Timer} />
      </Switch>
    </BrowserRouter>
  )
}