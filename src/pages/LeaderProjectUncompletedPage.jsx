import React from "react";
import LeaderProjectNavBar from "../fragments/LeaderProjectNavBar";
import TaskCardForLeader from "../components/TaskCardForLeader";
import PropTypes from "prop-types";


export default function LeaderProjectUncompletedPage({ project }){
  return (
    <div>
      <LeaderProjectNavBar />
      <div className="container mt-4">
        <TaskCardForLeader project={project} status={"uncompleted"}/>
      </div>
    </div>
  );
}

LeaderProjectUncompletedPage.propTypes = {
  project: PropTypes.object.isRequired,
};

