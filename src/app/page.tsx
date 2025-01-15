import { playwriteVn } from "./layout";

export default function Home() {
  return (
    <div>
      <header>
        <h1 className={`${playwriteVn.className} text-2xl text-[#FAC67A] mt-6 ml-6`}>Todo App</h1>
      </header>
      <main>
        <section>
          <button type="button" className="inline-flex gap-2 text-[#FED8B1]">
            <span className="material-symbols-outlined">add</span>
            <span>추가하기 Add Something</span>
          </button>
          <ul>
            <li></li>
          </ul>
        </section>
      </main>
    </div>
  );
}
