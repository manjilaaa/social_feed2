import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import {loginSchema} from "../schemas/schema";
import { Button } from "../ui/button";
import FormInput from "../form/FormInput";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    localStorage.setItem("userEmail", data.email);
    navigate("/post");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100 p-4">
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 text-center">
          <h1 className="text-3xl font-bold text-white">SocialFeed</h1>
          <p className="text-purple-100 mt-2">
            Share your moments with the world
          </p>
        </div>

        <div className="p-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
            Welcome Back
          </h2>
          <p className="text-gray-600 text-center mb-6">
            Please login to your account
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <FormInput
              label="Email"
              type="text"
              placeholder="Enter your email"
              icon={FaEnvelope}
             
              register={register}
              name="email"
              formState={{errors}}
            />
            <FormInput
              label="Password"
              type="password"
              placeholder="Enter your password"
              icon={FaLock}
             
              register={register}
              name="password"
              formState={{errors}}
            />
            <Button type='submit'>Login</Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <a
                
                className="font-medium text-purple-500 hover:text-purple-600"
              >
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
