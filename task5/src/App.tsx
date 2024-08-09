import React from "react";
import "./App.css";
import { useForm } from "react-hook-form";
import Input from "./Input";

interface contactForm {
  name: string;
  email: string;
  message: string;
}

function App() {
  const { register, handleSubmit, formState } = useForm<contactForm>();
  const { errors } = formState;

  return (
    <div className="px-[400px] py-24 bg-[#F9FAFB]">
      <div className="formDiv flex flex-col">
        <div className="flex flex-col items-center content-center">
          <div className="w-11/12 mb-10 flex flex-col items-center content-center">
            <h2 className="text-6xl text-gray-300 font-bold leading-tight tracking-tighter ">
              Contact
            </h2>
            <p className="text-xl text-center text-gray-600">
              If you'd like to get in touch, simply enter your message below and
              we'll get back to you shortly.
            </p>
          </div>
        </div>

        <form
          className="flex flex-col"
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
        >

          <Input
            field="Name:"
            namee="name"
            placeholder="Enter your name"
            regex={/^[A-Za-z0-9\s]+$/}
            regexMsg="Incorrect name format"
            minLength={2}
            requiredMsg="Name field is required"
            errors={errors}
            register={register}
            mode="input"
          />
          
          <Input
            field="Email:"
            namee="email"
            placeholder="Enter your email address"
            regex={
              /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
            }
            regexMsg="Incorrect email format"
            minLength={0}
            requiredMsg="Email field is required"
            errors={errors}
            register={register}
            mode="input"
          />
          
          <Input
            field="Message:"
            namee="message"
            placeholder="Write your message"
            regex={/^[A-Za-z0-9\s]+$/}
            regexMsg="Incorrect Message format"
            minLength={6}
            requiredMsg="Message field is required"
            errors={errors}
            register={register}
            mode="textarea"
          />

          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 transition duration-150 ease-in-out rounded-sm text-white w-full py-2 px-4 font-medium"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
