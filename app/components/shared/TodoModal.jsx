"use client";
import React, { useState } from "react";
import { Button, Form, Input, Modal, Select } from "antd";
import { useDispatch } from "react-redux";
import { addTodo, editTask } from "@/app/redux/features/todoSlice";
import { v4 as uuidv4 } from "uuid";
import { EditOutlined } from "@ant-design/icons";

const TodoModal = ({ type, item }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

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
      priority: values.Priority,
    };
    console.log(values);
    if (type === "add") {
      dispatch(addTodo(taskDetails));
      form.resetFields();
    }
    if (type === "update") {
      const finalData = {
        title: values.Name,
        priority: values.Priority,
        id: item?.id,
      };
      dispatch(editTask(finalData));
    }
  };

  return (
    <>
      <button
        onClick={showModal}
        className={`${
          type === "add" ? "px-5 py-2" : ""
        } bg-gradient-to-r from-fuchsia-600 to-purple-600  rounded-md font-semibold text-white`}
      >
        {type === "add" ? <span>Add task</span> : <EditOutlined />}
      </button>
      <Modal
        footer={false}
        title="Add your task"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} onFinish={onFinish} variant="filled">
          <Form.Item
            label="Task name"
            name="Name"
            rules={[{ required: true, message: "Please input your task" }]}
          >
            <Input defaultValue={item?.title} />
          </Form.Item>
          <Form.Item
            name="Priority"
            label="Priotiry"
            rules={[{ required: true, message: "Province is required" }]}
          >
            <Select defaultValue={item?.priority} placeholder="Set priority">
              <Select.Option value="high">High</Select.Option>
              <Select.Option value="medium">Medium</Select.Option>
              <Select.Option value="low">Low</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <button
              onClick={handleOk}
              htmltype="submit"
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
