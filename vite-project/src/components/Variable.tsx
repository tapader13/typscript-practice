import React, { useState } from 'react';

function Variable() {
  const [name, setName] = useState('');
  const [age, setAge] = useState<number>();
  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAge(Number(e.target.value));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ name, age });
  };
  return (
    <div>
      <form action='' onSubmit={handleSubmit}>
        <input type='text' value={name} onChange={handleName} />
        <input type='number' value={age} onChange={handleAge} />
        <button type='submit'>Result</button>
      </form>
    </div>
  );
}

export default Variable;
