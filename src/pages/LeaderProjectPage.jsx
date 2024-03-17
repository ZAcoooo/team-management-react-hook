import React from "react";
import LeaderProjectNavBar from "../fragments/LeaderProjectNavBar";
import TaskCardForLeader from "../components/TaskCardForLeader";
import PropTypes from "prop-types";


export default function LeaderProjectPage({ project }){
  return (
    <div>
      <LeaderProjectNavBar />
      <div className="container mt-4">
        <TaskCardForLeader project={project} status={"all"}/>
      </div>
    </div>
  );
}

LeaderProjectPage.propTypes = {
  project: PropTypes.object.isRequired,
};

