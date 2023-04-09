import React, { useState } from 'react';
import { TodoType } from '../../../@type/todo.type';
import Button from '../../UI/Button';
import styles from './TodoItem.module.scss';

type TodoItemProps = TodoType & {
  onEdit: ({ id }: { id: number }) => void;
  onDelete: ({ id }: { id: number }) => void;
};

function TodoItem({ id, todo, isCompleted, onEdit, onDelete }: TodoItemProps) {
  const [isChecked, setIsChecked] = useState(isCompleted);

  const handleChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const handleEditButtonClick = () => {
    onEdit({ id });
  };

  const handleDeletetButtonClick = () => {
    onDelete({ id });
  };

  return (
    <li className={styles.todo} data-todo-id={id}>
      <label className={styles.todo_label} htmlFor="todo-checkbox">
        <input id="todo-checkbox" type="checkbox" checked={isChecked} onChange={handleChecked} />
        <span>{todo}</span>
      </label>
      <Button
        className={styles.todo_button}
        onClick={handleEditButtonClick}
        data-testid="modify-button"
      >
        수정
      </Button>
      <Button
        className={styles.todo_button}
        onClick={handleDeletetButtonClick}
        data-testid="delete-button"
      >
        삭제
      </Button>
    </li>
  );
}

export default TodoItem;
