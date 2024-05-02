// store
class TodoStorePriorityQueue {
  constructor(values) {
    if (!Array.isArray(values)) throw new Error('Expected Array');
    this.todoStore = values;
  }
  add(todoItem) {
    this.todoStore.push(todoItem);
    this.bubbleUp();
  }
  remove(id) {
    let elementIndex = this.todoStore.findIndex((todo) => todo.id === id);
    if (elementIndex < 0) return undefined;
    if (this.todoStore.length === 1) {
      this.todoStore.pop();
      return true;
    }
    this.todoStore[elementIndex] = this.todoStore.pop();
    while (elementIndex < this.todoStore.length) {
      let child1Index = elementIndex * 2 + 1;
      let child2Index = elementIndex * 2 + 2;
      let child1 = null;
      let child2 = null;
      let max = null;
      if (child1Index >= this.todoStore.length) {
        break;
      }
      child1 = this.todoStore[child1Index];
      max = child1Index;
      if (child2Index < this.todoStore.length) {
        child2 = this.todoStore[child2Index];
      }
      if (child2 !== null && child2.priorityValue < child1.priorityValue) {
        max = child2Index;
      }
      if (
        this.todoStore[max].priorityValue >
        this.todoStore[elementIndex].priorityValue
      ) {
        break;
      }
      let temp = this.todoStore[max];
      this.todoStore[max] = this.todoStore[elementIndex];
      this.todoStore[elementIndex] = temp;
      elementIndex = max;
    }
    return true;
  }
  bubbleUp() {
    let currentTodo = this.todoStore[this.todoStore.length - 1];
    let currentTodoIndex = this.todoStore.length - 1;

    while (currentTodoIndex > 0) {
      let parentTodoIndex = Math.floor((currentTodoIndex - 1) / 2);
      let parentTodo = this.todoStore[parentTodoIndex];

      if (currentTodo.priorityValue >= parentTodo.priorityValue) break;
      this.todoStore[parentTodoIndex] = this.todoStore[currentTodoIndex];
      this.todoStore[currentTodoIndex] = parentTodo;
      currentTodoIndex = parentTodoIndex;
    }
  }
  get length() {
    return this.todoStore.length;
  }
  get data() {
    return this.todoStore;
  }
}
export default TodoStorePriorityQueue;

// [10,8,6,5,4,2,1]
