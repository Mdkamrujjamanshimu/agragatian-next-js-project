import React from 'react';
import Link from 'next/link';
import OrderButton from './OrderButton';

const Gallery = () => {
    return (
        <div className='px-2 '>
            <span className='flex items-center justify-center pb-10 text-4xl font-bold text-slate-500'>
                একটু পড়ে দেখুন
            </span>
            <div className='border-4 border-green-800'>
                <div className='py-10'>
                    <span className='flex items-center justify-center text-3xl font-semibold text-blue-500'>
                        পজেটিভ সাইকোলজি
                    </span>
                    <span className='flex items-center justify-center text-3xl font-semibold text-blue-500'>
                        (মোট ১৭৫ পৃষ্ঠা)
                    </span>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-5 xl:px-48 '>
                    <div>
                        <Link href="https://packagetwo.ogrogotioman.com/wp-content/uploads/2023/06/1-scaled-450x450.jpg">
                            <img src="https://packagetwo.ogrogotioman.com/wp-content/uploads/2023/06/1-scaled-450x450.jpg" alt="" className='h-60' />
                        </Link>
                        <p className='flex items-center justify-center'>পজেটিভ সাইকোলজি – ১</p>
                    </div>
                    <div>
                        <Link href="https://packagetwo.ogrogotioman.com/wp-content/uploads/2023/06/2-min-scaled-450x450.jpg">
                            <img src="https://packagetwo.ogrogotioman.com/wp-content/uploads/2023/06/2-min-scaled-450x450.jpg" alt="" className='h-60' /></Link>
                        <p className='flex items-center justify-center'>
                            পজেটিভ সাইকোলজি – ২
                        </p>
                    </div>
                    <div>
                        <Link href="https://packagetwo.ogrogotioman.com/wp-content/uploads/2023/06/3-min-scaled-450x450.jpg">
                            <img src="https://packagetwo.ogrogotioman.com/wp-content/uploads/2023/06/3-min-scaled-450x450.jpg" alt="" className='h-60' /></Link>
                        <p className='flex items-center justify-center'>
                            পজেটিভ সাইকোলজি – ৩
                        </p>
                    </div>
                    <div>
                        <Link href="https://packagetwo.ogrogotioman.com/wp-content/uploads/2023/06/4-min-scaled-450x450.jpg">
                            <img src="https://packagetwo.ogrogotioman.com/wp-content/uploads/2023/06/4-min-scaled-450x450.jpg" alt="" className='h-60' /></Link>
                        <p className='flex items-center justify-center'>
                            পজেটিভ সাইকোলজি – ৪
                        </p>
                    </div>
                    <div>
                        <Link href="https://packagetwo.ogrogotioman.com/wp-content/uploads/2023/06/5-min-scaled-450x450.jpg">
                            <img src="https://packagetwo.ogrogotioman.com/wp-content/uploads/2023/06/5-min-scaled-450x450.jpg" alt="" className='h-60' /></Link>
                        <p className='flex items-center justify-center'>
                            পজেটিভ সাইকোলজি – ৫
                        </p>
                    </div>
                </div>
            </div>

            <div className='border-4 border-blue-800'>
                <div className='py-10'>
                    <span className='flex items-center justify-center text-3xl font-semibold text-blue-500'>
                        ব্যাক্তিত্ব ও আত্ন-মর্যাদাবোধ
                    </span>
                    <span className='flex items-center justify-center text-3xl font-semibold text-blue-500'>
                        (মোট ১৫৮ পৃষ্ঠা)
                    </span>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-5 xl:px-48 '>
                    <div>
                        <Link href="https://packagetwo.ogrogotioman.com/wp-content/uploads/2023/06/1-min-scaled-450x450.jpg">
                            <img src="https://packagetwo.ogrogotioman.com/wp-content/uploads/2023/06/1-min-scaled-450x450.jpg" alt="" className='h-60' /></Link>
                        <p className='flex items-center justify-center'>
                            ব্যাক্তিত্ব ও আত্ন-মর্যাদাবোধ – ১
                        </p>
                    </div>
                    <div>
                        <Link href="https://packagetwo.ogrogotioman.com/wp-content/uploads/2023/06/2-min-1-scaled-450x450.jpg">
                            <img src="https://packagetwo.ogrogotioman.com/wp-content/uploads/2023/06/2-min-1-scaled-450x450.jpg" alt="" className='h-60' /></Link>
                        <p className='flex items-center justify-center'>
                            ব্যাক্তিত্ব ও আত্ন-মর্যাদাবোধ – ২
                        </p>
                    </div>
                    <div>
                        <Link href="https://packagetwo.ogrogotioman.com/wp-content/uploads/2023/06/3-min-1-scaled-450x450.jpg">
                            <img src="https://packagetwo.ogrogotioman.com/wp-content/uploads/2023/06/3-min-1-scaled-450x450.jpg" alt="" className='h-60' /></Link>
                        <p className='flex items-center justify-center'>
                            ব্যাক্তিত্ব ও আত্ন-মর্যাদাবোধ – ৩
                        </p>
                    </div>
                    <div>
                        <Link href="https://packagetwo.ogrogotioman.com/wp-content/uploads/2023/06/4-min-1-scaled-450x450.jpg">
                            <img src="https://packagetwo.ogrogotioman.com/wp-content/uploads/2023/06/4-min-1-scaled-450x450.jpg" alt="" className='h-60' /></Link>
                        <p className='flex items-center justify-center'>
                            ব্যাক্তিত্ব ও আত্ন-মর্যাদাবোধ – ৪
                        </p>
                    </div>
                    <div>
                        <Link href="https://packagetwo.ogrogotioman.com/wp-content/uploads/2023/06/5-min-1-scaled-450x450.jpg">
                            <img src="https://packagetwo.ogrogotioman.com/wp-content/uploads/2023/06/5-min-1-scaled-450x450.jpg" alt="" className='h-60' /></Link>
                        <p className='flex items-center justify-center'>
                            ব্যাক্তিত্ব ও আত্ন-মর্যাদাবোধ – ৫
                        </p>
                    </div>
                </div>
            </div>

            <div className='border-4 border-green-400'>
                <div className='py-10'>
                    <span className='flex items-center justify-center text-3xl font-semibold text-blue-500'>
                        মনের সুখ মনের অসুখ
                    </span>
                    <span className='flex items-center justify-center text-3xl font-semibold text-blue-500'>
                        (মোট ১২৮ পৃষ্ঠা)
                    </span>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-5 xl:px-48 '>
                    <div>
                        <Link href="https://packagetwo.ogrogotioman.com/wp-content/uploads/2023/06/1-min-1-scaled-450x450.jpg">
                            <img src="https://packagetwo.ogrogotioman.com/wp-content/uploads/2023/06/1-min-1-scaled-450x450.jpg" alt="" className='h-60' /></Link>
                        <p className='flex items-center justify-center'>
                            মনের সুখ মনের অসুখ – ১
                        </p>
                    </div>
                    <div>
                        <Link href="https://packagetwo.ogrogotioman.com/wp-content/uploads/2023/06/2-min-2-scaled.jpg">
                            <img src="https://packagetwo.ogrogotioman.com/wp-content/uploads/2023/06/2-min-2-scaled.jpg" alt="" className='h-60' /></Link>
                        <p className='flex items-center justify-center'>
                            মনের সুখ মনের অসুখ – ২
                        </p>
                    </div>
                    <div>
                        <Link href="https://packagetwo.ogrogotioman.com/wp-content/uploads/2023/06/3-min-2-scaled-450x450.jpg">
                            <img src="https://packagetwo.ogrogotioman.com/wp-content/uploads/2023/06/3-min-2-scaled-450x450.jpg" alt="" className='h-60' />
                        </Link>
                        <p className='flex items-center justify-center'>
                            মনের সুখ মনের অসুখ – ৩
                        </p>
                    </div>
                    <div>
                        <Link href="https://packagetwo.ogrogotioman.com/wp-content/uploads/2023/06/4-min-2-scaled.jpg">
                            <img src="https://packagetwo.ogrogotioman.com/wp-content/uploads/2023/06/4-min-2-scaled.jpg" alt="" className='h-60' /></Link>
                        <p className='flex items-center justify-center'>
                            মনের সুখ মনের অসুখ – ৪
                        </p>
                    </div>
                    <div>
                        <Link href="https://packagetwo.ogrogotioman.com/wp-content/uploads/2023/06/5-min-2-scaled.jpg">
                            <img src="https://packagetwo.ogrogotioman.com/wp-content/uploads/2023/06/5-min-2-scaled.jpg" alt="" className='h-60' />
                        </Link>
                        <p className='flex items-center justify-center'>
                            মনের সুখ মনের অসুখ – ৫
                        </p>
                    </div>
                </div>
            </div>

            <div className='py-20 flex items-center justify-center'>
                <OrderButton />
            </div>

        </div>
    )
}

export default Gallery;
