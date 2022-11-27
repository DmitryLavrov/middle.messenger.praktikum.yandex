export type Callback = () => void
// export type CallbackMessage = (message: string) => void
export type CallbackEvent = (event: Event) => void
// export type CallbackData = (data: MessageResponse | ConnectedResponse | LastMessageResponse[]) => void

export type MessageResponse = {
  id: string;
  time: string;
  user_id: string;
  content: string;
  type: 'message';
};

export type ConnectedResponse = {
  content: string;
  type: string;
};

export type LastMessageResponse = {
  chat_id: number;
  time: string;
  type: string;
  user_id: number;
  content: string;
  file?: {
    id: number;
    user_id: number;
    path: string;
    filename: string;
    content_type: string;
    content_size: number;
    upload_date: string;
  };
};
