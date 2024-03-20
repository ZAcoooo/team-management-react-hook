import React, { useState, useEffect } from "react";
import LeaderProjectNavBar from "../fragments/LeaderProjectNavBar";
import EditTaskForm from "../components/EditTaskForm";
import { useParams } from "react-router-dom";
import { myFirebase } from "../models/MyFirebase.jsx";
import Project from "../models/Project.js";

export default function EditTaskPage() {
  const { taskId } = useParams();
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
        <EditTaskForm project={project} taskId={+taskId}/>        
      )}
      {!project && <p>Loading the form...</p>}
    </div>
  );
}
