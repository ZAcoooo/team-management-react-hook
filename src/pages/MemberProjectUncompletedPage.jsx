import React from "react";
import MemberProjectNavBar from "../fragments/MemberProjectNavBar";
import TaskCardForMember from "../components/TaskCardForMember";
import PropTypes from "prop-types";


export default function MemberProjectUncompletedPage({ project }) {
  return (
    <div>
      <MemberProjectNavBar />
      <div className="container mt-4">
        <TaskCardForMember project={project} status={"uncompleted"}/>
      </div>
    </div>
  );
}

MemberProjectUncompletedPage.propTypes = {
  project: PropTypes.object.isRequired,
};
