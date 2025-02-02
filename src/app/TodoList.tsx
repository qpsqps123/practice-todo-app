'use client'

import AddTask from "../components/AddTask";
import RenderTasks from "./RenderTasks";
import { useState } from "react";

export default function TodoList() {
  const [todoList, setTodoList] = useState<string[]>([]);

  return (
    <>
      <AddTask todoList={todoList} setTodoList={setTodoList} />
      <RenderTasks todoList={todoList} setTodoList={setTodoList} />
    </>
  )
}

