import { TodoUpdateType, TodoType } from '../../@type/todo.type';

import client from './api';

type headerType = {
  accessToken?: string | null;
};

type createTodoRequestType = headerType & {
  todo: string;
};

type patchTodoRequestType = headerType &
  TodoUpdateType & {
    id: number;
  };

type deleteTodoRequestType = headerType & {
  id: number;
};

async function getTodos({ accessToken }: headerType): Promise<TodoType[]> {
  return client
    .get('/todos', { headers: { Authorization: `Bearer ${accessToken}` } })
    .then((response) => {
      return response.data;
    });
}

async function createTodos({ todo, accessToken }: createTodoRequestType) {
  return client
    .post('/todos', { todo }, { headers: { Authorization: `Bearer ${accessToken}` } })
    .then((response) => {
      return response.data;
    });
}

async function putTodos({ id, todo, isCompleted, accessToken }: patchTodoRequestType) {
  return client
    .put(
      `/todos/${id}`,
      { todo, isCompleted },
      { headers: { Authorization: `Bearer ${accessToken}` } },
    )
    .then((response) => {
      return response.data;
    });
}

async function deleteTodos({ id, accessToken }: deleteTodoRequestType) {
  return client.delete(`/todos/${id}`, { headers: { Authorization: `Bearer ${accessToken}` } });
}

export { getTodos, createTodos, deleteTodos, putTodos };
