"use client";
import Image from "next/image";
import Input from "./Input";
import { useForm } from "react-hook-form";
import Link from "next/link";

export interface SignupForm {
  name: string;
  email: string;
  password: string;
  confirmPass: string;
}

export default function Home() {
  const { register, handleSubmit, formState } = useForm<SignupForm>();
  const { errors } = formState;
  return (
    <>
      <main className="px-[450px] py-8 text-[#25324b] flex flex-col">
        <h1 className="font-extrabold text-4xl mb-7 text-center">Sign Up Today!</h1>
        <div className="border rounded-sm flex justify-center py-3 px-8 mb-5">
          <p className="text-[#4640de]">Sign Up with Google</p>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-grow border-t border-gray-200 h-1/2"></div>
          <p className="font-light">Or Sign Up with Email</p>

          <div className="flex-grow border-t border-gray-200 h-1/2"></div>
        </div>
        <form action="" className="mb-4">
          <Input
            field="Full Name"
            namee="name"
            placeholder="Enter your full name"
            regex={/^[A-Za-z0-9\s]+$/}
            regexMsg="Incorrect format of name"
            requiredMsg="Name is required"
            register={register}
            minLength={4}
            errors={errors}
          />
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
          <Input
            field="Confirm Password"
            namee="confirmPass"
            placeholder="Enter password"
            regex={/^[A-Za-z0-9\s]+$/}
            regexMsg="Incorrect format of password"
            requiredMsg="Password is required"
            register={register}
            minLength={4}
            errors={errors}
          />
          <button className="py-3 px-7 bg-[#3430af] w-full rounded-3xl text-white">
            Continue
          </button>
        </form>

        <div className="flex gap-2 mb-3">
          <p className="font-normal">Already have an account?</p>
          <Link href={""}>
            <p className="text-[#4640de]">Login</p>
          </Link>
        </div>
        <p>
          By clicking 'Continue', you acknowledge that you have read and
          accepted our{" "}
          <span className="text-[#4640de]">
            <Link href={""}>Terms of Service</Link>
          </span>{" "}
          and{" "}
          <span className="text-[#4640de]">
            <Link href={""}>Privacy Policy</Link>
          </span>
          .
        </p>
      </main>
    </>
  );
}
