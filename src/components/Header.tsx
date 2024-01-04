import React from 'react';
import CustomButton from './CustomButton';

const header = () => {
    return (
        <div>
            <div className='text-center py-10 '>
                <h2 className='text-slate-400 text-4xl font-medium'>আর নয় দুশ্চিন্তা !</h2><br />
                <h1 className='text-slate-500 text-5xl font-medium'>আর নয় অস্থিরতা !</h1>
            </div>
            <div className='flex items-center justify-center px-2 xl:px-48'>
                <iframe className='w-full aspect-video' src="https://www.youtube.com/embed/VJ4AWvijoMk" title="প্রফেসর তাজুল ইসলাম স্যার লিখিত মানসিক সমস্যা নিরসনে চমৎকার ৩ টি বই" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className='flex items-center justify-center py-20'>
            <CustomButton/>
            </div>
        </div>
    )
}

export default header;
