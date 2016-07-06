import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as UserActions from '../actions/user'
import UserView from '../components/UserView';


class UserContainer extends React.Component {

  componentWillMount() {
      this.props.actions.fetchUser(this.props.params.userId);
  }

  render() {

    return (
      <div className="dashboard">
  		  <div className="ui container">
  			 <UserView User={this.props.User} Id = {this.props.params.userId} />	
  		  </div>
      </div>
    )
    
  }
}


function mapStateToProps(state) {
    return {
        User: state.User,
        currentUser: state.currentUser
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(UserActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)

