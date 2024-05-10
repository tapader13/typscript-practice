import React, { useContext } from 'react';
import { UserContext } from '../App';
import User from './User';

function Users() {
  const { user } = useContext(UserContext);
  return <div>{user && user.map((usr) => <User usr={usr} />)}</div>;
}

export default Users;
