import "./App.css";
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import { AddTodo } from "./MyComponents/AddTodo";
import { Footer } from "./MyComponents/Footer";
import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("Paa g onDelete thik kam kr reya ay.", todo);
    //wrong method to delete...it will not delete
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const addTodo = (title, desc) => {
    console.log("i am adding Todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(todos);
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      <Header title="My Todos List" searchBar={true} />

      <Routes>
        <Route
          exact
          path="/"
          render={() => {
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>;
          }}
        ></Route>
      </Routes>
      <Routes>
        <Route
          exact
          path="/"
          render={() => {
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>;
          }}
        ></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
