import React from 'react';
import { FaCheckCircle } from "react-icons/fa";

const about = () => {
    return (
        <div>
            <h2 className='text-center pb-10 text-4xl text-slate-700 font-bold'>
                কেন এই বইগুলো আপনার দরকার?
            </h2>
            <div className=' items-center justify-center grid grid-cols-1 md:grid-cols-2 px-2 xl:px-48 gap-5'>
                <div>
                    <ul className='text-lg font-medium pb-5'>
                        <li className='flex items-center gap-2'>
                            <FaCheckCircle className="text-green-600" />
                            ঘনিষ্ঠ সম্পর্কে পারস্পরিক দ্বন্দ্ব নিরসনের উপায়
                        </li>
                        <li className='flex items-center gap-2 pb-2'>
                            <FaCheckCircle className="text-green-600" />
                            প্রফুল্ল ও আনন্দদায়ক মন-মেজাজ গঠনে সক্ষম হওয়া
                        </li>
                        <li className='flex items-center gap-2 pb-2'>
                            <FaCheckCircle className="text-green-600" />
                            বিপর্যয়ের পর দ্রুত ঘুরে দাঁড়ানো
                        </li>
                        <li className='flex items-center gap-2 pb-2'>
                            <FaCheckCircle className="text-green-600" />
                            ব্যর্থতা ও হতাশার মুখে আশাবাদী মনোভাব টিকিয়ে রাখা
                        </li>
                        <li className='flex items-center gap-2 pb-2'>
                            <FaCheckCircle className="text-green-600" />
                            মনোযোগ নেতিবাচক থেকে ইতিবাচকের দিকে ঘুরিয়ে দেয়া
                        </li>
                        <li className='flex items-center gap-2 pb-2'>
                            <FaCheckCircle className="text-green-600" />
                            সুখ না সফলতা কোনটা দরকার
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className='text-lg font-medium pb-5'>
                        <li className='flex items-center gap-2 pb-2'>
                            <FaCheckCircle className="text-green-600" />
                            আত্ন-মর্যাদা কিভাবে পরিমাপ করবেন?
                        </li>
                        <li className='flex items-center gap-2 pb-2'>
                            <FaCheckCircle className="text-green-600" />
                            নিজেকে যে কোন চ্যালেঞ্জের সম্মুখীন করা
                        </li>
                        <li className='flex items-center gap-2 pb-2'>
                            <FaCheckCircle className="text-green-600" />
                            ইতিবাচক ও আত্ন-মর্যাদাবোধকে চাঙা রাখার ১০টি সহজ উপায়
                        </li>
                        <li className='flex items-center gap-2 pb-2'>
                            <FaCheckCircle className="text-green-600" />
                            ভিন্নভাবে চিন্তা করা
                        </li>
                        <li className='flex items-center gap-2 pb-2'>
                            <FaCheckCircle className="text-green-600" />
                            বংশ নয়, পরিবেশ কিভাবে মানুষকে তৈরি করে
                        </li>
                        <li className='flex items-center gap-2 pb-2'>
                            <FaCheckCircle className="text-green-600" />
                            ইগো ও গর্ববোধের মধ্যে পার্থক্য জানার উপকারিতা
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default about;

