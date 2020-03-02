import React, { useState, useEffect } from "react";

export default function() {
  let [toDoList, setToDoList] = useState([]);

  const addToDo = () => {
    const inputText = document.querySelector("input").value;
    const listElement = { text: inputText, isDone: false };
    setToDoList([...toDoList, listElement]);
  };

  const removeToDo = e => {
    const removableIndex = +e.target.getAttribute("index");
    let newList = toDoList.filter((item, index) => index !== removableIndex);
    setToDoList(newList);
  };

  const checkToDo = e => {
    const checkIndex = e.target.getAttribute("index");
    let newList = [];
    for (let item of toDoList) {
      newList.push(Object.assign({}, item));
    }
    newList[checkIndex].isDone = true;
    setToDoList(newList);
  };

  return (
    <div>
      <h1>To do list</h1>
      <input type="text" />
      <button onClick={addToDo}>Add todo</button>
      <ol>
        {toDoList.map((item, index) => (
          <li key={index}>
            <span style={item.isDone ? { color: "green" } : null}>
              {item.text}{" "}
            </span>
            <input type="checkbox" index={index} onChange={checkToDo}></input>
            <button index={index} onClick={removeToDo}>
              Remove
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
