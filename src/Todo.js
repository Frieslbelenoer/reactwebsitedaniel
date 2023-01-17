import React from "react";
import { isFunctionOrConstructorTypeNode } from "typescript";
const root = document.querySelector("#root");

function Todo() {
  const [activity, setActivity] = React.useState("");
  const [edit, setEdit] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  function saveTodoHandler(event) {
    event.preventDefault();

    if (edit.id) {
      const updatedTodo = {
        id: edit.id,
        activity,
      };

      const editTodoIndex = todos.findIndex(function (Todo) {
        return Todo.id == edit.id;
      });

      const updatedTodos = [...todos];

      updatedTodos[editTodoIndex] = updatedTodo;
      console.log(updatedTodos);
      return;
    }

    function generateId() {
      return Date.now();
    }

    setTodos([
      ...todos,
      {
        id: generateId(),
        activity: activity,
      },
    ]);
    setActivity("");
  }

  function removeTodoHandler(TodoId) {
    const filteredTodos = todos.filter(function (Todo) {
      return Todo.id !== TodoId;
    });

    setTodos(filteredTodos);
  }

  function editTodoHandler(Todo) {
    setActivity(Todo.activity);
    setEdit(Todo);
  }

  return (
    <>
      <h1> Isi Todo Mu! </h1>
      <form onSubmit={saveTodoHandler}>
        <input
          type="text"
          placeholder="Masukan aktifitas"
          value={activity}
          className="input"
          onChange={function (event) {
            setActivity(event.target.value);
          }}
        />
        <button type="Submit" className="submit">
          {edit.id ? " Simpab Perubahan " : " Tambah "}
        </button>
      </form>
      <ul>
        {todos.map(function (Todo) {
          return (
            <li key={Todo.id}>
              {" "}
              {Todo.activity}
              <button onClick={editTodoHandler.bind(this, Todo)}>
                {" "}
                Rubah{" "}
              </button>
              <button onClick={removeTodoHandler.bind(this, Todo.id)}>
                {" "}
                Hapus{" "}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Todo;
