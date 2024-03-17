import React from "react";
import MemberProjectNavBar from "../fragments/MemberProjectNavBar";
import TaskCardForMember from "../components/TaskCardForMember";
import PropTypes from "prop-types";


export default function MemberProjectCompletedPage({ project }) {
  return (
    <div>
      <MemberProjectNavBar />
      <div className="container mt-4">
        <TaskCardForMember project={project} status={"completed"}/>
      </div>
    </div>
  );
}

MemberProjectCompletedPage.propTypes = {
  project: PropTypes.object.isRequired,
};
