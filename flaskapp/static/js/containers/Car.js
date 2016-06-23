import React from 'react';

/*  Component CarsContainer  */
export default class CarsContainer extends React.Component {

  render() {

    return (
      <div className="dashboard">
		<div className="ui container">

			
				<div className="ui grid car-title">
					<div className="column car-top">
							<p>photo du véhicule</p>
					</div>
				</div>

				<div className="ui grid car-content">
					<div className="ten wide column car-left">
						<p>description du véhicule</p>
					</div>
					<div className="one wide column">
					</div>

					<div className="five wide column car-right">
						<div className="row"> 
							<p>module de reservation</p>
						</div>
					</div>
				</div>

				<div className="ui grid user-content">
					<div className="ten wide column car-left">
						<p>conditions de location</p>
					</div>
				</div>

				<div className="ui grid user-content">
					<div className="ten wide column car-left">
						<p>emplacement du véhicule</p>
					</div>
				</div>

				<div className="ui grid user-content">
					<div className="ten wide column car-left">
						<p>évaluations du propriétaire</p>
					</div>
				</div>

				<div className="ui grid user-content">
					<div className="ten wide column car-left">
						<p>disponibilités</p>
					</div>
				</div>

		</div>
      </div>
    )
    
  }
}




