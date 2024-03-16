import React from "react";
import { Link } from "react-router-dom";
import MemberHomeNavBar from "../fragments/MemberHomeNavBar";
import ProjectCard from "../components/ProjectCard";
import PropTypes from "prop-types";

export default function MemberHome(props) {
  const { project } = props;
  return (
    <div>
      <MemberHomeNavBar />
      <div className="container mt-4">
        <h2>My Projects:</h2>
        <Link to="/Member/Project" style={{ textDecoration: "none" }}>
          <ProjectCard project={project}/>
        </Link>
      </div>
    </div>
  );
}

MemberHome.propTypes = {
  project: PropTypes.object.isRequired,
};