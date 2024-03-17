import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import CommentModal from "./CommentModal";
import FileModal from "./FileModal";
import CommentList from "./CommentList";
import FileList from "./FileList";
import ProgressBar from "./ProgressBar";


export default function TaskCardForMember(props) {
  const [comment, setComment] = useState("");
  const [file, setFile] = useState(undefined);
  const [taskId, setTaskId] = useState(null);
  const [project, setProject] = useState(props.project);
  const [inputKey, setInputKey] = useState(0);
  const [sortBy, setSortBy] = useState("id");
  const { status } = props;
  let tasks;
  if (status === "all") {
    tasks = project.getTasks();
  } else if (status === "uncompleted") {
    tasks = project.getUncompletedTasks();
  } else {
    tasks = project.getCompletedTasks();
  }
  useEffect(() => {
    localStorage.setItem("project", JSON.stringify(project));
  }, [project]);

  function handleCurrentTask(id) {
    setInputKey((prevKey) => prevKey + 1);
    setTaskId(id);
  };

  function handleFileChange(event) {
    setFile(event.target.files[0]);
  };

  function handleCommentChange(event) {
    setComment(event.target.value);
  };

  function handleCancelComment() {
    setComment("");
    setTaskId(null);
  };

  function handleCancelFile() {
    setFile(null);
    setTaskId(null);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  if (sortBy === "title") {
    tasks.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortBy === "id") {
    tasks.sort((a, b) => a.id - b.id);
  }

  function handleConfirmComment() {
    if (comment.trim() !== "") {
      const updatedProject = { ...project };
      updatedProject.addCommentToTask(taskId, {id: "" ,content: comment, name: "Zaco", date: Date.now()});
      setProject(updatedProject);
    }
    handleCancelComment();
  };

  function handleFileUpload() {
    if (file) {
      const updatedProject = { ...project };
      updatedProject.uploadFileToTask(taskId, file);
      setProject(updatedProject);
    }
    handleCancelFile();
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

  function handleMarkCompleted(id) {
    const confirmed = window.confirm("Are you sure you want to mark it as completed?");
    if (confirmed) {
      const updatedProject = { ...project };
      updatedProject.markTaskAsCompleted(id);
      setProject(updatedProject);
    }
  };

  function handleDeleteComment(taskId, commentId) {
    const confirmed = window.confirm("Are you sure you want to delete this comment?");
    if (confirmed) {
      const updatedProject = { ...project };
      updatedProject.deleteCommentFromTask(taskId, commentId);
      setProject(updatedProject);
    }
  }

  function handleDeleteFile(taskId, file) {
    const confirmed = window.confirm("Are you sure you want to delete this file?");
    if (confirmed) {
      const updatedProject = { ...project };
      updatedProject.deleteFileFromTask(taskId, file);
      setProject(updatedProject);
    }
  }



  const totalTasksInPage = tasks.length;
  const totalUncompletedTasks = status === "all" ? tasks.filter(task => !task.status.status).length : null;
  const completionPercentage = totalTasksInPage > 0 ? ((totalTasksInPage - totalUncompletedTasks) / totalTasksInPage) * 100 : 0;

  return (
    <div className="container">

      <div className="mb-3">
        <label htmlFor="sortSelect" className="form-label">Sort by:</label>
        <select className="form-select" id="sortSelect" value={sortBy} onChange={handleSortChange}>
          <option value="id">Creation time</option>
          <option value="title">Title</option>
        </select>
      </div>

      <ProgressBar totalTasksInPage={totalTasksInPage} totalUncompletedTasks={totalUncompletedTasks} completionPercentage={completionPercentage}/>

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
                  <CommentList taskId={task.id} comments={task.comments} handleDeleteComment={handleDeleteComment} user={"member"} status={task.status.status}/>
                  <FileList taskId={task.id} files={task.files} handleDeleteFile={handleDeleteFile} handleFileDownload={handleFileDownload} user={"member"} status={task.status.status}/>
                  <p className="card-text">Status: 
                    <span style={{fontWeight: "bold", color: task.status.status ? "green" : "red"}}>
                      {task.status.status ? ` Completed - ${new Date(task.status.date).toLocaleString()}` : " Uncompleted"}
                    </span>
                  </p>
                  {!task.status.status && (
                    <>
                      <CommentModal taskId={task.id} handleCurrentTask={handleCurrentTask} comment={comment} handleCommentChange={handleCommentChange} handleConfirmComment={handleConfirmComment} handleCancelComment={handleCancelComment}/>
                      <FileModal taskId={task.id} handleCurrentTask={handleCurrentTask} handleFileChange={handleFileChange} handleFileUpload={handleFileUpload} handleCancelFile={handleCancelFile} inputKey={inputKey}/>
                      <button onClick={() => handleMarkCompleted(task.id)} className="btn btn-success mb-2">Mark as Completed</button>
                    </>
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

TaskCardForMember.propTypes = {
  project: PropTypes.shape({
    getTasks: PropTypes.func.isRequired,
    addCommentToTask: PropTypes.func.isRequired,
    markTaskAsCompleted: PropTypes.func.isRequired,
  }).isRequired,
  status: PropTypes.string.isRequired,
};
