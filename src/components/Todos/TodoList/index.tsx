import React from 'react';
import { TodoListType } from '../../../@type/todo.type';
import TodoItem from '../TodoItem';
import styles from './TodoList.module.scss';

type TodoListProps = TodoListType & {
  onEdit: ({ id }: { id: number }) => void;
  onDelete: ({ id }: { id: number }) => void;
};

function TodoList({ todoList, onEdit, onDelete }: TodoListProps) {
  return (
    <ul className={styles.todo_list}>
      {todoList.map(({ id, todo, isCompleted }) => {
        return (
          <TodoItem
            onEdit={onEdit}
            onDelete={onDelete}
            key={id}
            id={id}
            todo={todo}
            isCompleted={isCompleted}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;
