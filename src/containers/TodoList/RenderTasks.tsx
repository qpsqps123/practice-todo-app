import { Dispatch, SetStateAction } from 'react'
import {v4 as uuidv4} from 'uuid'
interface IProps {
  todoList: string[],
  setTodoList: Dispatch<SetStateAction<string[]>>,
}
export default function RenderTasks({ todoList }: IProps) {
  const todoListNodes = todoList.map((item: string) => { 
    const id = uuidv4() 

    return <li key={id}>{item}</li> }
  )

  const handleClick = () => {
    
  }

  return (
    <section>
      <ul onClick={handleClick}>
        {todoListNodes}
      </ul>
    </section>
  )
}

