import { AuthCredentials } from '../../@type/auth.type';
import client from './api';

type SignupResponse = {
  status: number;
};

type SigninResponse = {
  access_token: string;
};

async function signup({ email, password }: AuthCredentials): Promise<SignupResponse> {
  return client.post(
    '/auth/signup',
    { email, password },
    { headers: { 'Content-Type': 'application/json' } },
  );
}

async function signin({ email, password }: AuthCredentials): Promise<SigninResponse> {
  return client.post('/auth/signin', { email, password }).then((response) => {
    return response.data;
  });
}

export { signup, signin };
