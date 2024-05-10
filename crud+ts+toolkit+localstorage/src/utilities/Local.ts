import { Todo } from '../redux/todosSlice';

export const setTodos = (todo: Todo[]): void => {
  localStorage.setItem('todos', JSON.stringify(todo));
};

export const getTodos = (): Todo[] => {
  const tod = localStorage.getItem('todos');
  return tod ? JSON.parse(tod) : [];
};
