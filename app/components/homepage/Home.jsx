"use client";
import { Select } from "antd";
import React from "react";

const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const Homepage = () => {
  return (
    <section className="bg-gradient-to-r from-violet-200 to-pink-200 w-3/4 mx-auto h-screen rounded-3xl mt-10">
      <div>
        <h1 className=" text-3xl font-bold text-center mt-5 mb-5">Todo app</h1>
        <div className=" flex items-center justify-between px-10">
          <button>Add todo</button>
          <div>
            <Select
              defaultValue="Filter"
              style={{
                width: 200,
              }}
              onChange={handleChange}
              options={[
                {
                  options: [
                    {
                      label: "Jack",
                      value: "jack",
                    },
                    {
                      label: "Jack2",
                      value: "jack2",
                    },
                  ],
                },
              ]}
            />
          </div>
        </div>
        <div className=" flex">
          <p>Task name</p>
          <p>Priority</p>
        </div>
      </div>
    </section>
  );
};

export default Homepage;
