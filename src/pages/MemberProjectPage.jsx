import React from "react";
import MemberProjectNavBar from "../fragments/MemberProjectNavBar";
import TaskCardForMember from "../components/TaskCardForMember";
import PropTypes from "prop-types";


export default function MemberProjectPage(props) {
  const { project } = props;
  return (
    <div>
      <MemberProjectNavBar />
      <div className="container mt-4">
        <TaskCardForMember project={project}/>
      </div>
    </div>
  );
}

MemberProjectPage.propTypes = {
  project: PropTypes.object.isRequired,
};
