import { Dispatch, SetStateAction } from 'react'
import {v4 as uuidv4} from 'uuid'
interface IProps {
  todoList: string[],
  setTodoList: Dispatch<SetStateAction<string[]>>,
}
export default function RenderTasks({ todoList }: IProps) {
  const todoListNodes = todoList.map((item: string) => { 
    const id = uuidv4() 

    return <li key={id} className="bg-primary rounded-lg px-4 py-1 w-full break-words">{item}</li> }
  )

  const handleClick = () => {
    
  }

  return (
    <section>
      <ul className="flex flex-col flex-wrap gap-5 justify-center w-[20em] mx-auto my-10" onClick={handleClick}>
        {todoListNodes}
      </ul>
    </section>
  )
}

