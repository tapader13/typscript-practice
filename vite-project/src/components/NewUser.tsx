import React, { useContext, useState } from 'react';
import { UserContext } from '../App';

function NewUser() {
  const { user, setUser } = useContext(UserContext);
  const [title, setTitle] = useState('');
  const handleAdd = () => {
    if (title.trim() === '') {
      return;
    }
    const newUser = { id: Date.now(), name: title };
    setUser((ur) => [...ur, newUser]);
    setTitle('');
  };
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  return (
    <div>
      {' '}
      <input type='text' value={title} onChange={handleInput} />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default NewUser;
