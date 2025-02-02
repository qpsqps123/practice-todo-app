'use client'

import AddTask from "./AddTask";
import RenderTasks from "./RenderTasks";
import { useState } from "react";
import { ITodoList } from "./types";

export default function TodoList() {
  const [todoList, setTodoList] = useState<ITodoList[]>([]);

  return (
    <>
      <AddTask todoList={todoList} setTodoList={setTodoList} />
      <RenderTasks todoList={todoList} setTodoList={setTodoList} />
    </>
  )
}

