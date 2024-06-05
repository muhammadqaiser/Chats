import { useChatContext } from "../../context/chats-context";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";
import { useEffect, useState } from "react";

const Message = ({ message }) => {
    const { chatUser } = useChatContext();
    const { selectedConversation } = useConversation();
    const fromMe = message.senderId === chatUser._id;
    const formattedTime = extractTime(message.createdAt);
    const chatClassName = fromMe ? "chat-end" : "chat-start";
    const profilePic = fromMe ? chatUser.profilePic : selectedConversation?.profilePic;

    const [selectedTheme, setSelectedTheme] = useState("1");

    useEffect(() => {
        const savedTheme = localStorage.getItem('selectedTheme');
        if (savedTheme) {
            setSelectedTheme(savedTheme);
        }
    }, []);

    const getBubbleBgColor = () => {
        if (!fromMe) return "";
        switch (selectedTheme) {
            case "1":
                return "bg-blue-500";
            case "2":
                return "bg-green-800";
            case "3":
                return "bg-gradient-to-r from-blue-500 via-purple-500 to-red-500";
            default:
                return "bg-blue-500";
        }
    };

    const bubbleBgColor = getBubbleBgColor();
    const shakeClass = message.shouldShake ? "shake" : "";

    return (
        <div className={`chat ${chatClassName}`}>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img alt='Tailwind CSS chat bubble component' src={profilePic} />
                </div>
            </div>
            <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}>{message.message}</div>
            <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formattedTime}</div>
        </div>
    );
};
export default Message;
