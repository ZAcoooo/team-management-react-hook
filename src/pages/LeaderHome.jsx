import React from "react";
import LeaderHomeNavBar from "../fragments/LeaderHomeNavBar";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";

export default function LeaderHome() {
  return (
    <div>
      <LeaderHomeNavBar />
      <div className="container mt-4">
        <h2>My Projects:</h2>
        <Link to="/Leader/Project" style={{ textDecoration: "none" }}>
          <ProjectCard />
        </Link>
      </div>
    </div>
  );
}