import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";

const SendNewsletter = () => {
  const emailList = [
    "LNmo_generic_b18a5b28_wenstechbd.com@data-backup-s",
    "9Uho_generic_b18a5b28_wenstechbd.com@data-backup-s",
    "GSmo_generic_b18a5b28_wenstechbd.com@data-backup-s",
    "usIH_generic_b18a5b28_wenstechbd.com@data-backup-s",
    "nishant.developer22@gmail.com",
  ];
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [selectedEmails, setSelectedEmails] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCheckboxChange = (email, checked) => {
    if (checked) {
      setSelectedEmails([...selectedEmails, email]);
    } else {
      setSelectedEmails(selectedEmails.filter((item) => item !== email));
    }
  };

  const handleSelectAll = () => {
    setSelectedEmails(emailList);
  };

  const handleDeselectAll = () => {
    setSelectedEmails([]);
  };

  const onEditorStateChange = (newState) => {
    setEditorState(newState);
  };


  return (
    <div className="container w-full max-w-2xl  p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Send Newsletter</h2>

      {/* Emails Users */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Emails (Users)
        </label>
        <input
          type="text"
          value={`${selectedEmails.length} items selected`}
          readOnly
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 bg-gray-100 cursor-default"
        />
      </div>

      {/* Emails Subscribers */}
      <div className="mb-6 relative">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Emails (Subscribers)
        </label>
        <div>
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full px-3 py-2 text-left border border-gray-300 rounded-md bg-white focus:outline-none"
        >
          {`${selectedEmails.length} items selected`}
        </button>

        {isDropdownOpen && (
          <div className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-md shadow-md">
            <div className="flex justify-between p-2 bg-gray-100 border-b border-gray-300">
              <button
                onClick={handleSelectAll}
                className="px-3 py-1 text-sm text-blue-500 hover:underline"
              >
                Select All
              </button>
              <button
                onClick={handleDeselectAll}
                className="px-3 py-1 text-sm text-red-500 hover:underline"
              >
                Deselect All
              </button>
            </div>
            <div className="max-h-48 overflow-y-auto">
              {emailList.map((email, index) => (
                <div
                  key={index}
                  className="flex items-center p-2 border-b border-gray-200 last:border-none"
                >
                  <input
                    type="checkbox"
                    checked={selectedEmails.includes(email)}
                    onChange={(e) =>
                      handleCheckboxChange(email, e.target.checked)
                    }
                    className="mr-3 h-4 w-4 text-blue-500 border-gray-300 rounded"
                  />
                  <span className="text-sm text-gray-700">{email}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        </div>
      </div>

      {/* Newsletter Subject */}
      <div className="mb-6">
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Newsletter subject
        </label>
        <input
          type="text"
          id="subject"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Newsletter Content */}
      <div className="mb-6 ">
        <label
          htmlFor="content"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Newsletter content
        </label>
        <Editor
       editorState={editorState}
       toolbarClassName="border border-gray-300 rounded-t-md p-2"
       wrapperClassName="border border-gray-300 rounded-md"
       editorClassName="p-3 min-h-[150px] rounded-b-md focus:outline-none"
       onEditorStateChange={onEditorStateChange}
     />
      </div>

      {/* Submit Button */}
      <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">
        Send Newsletter
      </button>
    </div>
  );
};

export default SendNewsletter;
