import { observable } from 'mobx';

const todoStore = observable({
  todos: ['ddd', 'dfkkj'],
  addTodo(item) {
    this.todos.push(item);
  }
});

export default todoStore;