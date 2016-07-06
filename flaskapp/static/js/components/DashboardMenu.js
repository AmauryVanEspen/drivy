import React from 'react'
import { Link } from 'react-router';


export default class DashboardMenu extends React.Component {
    render() {
        return (
            <div className="ui four item stackable tabs menu">
				<Link className="item" activeClassName="active" to='/dashboard/rentals'>Mes locations</Link>
				<Link className="item" activeClassName="active" to='/dashboard/cars'>Mes voitures</Link>
				<Link className="item" activeClassName="active" to='/dashboard/payments'>Mes paiments</Link>
				<Link className="item" activeClassName="active" to='/dashboard/profile'>Mon compte</Link>
			</div>
        )
    }
}
