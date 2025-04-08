import FadeContent from "@/animations/FadeContent/FadeContent";
import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import defaultBanner from "/assets/blog banner.png";
import { Toaster, toast } from "react-hot-toast";
import { EditorContext } from "./Editor";

const BlogEditor = () => {
  const [uploadedBannerUrl, setUploadedBannerUrl] = useState(defaultBanner);
  const [selectedFile, setSelectedFile] = useState(null);
  let blogBannerRef = useRef();

  const { blog, setBlog } = useContext(EditorContext);
  const { title, banner, content = [], tags = [], des } = blog || {};

  const handleBlogBannerUpload = (e) => {
    const img = e.target.files[0];
    setSelectedFile(img);
    const url = URL.createObjectURL(img);
    setUploadedBannerUrl(url);
    toast.success("Image selected 🐰");
  };

  const handleSubmit = async () => {
    if (!selectedFile) {
      toast.error("Please select an image before publishing.");
      return;
    }
    const formData = new FormData();
    formData.append("banner", selectedFile);
    let loadingToast = toast.loading("Uploading...");

    try {
      const response = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (response.ok) {
        toast.dismiss(loadingToast);
        toast.success("Uploaded successfully! 🐰");
        console.log("File uploaded successfully:", data.url);
      } else {
        toast.dismiss(loadingToast);
        toast.error("File upload failed");
        console.error("File upload failed:", data);
      }
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error("Error uploading file");
      console.error("Error uploading file:", error);
    }
  };

  const handleTitleKeyDown = (e) => {
    console.log(e);

    if (e.keyCode == 13) {
      e.preventDefault();
    }
  };

  const handleTitleChange = (e) => {
    let input = e.target;
    input.style.height = "auto";
    input.style.height = input.scrollHeight + "px";
    setBlog({ ...blog, title: input.value });
  };

  return (
    <>
      <main className='font-satoshi min-h-screen bg-gray-100/60 scroll-smooth'>
        <nav className='bg-white flex items-center py-4 px-4 border-b border-gray-100'>
          <Link to='/login' className='logo flex items-center space-x-4 z-50 mr-8 drop-shadow-lg'>
            <img src='/assets/rabbit.png' alt='Toqui Logo' className='w-auto h-12 p-2 rounded-full bg-pink-700' />
            <p className='text-gray-800 line-clamp-1 font-normal max-md:hidden' value={title}>
              {(title || "").length ? title : "New Blog"}
            </p>
          </Link>
          <div className='flex gap-4 ml-auto'>
            <button
              className='rounded-md
              bg-pink-800
              px-6 py-2.5
              text-white
              transition-colors text-tiny
              hover:bg-pink-800/80'
              onClick={handleSubmit}>
              Publish
            </button>
            <button
              className='rounded-md
              px-6 py-2.5
              text-black
              transition-colors text-tiny
              hover:bg-gray-200'>
              Save Draft
            </button>
          </div>
        </nav>
        <Toaster />
        <FadeContent>
          <section>
            <div className='mx-auto max-h-[500px] max-w-[700px] w-full p-4'>
              <div className='relative aspect-video hover:opacity-80 bg-white border-4 border-gray-100'>
                <label htmlFor='uploadBanner'>
                  <img ref={blogBannerRef} src={uploadedBannerUrl} alt='Blog Banner' className='z-20' />
                  <input
                    id='uploadBanner'
                    type='file'
                    accept='.jpg, .jpeg, .png, .jfif'
                    hidden
                    onChange={handleBlogBannerUpload}
                  />
                </label>
              </div>

              <textarea
                name=''
                id=''
                placeholder='Blog Title'
                className='text-2xl text-gray-800 outline-none resize-none font-medium w-full h-20 mt-10 leading-tight placeholder:opacity-45'
                onKeyDown={handleTitleKeyDown}
                onChange={handleTitleChange}
                ></textarea>
            </div>
          </section>
        </FadeContent>
      </main>
    </>
  );
};

export default BlogEditor;
