import React, { useContext, useState } from 'react';
import { UserContext } from '../App';
type userType = {
  usr: {
    id: number;
    name: string;
  };
};
const User = (props: userType) => {
  const { user, setUser } = useContext(UserContext);

  const handleDelete = (id: number) => {
    const result = user.filter((ur) => ur.id !== id);
    setUser(result);
  };

  return (
    <div>
      <div>
        {' '}
        <p>{props.usr.id}</p>
        <p>{props.usr.name}</p>
        <button
          onClick={() => {
            handleDelete(props.usr.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default User;
