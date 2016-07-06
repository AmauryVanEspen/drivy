import React from 'react'
import { Link } from 'react-router';

export default class TopMenu extends React.Component {
    render() {
        return (
            <div className="ui  menu">
			    <div className="ui container">
				    <Link className="header item" to='/'>drivy</Link>
				    <div className="right menu">
					    <div className="ui simple dropdown item">
					        Moi 
					        <i className="dropdown icon"></i>
					        <div className="menu">
					          <Link className="item" to='/dashboard/rentals'>Mes locations</Link>
					          <Link className="item" to='/dashboard/cars'>Mes voitures</Link>
					          <Link className="item" to='/dashboard/payments'>Mes paiements</Link>
					          <Link className="item" to='/dashboard/profile'>Mon compte</Link>
					          <div className="divider"></div>
					          <Link className="item" to='/auth/logout'>Se deconnecter</Link>
					        </div>
					    </div>
				   		<Link className="item" to='/rent_your_car'>Louer</Link>
				  	</div>
			  	</div>
			</div>	
        )
    }
}
