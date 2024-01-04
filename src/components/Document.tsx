import React from 'react';
import OrderButton from './OrderButton';

const Document = () => {
    return (
        <div className='px-2 pb-10 xl:px-48'>
            <h2 className='text-center py-10 text-5xl font-bold text-orange-700 px-2'>
                ৫০০০ এর অধিক বিক্রিত বই
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4  pb-10'>
                <img src="https://packagetwo.ogrogotioman.com/wp-content/uploads/2023/06/review.png" alt="review image" className='border-4 border-green-600' />
                <img src="https://packagetwo.ogrogotioman.com/wp-content/uploads/2023/06/review11.jpg" alt="" className='border-4 border-green-600' />
                <img src="https://packagetwo.ogrogotioman.com/wp-content/uploads/2023/06/review08.jpg" alt="" className='border-4 border-green-600' />
                <img src="https://packagetwo.ogrogotioman.com/wp-content/uploads/2023/06/review_03.png" alt="" className='border-4 border-green-600' />
                <img src="https://packagetwo.ogrogotioman.com/wp-content/uploads/2023/06/review09.jpg" alt="" className='border-4 border-green-600' />
                <img src="https://packagetwo.ogrogotioman.com/wp-content/uploads/2023/06/review_04.png" alt="" className='border-4 border-green-600' />
                <img src="https://packagetwo.ogrogotioman.com/wp-content/uploads/2023/06/review07.jpg" alt="" className='border-4 border-green-600' />
                <img src="https://packagetwo.ogrogotioman.com/wp-content/uploads/2023/06/review_2-2.png" alt="" className='border-4 border-green-600' />
            </div>
            <span className='flex items-center justify-center text-2xl text-slate-600 font-bold border-4 border-red-900 py-4'>
                স্টক শেষ হওয়ার আগেই অর্ডার করুন
            </span>
            <div className='py-20 flex items-center justify-center'>
            <OrderButton />
            </div>
        </div>
    )
}

export default Document;
