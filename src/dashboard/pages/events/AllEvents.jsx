import React, { useEffect, useState } from "react";

const AllEvents = () => {
  const events = [
    {
      id: 1,
      image: "https://via.placeholder.com/100",
      title: "Event Title 1",
      location: "dhaka",
      startDate: "2024-11-25",
      endDate: "2024-11-25",
      author: "John Doe",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/100",
      title: "Event Title 2",
      location: "dhaka",
      startDate: "2024-11-25",
      endDate: "2024-11-25",
      author: "John Doe",
    },
  ];

  return (
    <div className="container mx-auto p-6  shadow-md rounded-md mt-10  w-full  bg-white ">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">All Events</h2>
      
 
        <table className="w-full border-collapse border border-gray-300 text-left text-sm text-gray-700">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="border border-gray-300 px-4 py-2">#</th>
              <th className="border border-gray-300 px-4 py-2">Image</th>
              <th className="border border-gray-300 px-4 py-2">Title</th>
              <th className="border border-gray-300 px-4 py-2">Location</th>
              <th className="border border-gray-300 px-4 py-2">Start time</th>
              <th className="border border-gray-300 px-4 py-2">End time</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => (
              <tr key={event.id} className="hover:bg-gray-50 text-sm">
                <td className="border border-gray-300 px-2 py-1">{index + 1}</td>
                <td className="border border-gray-300 px-2 py-1">
                  <img src={event?.image} alt="" />
                </td>
                <td className="border border-gray-300 px-2 py-1">{event.title}</td>
                <td className="border border-gray-300 px-2 py-1">{event.location}</td>
             
                <td className="border border-gray-300 px-2 py-1">
                  {new Date(event.startDate).toLocaleString()}
                </td>
                <td className="border border-gray-300 px-2 py-1">
                  {new Date(event.endDate).toLocaleString()}
                </td>
                <td className="border border-gray-300 px-2 py-1 flex gap-2">
            
                  <button
                    className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-700"
                    onClick={() => console.log("Edit Event", event.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
                    onClick={() => console.log("Delete Event", event.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
};

export default AllEvents;
