import React, { useEffect } from 'react'
import Messages from './messages'
import MessageInput from './message-input'
import { TiMessages } from "react-icons/ti";
import useConversation from '../../zustand/useConversation';
import { useChatContext } from '../../context/chats-context';

const MessageContainer = () => {
  const {selectedConversation ,setSelectedConversation} = useConversation();

  useEffect(() => {
    return () => setSelectedConversation(null)
  }, [setSelectedConversation])

  return (
    <div className='md:min-w-[450px] flex flex-col'>
      {!selectedConversation ? (
        <NoChatSelected />
      ):(
        <>
          {/* Header */}
            <div className='bg-slate-400 px-4 py-2 mb-2'>
            <span className='label-text'></span> <span className='text-gray-900 font-bold'>{selectedConversation.fullName}</span>
            </div>
          <Messages />
          <MessageInput />
        </>
      )
      }
    </div>
  )
}

export default MessageContainer


const NoChatSelected = () => {
  const {chatUser} = useChatContext();

	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋 {chatUser.fullName} ❄</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};
