import axios from 'axios';
import { LoginPayload } from './types';

interface User {
  _id: string;
  userId: string;
}

export const loginService = async (payload: LoginPayload) => {
  const { data } = await axios.post<ApiResponse<User>>(
    '/api/auth/login',
    payload,
  );

  return data;
};
