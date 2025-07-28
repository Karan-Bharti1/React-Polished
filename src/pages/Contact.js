import React from "react";
import Header from "../components/Header";

const Contact = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6 ">
      <h2 className="text-2xl my-8 font-semibold ">
        Contact Us
      </h2>
      <div >
      <form >
        
        <input
          type="text"
          className="border border-gray-500 p-2 my-2 w-3xl sm:w-xl"
          placeholder="name"
        />
        <br />
        <input
          type="text"
          className="border border-gray-500 p-2 my-2 w-3xl h-30 sm:w-xl"
          placeholder="Please write your feedback"
        />
        <br />
        <button
          className="p-2 my-2 bg-red-500 text-white rounded-sm cursor-pointer"
          
        >
          Submit
        </button>
      </form>
      </div>
    </main>
  );
};

export default Contact;
