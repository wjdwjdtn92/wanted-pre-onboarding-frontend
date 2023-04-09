import React, { useEffect, useState } from 'react';
import { TodoType } from '../../@type/todo.type';
import useAuth from '../../Auth/useAuth';
import TodoList from '../../components/Todos/TodoList';
import { getTodos } from '../../utils/api/todoApi';

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

  const handleEdit = ({ id }: { id: number }) => {
    console.log(id);
  };

  const handleDelete = ({ id }: { id: number }) => {
    console.log(id);
  };

  return isLoding ? null : (
    <TodoList todoList={todoList} onEdit={handleEdit} onDelete={handleDelete} />
  );
}

export default TodoPage;
