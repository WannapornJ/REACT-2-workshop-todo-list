import React from "react";
import { useState } from "react";

export default function List({ id, todo, deleteTodo }) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <li className="flex items-center gap-4">
      <input type="checkbox" onClick={(e) => setIsChecked(e.target.checked)} />
      <p
        style={{
          textDecoration: isChecked ? "line-through" : "none",
          color: isChecked ? "teal" : "black",
          fontWeight: !isChecked ? "bold" : "normal",
        }}
      >
        {todo}
      </p>
      <button className="py-2 px-3 rounded-lg" onClick={() => deleteTodo(id)}>
        del
      </button>
    </li>
  );
}
