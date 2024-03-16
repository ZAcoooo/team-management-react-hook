import React from "react";
import LeaderProjectNavBar from "../fragments/LeaderProjectNavBar";
import TaskCardForLeader from "../components/TaskCardForLeader";
import PropTypes from "prop-types";


export default function LeaderProjectPage(props){
  const { project } = props;
  return (
    <div>
      <LeaderProjectNavBar />
      <div className="container mt-4">
        <TaskCardForLeader project={project}/>
      </div>
    </div>
  );
}

LeaderProjectPage.propTypes = {
  project: PropTypes.object.isRequired,
};

