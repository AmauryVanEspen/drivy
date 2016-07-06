import React from 'react'

export default class WelcomePage extends React.Component {
    render() {

        return (
           <div>

            <div className="ui inverted vertical masthead center aligned segment drivy-grey">
              <div className="ui text container">
                <h1 className="ui inverted header">
                  Louez les voitures d'à côté.
                </h1>
                <h2>Moins cher, plus proche, plus pratique</h2>
                <div className="ui huge primary button electrique">Rechercher</div>
              </div>
            </div>

            <div className="ui vertical stripe segment">
              <div className="ui text container">
                <h3 className="ui header">Plus de 30 000 voitures et utilitaires de particuliers à louer partout en France</h3>
              </div>
            </div>

            </div>
        )
    }
}

 

