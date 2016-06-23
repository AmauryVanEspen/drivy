import React from 'react';
import { Link } from 'react-router';

/*  Component DashboardContainer  */
export default class DashboardContainer extends React.Component {

  render() {

    return (
      <div className="dashboard">
       
		<div className="ui container">
			
			<div className="ui four item stackable tabs menu">
				<Link className="item" activeClassName="active" to='/dashboard/rentals'>Mes locations</Link>
				<Link className="item" activeClassName="active" to='/dashboard/cars'>Mes voitures</Link>
				<Link className="item" activeClassName="active" to='/dashboard/payments'>Mes paiments</Link>
				<Link className="item" activeClassName="active" to='/dashboard/profile'>Mon compte</Link>
			</div>

			{/*  Dashboard Contents  */}
			<div className="dashboard-inside">
				{this.props.children}
			</div>
		</div>

      </div>
    )
    
  }
}
