import React from 'react';

import TopMenu from '../components/TopMenu';
import Footer from '../components/Footer';

/*  Component BaseContainer  */
export default class BaseContainer extends React.Component {

  render() {

    return (
      <div>

	    {/*  Menu  */}
		<TopMenu/>

		{/*  Page Contents  */}
		<div className="pusher">
			{this.props.children}
		</div>

		{/*  Footer */}
		<Footer/>

	</div>
    )
    
  }
}
