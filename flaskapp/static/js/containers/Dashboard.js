import React from 'react';

import DashboardMenu from '../components/DashboardMenu';

/*  Component DashboardContainer  */
export default class DashboardContainer extends React.Component {

  render() {

    return (
      <div className="dashboard">
       
		<div className="ui container">
			
			{/*  Dashboard Menu  */}
			<DashboardMenu/>

			{/*  Dashboard Contents  */}
			<div className="dashboard-inside">
				{this.props.children}
			</div>

		</div>

      </div>
    )
    
  }
}
