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

export const updatePasswordService = async (payload: { password: string }) => {
  const { data } = await axios.put<ApiResponse<User>>(
    '/api/auth/password',
    payload,
  );

  return data;
};
