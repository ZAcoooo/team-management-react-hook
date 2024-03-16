import React from "react";
import LeaderProjectNavBar from "../fragments/LeaderProjectNavBar";
import CreateTaskForm from "../components/CreateTaskForm";
import PropTypes from "prop-types";

export default function CreateTaskPage(props) {
  const { project } = props;
  return (
    <div>
      <LeaderProjectNavBar />
      <CreateTaskForm project={project}/>
    </div>
  );
}

CreateTaskPage.propTypes = {
  project: PropTypes.object.isRequired,
};
