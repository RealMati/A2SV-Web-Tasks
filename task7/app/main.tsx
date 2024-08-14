import React from "react";
import Card from "./card";
import { useGetAllJobsQuery } from "./features/api/apiSlice";

const Main = () => {
  const { data: jobs, error, isLoading } = useGetAllJobsQuery();
  const jobss = jobs?.data;
  if (isLoading) return <div className="flex justify-center items-center">Loading...</div>;
  if (error) return <div className="flex justify-center items-center">Error loading jobs</div>;
  return (
    <main className="flex justify-center pt-10 pr-80 pb-10 pl-32">
      <div className=" w-full">
        <div className="topMenu flex flex-col w-full mb-10">
          <div className="topMenu flex justify-between">
            <div>
              <h1 className="text-[#25324b] font-black text-3xl">
                Opportunities
              </h1>
              <p className="text-[#7c8493]">Showing 73 results</p>
            </div>
            <div className="flex items-center gap-2">
              <label className="text-[#7c8493]">sort by: </label>
              <select name="sort" id="sort" className="bg-transparent">
                <option value="relevant" className="text-[#25324b]">
                  Most relevant
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-7 ">
          {jobss &&
            jobss.map((job, idx: number) => (
              <Card job={job} idx={idx} key={idx} />
            ))}
        </div>
      </div>
    </main>
  );
};

export default Main;
