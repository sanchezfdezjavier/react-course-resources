class Todo {
  // In vanilla javascript we won't have this attribute definition
  id: string;
  text: string;

  constructor(todoText: string) {
    this.id = new Date().toISOString();
    this.text = todoText;
  }
}

export default Todo;
