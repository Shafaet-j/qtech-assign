import React from "react";

const Todo = () => {
  return (
    <div className=" flex justify-between items-center bg-zinc-600/50 rounded p-2 mb-2">
      <p>Todo Title</p>
      <p>Priority</p>
      <div className=" flex flex-col gap-1 items-center text-left">
        <button>edit</button>
        <button>delete</button>
      </div>
    </div>
  );
};

export default Todo;
