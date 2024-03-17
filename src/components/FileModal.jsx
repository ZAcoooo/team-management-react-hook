import React from "react";
import PropTypes from "prop-types";

export default function FileModal({ taskId, handleCurrentTask, handleFileChange, handleFileUpload, handleCancelFile, inputKey }) {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#fileModal"
        onClick={() => handleCurrentTask(taskId)}
      >
            Upload File
      </button>
        
      <div
        className="modal fade"
        id="fileModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="fileModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="fileModalLongTitle">
                    File
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
              <div className="mb-3">
                <label htmlFor="formFileSm" className="form-label">
                            Upload your file
                </label>
                <input key={inputKey} className="form-control form-control-sm" id="formFileSm" type="file" onChange={handleFileChange}/>
              </div>
              <div className="modal-footer">
                <button 
                  type="button" 
                  className="btn btn-outline-success" 
                  data-bs-dismiss="modal"
                  onClick={handleFileUpload}
                >
                          Upload
                </button>
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  data-bs-dismiss="modal"
                  onClick={handleCancelFile}
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

FileModal.propTypes = {
  taskId: PropTypes.number.isRequired,
  handleCurrentTask: PropTypes.func.isRequired,
  handleFileChange: PropTypes.func.isRequired,
  handleFileUpload: PropTypes.func.isRequired,
  handleCancelFile: PropTypes.func.isRequired,
  inputKey: PropTypes.number.isRequired,
};