import React from 'react';
import { Link } from 'react-router';


/*  Component RentContainer  */
export default class RentContainer extends React.Component {

  render() {

    return (
      <div>

      <div className="ui inverted vertical masthead center aligned segment drivy-grey">
      <div className="ui text container">
        <h1 className="ui inverted header">
          Louer sa voiture
        </h1>
        <h2>C'est simple, sur et sans engagement.</h2>
        <div className="ui huge primary button electrique">
          <Link to='/dashboard/cars'>J'inscris ma voiture</Link>
        </div>
      </div>
      </div>
      
      <div className="ui vertical stripe segment">
        <div className="ui text container">
          <h3 className="ui header">Complétez vos revenus en louant votre voiture.</h3>
        </div>
      </div>

      
      </div>
    )
    
  }
}
