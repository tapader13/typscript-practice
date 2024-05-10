import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { getTodos } from '../utilities/Local';

// Define a type for the todo object
export interface Todo {
  id: string;
  title: string;
  isComplete: boolean;
}

// Define the initial state
const initialState: Todo[] = getTodos();

// Create a slice
const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    // Add a new todo
    addTodo: (state, action: PayloadAction<Todo['title']>) => {
      const newTodo: Todo = {
        id: String(Date.now()),
        title: action.payload,
        isComplete: false,
      };
      state.push(newTodo);
    },
    deleteTodo: (state, action: PayloadAction<Todo['id']>) => {
      const todo = state.findIndex((todo) => todo.id === action.payload);
      state.splice(todo, 1);
    },
    editTodoTitle: (
      state,
      action: PayloadAction<{ id: Todo['id']; title: Todo['title'] }>
    ) => {
      const todo = state.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.title = action.payload.title;
      }
    },
    checkboxUpdate: (
      state,
      action: PayloadAction<{ id: Todo['id']; isComplete: Todo['isComplete'] }>
    ) => {
      const todo = state.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.isComplete = action.payload.isComplete;
      }
    },
    // Add other reducers as needed
  },
});

// Export actions and reducer
export const { addTodo, deleteTodo, editTodoTitle, checkboxUpdate } =
  todoSlice.actions;
export const selectTodos = (state: RootState) => state.todos;
export default todoSlice.reducer;
