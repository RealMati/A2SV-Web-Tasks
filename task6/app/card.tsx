import React from "react";
import Link from 'next/link'

const Card = ({job,idx}: {job: any, idx: number}) => {
  return (
    <Link href={`description/${idx}`}>
      <div className="flex items-start border rounded-3xl py-5 px-7 gap-2 border-[#d6ddeb]">
        <img src="https://placehold.co/50" alt="" className="p-2 rounded-full" />
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-lg">{job.title}</h1>
          <div className="flex gap-2 items-center">
            <p className=" text-[#7c8493]">{job.company}</p>
            <div className="w-1 h-1 bg-[#7c8493] rounded-full" />
            <p className=" text-[#7c8493]">{job.about.location}</p>
          </div>
          <p className="text-[#25324b]">
            {job.description}
          </p>
          <div className="flex  gap-2">
            <div className="text-[#56cdad] rounded-3xl px-2 py-1 min-w-16 text-center">
              In Person
            </div>
            <div className="border border-[#ffb836] text-[#ffb836] rounded-3xl px-2 py-1 min-w-16 text-center">
              Education
            </div>
            <div className="border border-[#4640de] text-[#4640de] rounded-3xl px-2 py-1 min-w-16 text-center">
              IT
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
