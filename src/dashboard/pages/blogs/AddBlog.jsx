import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
import { MdAddTask } from "react-icons/md";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";
import { Link } from "react-router-dom";
import { FaAlignJustify } from "react-icons/fa";

const AddBlog = () => {
  const [imageFile, setImageFile] = useState(null);
  const [  selectedImage ,setSelectedImage] = useState(null);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (newState) => {
    setEditorState(newState);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const categories = ["Technology", "Education", "Health", "Sports"]; 

  const onSubmit = (data) => {
    console.log(data);
    reset(); // Clear form after submission
  };

    // Handle image change function
    const handleImageChange = (files) => {
        if (files && files.length > 0) {
          const imageFile = files[0];
          setImageFile(imageFile);
    
          const imageUrl = URL.createObjectURL(imageFile);
          setSelectedImage(imageUrl);
        }
      };

      // Handle image delete function
  const handleImageDelete = () => {
    setSelectedImage(null);
    document.querySelector("#image").value = null;
  };




  return (
    <div className=" container mx-auto p-6 bg-white shadow-md rounded-md mt-10">
       <div className=" flex justify-between items-center">
       <h2 className="text-2xl font-semibold text-gray-800 mb-6">Add New Blog</h2>
         <Link to={"/dashboard/all-posts"} className=" flex gap-2 text-white bg-blue-600 hover:bg-blue-800 px-2 py-1 rounded-md"> <FaAlignJustify /> All Blogs </Link>
       </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

        <div className=" w-full flex gap-3 flex-col lg:flex-row">
                 {/* title & description */}
        <div className=" flex-1">
        {/* Title */}
        <div className="mt-3">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Blog Title <span className=" text-red-500 text-xl">{"*"}</span>
          </label>
          <input
            id="title"
            type="text"
            {...register("title", { required: "Title is required" })}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter event title"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
        </div>

  

        {/*Short description */}
        <div className="mt-3">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
           Short Description <span className=" text-red-500 text-xl">{"*"}</span>
          </label>
          <textarea
            id="description"
            {...register("description", { required: "Description is required" })}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            rows="4"
            placeholder="Enter event description"
          ></textarea>
          {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
        </div>

                 {/* Category Dropdown */}
                 <div className="mt-3">
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                Category <span className=" text-red-500 text-xl">{"*"}</span>
              </label>
              <select
                id="category"
                {...register("category", { required: "Category is required" })}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              >
                <option value="">Select a category</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>}
            </div>
 

        </div>
        {/* Image */}
        <div className=" flex-1">
        <div className=" mt-3">
        <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                Blog image <span className=" text-red-500 text-xl">{"*"}</span>
           </label>

        <div className="cursor-pointer mt-3 p-3 border-dashed border-2 border-gray-300 bg-gray-50 dark:bg-gray-600 rounded-md flex items-center justify-center relative">
          {selectedImage ? (
            <>
              <img
                src={selectedImage}
                alt="Selected"
                className="w-full h-[250px] object-cover rounded-md"
              />
              <button
                onClick={handleImageDelete}
                className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full focus:outline-none hover:bg-red-600"
              >
                <AiOutlineClose className="text-lg" />
              </button>
            </>
          ) : (
            <span
              onClick={() => document.querySelector("#image").click()}
              className="flex flex-col items-center h-[230px] "
            >
              <span className="text-3xl dark:text-gray-300 text-gray-400">
                📁
              </span>
              <p className="mt-2 text-sm dark:text-gray-300 text-gray-500 p-2 border rounded-md">
                Select Image
              </p>
            </span>
          )}
        </div>

        <input
          type="file"
          id="image"
          accept="image/*"
          className="hidden"
          {...register("image", { required: true })}
          onChange={(e) => handleImageChange(e.target.files)}
        />
        {errors.image && (
          <span className="text-red-500">This field is required</span>
        )}

        </div>


  


        </div>
 
 


        </div>


        {/* Schedule Description */}
          <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
           Blog description 
          </label>
     <Editor
         editorState={editorState}
         toolbarClassName="border border-gray-300 rounded-t-md p-2"
         wrapperClassName="border border-gray-300 rounded-md"
         editorClassName="p-3 min-h-[200px] rounded-b-md focus:outline-none"
         onEditorStateChange={onEditorStateChange}
      />       
          </div>
        {/* Submit Button */}
        <div className=" flex justify-end">
          <button
            type="submit"
            className=" flex items-center gap-2 w-[200px] px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <MdAddTask className=" text-white text-xl" />

            Add Blog post
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
