import React from "react";
import { Link } from "react-router-dom";

export default function LeaderProjectNavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={{ fontSize: "28px", fontWeight: "bold" }}>Login Page</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/Leader" style={{ fontSize: "20px" }}>Leader Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/Leader/Project" style={{ fontSize: "20px" }}>View Tasks</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/Leader/Project/CreateTask" style={{ fontSize: "20px" }}>Create Task</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}