import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

interface CardProps{
    title?:string;
    date?:string;
    description?:string;
    gradient?:boolean
}
export default function NewsCard({title,date,description,gradient}:CardProps) {
  return (
    <div>
      <div className="border rounded-lg shadow-lg p-8 font-poppins">
      <div className="relative">
        <div className={`bg-[#D9D9D9] h-60 w-full mb-4 p-4 ${gradient?'bg-gradient-to-t from-red-600 to-gray-200':''}`}></div>
        <div className="absolute -bottom-4 right-8 bg-primary text-white p-2 text-sm">
          {date}
        </div>
      </div>
      <h2 className="font-bold text-lg mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href="#" className="text-black font-bold flex items-center">
        READ MORE <IoIosArrowForward color='red'/>
      </a>
    </div>
    </div>
  )
}
