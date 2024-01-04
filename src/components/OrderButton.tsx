"use client"
import React, { useState } from 'react'

const OrderButton = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(!isHovered);
    };

  return (
    <button
            className='p-5 bg-purple-950 rounded-full text-white text-xl font-bold ease-in-out duration-1000'
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
        >
            {isHovered ? 'কল 01317348428 অথবা ক্লিক করুন' : 'বইগুলো অর্ডার করতে চাই'}
        </button>
  )
}

export default OrderButton;
