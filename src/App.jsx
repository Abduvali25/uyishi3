import { useState, useRef } from "react";
import Task from "./Task";
import './App.css'

const init = [
  {
    id: 1,
    title: "Buy groceries",
    done: false,
  },
  {
    id: 2,
    title: "Walk the dog",
    done: true,
  },
  {
    id: 3,
    title: "Complete homework",
    done: false,
  },
  {
    id: 4,
    title: "Read a book",
    done: true,
  },
  {
    id: 5,
    title: "Exercise",
    done: false,
  },
];

export default function App() {
  const [todos, setTodos] = useState(init);
  const [text, setText] = useState("");
  const [done, setDone] = useState(false);

  const inputRef = useRef();

  const deleteTodo = (id) => {
    const newTodos = todos.filter((t) => {
      // 2
      return t.id != id;
    });

    setTodos(newTodos);
  };

  const addNewTodo = (event) => {
    const newTodo = {
      id: Date.now(),
      title: text,
      done: false,
    };

    inputRef.current.value = "";
    inputRef.current.focus();

    const newTodos = [...todos];
    newTodos.push(newTodo);
    setTodos(newTodos);
  };
  
  const doneTask= (id) => {
    const newTodos = todos.filter((t) => {
      // 2
      return t.id != id;
      newTodos.push(divBox)
    });
  
    setDone(newTodos);
  };

  const editTask = (id, title) => {
    const newTasks = todos.map((todo) => {
      if (todo.id == id) {
        return {
          ...todo,
          title,
        };
      } else {
        return todo;
      }
    });

    setTodos(newTasks);
  };

  return (
    <div className="todo">
       <input className="adding-input" placeholder="Add a new task"
        ref={inputRef}
        type="text"
        onChange={(event) => setText(event.target.value)}
      />
      <button className="adding-button" disabled={text == ""} onClick={addNewTodo}>
        +
      </button>


      <h1 className="headerTitle">Soni: {todos.length > 0 ? todos.length : "Bo'sh"}</h1>
      <ul className="ul-box">
        {todos.map((t) => {
          return (
            <Task
              key={t.id}
              title={t.title}
              id={t.id}
              onDelete={() => deleteTodo(t.id)}
              onEdit={editTask}
              onDone={doneTask}
            />
          );
        })}
      </ul>
     
    </div>
  );
}



