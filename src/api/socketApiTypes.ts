export type Callback = () => void
export type CallbackEvent = (event: Event) => void

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
