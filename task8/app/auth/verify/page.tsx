"use client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Verify = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const name = searchParams.get("name");
  const pass = searchParams.get("pass");

  const [values, setValues] = useState<string[]>(["", "", "", ""]);
  const [timer, setTimer] = useState<number>(30);
  const [resendEnabled, setResendEnabled] = useState<boolean>(false);

  useEffect(() => {
    var interval: NodeJS.Timeout | undefined = undefined;

    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      setResendEnabled(true);
      if (interval) clearInterval(interval);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timer]);
  function handleChange(e: React.ChangeEvent<HTMLInputElement>, index: number) {
    const value = e.target.value;
    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);
  }

  async function handleSubmit() {
    const code = values.join("");
    console.log("code", code, email);
    try {
      const response = await fetch(
        `https://akil-backend.onrender.com/verify-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email ?? "",
            OTP: code,
          }),
        }
      );
      console.log("response", response);
      if (!response) throw new Error();

      if (response.ok) {
        router.replace("/auth/login");
      } else {
        throw new Error("Failed to sign up");
      }
    } catch (err) {
      throw new Error("Failed to sign up");
    }
  }

  async function handleResend() {
    const response = await fetch("https://akil-backend.onrender.com/signup", {
      method: "POST",
      body: JSON.stringify({
        email,
        name,
        password: pass,
        confirmPassword: pass,
        role: "user",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

    setResendEnabled(false);
    setTimer(30);
  }

  return (
    <div className="text-[#25324b] px-[450px] py-40 flex flex-col justify-center items-center">
      <p className="font-semibold text-4xl mb-8">Verify Email</p>
      <p className="mb-20">
        We've sent a verification code to the email address you provided. To
        complete the verification process, please enter the code here.
      </p>
      <div className="w-full">
        <div className="mb-12">
          <div className="flex gap-9 mb-14 justify-center">
            {values.map((value, index) => (
              <input
                key={index}
                placeholder="0"
                type="text"
                value={value}
                maxLength={1}
                inputMode="numeric"
                onChange={(e) => handleChange(e, index)}
                className="w-20 h-16 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-purple-400 hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
              />
            ))}
          </div>
          <p className="text-center">
            You can request to{" "}
            <span className="text-[#4640de]">
              <button onClick={handleResend} disabled={!resendEnabled}>
                {" "}
                Resend code
              </button>
            </span>{" "}
            in{" "}
          </p>
          <p className="text-[#4640de] text-center">{`0:${
            timer < 10 ? `0${timer}` : timer
          }`}</p>
        </div>
        <button
          className="py-3 px-7 bg-[#3430af4c] w-full rounded-3xl text-white"
          onClick={handleSubmit}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Verify;
