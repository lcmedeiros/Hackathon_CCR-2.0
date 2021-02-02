import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './Pages/Logon';
import RegisterMentor from './Pages/Register/mentor';
import RegisterPerson from './Pages/Register/person';
import Profile from './Pages/Profile';


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/register/mentor" component={RegisterMentor} />
        <Route path="/register/person" component={RegisterPerson} />

        <Route path="/profile" component={Profile} />
        
      </Switch>
    </BrowserRouter>
  );
}