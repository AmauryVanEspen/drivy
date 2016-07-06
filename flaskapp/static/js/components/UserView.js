import React from 'react'

export default class UserView extends React.Component {
    render() {
        return (
        	<div>
	            <div className="ui grid user-title">
						<div className="sixteen wide column">
							<p>profile .</p>
						</div>
				</div>
				<div className="ui grid user-content">
					<div className="five wide column user-left">
						<div className="ui text container">
			          		<p> Id : {this.props.Id}</p>
			          		<p> User : {this.props.User}</p>
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
        )
    }
}
