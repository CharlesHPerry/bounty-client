import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Bounties from './pages/Bounties';
import NewBounty from './pages/NewBounty'

export default function Content() { 
  
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/bounties" component={Bounties} />
        {/*ToDO: add new bounty page */}
        <Route path="/bounties/add" component={NewBounty} />
      </Switch>
    </main>
  )
}