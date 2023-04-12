import React, { useState } from 'react';
import { TodoUpdateType, TodoType } from '../../../@type/todo.type';
import Button from '../../UI/Button';
import Input from '../../UI/Input';
import styles from './TodoItem.module.scss';

export type TodoItemProps = TodoType & {
  onUpdate: ({ id, isCompleted, todo }: TodoUpdateType) => Promise<void>;
  onDelete: ({ id }: { id: number }) => void;
};

function TodoItem({ id, todo, isCompleted, onUpdate, onDelete }: TodoItemProps) {
  const [isChecked, setIsChecked] = useState(isCompleted);
  const [isEdit, setIsEdit] = useState(false);
  const [editTodo, setEditTodo] = useState(todo);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTodo = event.target.value;
    setEditTodo(newTodo);
  };

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleDelete = () => {
    onDelete({ id });
  };

  const handleSubmit = () => {
    onUpdate({ id, todo: editTodo, isCompleted: isChecked });
    setIsEdit(false);
  };

  const handleCancle = () => {
    setEditTodo(todo);
    setIsEdit(false);
  };

  const handleChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target;
    onUpdate({ id, todo: editTodo, isCompleted: !checked });

    setIsChecked((preSate) => {
      return !preSate;
    });
  };

  return (
    <li className={styles.todo} data-todo-id={id}>
      <label className={styles.todo_label} htmlFor={`todo-checkbox-${id}`}>
        <input
          id={`todo-checkbox-${id}`}
          type="checkbox"
          checked={isChecked}
          onChange={handleChecked}
        />
        {isEdit ? (
          <Input name="content" type="text" value={editTodo} onChange={handleChange} />
        ) : (
          <span>{todo}</span>
        )}
      </label>
      {isEdit ? (
        <>
          <Button className={styles.todo_button} onClick={handleSubmit} data-testid="submit-button">
            제출
          </Button>
          <Button className={styles.todo_button} onClick={handleCancle} data-testid="cancel-button">
            취소
          </Button>
        </>
      ) : (
        <>
          <Button className={styles.todo_button} onClick={handleEdit} data-testid="modify-button">
            수정
          </Button>
          <Button className={styles.todo_button} onClick={handleDelete} data-testid="delete-button">
            삭제
          </Button>
        </>
      )}
    </li>
  );
}

export default TodoItem;
