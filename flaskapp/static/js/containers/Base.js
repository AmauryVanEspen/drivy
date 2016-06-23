import React from 'react';
import { Link } from 'react-router';

/*  Component BaseContainer  */
export default class BaseContainer extends React.Component {

  render() {

    return (
      <div>

	    {/*  Menu  */}
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


		{/*  Page Contents  */}
		<div className="pusher">
			{this.props.children}
		</div>

		{/*  Footer */}
		<div className="ui inverted vertical footer segment drivy-grey">
		<div className="ui container">
		  <div className="ui stackable inverted equal height stackable grid">
		    
		    <div className="five wide column">
		      <h4 className="ui inverted header">A propos</h4>
		      <p>Drivy vous permet de louer une voiture parmi les milliers qui sont garées près de vous. Louez moins cher et plus rapidement.
		Si vous possédez un véhicule, mettez le en location pour qu’il paie ses factures tout seul. Nous sommes là pour que la confiance règne, en assurant les locations et en veillant à leur bon déroulement.</p>
		    </div>

		    <div className="three wide column">
		      <h4 className="ui inverted header">Découvrir</h4>
		      <div className="ui inverted link list">
		        <a href="#" className="item">Assurance</a>
		        <a href="#" className="item">Contrat de location</a>
		        <a href="#" className="item">Professionnels</a>
		        <a href="#" className="item">Applis mobile</a>
		        <a href="#" className="item">Bons plans</a>
		      </div>
		    </div>

		    <div className="three wide column">
		      <h4 className="ui inverted header">Aide</h4>
		      <div className="ui inverted link list">
		        <a href="#" className="item">Accueil de l'aide</a>
		        <a href="#" className="item">Aide locataire</a>
		        <a href="#" className="item">Aide propriétaire</a>
		        <a href="#" className="item">Contact</a>
		      </div>
		    </div>

		    <div className="three wide column">
		      <h4 className="ui inverted header">Nous suivre</h4>
		      <div className="ui inverted link list">
		        <a href="#" className="item">Facebook</a>
		        <a href="#" className="item">Twitter</a>
		        <a href="#" className="item">Instagram</a>
		        <a href="#" className="item">Blog</a>
		      </div>
		    </div>

		    <div className="two wide column">
		      <h4 className="ui inverted header">Partenaires</h4>
		      <div className="ui inverted link list">
		        <a href="#" className="item">Allianz</a>
		        <a href="#" className="item">BlaBlaCar</a>
		      </div>
		    </div>

		  </div>
		</div>
		</div>

	</div>
    )
    
  }
}
