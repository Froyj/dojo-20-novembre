import React from 'react';
import UserList from '../components/UserList';
import { connect } from 'react-redux';

const UserListContainer = ({users}) => {
  return(
    <UserList users={users} />
  )
}

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps)(UserListContainer);