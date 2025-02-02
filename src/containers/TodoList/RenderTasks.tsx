import { IProps, ITodoList } from "./types"

export default function RenderTasks({ todoList, setTodoList }: IProps) {

  const todoListNodes = todoList.map((item: ITodoList) => { 

    return <li key={item.id} id={item.id} className="bg-primary rounded-lg px-4 py-1 w-full break-words">{item.task}</li> }
  )

  const handleClick = (e: React.MouseEvent<HTMLUListElement>) => {
    const target = e.target as HTMLUListElement

    const filteredTodoList = todoList.filter((item) => item.id !== target.id)

    setTodoList(filteredTodoList)
  }

  return (
    <section>
      <ul onClick={handleClick} className="flex flex-col flex-wrap gap-5 justify-center w-[20em] mx-auto my-16" >
        {todoListNodes}
      </ul>
    </section>
  )
}

