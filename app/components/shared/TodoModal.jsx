"use client";
import React, { useState } from "react";
import { Button, Form, Input, Modal } from "antd";
import { useDispatch } from "react-redux";
import { addTodo } from "@/app/redux/features/todoSlice";
import { v4 as uuidv4 } from "uuid";

const TodoModal = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values) => {
    const randomId = uuidv4();
    const taskDetails = {
      id: randomId,
      title: values.Name,
    };
    console.log(taskDetails);
    dispatch(addTodo(taskDetails));
  };

  return (
    <>
      <button
        onClick={showModal}
        className=" bg-gradient-to-r from-fuchsia-600 to-purple-600 px-5 py-2 rounded-md font-semibold text-white"
      >
        Add todo
      </button>
      <Modal
        footer={false}
        title="Add your task"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form onFinish={onFinish} variant="filled">
          <Form.Item
            label="Task name"
            name="Name"
            rules={[{ required: true, message: "Please input your task" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <button
              onClick={handleOk}
              htmlType="submit"
              className=" bg-gradient-to-r from-fuchsia-600 to-purple-600 px-5 py-2 rounded-md font-semibold text-white"
            >
              submit
            </button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default TodoModal;
