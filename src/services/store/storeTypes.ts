export type State = {
  user?: User
  chats?: Chats
  currentChat?: CurrentChat
  messages?: Messages
  authorized: boolean
}

export type User = {
  id: number
  first_name: string
  second_name: string
  display_name: string
  login: string
  email: string
  phone: string
  avatar?: string
}

export type Chats = Chat[]

export type Chat = {
  id: number
  title: string
  avatar: string | null
  created_by: number
  unread_count: number
  last_message: LastMessage
}

export type LastMessage = {
  user: User
  time: string
  content: string
  id: number
}

export type CurrentChat = {
  chatId?: number | null
  users?: User[]
}

export type Messages = Message[]

export type Message = {
  isMine: boolean
  avatar?: string
  displayName?: string
  content: string
  time?: string
}
