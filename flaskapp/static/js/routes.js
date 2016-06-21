import React from 'react';
import { IndexRoute, Route } from 'react-router';
import BaseComponent  from './components/BaseComponent';
import WelcomeComponent  from './components/WelcomeComponent';
import UserComponent  from './components/UserComponent';
import CarComponent  from './components/CarComponent';


/*  Routes  */
export const routes = (
  <Route path="/" component={BaseComponent} >
  	  <IndexRoute component={WelcomeComponent} /> 
	  <Route  path="/user" component={UserComponent} />
	  <Route  path="/car" component={CarComponent} /> 
  </Route>
);
