import Link from 'next/link'
import React from 'react'

const Verify = () => {
  return (
    <div className='text-[#25324b] px-[450px] py-40 flex flex-col justify-center items-center'>
        <p className='font-semibold text-4xl mb-8'>Verify Email</p>
        <p className='mb-20'>We've sent a verification code to the email address you provided. To complete the verification process, please enter the code here.</p>
        <div className='w-full'>
            <div className='mb-12'>
                <div className='flex gap-9 mb-14'>
                    <div className='border w-20 h-14'></div>
                    <div className='border w-20 h-14'></div>
                    <div className='border w-20 h-14'></div>
                    <div className='border w-20 h-14'></div>

                </div>
                <p>You can request to <span className='text-[#4640de]'><Link href="">Resend code</Link></span> in </p>
                <p className='text-[#4640de] '>0:30</p>
            </div>
            <button className="py-3 px-7 bg-[#3430af4c] w-full rounded-3xl text-white">
            Continue
          </button>
        </div>
    </div>
  )
}

export default Verify