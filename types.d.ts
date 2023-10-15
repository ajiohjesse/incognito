type ApiResponse<T = any, E = any> =
  | {
      success: true;
      message: string;
      data: T;
      error: null;
    }
  | {
      success: false;
      message: string;
      data: null;
      error: E;
    };

interface SingleMessage {
  reciever: string;
  message: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
}

interface ThreadMessage {
  sender: string;
  reciever: string;
  threadId: string;
  message: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
}

interface Thread {
  _id: string;
  participants: [string, string];
  createdAt: string;
  updatedAt: string;
}
