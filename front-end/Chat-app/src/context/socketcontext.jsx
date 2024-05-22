import {createContext, useContext, useEffect, useState } from "react";
import {useChatContext } from "./chats-context";
import io from "socket.io-client";

export const SocketContext = createContext();

export const useSocketContext = () => {
    return useContext(SocketContext);
} ;

export const SocketContextProvider = ({children}) => {
    const [socket,setSocket] = useState(null);
    const [onlineUsers,setOnlineUsers] = useState([]);
    const {chatUser} = useChatContext;

    useEffect(() => {
        if(chatUser){
            const socket = io("http://localhost:5000",{
                query:{
                    userId: chatUser._id,
                },
            });

            setSocket(socket);

            socket.on("getOnlineUsers", (users) => {
                setOnlineUsers(users);
            })


            return () =>socket.close();
        }else{
            if(socket){
                socket.close();
                setSocket(null);
            }
        }
    },[chatUser]);

    return <SocketContext.Provider value={{socket,onlineUsers}}>{children}</SocketContext.Provider>;
}