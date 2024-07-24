import { useEffect, useRef, useState } from "react";
import TodoForm from "./components/TodoForm";
import List from "./components/List";

function App() {
  const [word, setWord] = useState("");
  const [list, setList] = useState([]);

  const inpRef = useRef();

  const deleteTodo = (todoId) => {
    const newList = list.filter((list, index) => index !== todoId);
    setList(newList);
  };

  useEffect(() => {
    inpRef.current.focus();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1>Todo list</h1>
      <TodoForm
        word={word}
        list={list}
        inpRef={inpRef}
        setWord={setWord}
        setList={setList}
      />
      <ul className="mt-4 w-1/4">
        {list?.map((todo, index) => (
          <List
            key={todo + index}
            id={index}
            todo={todo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
