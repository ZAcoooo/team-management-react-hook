import React from "react";
import { Link } from "react-router-dom";
import MemberHomeNavBar from "../fragments/MemberHomeNavBar";
import ProjectCard from "../components/ProjectCard";

export default function MemberHome() {
  return (
    <div>
      <MemberHomeNavBar />
      <div className="container mt-4">
        <h2>My Projects:</h2>
        <Link to="/Member/Project" style={{ textDecoration: "none" }}>
          <ProjectCard />
        </Link>
      </div>
    </div>
  );
}
