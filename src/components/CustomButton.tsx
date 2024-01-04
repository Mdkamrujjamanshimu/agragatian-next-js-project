"use client"
import React, { useState } from 'react'

const CustomButton = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(!isHovered);
    };

    return (
        <button
            className='p-5 bg-orange-600 rounded-full text-white text-xl font-bold ease-in-out duration-1000'
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
        >
            {isHovered ? 'ক্লিক করুন ' : 'একটু পড়ে দেখতে চাই'}
        </button>
    );
};

export default CustomButton;
