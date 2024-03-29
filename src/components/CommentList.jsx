import React from "react";
import PropTypes from "prop-types";

export default function CommentList({ taskId, comments, handleDeleteComment, user = "", status = false } = {}) {
  return (
    <>
      <div>
        <p className="card-text mb-2">Comments:</p>
      </div>
      <div className="comment-list-wrapper" style={{ maxHeight: "180px", overflowY: "auto" }}>
        <ul className="list-group">
          {comments.map((comment, index) => (
            <li key={index} className="list-group-item">
              <div>
                <strong>{comment.name}</strong> - {new Date(comment.date).toLocaleString()}:
              </div>
              <div style={{ whiteSpace: "pre-line" }}>
                {comment.content}
              </div>
              {user === "member" && !status && (
                <button className="btn btn-outline-danger btn-sm" onClick={() => handleDeleteComment(taskId, comment.id)}>
                Delete
                </button>
              )}          
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
  
CommentList.propTypes = {
  taskId: PropTypes.number,
  comments: PropTypes.array.isRequired,
  handleDeleteComment: PropTypes.func,
  user: PropTypes.string,
  status: PropTypes.bool,
};
