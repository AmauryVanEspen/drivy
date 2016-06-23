import React from 'react';

/*  Component UsersContainer  */
export default class UsersContainer extends React.Component {

  render() {

    return (
      <div className="dashboard">
		<div className="ui container">

				<div className="ui grid user-title">
					<div className="sixteen wide column">
						<p>profile d'Augustin F.</p>
					</div>
				</div>

				<div className="ui grid user-content">
					<div className="five wide column user-left">
						<div className="ui text container">
			          		<p>Augustin F.</p>
			        	</div>
					</div>
					<div className="one wide column"></div>
					<div className="ten wide column user-right">
						<div className="ui text container">
			          		<p>Encore aucune evaluation.</p>
			        	</div>
					</div>
				</div>

		</div>
      </div>
    )
    
  }
}
