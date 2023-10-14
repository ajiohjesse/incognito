import axios from 'axios';

interface User {
  _id: string;
  userName: string;
}

interface AuthPayload {
  userName: string;
  password: string;
}

export const loginService = async (payload: AuthPayload) => {
  const { data } = await axios.post<ApiResponse<User>>(
    '/api/auth/login',
    payload,
  );

  return data;
};

export const registerService = async (payload: AuthPayload) => {
  const { data } = await axios.post<ApiResponse<User>>(
    '/api/auth/register',
    payload,
  );

  return data;
};
