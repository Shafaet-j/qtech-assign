import React from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const Todo = () => {
  return (
    <div className=" flex justify-between items-center bg-zinc-600/50 rounded p-2 mb-2">
      <p>Todo Title</p>
      <p>Priority</p>
      <div className=" flex gap-3 items-center text-left">
        <button className=" bg-gradient-to-r from-fuchsia-600 to-purple-600 px-5 py-2 rounded-md font-semibold text-white">
          <EditOutlined />
          edit
        </button>
        <button className=" bg-gradient-to-r from-fuchsia-600 to-purple-600 px-5 py-2 rounded-md font-semibold text-white">
          <DeleteOutlined />
          delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
