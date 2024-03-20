import React, { useState, useEffect } from "react";
import MemberProjectNavBar from "../fragments/MemberProjectNavBar";
import TaskCardForMember from "../components/TaskCardForMember";
import { myFirebase } from "../models/MyFirebase.jsx";
import Project from "../models/Project.js";

export default function MemberProjectUncompletedPage() {
  const [project, setProject] = useState(null);

  useEffect(() => {
    const getProject = async() => {
      setProject(new Project((await myFirebase.getProjects())[0]));
    };
    getProject();
  }, []);
  return (
    <div>
      <MemberProjectNavBar />
      <div className="container mt-4">
        {project && (
          <TaskCardForMember project={project} status={"uncompleted"}/>
        )}
        {!project && <p>Loading tasks...</p>}
      </div>
    </div>
  );
}


