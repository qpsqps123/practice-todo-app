import { Dispatch, SetStateAction } from "react";

export interface ITodoList {
  id: string,
  task: string
}

export interface IProps {
  todoList: Array<ITodoList>,
  setTodoList: Dispatch<SetStateAction<Array<ITodoList>>>,
}
