import React from 'react'

const Order = () => {
    return (
        <div className='px-2 xl:px-48 bg-slate-200'>
            <p className='text-center text-3xl font-bold text-red-700 border-4 border-orange-600 py-4'>
                বিঃ দ্রঃ সম্পূর্ণ নিশ্চিত হয়ে অর্ডার করুন
            </p>
            <h3 className='text-center text-4xl font-bold py-10'>
                সমগ্র বাংলাদেশে হোম ডেলিভারী দেয়া হয়
            </h3>
            <div className='text-center bg-slate-700 text-white text-xl font-medium py-4'>
                <span >
                    ডেলিভারী চার্জ <br />
                    ঢাকার সিটির ভেতর ৭০ টাকা <br />
                    ঢাকার বাইরে ১২০ টাকা
                </span>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-16 py-10 sm:px-2'>
                <div>
                    <h3 className='text-base font-medium py-8'>Billing details</h3>
                    <form action="">
                        <label htmlFor="name" className='text-sm font-medium text-slate-700'>নাম *</label><br />
                        <input type="text" name="name" id="" placeholder='সম্পূর্ণ নাম লিখুন' className='border-2 border-slate-300 w-full p-2' /><br />
                        <label htmlFor="name" className='text-sm font-medium text-slate-700'>ফোন *</label><br />
                        <input type="" name="phone" id="" placeholder='সঠিক ফোন নম্বর লিখুন' className='border-2 border-slate-300 w-full p-2' /><br />
                        <label htmlFor="address" className='text-sm font-medium text-slate-700'>ঠিকানা *</label><br />
                        <input type="text" name="name" id="" placeholder='সম্পূর্ণ ঠিকানা  লিখুন' className='border-2 border-slate-300 w-full p-2' /><br />
                        <p className='pt-10 text-sm font-normal'>Country *</p>
                        <span className='text-base font-medium'>Bangladesh</span>
                    </form>
                </div>

                <div>
                    <h3 className='text-base font-medium py-8'>Your order</h3>
                    <div className='grid grid-cols-2 text-base font-medium py-4 border-b-2 border-dotted border-slate-400'>
                        <div><h4>Product</h4></div>
                        <div><h4>Subtotal</h4></div>
                    </div>
                    <div className='grid grid-cols-2 items-center text-sm font-medium text-slate-600 py-4 border-b-2 border-dotted border-slate-400'>
                        <div><span className='flex items-center'><img src="https://packagetwo.ogrogotioman.com/wp-content/uploads/2023/06/%E0%A6%B9%E0%A6%A4%E0%A6%BE%E0%A6%B6%E0%A6%BE-%E0%A6%9F%E0%A7%87%E0%A6%A8%E0%A6%B6%E0%A6%A8-%E0%A6%93-%E0%A6%AC%E0%A6%BF%E0%A6%B7%E0%A6%A3%E0%A7%8D%E0%A6%A3%E0%A6%A4%E0%A6%BE-%E0%A6%A8%E0%A6%BF%E0%A6%B0%E0%A6%B8%E0%A6%A8%E0%A7%87%E0%A6%B0-%E0%A6%AE%E0%A6%A8%E0%A7%8B%E0%A6%AC%E0%A7%88%E0%A6%9C%E0%A7%8D%E0%A6%9E%E0%A6%BE%E0%A6%A8%E0%A6%BF%E0%A6%95-%E0%A6%95%E0%A7%8C%E0%A6%B6%E0%A6%B2%E0%A6%B8%E0%A6%AE%E0%A7%82%E0%A6%B9-450x450.png" alt="" className='w-14' />
                            সাইকোলজি<br /> প্যাকেজ</span></div>
                        <div><div className='flex items-center gap-2'>
                            <div><p> × 1</p></div>
                            <div><p>৳ 620</p></div>
                        </div></div>
                    </div>
                    <div className='grid grid-cols-2 text-sm font-medium text-slate-600 py-4'>
                        <div><p>Subtotal</p></div>
                        <div><p >৳ 620</p></div>
                    </div>
                    <div className='grid grid-cols-2 items-center text-sm font-medium text-slate-600 py-4 border-b-2 border-dotted border-slate-400'>
                        <div><p>Shipping</p></div>
                        <div>
                            <div>
                                <div>
                                    <input type="checkbox" name="" id="" />
                                    <label htmlFor="">
                                        ঢাকার বাইরে: ৳ 120</label>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <input type="checkbox" name="" id="" />
                                    <label htmlFor="">
                                        ঢাকার ভেতরে: ৳ 70</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 text-base font-bold text-slate-800 py-4 pb-14'>
                        <div><h4>Total</h4></div>
                        <div><h4>৳ 740</h4></div>
                    </div>

                    <p className='pl-3 py-4 text-lg text-slate-700'>
                        ক্যাশ অন ডেলিভারি
                    </p>
                    <p className='pl-3 py-4 mb-4 text-base text-slate-700 bg-slate-300 w-full'>পন্য হাতে পেয়ে টাকা পরিশোধ করুন</p>
                    <p className='text-xs text-slate-600 tracking-wider py-6'>
                        Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
                    </p>
                    <button className='flex items-center justify-center bg-orange-600 text-white text-xl font-bold py-4 w-full'>অর্ডার করুন  ৳ 740</button>

                </div>
            </div>

        </div>
    )
}

export default Order;
