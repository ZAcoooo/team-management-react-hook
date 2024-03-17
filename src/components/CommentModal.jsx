import React from "react";
import PropTypes from "prop-types";

export default function CommentModal({ taskId, handleAddComment, comment, handleCommentChange, handleConfirmComment, handleCancelComment }) {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#commentModal"
        onClick={() => handleAddComment(taskId)}
      >
                Add Comment
      </button>
      <div
        className="modal fade"
        id="commentModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="commentModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="commentModalLongTitle">
                  Comment
              </h5>
              <button
                type="button"
                className="btn btn-outline-dark btn-sm"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <textarea 
                className="form-control" 
                rows="3" 
                value={comment} 
                onChange={handleCommentChange}
                placeholder="Enter your comment"></textarea>
              <div className="modal-footer">
                <button 
                  type="button" 
                  className="btn btn-outline-success" 
                  onClick={handleConfirmComment} 
                  data-bs-dismiss="modal">
                  Confirm
                </button>
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={handleCancelComment}
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

CommentModal.propTypes = {
  taskId: PropTypes.number.isRequired,
  handleAddComment: PropTypes.func.isRequired,
  comment: PropTypes.string.isRequired,
  handleCommentChange: PropTypes.func.isRequired,
  handleConfirmComment: PropTypes.func.isRequired,
  handleCancelComment: PropTypes.func.isRequired,
};