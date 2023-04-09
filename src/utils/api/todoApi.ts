import { TodoType } from '../../@type/todo.type';

import client from './api';

async function getTodos({ accessToken }: { accessToken: string | null }): Promise<TodoType[]> {
  return client
    .get('/todos', { headers: { Authorization: `bearer ${accessToken}` } })
    .then((response) => {
      return response.data;
    });
}

export { getTodos };
