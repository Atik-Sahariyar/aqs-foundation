import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineClose } from "react-icons/ai";
import { MdAddTask } from "react-icons/md";

const AddEvent = () => {
  const [imageFile, setImageFile] = useState(null);
  const [  selectedImage ,setSelectedImage] = useState(null);
  const [tags, setTags] = useState([]);

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


   // Handle tags input
   const handleTagInput = (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      setTags([...tags, e.target.value.trim()]);
      e.target.value = ""; // Clear input field
    }
  };

  // Remove a tag
  const removeTag = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className=" container mx-auto p-6 bg-white shadow-md rounded-md mt-10">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Add New Event</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

        <div className=" w-full flex gap-3 flex-col lg:flex-row">
                 {/* title & description */}
        <div className=" flex-1">
        {/* Title */}
        <div className="mt-3">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Event Title
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

        {/* Location */}
         <div className="mt-3">
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <input
            id="location"
            type="text"
            {...register("location", { required: "Location is required" })}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Enter location"
          />
          {errors.location && <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>}
        </div>

        {/* Description */}
        <div className="mt-3">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
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
 
        {/* Schedule start*/}
        <div className="mt-3">
          <label htmlFor="schedule" className="block text-sm font-medium text-gray-700">
            Schedule start Date & Time
          </label>
          <input
            id="schedule"
            type="datetime-local"
            {...register("scheduleEnd", { required: "Schedule is required" })}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          {errors.schedule && <p className="text-red-500 text-sm mt-1">{errors.schedule.message}</p>}
        </div>


            {/* Tags Input */}
            <div className="mt-3">
              <label htmlFor="tags" className="block text-sm font-medium text-gray-700">
                Tags
              </label>
              <div className="flex flex-wrap items-center gap-2">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-600 rounded-full"
                  >
                    {tag}
                    <AiOutlineClose
                      className="cursor-pointer text-red-500 text-sm"
                      onClick={() => removeTag(index)}
                    />
                  </span>
                ))}
              </div>
              <input
                id="tags"
                type="text"
                onKeyDown={handleTagInput}
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter a tag and press Enter"
              />
            </div>
        </div>
        {/* Image */}
        <div className=" flex-1">
        <div>
        <div className="cursor-pointer mt-4 p-6 border-dashed border-2 border-gray-300 bg-gray-50 dark:bg-gray-600 rounded-md flex items-center justify-center relative">
          {selectedImage ? (
            <>
              <img
                src={selectedImage}
                alt="Selected"
                className="w-full h-56 object-cover rounded-md"
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
              className="flex flex-col items-center h-[220px] "
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


         {/* Schedule end */}
        <div className="mt-3">
          <label htmlFor="schedule" className="block text-sm font-medium text-gray-700">
            Schedule end Date & Time
          </label>
          <input
            id="schedule"
            type="datetime-local"
            {...register("scheduleEnd", { required: "Schedule is required" })}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          {errors.schedule && <p className="text-red-500 text-sm mt-1">{errors.schedule.message}</p>}
        </div>

         {/* Category Dropdown */}
          <div className="mt-3">
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                Category
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
 
 


        </div>


        {/* Schedule Description */}
        <div>
          <label htmlFor="scheduleDescription" className="block text-sm font-medium text-gray-700">
            Schedule Description
          </label>
          <textarea
            id="scheduleDescription"
            {...register("scheduleDescription", { required: "Schedule description is required" })}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            rows="4"
            placeholder="Enter schedule details"
          ></textarea>
          {errors.scheduleDescription && (
            <p className="text-red-500 text-sm mt-1">{errors.scheduleDescription.message}</p>
          )}
        </div>
        {/* Submit Button */}
        <div className=" flex justify-end">
          <button
            type="submit"
            className=" flex items-center gap-2 w-[200px] px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <MdAddTask className=" text-white text-xl" />

            Add Event
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEvent;
