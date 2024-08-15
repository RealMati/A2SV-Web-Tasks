"use client"
import Link from 'next/link'
import React from 'react'
import Input from '../Input'
import { useForm } from 'react-hook-form';

export interface LoginForm {
    name: string;
    email: string;
    password: string;
    confirmPass: string;
  }
  

const Login = () => {
    const { register, handleSubmit, formState } = useForm<LoginForm>();
    const { errors } = formState;
  return (
    
    <main className="px-[450px] py-8 text-[#25324b] flex flex-col h-full justify-center">
        <h1 className="font-extrabold text-4xl mb-7 text-center">Welcome Back,</h1>
      
        <div className="flex items-center gap-48 mb-4">
          <div className="flex-grow border-t border-gray-200 h-1/2"></div>
          {/* <p className="font-light">Or Sign Up with Email</p> */}

          <div className="flex-grow border-t border-gray-200 h-1/2"></div>
        </div>
        <form action="" className="mb-4">
          
          <Input
            field="Email Address"
            namee="email"
            placeholder="Enter email address"
            regex={
              /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
            }
            regexMsg="Incorrect format of email"
            requiredMsg="Email is required"
            register={register}
            minLength={6}
            errors={errors}
          />
          <Input
            field="Password"
            namee="password"
            placeholder="Enter password"
            regex={/^[A-Za-z0-9\s]+$/}
            regexMsg="Incorrect format of password"
            requiredMsg="Password is required"
            register={register}
            minLength={4}
            errors={errors}
          />
        
          <button className="py-3 px-7 bg-[#3430af] w-full rounded-3xl text-white">
            Login
          </button>
        </form>

        <div className="flex gap-2 mb-3">
          <p className="font-normal">Don’t have an account?</p>
          <Link href={""}>
            <p className="text-[#4640de]">Sign Up</p>
          </Link>
        </div>
        
      </main>


  )
}

export default Login