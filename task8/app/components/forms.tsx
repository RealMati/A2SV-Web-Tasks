import React from "react";
import Input from "./Input";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { SignupForm } from "../auth/signup/page";

const Forms = ({
  register,
  errors,
}: {
  errors: FieldErrors<SignupForm>;
  register: UseFormRegister<SignupForm>;
}) => {
  return (
    <>
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
    </>
  );
};

export default Forms;
