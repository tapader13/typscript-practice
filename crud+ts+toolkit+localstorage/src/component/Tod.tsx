import React, { useState } from 'react';
import {
  Todo,
  checkboxUpdate,
  deleteTodo,
  editTodoTitle,
  selectTodos,
} from '../redux/todosSlice';
import { useDispatch, useSelector } from 'react-redux';
type propType = {
  todo: Todo;
};
const Tod = (props: propType) => {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const [edit, setEdit] = useState<boolean>(false);
  const [editTitle, setEditTitle] = useState<Todo['title']>(props.todo.title);
  const handleDelete = (id: Todo['id']) => {
    dispatch(deleteTodo(id));
  };
  const handleEdit = (id: Todo['id']) => {
    // dispatch(deleteTodo(id));
    setEdit((prev) => !prev);
  };
  const handleSave = (id: Todo['id']) => {
    dispatch(editTodoTitle({ id: id, title: editTitle }));
    setEdit(false);
  };
  const handleCheckbox = (id: Todo['id'], isComplete: Todo['isComplete']) => {
    dispatch(
      checkboxUpdate({
        id: id,
        isComplete: !isComplete,
      })
    );
  };
  return (
    <div style={{ display: 'flex' }}>
      <input
        checked={props.todo.isComplete}
        type='checkbox'
        name=''
        id=''
        onChange={() => handleCheckbox(props.todo.id, props.todo.isComplete)}
      />
      {edit ? (
        <input
          type='text'
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
        />
      ) : (
        <h3>{props.todo.title}</h3>
      )}

      {edit ? (
        <button onClick={() => handleSave(props.todo.id)}>Save</button>
      ) : (
        <button onClick={() => handleEdit(props.todo.id)}>Edit</button>
      )}

      <button onClick={() => handleDelete(props.todo.id)}>Delete</button>
    </div>
  );
};

export default Tod;
