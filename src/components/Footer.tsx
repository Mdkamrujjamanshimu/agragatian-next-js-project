import React from 'react'
import Link from 'next/link';

const Footer = () => {
    return (
        <div className='bg-emerald-600 text-center py-6'>
            <div className='flex items-center justify-center'>
                <img src="https://packagetwo.ogrogotioman.com/wp-content/uploads/2023/06/Untitled-design-150x150.png" alt="logo" className='' />

            </div>
            <div>
                <Link href="/privacy">
                    <span className='text-white text-base font-semibold underline decoration-1'>Privacy Policy</span><br /><br />
                </Link>
                <Link href="/term">
                    <span className='text-white text-base font-semibold underline decoration-1'>Terms & Conditions</span>
                </Link>
            </div>
        </div>
    )
}

export default Footer;
