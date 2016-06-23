
import React from 'react';
import { IndexRoute, Route } from 'react-router';

import BaseContainer  from './containers/Base';
import WelcomeContainer  from './containers/Welcome';
import RentContainer  from './containers/Rent';
import AuthContainer  from './containers/Auth';
import DashboardContainer  from './containers/Dashboard';
import SearchContainer  from './containers/Search';
import UsersContainer  from './containers/User';
import CarsContainer  from './containers/Car';
import NoMatchContainer  from './containers/NoMatch';

import Rentals  from './components/Rentals';
import Profile  from './components/Profile';
import Payments  from './components/Payments';
import Cars  from './components/Cars';

/*  Routes  */
export const routes = (
  <Route path="/" component={BaseContainer} >
  	  {/*   Main   */}
  	  <IndexRoute component={WelcomeContainer} /> 
  	  <Route  path="rent_your_car" component={RentContainer} />
  	  {/*   Dashboard   */}
      <Route  path="dashboard" component={DashboardContainer} >
        <IndexRoute component={Profile} /> 
    	  <Route path="rentals" component={Rentals}/>
        <Route  path="rental/:carId" component={Rentals} />
        <Route  path="rental/all" component={Rentals} />
        <Route  path="rental/rent" component={Rentals} />
        <Route  path="cars" component={Cars} />
        <Route  path="cars/new" component={Cars} />
        <Route  path="cars/:carId" component={Cars} />
        <Route  path="cars/:carId/edit" component={Cars} />
        <Route  path="payments" component={Payments} />
        <Route  path="profile" component={Profile} />
        <Route  path="profile/edit" component={Profile} />
        <Route  path="account_settings" component={Profile} />
      </Route>
      {/*   Search   */}
      <Route  path="/search" component={SearchContainer} />
      {/*   Cars   */}
      <Route  path="/cars/:carId" component={CarsContainer} />
  	  {/*   Users   */}
  	  <Route  path="/users/:userId" component={UsersContainer} />
      {/*   Auth   
      <Route  path="auth">
        <Route  path="login" component={AuthContainer} />
        <Route  path="logout" component={AuthContainer} />
        <Route  path="register" component={AuthContainer} />
      </Route>
      */}
      <Route path="*" component={NoMatchContainer}/>
  </Route>
);
