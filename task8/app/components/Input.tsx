import { FieldErrors, UseFormRegister } from "react-hook-form";
import { SignupForm } from "../auth/signup/page";

export default function Input({
  field,
  namee,
  placeholder,
  regex,
  regexMsg,
  requiredMsg,
  minLength,
  errors,
  register,
}: {
  field: string;
  namee: keyof SignupForm;
  placeholder: string;
  regex: RegExp;
  regexMsg: string;
  requiredMsg: string;
  minLength: number;
  errors: FieldErrors<SignupForm>;
  register: UseFormRegister<SignupForm>;
}) {
  const typee =
    namee === "password" || namee === "confirmPass" ? "password" : "text";
  return (
    <div className="mb-4 flex flex-col">
      <label htmlFor={namee} className="font-semibold mb-1">
        {field}
      </label>

      <input
        className="shadow-sm rounded-md border hover:border-gray-300 focus:outline-none focus:shadow-md p-3 px-4 bg-inherit text-gray-700"
        type={typee}
        placeholder={placeholder}
        id={namee}
        {...register(namee, {
          pattern: {
            value: regex,
            message: regexMsg,
          },
          required: requiredMsg,
          minLength: {
            value: minLength,
            message: `Minimum length is ${minLength} characters`,
          },
        })}
      />

      <p className="pl-2 text-red-500">{errors[namee]?.message}</p>
    </div>
  );
}
