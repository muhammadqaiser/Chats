import React from 'react'
import Conversation from "./conversation";
import useGetConversations from '../../hooks/useGetConversations';

const Conversations = () => {
  const {loading, conversations} = useGetConversations();

   // Sort conversations alphabetically by name
    const sortedConversations = [...conversations].sort((a, b) => a.fullName.localeCompare(b.fullName));

  return (
      <div className='py-2 flex flex-col overflow-auto'>
        
        {sortedConversations.map((conversation,idx) => (
        <Conversation
            key={conversation._id}
            conversation={conversation}
            lastIdx={idx === sortedConversations.length - 1}
        />
        ))}

        {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
      </div>
  )
}

export default Conversations
