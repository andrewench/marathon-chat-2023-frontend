import { io } from 'socket.io-client'

export const SocketService = io(process.env.NEXT_PUBLIC_SOCKET_URL as string, {
  autoConnect: false,
})
