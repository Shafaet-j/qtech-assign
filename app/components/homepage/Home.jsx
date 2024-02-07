"use client";
import { Button, Select } from "antd";
import React, { useState } from "react";
import Todo from "../shared/todo";
import TodoModal from "../shared/TodoModal";
import { useDispatch, useSelector } from "react-redux";
import { filterTask } from "@/app/redux/features/todoSlice";

const Homepage = () => {
  const { todos, filteredTodos } = useSelector((state) => state.todos);
  console.log(todos);
  const [filterValue, setFilterValue] = useState("all");
  const dispatch = useDispatch();
  const handleChange = (value) => {
    console.log(`selected ${value}`);
    dispatch(filterTask(value));
    setFilterValue(value);
  };
  const renderTodos = filterValue === "all" ? todos : filteredTodos;

  return (
    <section className="bg-gradient-to-r from-violet-200 to-pink-200 w-full lg:w-3/4 mx-auto h-screen rounded-3xl mt-10 lg:px-10">
      <div>
        <h1 className=" text-3xl font-bold text-center mt-5 mb-5">Todo app</h1>
        <div className=" flex items-center justify-between mb-5">
          <TodoModal type="add" />

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
                    {
                      label: "Complete",
                      value: "complete",
                    },
                  ],
                },
              ]}
            />
          </div>
        </div>
        <div>
          {renderTodos?.map((item) => (
            <Todo key={item.id} item={item} />
          ))}
          {todos?.length < 1 && (
            <div className="bg-zinc-600/50 rounded p-2">
              <p className=" text-center">No todo</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Homepage;
