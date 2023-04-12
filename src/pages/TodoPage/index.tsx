import React, { useEffect, useState } from 'react';
import { TodoUpdateType, TodoType } from '../../@type/todo.type';
import useAuth from '../../Auth/useAuth';
import TodoForm from '../../components/Todos/TodoForm';
import TodoList from '../../components/Todos/TodoList';
import { createTodos, deleteTodos, getTodos, putTodos } from '../../utils/api/todoApi';

import styles from './TodoPage.module.scss';

function TodoPage() {
  const [todoList, setTodoList] = useState<TodoType[]>([]);
  const [isLoding, setIsLoading] = useState<boolean>(false);
  const { accessToken } = useAuth();

  const fetchData = async () => {
    try {
      const data = await getTodos({ accessToken });
      setTodoList(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    fetchData();
    setIsLoading(false);
  }, []);

  const handleUpdate = async ({ id, todo, isCompleted }: TodoUpdateType) => {
    try {
      const newTodo = await putTodos({ id, todo, isCompleted, accessToken });

      const newTodoList = todoList.map((item) => {
        if (item.id === id) {
          return newTodo;
        }
        return item;
      });

      setTodoList(newTodoList);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async ({ id }: { id: number }) => {
    try {
      const response = await deleteTodos({ id, accessToken });

      if (response.status !== 204) {
        throw String('삭제 실패');
      }

      setTodoList((preState) => {
        return [...preState].filter((post) => {
          return post.id !== id;
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async ({ todo }: { todo: string }) => {
    try {
      const newTodo = await createTodos({ todo, accessToken });
      setTodoList((preState) => {
        return [...preState, newTodo];
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className={styles.main}>
      <TodoForm onSubmit={handleSubmit} />
      {isLoding ? null : (
        <TodoList todoList={todoList} onUpdate={handleUpdate} onDelete={handleDelete} />
      )}
    </main>
  );
}

export default TodoPage;
