import React from 'react';
import useInputs from '../../../hooks/useInputs';
import Button from '../../UI/Button';
import Input from '../../UI/Input';
import styles from './TodoForm.module.scss';

type TodoFormProps = {
  onSubmit: ({ todo }: { todo: string }) => void;
};

type contentType = {
  todo: string;
};

function TodoForm({ onSubmit }: TodoFormProps) {
  const [{ todo }, onChange] = useInputs<contentType>({ todo: '' });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(todo);
    onSubmit({ todo });
  };

  return (
    <form className={styles.todo_form} onSubmit={handleSubmit}>
      <Input
        value={todo}
        id="todo"
        name="todo"
        label="오늘의 할일"
        data-testid="new-todo-input"
        onChange={onChange}
      />
      <Button
        onClick={handleSubmit}
        className={styles.todo_form_button}
        data-testid="new-todo-add-button"
      >
        추가
      </Button>
    </form>
  );
}

export default TodoForm;
