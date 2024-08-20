import { useRouter } from "next/navigation";

import path from "path";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import { signIn } from "next-auth/react";
import { SignupForm } from "../auth/signup/page";
import { LoginForm } from "../auth/login/page";

export async function signUp(data: SignupForm, router: AppRouterInstance) {
  try {
    const response = await fetch(`https://akil-backend.onrender.com/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPass,
        name: data.name,
        role: "user",
      }),
    });

    if (!response) throw new Error();

    if (response.ok) {
      const dataa = await response.json();
      if (dataa.message === "Successfully sent OTP") {
        router.push(
          `/auth/verify?email=${data.email}&name=${data.name}&pass=${data.password}`
        );
        console.log(
          "data",
          `/auth/verify?email=${data.email}&name=${data.name}&pass=${data.password}`,
          data
        );
      }
    } else {
      throw new Error("Failed to sign up");
    }
  } catch (err) {
    throw new Error("Failed to sign up");
  }
}

export async function handle(data: LoginForm, router: AppRouterInstance) {
  try {
    console.log(data);
    const response = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
      callbackUrl: "/home",
    });

    console.log("response", response);
    if (!response) throw new Error();

    if (response?.ok) {
      //   console.log("data", response);
      router.replace("/home");
    } else {
      throw new Error("Failed to sign in response not ok");
    }
  } catch (err) {
    throw new Error("Failed to sign in");
  }
}
