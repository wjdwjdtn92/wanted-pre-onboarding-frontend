import { TodoType } from '../../@type/todo.type';

import client from './api';

type headerType = {
  accessToken?: string | null;
};

type createTodoRequestType = headerType & {
  todo: string;
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

export { getTodos, createTodos };
