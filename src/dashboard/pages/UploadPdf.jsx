import React, { useState } from "react";
import { useForm } from "react-hook-form";

const UploadPdf = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [pdfPreview, setPdfPreview] = useState(null); // State for PDF preview

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPdfPreview(fileReader.result); // Set PDF preview URL
      };
      fileReader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  return (
    <div className="flex flex-row justify-center items-center min-h-screen bg-gray-100 w-full">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Upload PDF
        </h2>

        <form onSubmit={handleSubmit} className="mb-4">
          <div className=" mb-4">
          <label
            htmlFor="pdfFile"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
             PDF Category
          </label>
          <select name="" id="" className=" w-full border p-2">
            <option value="">Select a category</option>
            <option value="Shahadah">Shahadah</option>
            <option value="Salah">Salah</option>
            <option value="Sawm">Sawm</option>
            <option value="Zakah">Zakah</option>
            <option value="Hajj">Hajj</option>
          </select>
          </div>
 <div className=" mb-4">
 <label
            htmlFor="pdfFile"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Choose PDF File
          </label>
          <input
            type="file"
            id="pdfFile"
            accept="application/pdf"
            {...register("pdfFile", {
              required: "Please select a PDF file to upload",
              validate: {
                isPDF: (file) =>
                  file[0]?.type === "application/pdf" ||
                  "Only PDF files are allowed",
              },
            })}
            onChange={handleFileChange} // Real-time preview
            className={`w-full p-2 border ${
              errors.pdfFile ? "border-red-500" : "border-gray-300"
            } rounded focus:outline-none focus:ring focus:border-blue-300`}
          />
          {errors.pdfFile && (
            <p className="text-red-500 text-xs italic mt-2">
              {errors.pdfFile.message}
            </p>
          )}
 </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Upload
          </button>
        </div>
        </form >
      </div>

      {/* PDF Preview */}
      {pdfPreview && (
        <div className="mt-8 w-full  h-screen">
          <h3 className="text-lg font-bold text-gray-700 mb-4 text-center">
            PDF Preview
          </h3>
          <iframe
            src={pdfPreview}
            title="PDF Preview"
            className="w-full h-full border rounded shadow"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default UploadPdf;
