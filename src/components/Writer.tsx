import React from 'react'

const Writer = () => {
    return (
        <div>
            <span className='flex items-center justify-center pb-10 text-5xl font-bold text-slate-600'>
                লেখক পরিচিতি
            </span>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-7 px-2 xl:px-48 pb-2'>
                <div>
                    <img src="https://packagetwo.ogrogotioman.com/wp-content/uploads/2023/06/70407734_1627577940711843_1215443657067331584_n.jpg" alt="writer" />
                </div>
                <div>
                    <p className='text-xl tracking-wide text-slate-700'>
                        অধ্যাপক ডা. মোঃ তাজুল ইসলাম (কাজল) একজন সাইকিয়াট্রিস্ট (মনোরোগ বিশেষজ্ঞ)। জন্ম চাঁদপুর জেলার মতলব থানাধীন পশ্চিম বাইশপুর(বালুচর) গ্রামে। তিনি মতলবগঞ্জ হাইস্কুল থেকে এসএসসি এবং চট্টগ্রাম মেডিকেল কলেজ থেকে এমবিবিএস পাশ করেন। ১৯৯২ সালে সাইকিয়াট্রিতে উচ্চতর এফসিপিএস ডিগ্রি অর্জন করেন। এরপর বিশেষজ্ঞ চিকিৎসক হিসেবে ঢাকা মেডিকেল কলেজ হাসপাতাল, মিটফোর্ড হাসপাতালে কর্মরত ছিলেন। মানসিক রোগের ও চিকিৎসা বিষয়ে উচ্চতর প্রশিক্ষনের জন্য হু-এর ফেলোশিপ অর্জন করেন ব্যাংকক, থাইল্যান্ড থেকে। পরবর্তী সময় জাইকা ফেলোশিপ পান জাপান থেকে। প্রথম আলোসহ জাতীয় দৈনিক পত্রিকাগুলোতে তিনি সম-সাময়িক সামাজিক ইস্যু ও মানসিক স্বাস্থ্য বিষয়ক কলাম লিখে থাকেন। তিনি নিয়মিত টিভি-টকশোতে অংশ নিয়ে থাকেন। বর্তমানে তিনি জাতীয় মানসিক স্বাস্থ্য ইন্সটিটিউটে অধ্যাপক হিসেবে কর্মরত আছেন।
                    </p>
                </div>
            </div>
            <span className='flex items-center justify-center text-3xl font-bold text-slate-500 py-6'>
                ! ! ! ৮০০ টাকার বই<br />
                মাত্র ৬২০ টাকায় ! ! !
            </span>
            <span className='flex items-center justify-center text-3xl font-bold text-slate-600 pb-10'>
                *অফার সীমিত সময়ের জন্য*
            </span>
        </div>
    )
}

export default Writer;
