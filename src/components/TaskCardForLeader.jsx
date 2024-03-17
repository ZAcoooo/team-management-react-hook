import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TaskCardForLeader(props) {
  const [project, setProject] = useState(props.project);
  const tasks = project.getTasks();

  function handleDeleteTask(taskId) {
    const confirmDelete = window.confirm("Are you sure you want to delete this task?");
    if (confirmDelete) {
      const updatedProject = { ...project };
      updatedProject.deleteTask(taskId);
      setProject(updatedProject);
    }
  };

  return (
    <div>
      {tasks.length === 0 ? (
        <div className="alert alert-info" role="alert">
          No tasks in this project.
        </div>
      ) : (
        tasks.map((task) => (
          <div key={task.id} className="card mt-4">
            <div className="card-body">
              <h5 className="card-title">Title: {task.title}</h5>
              <p className="card-text">Start Date: {task.startDate}</p>
              <p className="card-text">End Date: {task.endDate}</p>
              <p className="card-text">Description: {task.description}</p>
              <p className="card-text">Assigned Members: {task.members.join(", ")}</p>
              <div>
                <p className="card-text">Comments:</p>
                <ul>
                  {task.comments.map((comment, index) => (
                    <li key={index}>{comment}</li>
                  ))}
                </ul>
              </div>
              <p className="card-text">Status: 
                <span style={{fontWeight: "bold", color: task.status ? "green" : "red"}}>
                  {task.status ? " Completed" : " Uncompleted"}
                </span>
              </p>  
              <button onClick={() => handleDeleteTask(task.id)} className="btn btn-danger">Delete Task</button>           
            </div>
          </div>
        ))
      )}
    </div>
  );
}

TaskCardForLeader.propTypes = {
  project: PropTypes.shape({
    getTasks: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
  }).isRequired,
};

