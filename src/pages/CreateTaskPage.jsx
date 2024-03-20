import React, { useState, useEffect } from "react";
import LeaderProjectNavBar from "../fragments/LeaderProjectNavBar";
import CreateTaskForm from "../components/CreateTaskForm";
import { myFirebase } from "../models/MyFirebase.jsx";
import Project from "../models/Project.js";

export default function CreateTaskPage() {
  const [project, setProject] = useState(null);

  useEffect(() => {
    const getProject = async() => {
      setProject(new Project((await myFirebase.getProjects())[0]));
    };
    getProject();
  }, []);
  return (
    <div>
      <LeaderProjectNavBar />
      {project && (
        <CreateTaskForm project={project}/>        
      )}
      {!project && <p>Loading tasks...</p>}
    </div>
  );
}
