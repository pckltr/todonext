"use client";

type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
  deleteTodo: (id: string) => void;
};

export default function TodoItem({
  id,
  title,
  complete,
  toggleTodo,
  deleteTodo,
}: TodoItemProps) {
  return (
    <li className="flex gap-1 items-center group">
      <input
        id={id}
        type="checkbox"
        className="cursor-pointer peer"
        defaultChecked={complete}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <label
        htmlFor={id}
        className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500 flex-1"
      >
        {title}
      </label>
      <button
        onClick={() => deleteTodo(id)}
        type="button"
        className="cursor-pointer hidden group-hover:block text-slate-300 border border-slate-300 px-1 rounded hover:bg-red-700 focus-within:bg-red-700 outline-none"
      >
        &times;
      </button>
    </li>
  );
}
