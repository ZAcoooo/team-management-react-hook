import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TaskCardForLeader(props) {
  const [project, setProject] = useState(props.project);
  const { status } = props;
  let tasks;
  if (status === "all") {
    tasks = project.getTasks();
  } else if (status === "uncompleted") {
    tasks = project.getUncompletedTasks();
  } else {
    tasks = project.getCompletedTasks();
  }

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
                    <li key={index}>
                      <div>
                        <strong>{comment.getName()}</strong> - {new Date(comment.getDate()).toLocaleString()}:
                      </div>
                      <div>{comment.getContent()}</div>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="card-text">Status: 
                <span style={{fontWeight: "bold", color: task.status.status ? "green" : "red"}}>
                  {task.status.status ? ` Completed - ${new Date(task.status.date).toLocaleString()}` : " Uncompleted"}
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
  project: PropTypes.object.isRequired,
  status: PropTypes.string.isRequired,
};

