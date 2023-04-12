import React from 'react';
import { TodoListType, TodoUpdateType } from '../../../@type/todo.type';
import TodoItem from '../TodoItem';
import styles from './TodoList.module.scss';

type TodoListProps = TodoListType & {
  onUpdate: ({ id, isCompleted, todo }: TodoUpdateType) => Promise<void>;
  onDelete: ({ id }: { id: number }) => void;
};

function TodoList({ todoList, onUpdate, onDelete }: TodoListProps) {
  return (
    <ul className={styles.todo_list}>
      {todoList.map(({ id, todo, isCompleted }) => {
        return (
          <TodoItem
            onUpdate={onUpdate}
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
