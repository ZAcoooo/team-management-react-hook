import React from "react";
import LeaderProjectNavBar from "../fragments/LeaderProjectNavBar";
import EditTaskForm from "../components/EditTaskForm";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

export default function CreateTaskPage({ project }) {
  const { taskId } = useParams();
  return (
    <div>
      <LeaderProjectNavBar />
      <EditTaskForm project={project} taskId={+taskId}/>
    </div>
  );
}

CreateTaskPage.propTypes = {
  project: PropTypes.object.isRequired,
};
