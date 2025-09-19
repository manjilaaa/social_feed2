import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { IoIosLink, IoIosSend } from "react-icons/io";
import { useAddPost } from "../../hooks/usePost";
import Sidebar from "../sidebar";
import { addSchema } from "../schemas/schema";
import DialogBox from "../dialogbox";
import { Button } from "../ui/button";
import FormInput from "../form/FormInput";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";


const AddPost = () => {
  const navigate = useNavigate();
  const { mutate: addPostMutation, isLoading } = useAddPost();
  const [openLogoutDialog, setOpenLogoutDialog] = useState(false);
  const [openPostDialog, setOpenPostDialog] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(addSchema),
  });
  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    navigate("/");
  };


  const onSubmit = (data) => {
    addPostMutation(data, {
      onSuccess: () => {
        setOpenPostDialog(true); 
      },
    });
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 md:ml-5">
      
      <div className="fixed left-0 top-0 h-full z-40">
        <Sidebar onLogoutClick={() => setOpenLogoutDialog(true)} />
      </div>
       
      
      <div className="flex-1 overflow-y-auto pt-15 z-10  relative">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-purple-800 mb-2">
            Create New Post
          </h2>
          <p className="text-purple-500 mb-6">Share your thoughts.</p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 bg-white p-6 rounded-xl shadow-lg"
          >
            <FormInput
              label="Title"
              placeholder="Add a catchy title..."
              register={register}
              name="title"
              formState={{ errors }}
              autoComplete="off"
            />

            <Label htmlFor="content">Content</Label>
            <Textarea
            id="content"
              placeholder="What's on your mind?"
              autoComplete="off"
              {...register("content")}
            />
            {errors.content && (
              <p className="text-sm text-red-500">{errors.content.message}</p>
            )}

            <FormInput
              label={
                <div className="flex items-center">
                  <IoIosLink className="mr-2 text-purple-500" /> Add Link (Optional)
                </div>
              }
              placeholder="https://example.com"
              register={register}
              name="url"
              formState={{ errors }}
              autoComplete="url"
            />

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            >
              <IoIosSend className="mr-2" />
              {isLoading ? "Posting..." : "Publish Post"}
            </Button>
          </form>
        </div>
      </div>

     
      <DialogBox
        open={openLogoutDialog}
        title="Confirm Logout"
        message="Are you sure you want to log out? You’ll need to sign in again to continue."
        onConfirm={handleLogout}
        onCancel={() => setOpenLogoutDialog(false)}
        onClose={() => setOpenLogoutDialog(false)}
      />

  
      <DialogBox
        open={openPostDialog}
        title="Posted Successfully"
        message="Your post has been published."
        onConfirm={() => {
          setOpenPostDialog(false);
          navigate("/post");
        }}
        showCancel={false} 
      />
    </div>
  );
};

export default AddPost;
