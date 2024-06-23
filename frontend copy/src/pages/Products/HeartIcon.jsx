import React, { useState } from 'react';

const HeartIcon = () => {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  return (
    <span className="  absolute top-3 right-4">
      <button onClick={handleLikeClick} className="">
        <span>{liked? <i class="fa fa-heart  text-red-600 "></i> : '🤍'}</span>
      </button>
    </span>
  );
};

export default HeartIcon;