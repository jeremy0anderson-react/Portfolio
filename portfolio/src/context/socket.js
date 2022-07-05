import {io} from 'socket.io-client';
import {createContext} from "react";

export const socket=io("http://localhost:4000",{
    transports: ['websocket', 'polling'],
    autoConnect: false
});
export const SocketContext = createContext();