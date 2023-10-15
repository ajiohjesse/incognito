export interface SingleMessagePayload {
  reciever: string;
  message: string;
}

export interface ThreadMessagePayload {
  sender: string;
  reciever: string;
  message: string;
}
