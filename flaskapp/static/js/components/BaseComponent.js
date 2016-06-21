import React from 'react';

/*  Component BaseComponent  */
export default class BaseComponent extends React.Component {

  render() {

    return (
      <div>
        <div>Base Component</div>
        <div> {this.props.children} </div>
      </div>
    )
    
  }
}
