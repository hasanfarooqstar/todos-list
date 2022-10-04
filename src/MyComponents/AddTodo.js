import React from "react";
import { useState } from "react";

export const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState(" ");
  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or decs can't be blank");
    } else {
      addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  };
  return (
    <div className="container">
      <h1>AddTodo List</h1>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo Title
          </label>
          <input
            value={title}
            type="text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Todo Description
          </label>
          <input
            value={desc}
            type="text"
            className="form-control"
            id="desc"
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
