import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { useParams } from "react-router";
import { Link, NavLink } from "react-router-dom";
import "./Todo.css";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const { todoId } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
      .then((response) => response.json())
      .then((data) => setTodo(data));
  }, []);

  return (
    <div className="todo-container">
      <Table responsive="sm">
        <thead>
          <tr>
            <th>User ID</th>
            <th>ID</th>
            <th>Title</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{todo.userId}</td>
            <td>{todo.id}</td>
            <td>{todo.title}</td>
            <td>
              <NavLink className="back-btn" to="/todos">
                Back To Page
              </NavLink>
              <NavLink className="back-btn" to="/home">
                Back To Home
              </NavLink>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Todo;
