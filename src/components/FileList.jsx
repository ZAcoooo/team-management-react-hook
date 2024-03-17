import React from "react";
import PropTypes from "prop-types";

export default function FileList({ taskId, files, handleDeleteFile, handleFileDownload, user = "", status = false } = {}) {
  return (
    <>
      <div>
        <p className="card-text mt-2">Files:</p>
      </div>
      <div className="file-list-wrapper" style={{ maxHeight: "100px", overflowY: "auto" }}>
        <ul className="list-group">
          {files.map((file, index) => (
            <li key={index}>
              <span onClick={() => handleFileDownload(file)} style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}>{file.name}</span>
              {user === "member" && !status && (
                <button className="btn btn-outline-danger btn-sm" onClick={() => handleDeleteFile(taskId, file)}>x</button>
              )} 
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
    
FileList.propTypes = {
  taskId: PropTypes.number,
  files: PropTypes.array.isRequired,
  handleDeleteFile: PropTypes.func,
  handleFileDownload: PropTypes.func.isRequired,
  user: PropTypes.string,
  status: PropTypes.bool,
};
  