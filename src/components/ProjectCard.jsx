import React, { useState, useEffect } from "react";
import { myFirebase } from "../models/MyFirebase.jsx";
import Project from "../models/Project.js";

export default function ProjectCard() {
  const [project, setProject] = useState(null);

  useEffect(() => {
    const getProject = async() => {
      setProject(new Project((await myFirebase.getProjects())[0]));
    };
    getProject();
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        {project && (
          <>
            <h5 className="card-title">Name: {project.getTitle()}</h5>
            <p className="card-text">Description: {project.getDescription()}</p>
            <p className="card-text">Project Members: {project.getMembers().join(", ")}</p>
          </>
        )}
        {!project && <p>Loading project...</p>}
      </div>
    </div>
  );
}
