import React, { useState } from "react";
import EmojiPicker from 'emoji-picker-react';

const EmojiButton = ({ onSelect }) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const toggleEmojiPicker = () => {
    setShowEmojiPicker((prevState) => !prevState);
  };

  const handleEmojiSelect = (emoji) => {
    onSelect(emoji);
    toggleEmojiPicker();
  };

  return (
    <div>
      <button onClick={toggleEmojiPicker}>
        <span role="img" aria-label="emoji">
          😀
        </span>
      </button>
      {showEmojiPicker && (
        <EmojiPicker onEmojiClick={handleEmojiSelect} disableSearchBar />
      )}
    </div>
  );
};

export default EmojiButton;
