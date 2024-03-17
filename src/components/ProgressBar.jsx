import React from "react";
import PropTypes from "prop-types";

export default function ProgressBar({ totalUncompletedTasks,  totalTasksInPage, completionPercentage}) {
  return (
    <div>
      {totalUncompletedTasks !== null ? (
        <>
          <p>Total uncompleted tasks: {totalUncompletedTasks} / {totalTasksInPage}</p>
          <div className="progress mb-4">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: `${completionPercentage}%` }}
              aria-valuenow={completionPercentage}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              {`${completionPercentage.toFixed(2)}%`}
            </div>
          </div>
        </>
      ) : (
        <p>Total tasks in current page: {totalTasksInPage}</p>
      )}
    </div>
  );
}

ProgressBar.propTypes = {
  totalUncompletedTasks: PropTypes.number.isRequired,
  totalTasksInPage: PropTypes.number.isRequired,
  completionPercentage: PropTypes.number.isRequired,
};