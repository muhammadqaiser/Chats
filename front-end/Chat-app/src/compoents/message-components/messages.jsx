import React, { useEffect,useRef } from 'react'
import Message from './message'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../skeletons/messageSkeleton'

const Messages = () => {
  const {messages, loading} = useGetMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({behaviour: "smooth"});
    },100)
  },[messages]);

  return (
    <div className='px-4 flex-1 overflow-auto'>
          {!loading && 
            messages.length > 0 &&
            messages.map((message)=>(
              <div key={message._id}
                ref={lastMessageRef}
                >
                  <Message message={message} />
                </div>
            ))}
      
      {loading && [...Array(5)].map((_, idx) => <MessageSkeleton key={idx}/>)}
      {!loading && messages.length === 0 && (
        <div className='flex items-center justify-center w-full h-full'>
        <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
        <p className='text-center '>Send a message to start the conversation</p>
        </div>
      </div>
      )}
    </div>
  )
}

export default Messages
