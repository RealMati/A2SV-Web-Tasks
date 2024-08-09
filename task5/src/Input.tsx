import { FieldErrors, UseFormRegister } from "react-hook-form";

interface contactForm {
  name: string;
  email: string;
  message: string;
}

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
  mode,
}: {
  field: string;
  namee: keyof contactForm;
  placeholder: string;
  regex: RegExp;
  regexMsg: string;
  requiredMsg: string;
  minLength: number;
  errors: FieldErrors<contactForm>;
  register: UseFormRegister<contactForm>;
  mode: string;
}) {

  return (
    <div className="mb-4 flex flex-col">
      <label htmlFor={namee} className="text-gray-300">
        {field}
      </label>
      {mode === "input" ? (
        <input
          className="shadow-sm rounded-md border hover:border-gray-300 focus:outline-none focus:shadow-md p-3 px-4 bg-inherit text-gray-700"
          type="text"
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
      ) : (
        <textarea
          className="shadow-sm rounded-md border hover:border-gray-300 focus:outline-none focus:shadow-md p-3 px-4 bg-inherit text-gray-700"
          id="message"
          placeholder={placeholder}
          cols={30}
          rows={5}
          {...register("message", {
            minLength: {
              value: 4,
              message: "minimum length of 4 is required",
            },
            required: "Message is required",
          })}
        ></textarea>
      )}
      <p className="pl-2 text-red-500">{errors[namee]?.message}</p>
    </div>
  );
}
