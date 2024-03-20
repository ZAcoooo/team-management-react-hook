import React, { useState, useEffect } from "react";
import LeaderProjectNavBar from "../fragments/LeaderProjectNavBar";
import TaskCardForLeader from "../components/TaskCardForLeader";
import { myFirebase } from "../models/MyFirebase.jsx";
import Project from "../models/Project.js";

export default function LeaderProjectPage(){
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
      <div className="container mt-4">
        {project && (
          <TaskCardForLeader project={project} status={"all"}/>
        )}
        {!project && <p>Loading tasks...</p>}
      </div>
    </div>
  );
}
