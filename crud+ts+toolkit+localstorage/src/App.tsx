import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Tod from './component/Tod';
import { Todo, addTodo, selectTodos } from './redux/todosSlice';
import { useEffect, useState } from 'react';
import { setTodos } from './utilities/Local';

function App() {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();
  const [title, setTitle] = useState<Todo['title']>('');

  const handleADD = () => {
    dispatch(addTodo(title));

    setTitle('');
  };
  useEffect(() => {
    setTodos(todos);
  }, [todos]);
  return (
    <>
      <div>
        <h1 style={{ textAlign: 'center' }}>Todo App</h1>
        <input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={handleADD}>ADD</button>
      </div>
      {todos && todos.map((todo, i) => <Tod key={i} todo={todo} />)}
    </>
  );
}

export default App;
