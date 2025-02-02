import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";

interface IProps {
  todoList: string[],
  setTodoList: Dispatch<SetStateAction<string[]>>,
}

export default function AddTask({ todoList, setTodoList }: IProps) {
  const [value, setValue] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setTodoList([...todoList, value])
  }
  return (
    <section className="flex flex-col ">
      <form onSubmit={handleSubmit} className="mx-auto mt-10 flex flex-row">
        <input type="text" className="text-primary text-2xl bg-transparent border-b-primary border-b-2 w-[20rem] h-10" onChange={handleChange} />
        <button type="submit" className="ml-6">
          <Image src="/add.png" alt="add icon" width={50} height={50} />
        </button>
      </form>
    </section>

  )
}
