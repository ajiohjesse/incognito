import axios from 'axios';
import { LoginPayload } from './types';

export const loginService = async (payload: LoginPayload) => {
  const { data } = await axios.post<ApiResponse>('/api/auth/login', payload);

  return data;
};
