import React, { useState } from "react";
import PropTypes from "prop-types";
import CommentList from "./CommentList";
import FileList from "./FileList";


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
  function handleFileDownload(downloadFile) {
    const downloadUrl = URL.createObjectURL(downloadFile);
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.setAttribute("download", downloadFile.name);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
  return (
    <div className="container">
      <div className="row">
        {tasks.length === 0 ? (
          <div className="col alert alert-info" role="alert">
            No tasks in this project.
          </div>
        ) : (
          tasks.map((task) => (
            <div key={task.id} className="col-lg-6 col-md-8 col-sm-12">
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title">Title: {task.title}</h5>
                  <p className="card-text">Start Date: {task.startDate}</p>
                  <p className="card-text">End Date: {task.endDate}</p>
                  <p className="card-text">Description: {task.description}</p>
                  <p className="card-text">Assigned Members: {task.members.join(", ")}</p>
                  <CommentList comments={task.comments} />
                  <FileList files={task.files} handleFileDownload={handleFileDownload}/>
                  <p className="card-text">Status: 
                    <span style={{fontWeight: "bold", color: task.status.status ? "green" : "red"}}>
                      {task.status.status ? ` Completed - ${new Date(task.status.date).toLocaleString()}` : " Uncompleted"}
                    </span>
                  </p>  
                  {!task.status.status && (
                    <button onClick={() => handleDeleteTask(task.id)} className="btn btn-danger">Delete Task</button>           
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
  
}

TaskCardForLeader.propTypes = {
  project: PropTypes.object.isRequired,
  status: PropTypes.string.isRequired,
};

