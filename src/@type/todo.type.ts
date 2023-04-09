export type TodoType = {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId?: number;
};

export type TodoListType = {
  todoList: TodoType[];
};
