import React from "react";

export default function TodoForm(props) {
  const { word, setWord, list, setList, inpRef } = props;
  return (
    <form className="mt-4 w-1/4">
      <input
        type="text"
        onChange={(e) => setWord(e.target.value)}
        value={word}
        className="w-3/4"
        ref={inpRef}
      />
      <button
        type="submit"
        className="p-4 w-1/4"
        onClick={(e) => {
          e.preventDefault();
          if (!word.trim()) return;
          setList(prev => [...prev, word]);
          setWord("");
          inpRef.current.focus();
        }}
      >
        Add
      </button>
    </form>
  );
}
