import React from 'react'
import Conversation from "./conversation";

const Conversations = () => {
  return (
    <div>
      <div className='py-2 flex flex-col overflow-auto'>
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
 		  </div>
    </div>
  )
}

export default Conversations
