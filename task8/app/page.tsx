// "use client";
// import Image from "next/image";
// import Input from "./components/Input";
// import { useForm, SubmitHandler } from "react-hook-form";
// import Link from "next/link";
// import { redirect } from "next/navigation";
// import { signIn } from "@/auth";
// import { useRouter } from "next/navigation";
// import Forms from "./components/forms";
// import { signUp } from "./fuctions/functions";

// export interface SignupForm {
//   name: string;
//   email: string;
//   password: string;
//   confirmPass: string;
// }

// export default function Home() {
//   const { register, handleSubmit, formState } = useForm<SignupForm>();
//   const { errors } = formState;
//   const router = useRouter();

//   async function signUpp(data: SignupForm) {
//     try {
//       await signUp(data, router);
//     } catch (err) {
//       throw new Error("Failed to sign up");
//     }
//   }

//   return (
//     <>
//       <main className="px-[450px] py-8 text-[#25324b] flex flex-col">
//         <h1 className="font-extrabold text-4xl mb-7 text-center">
//           Sign Up Today!
//         </h1>
//         <div className="border rounded-sm flex justify-center py-3 px-8 mb-5">
//           <p className="text-[#4640de]">Sign Up with Google</p>
//         </div>
//         <div className="flex items-center gap-3 mb-4">
//           <div className="flex-grow border-t border-gray-200 h-1/2"></div>
//           <p className="font-light">Or Sign Up with Email</p>

//           <div className="flex-grow border-t border-gray-200 h-1/2"></div>
//         </div>
//         <form action="" className="mb-4" onSubmit={handleSubmit(signUpp)}>
//           <Forms register={register} errors={errors} />
//           <button
//             type="submit"
//             className="py-3 px-7 bg-[#3430af] w-full rounded-3xl text-white"
//           >
//             Continue
//           </button>
//         </form>

//         <div className="flex gap-2 mb-3">
//           <p className="font-normal">Already have an account?</p>
//           <Link href={""}>
//             <p className="text-[#4640de]">Login</p>
//           </Link>
//         </div>
//         <p>
//           By clicking 'Continue', you acknowledge that you have read and
//           accepted our{" "}
//           <span className="text-[#4640de]">
//             <Link href={""}>Terms of Service</Link>
//           </span>{" "}
//           and{" "}
//           <span className="text-[#4640de]">
//             <Link href={""}>Privacy Policy</Link>
//           </span>
//           .
//         </p>
//       </main>
//     </>
//   );
// }
