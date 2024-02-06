"use client";
import { Button, Select } from "antd";
import React from "react";
import Todo from "../shared/todo";
import TodoModal from "../shared/TodoModal";

const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const Homepage = () => {
  return (
    <section className="bg-gradient-to-r from-violet-200 to-pink-200 w-3/4 mx-auto h-screen rounded-3xl mt-10 px-10">
      <div>
        <h1 className=" text-3xl font-bold text-center mt-5 mb-5">Todo app</h1>
        <div className=" flex items-center justify-between mb-5">
          <TodoModal />

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
                      label: "All",
                      value: "all",
                    },
                    {
                      label: "Incomplete",
                      value: "incomplete",
                    },
                  ],
                },
              ]}
            />
          </div>
        </div>
        <Todo />
        <Todo />
      </div>
    </section>
  );
};

export default Homepage;
