import TodoList from "@/containers/TodoList";
import { playwriteVn } from "@/utils/getFonts";

export default function Home() {

  return (
    <>
      <header>
        <h1 className={`${playwriteVn.className} text-2xl text-primary text-center mt-10`}>Todo App</h1>
      </header>
      <main>
        <TodoList />
      </main>
    </>
  );
}
