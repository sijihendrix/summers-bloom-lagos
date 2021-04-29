import React, { useState } from "react";
import { ImageSearchProps } from "../../types";

export const ImageSearch = ({ searchText }: ImageSearchProps) => {
  const [text, setText] = useState("");

  const onSubmit = (e: any) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
      <form onSubmit={onSubmit} className="w-full max-w-sm">
        <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
          <input
            onChange={(e) => setText(e.target.value)}
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search Image Term..."
          />
          <button
            className="flex-shrink-0 bg-purple-600 hover:bg-teal-700 border-teal-500 hover:bg-purple-700 text-sm  focus:ring-purple-600 text-white py-1 px-1.5 rounded  focus:ring-opacity-50 "
            type="submit"
          >
            Search
          </button>
          {/* <button className="bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 ...">
            Sign up
          </button> */}
        </div>
      </form>
    </div>
  );
};
