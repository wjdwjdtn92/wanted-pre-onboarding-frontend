const validatePassword = ({ password }: { password: string }) => {
  if (password.length < 8) {
    return false;
  }

  return true;
};

const validateEmail = ({ email }: { email: string }) => {
  if (!email.includes('@')) {
    return false;
  }

  return true;
};

export { validatePassword, validateEmail };
