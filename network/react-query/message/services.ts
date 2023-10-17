import axios from 'axios';
import {
  SingleMessagePayload,
  ThreadMessagePayload,
  ThreadMessagesResponse,
} from './types';

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

export const getSingleMessages = async () => {
  const { data } = await axios.get<ApiResponse<SingleMessage[]>>(
    '/api/single-message',
  );

  return data.data;
};

export const getThreads = async () => {
  const { data } = await axios.get<ApiResponse<Thread[]>>(
    '/api/thread-message',
  );

  return data.data;
};

export const getThreadMessages = async (threadId: string) => {
  const { data } = await axios.get<ApiResponse<ThreadMessagesResponse>>(
    `/api/thread-message/${threadId}`,
  );

  return data.data;
};
