import React from "react";
import { FaFacebook } from "react-icons/fa6";
import Button from "./Button";
import { AiFillLike } from "react-icons/ai";
const UserCard = () => {
  return (
    <div className=" w-full shadow-2xl rounded-xl overflow-hidden pb-4 px-2 py-2 ">
      <div className="w-full aspect-video bg-blue-800 relative rounded-xl ">
        <img
          className="h-full rounded-full  border-4 
             border-blue-800 p-1 bg-white absolute left-1/2 -translate-x-1/2 translate-y-1/4"
          src="https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg="
          alt="Error loading image"
        />
      </div>
      <div className="flex flex-col items-center pt-[5rem] gap-2">
        <h1 className="font-bold">Ram Narayan</h1>
        <p>Full Stack Developer</p>
        <div className=" flex gap-3">
          <FaFacebook className="p-1 bg-blue-500 text-4xl text-white rounded-full" />
          <FaFacebook className="p-1 bg-blue-500 text-4xl text-white rounded-full" />
          <FaFacebook className="p-1 bg-blue-500 text-4xl text-white rounded-full" />
          <FaFacebook className="p-1 bg-blue-500 text-4xl text-white rounded-full" />
        </div>
        <div className="flex gap-7 my-1 text-white font-bold">
          <Button title="Subscribe" />
          <Button title="Follow" />
        </div>
        <div className="flex gap-3">
          <div className="flex items-center gap-1">

          <AiFillLike className="bg-blue-500 p-1 text-4xl text-white rounded-full" />
          <span className="text-1xl">60k</span>
          </div>
           <div className="flex items-center gap-1">

          <AiFillLike className="bg-blue-500 p-1 text-4xl text-white rounded-full" />
          <span className="text-1xl">60k</span>
          </div>
           <div className="flex items-center gap-1">

          <AiFillLike className="bg-blue-500 p-1 text-4xl text-white rounded-full" />
          <span className="text-1xl">60k</span>
          </div>
          </div>
          
      </div>
    </div>
  );
};

export default UserCard;
