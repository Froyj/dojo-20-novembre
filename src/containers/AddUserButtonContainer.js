import React, {Component} from 'react';
import {userAdd} from '../actions'
import {connect} from 'react-redux'

class AddUserButtonContainer extends Component {
  
  handleClick = () => {
    fetch('https://api.randomuser.me')
    .then(res => res.json())
    .then(({results}) => {
      const {first, last} = results[0].name;
      const {medium} = results[0].picture;
    this.props.addUser(first, medium)
    })
  }

  render() {
    return (
      <button type="button" onClick={this.handleClick} >add user</button>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addUser: (name, image) => dispatch(userAdd(name, image))
})

export default connect(
  null,
  mapDispatchToProps
  )(AddUserButtonContainer);

