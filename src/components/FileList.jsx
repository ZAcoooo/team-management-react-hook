import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  ref,
  getDownloadURL,
  listAll,
  deleteObject,
} from "firebase/storage";
import { myFirebase } from "../models/MyFirebase";

export default function FileList({ taskId, user = "", status = false } = {}) {
  const [fileList, setFileList] = useState([]);
  useEffect(() => {
    const fileListRef = ref(myFirebase.storage, `${taskId}/`);

    listAll(fileListRef)
      .then((response) => {
        const promises = response.items.map((item) => {
          const filename = item.name.split("/").pop();
          return getDownloadURL(item).then((url) => ({
            name: filename,
            url: url,
          }));
        });
        return Promise.all(promises);
      })
      .then((fileData) => {
        setFileList(fileData);
      })
      .catch((error) => {
        console.error("Error fetching files:", error);
      });
  }, [taskId]);
  const deleteFile = (taskId, file) => {
    const confirmed = window.confirm(`Are you sure you want to delete the file?: ${file.name}`);
    if (confirmed) {
      const fileRef = ref(myFirebase.storage, `${taskId}/${file.name}`);
      deleteObject(fileRef)
        .then(() => {
          console.log("File deleted successfully.");
          setFileList((prevFileList) => prevFileList.filter((f) => f.name !== file.name));
        })
        .catch((error) => {
          console.error("Error deleting file:", error);
        });
    }
  };
  return (
    <>
      <div>
        <p className="card-text mt-2">Files:</p>
      </div>
      <div className="file-list-wrapper" style={{ maxHeight: "100px", overflowY: "auto" }}>
        <ul className="list-group">
          {fileList.map((file, index) => (
            <li key={index}>
              <a
                href={file.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}
              >
                {file.name}
              </a>
              {user === "member" && !status && (
                <button
                  className="file-delete btn btn-outline-danger btn-sm bs-4"
                  onClick={() => deleteFile(taskId, file)}
                >
                  x
                </button>
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
  user: PropTypes.string,
  status: PropTypes.bool,
};
  