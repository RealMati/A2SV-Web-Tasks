"use client";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

import { signUp } from "@/app/fuctions/functions";
import Forms from "@/app/components/forms";
import { signIn } from "next-auth/react";

export interface SignupForm {
  name: string;
  email: string;
  password: string;
  confirmPass: string;
}

export default function Home() {
  const { register, handleSubmit, formState } = useForm<SignupForm>();
  const { errors } = formState;
  const router = useRouter();

  async function signUpp(data: SignupForm) {
    try {
      await signUp(data, router);
    } catch (err) {
      throw new Error("Failed to sign up");
    }
  }

  function handleGoogle() {
    signIn("google", { callbackUrl: "/home" });
  }

  return (
    <>
      <main className="px-[450px] py-8 text-[#25324b] flex flex-col">
        <h1 className="font-extrabold text-4xl mb-7 text-center">
          Sign Up Today!
        </h1>
        <div
          className="border rounded-sm flex justify-center items-center py-3 px-8 mb-5 gap-2 cursor-pointer"
          onClick={handleGoogle}
        >
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.6712 8.36788H18V8.33329H10.5V11.6666H15.2096C14.5225 13.607 12.6762 15 10.5 15C7.73874 15 5.49999 12.7612 5.49999 9.99996C5.49999 7.23871 7.73874 4.99996 10.5 4.99996C11.7746 4.99996 12.9342 5.48079 13.8171 6.26621L16.1742 3.90913C14.6858 2.52204 12.695 1.66663 10.5 1.66663C5.89791 1.66663 2.16666 5.39788 2.16666 9.99996C2.16666 14.602 5.89791 18.3333 10.5 18.3333C15.1021 18.3333 18.8333 14.602 18.8333 9.99996C18.8333 9.44121 18.7758 8.89579 18.6712 8.36788Z"
              fill="#FFC107"
            />
            <path
              d="M3.12749 6.12121L5.8654 8.12913C6.60624 6.29496 8.4004 4.99996 10.5 4.99996C11.7746 4.99996 12.9342 5.48079 13.8171 6.26621L16.1742 3.90913C14.6858 2.52204 12.695 1.66663 10.5 1.66663C7.29915 1.66663 4.52332 3.47371 3.12749 6.12121Z"
              fill="#FF3D00"
            />
            <path
              d="M10.5 18.3333C12.6525 18.3333 14.6083 17.5095 16.0871 16.17L13.5079 13.9875C12.6432 14.6451 11.5865 15.0008 10.5 15C8.33251 15 6.49209 13.6179 5.79876 11.6891L3.08126 13.7829C4.46043 16.4816 7.26126 18.3333 10.5 18.3333Z"
              fill="#4CAF50"
            />
            <path
              d="M18.6713 8.36796H18V8.33337H10.5V11.6667H15.2096C14.8809 12.5902 14.2889 13.3972 13.5067 13.988L13.5079 13.9871L16.0871 16.1696C15.9046 16.3355 18.8333 14.1667 18.8333 10C18.8333 9.44129 18.7758 8.89587 18.6713 8.36796Z"
              fill="#1976D2"
            />
          </svg>
          <p className="text-[#4640de]">Sign Up with Google</p>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-grow border-t border-gray-200 h-1/2"></div>
          <p className="font-light">Or Sign Up with Email</p>

          <div className="flex-grow border-t border-gray-200 h-1/2"></div>
        </div>
        <form action="" className="mb-4" onSubmit={handleSubmit(signUpp)}>
          <Forms register={register} errors={errors} />
          <button
            type="submit"
            className="py-3 px-7 bg-[#3430af] w-full rounded-3xl text-white"
          >
            Continue
          </button>
        </form>

        <div className="flex gap-2 mb-3">
          <p className="font-normal">Already have an account?</p>
          <Link href={"/auth/login"}>
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
