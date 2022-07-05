import {io} from 'socket.io-client';
import {createContext} from "react";

export const socket=io("https://react-port-final.herokuapp.com/",{
    transports: ['websocket', 'polling'],
    autoConnect: false
});
export const SocketContext = createContext();