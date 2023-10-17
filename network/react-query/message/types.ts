export interface SingleMessagePayload {
  receiver: string;
  message: string;
}

export interface ThreadMessagePayload {
  sender: string;
  receiver: string;
  message: string;
  threadId?: string;
}

export interface ThreadMessagesResponse {
  thread: Thread;
  messages: ThreadMessage[];
}
