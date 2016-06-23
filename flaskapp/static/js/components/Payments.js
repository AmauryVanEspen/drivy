import React from 'react'

export default class Payments extends React.Component {
    render() {

        return (
                <div className="ui vertical stripe segment">
			        <div className="ui text container">
			          <p>Vous n'avez effectué encore aucune location.</p>
			          <div className="ui huge primary button electrique">Louer une voiture</div>
			        </div>
			    </div>
        )
    }
}
