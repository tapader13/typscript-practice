import './style.css';

const form = document.getElementById('form') as HTMLFormElement;
const input = document.getElementById('input') as HTMLInputElement;
const button = document.getElementById('button') as HTMLButtonElement;
const app1 = document.getElementById('app1') as HTMLElement;
type Todo = {
  title: string;
  isCompleted: boolean;
  id: string;
};
const todos: Todo[] = [];
form.onsubmit = (e) => {
  e.preventDefault();
  const todo: Todo = {
    title: input.value,
    isCompleted: false,
    id: String(Math.random() * 100),
  };
  todos.push(todo);
  input.value = '';
  renderTodos(todos);
  console.log(todos);
};
const renderTodos = (todos: Todo[]) => {
  app1.innerText = '';
  todos.forEach((val) => generateTodo(val.id, val.title, val.isCompleted));
};
const generateTodo = (id: string, title: string, isCompleted: boolean) => {
  const div = document.createElement('div');
  div.className = 'test';
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.checked = isCompleted;
  // console.log(checkbox.checked + 'gh');
  checkbox.onchange = () => {
    todos.find((tod) => {
      if (tod.id === id) {
        // console.log(tod.isCompleted + 'yu');
        tod.isCompleted = checkbox.checked;
      }
    });
  };
  const p = document.createElement('p');
  p.textContent = title;
  const btnCrs: HTMLButtonElement = document.createElement('button');
  btnCrs.innerText = 'X';
  btnCrs.onclick = () => {
    deleteOprt(id);
  };
  div.append(checkbox, p, btnCrs);
  app1.append(div);
};
const deleteOprt = (id: string) => {
  const index = todos.findIndex((item) => item.id === id);
  todos.splice(index, 1);
  renderTodos(todos);
};
