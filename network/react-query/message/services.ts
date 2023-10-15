import axios from 'axios';
import { SingleMessagePayload, ThreadMessagePayload } from './types';

export const sendSingleMessage = async (payload: SingleMessagePayload) => {
  const { data } = await axios.post<ApiResponse<SingleMessage>>(
    '/api/single-message',
    payload,
  );

  return data;
};

export const sendThreadMessage = async (payload: ThreadMessagePayload) => {
  const { data } = await axios.post<ApiResponse<ThreadMessage>>(
    '/api/thread-message',
    payload,
  );

  return data;
};
