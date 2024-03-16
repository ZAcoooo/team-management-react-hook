import React from "react";
import PropTypes from "prop-types";

export default function ProjectCard(props) {
  const { project } = props;
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Name: {project.getName()}</h5>
        <p className="card-text">Description: {project.getDescription()}</p>
        <p className="card-text">Project Members: {project.getMembers().join(", ")}</p>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
};