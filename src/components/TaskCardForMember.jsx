import React, {useEffect, useState} from "react";
import Popup from "reactjs-popup";
import PropTypes from "prop-types";


export default function TaskCardForMember(props) {
  const [comment, setComment] = useState("");
  const [taskId, setTaskId] = useState(null);
  const [showCommentPopup, setShowCommentPopup] = useState(false);
  const [showFileUploadPopup, setShowFileUploadPopup] = useState(false);
  const [project, setProject] = useState(props.project);
  const tasks = project.getTasks();

  useEffect(() => {
    localStorage.setItem("project", JSON.stringify(project));
  }, [project]);

  function handleAddComment(id) {
    setTaskId(id);
    setShowCommentPopup(true);
  };

  function handleCommentChange(event) {
    setComment(event.target.value);
  };

  function handleCancelComment() {
    setComment("");
    setTaskId(null);
    setShowCommentPopup(false);
  };

  function handleConfirmComment() {
    if (comment.trim() !== "") {
      const updatedProject = { ...project };
      updatedProject.addCommentToTask(taskId, {id: "" ,content: comment, name: "Zaco", date: Date.now()});
      setProject(updatedProject);
    }
    handleCancelComment();
  };

  function handleMarkCompleted(id) {
    const updatedProject = { ...project };
    updatedProject.markTaskAsCompleted(id);
    setProject(updatedProject);
  };

  function handleDeleteComment(taskId, commentId) {
    const confirmed = window.confirm("Are you sure you want to delete this comment?");
    if (confirmed) {
      const updatedProject = { ...project };
      updatedProject.deleteCommentFromTask(taskId, commentId);
      setProject(updatedProject);
    }
  }

  function handleOpenFileUploadPopup() {
    setShowFileUploadPopup(true);
  }

  function handleCloseFileUploadPopup() {
    setShowFileUploadPopup(false);
  }

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
                      <button className="btn btn-outline-danger" onClick={() => handleDeleteComment(task.id, comment.getId())}>Delete</button>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="card-text">Status: 
                <span style={{fontWeight: "bold", color: task.status ? "green" : "red"}}>
                  {task.status ? " Completed" : " Uncompleted"}
                </span>
              </p>
              <button onClick={() => handleAddComment(task.id)} className="btn btn-primary">Add Comment</button>
              {!task.status && (
                <button onClick={() => handleMarkCompleted(task.id)} className="btn btn-success">Mark as Completed</button>
              )}
              <button onClick={handleOpenFileUploadPopup} className="btn btn-primary">Upload File</button>
            </div>
          </div>
        ))
      )}
      <Popup trigger={<button> Trigger</button>} position="right center">
        <div>Popup content here !!</div>
      </Popup>
      {/* <Popup
        open={showFileUploadPopup}
        closeOnDocumentClick={false}
        onClose={handleCloseFileUploadPopup}
      >
        <div className="popup">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Upload File</h5>
                <button type="button" className="btn-close" onClick={handleCloseFileUploadPopup}></button>
              </div>
              <div className="modal-body">
                <input type="file" className="form-control" />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseFileUploadPopup}>Close</button>
                <button type="button" className="btn btn-primary">Upload</button>
              </div>
            </div>
          </div>
        </div>
      </Popup> */}
      <Popup
        open={showCommentPopup}
        closeOnDocumentClick={false}
        onClose={handleCancelComment}
      >
        <div className="popup">
          <textarea value={comment} onChange={handleCommentChange} />
          <button className="btn btn-outline-success" onClick={handleConfirmComment}>Confirm</button>
          <button className="btn btn-outline-danger" onClick={handleCancelComment}>Cancel</button>
        </div>
      </Popup>
    </div>
  );
}

TaskCardForMember.propTypes = {
  project: PropTypes.shape({
    getTasks: PropTypes.func.isRequired,
    addCommentToTask: PropTypes.func.isRequired,
    markTaskAsCompleted: PropTypes.func.isRequired,
  }).isRequired,
};
