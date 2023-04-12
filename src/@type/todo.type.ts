export type TodoType = {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId?: number;
};

export type TodoUpdateType = {
  id: number;
  todo: string;
  isCompleted: boolean;
};

export type TodoListType = {
  todoList: TodoType[];
};
