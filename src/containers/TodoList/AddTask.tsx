import Image from "next/image";
import { useState } from "react";
import {v4 as uuidv4} from 'uuid'
import { IProps } from "./types";

export default function AddTask({ todoList, setTodoList }: IProps) {
  const [value, setValue] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (value === '') return

    const id = uuidv4() 

    const tForm = e.target as HTMLFormElement
    const tInput = tForm.elements[0] as HTMLInputElement

    setTodoList([...todoList, {id: id, task: value}])

    tInput.value = ''
    setValue('')
  }

  return (
    <section className="flex flex-col ">
      <form onSubmit={handleSubmit} className="mx-auto mt-10 flex flex-row">
        <input type="text" className="text-primary text-2xl bg-transparent border-b-primary border-b-2 w-[20rem]" onChange={handleChange} />
        <button type="submit" className="ml-6">
          <Image src="/add.png" alt="add icon" width={50} height={50} />
        </button>
      </form>
    </section>

  )
}
