import React, { Component } from "react";
import PropTypes from "prop-types";
import Popup from "reactjs-popup";

class TaskCardForMember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
      taskId: null,
      showCommentPopup: false
    };
  }

  handleAddComment = (taskId) => {
    this.setState({ taskId, showCommentPopup: true });
  };

  handleCommentChange = (event) => {
    this.setState({ comment: event.target.value });
  };

  handleCancelComment = () => {
    this.setState({ comment: "", taskId: null, showCommentPopup: false });
  };

  handleConfirmComment = () => {
    const { comment, taskId } = this.state;
    if (comment.trim() !== "") {
      const { project } = this.props;
      project.addCommentToTask(taskId, comment);
      this.setState({ project }, () => {
        localStorage.setItem("project", JSON.stringify(this.state.project));
      });
    }
    this.setState({ comment: "", taskId: null, showCommentPopup: false });
  };

  handleMarkCompleted = (taskId) => {
    const { project } = this.props;
    project.markTaskAsCompleted(taskId);
    this.setState({ project }, () => {
      localStorage.setItem("project", JSON.stringify(this.state.project));
    });
  };

  render() {
    const { tasks } = this.props.project;
    const { comment, showCommentPopup } = this.state;

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
                <button onClick={() => this.handleAddComment(task.id)} className="btn btn-primary">Add Comment</button>
                {!task.status && (
                  <button onClick={() => this.handleMarkCompleted(task.id)} className="btn btn-success">Mark as Completed</button>
                )}
              </div>
            </div>
          ))
        )}
        <Popup
          open={showCommentPopup}
          closeOnDocumentClick={false}
          onClose={this.handleCancelComment}
        >
          <div className="popup">
            <textarea value={comment} onChange={this.handleCommentChange} />
            <button onClick={this.handleConfirmComment}>Confirm</button>
            <button onClick={this.handleCancelComment}>Cancel</button>
          </div>
        </Popup>
      </div>
    );
  }
}

TaskCardForMember.propTypes = {
  project: PropTypes.shape({
    tasks: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        startDate: PropTypes.string.isRequired,
        endDate: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        comments: PropTypes.arrayOf(PropTypes.string).isRequired,
        members: PropTypes.arrayOf(PropTypes.string).isRequired,
        status: PropTypes.bool.isRequired,
      })
    ).isRequired,
    addCommentToTask: PropTypes.func.isRequired,
    markTaskAsCompleted: PropTypes.func.isRequired,
  }).isRequired,
};

export default TaskCardForMember;
