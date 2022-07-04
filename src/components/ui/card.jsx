import React from "react";

function Card({ title, value }) {
  return (
    <div
      className=" group p-5 shadow rounded-md bg-white basis-full
     text-center space-y-3 border border-transparent hover:border-secondary 
     transition duration-200 cursor-pointer   "
    >
      <h1 className="font-medium text-xl text-gray-600 tracking-[0.4px] group-hover:text-secondary transition duration-200">
        {title}
      </h1>
      {value ? (
        <p className="text-4xl text-[#252733] font-semibold group-hover:text-secondary transition duration-200">
          {value}
        </p>
      ) : (
        <p className="bg-black/10 animate-pulse h-9 w-9 mx-auto"></p>
      )}
    </div>
  );
}

export default Card;
