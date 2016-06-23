import React from 'react'

export default class Rentals extends React.Component {
    render() {

        return (
                <div className="ui vertical stripe segment">
			        <div className="ui text container">
			          <p>Vous n'avez effectué encore aucune location.</p>
			          <div className="ui huge primary button electrique">Trouver une voiture</div>
			        </div>
			    </div>
        )
    }
}
