import React from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { deleteTask, toggoleComplete } from "@/app/redux/features/todoSlice";
import { Checkbox } from "antd";
import TodoModal from "./TodoModal";

const Todo = ({ item }) => {
  const dispatch = useDispatch();
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
    dispatch(toggoleComplete(item.id));
  };
  return (
    <div className=" grid grid-cols-4 items-center bg-zinc-600/50 rounded p-2 mb-2">
      <div className=" flex items-center gap-2">
        <span>
          <Checkbox onChange={onChange}></Checkbox>
        </span>
        <p>{item.title}</p>
      </div>
      <div>
        {item.isCompleted === true ? (
          <p className=" text-green-600">Completed</p>
        ) : (
          <p className=" text-red-500">Pending</p>
        )}
      </div>
      <div className=" flex items-center gap-2">
        <span
          className={`${
            item.priority === "high"
              ? "bg-red-500"
              : item.priority === "medium"
              ? "bg-yellow-400"
              : "bg-green-600"
          } size-3 rounded-full`}
        ></span>
        <p>{item.priority}</p>
      </div>
      <div className=" flex gap-3 items-center justify-end">
        <button className=" bg-gradient-to-r from-fuchsia-600 to-purple-600 px-5 py-2 rounded-md font-semibold text-white">
          <TodoModal item={item} type="update" />
        </button>
        <button
          onClick={() => dispatch(deleteTask(item.id))}
          className=" bg-gradient-to-r from-fuchsia-600 to-purple-600 px-5 py-2 rounded-md font-semibold text-white"
        >
          <DeleteOutlined />
        </button>
      </div>
    </div>
  );
};

export default Todo;
