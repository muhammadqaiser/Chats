import { useEffect, useState, useContext } from "react";
import { useSocketContext } from "../../context/socketcontext";
import useConversation from "../../zustand/useConversation";
import { useChatContext } from "../../context/chats-context"; // Import the ChatContext

const Conversation = ({ conversation, lastIdx }) => {
    const { selectedConversation, setSelectedConversation } = useConversation();
    const isSelected = selectedConversation?._id === conversation._id;

    const { onlineUsers } = useSocketContext();
    const isOnline = onlineUsers.includes(conversation._id);

    const [selectedTheme, setSelectedTheme] = useState("1");
    const { chatUser } = useChatContext(); // Get the chatUser from ChatContext

    useEffect(() => {
        const savedTheme = localStorage.getItem('selectedTheme');
        if (savedTheme) {
            setSelectedTheme(savedTheme);
        }

        return () => {
            // Clear theme data from localStorage if chatUser is null (user logged out)
            if (!chatUser) {
                localStorage.removeItem('selectedTheme');
            }
        };
    }, [chatUser]); // Listen for changes in chatUser

    const getConversationClass = () => {
        switch (selectedTheme) {
            case "1":
                return "bg-sky-500 text-white";
            case "2":
                return "bg-green-900 text-white";
            case "3":
                return "bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 text-white";
            default:
                return "bg-sky-500 text-white";
        }
    };

    return (
        <>
            <div
                className={`flex gap-3 items-center hover:${getConversationClass()} rounded px-2 py-1 cursor-pointer ${isSelected ? getConversationClass() : ""}`}
                onClick={() => setSelectedConversation(conversation)}
            >
                <div className={`avatar ${isOnline ? "online" : ""}`}>
                    <div className='w-12 rounded-full'>
                        <img
                            src={conversation.profilePic}
                            alt='user avatar'
                        />
                    </div>
                </div>
                <div className='flex flex-col flex-1'>
                    <div className='flex gap-3 justify-between'>
                        <p className='font-bold text-gray-200'>{conversation.fullName}</p>
                    </div>
                </div>
            </div>
            {!lastIdx && <div className='divider my-0 py-0 h-1' />}
        </>
    );
};

export default Conversation;
