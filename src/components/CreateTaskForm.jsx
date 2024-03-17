import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export default function CreateTaskForm({ project }) {
  const [members, setMembers] = useState({
    Joe: false,
    Lee: false,
    Zaco: false,
    Malcolm: false,
    Jason: false
  });

  const navigate = useNavigate();

  function handleCheckboxChange(event) {
    const { name, checked } = event.target;
    setMembers((prevMembers) => ({
      ...prevMembers,
      [name]: checked
    }));
  };

  function onCreate(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const title = formData.get("title");
    const startDate = formData.get("startDate");
    const endDate = formData.get("endDate");
    const description = formData.get("description");
    const selectMembers = [];
    Object.keys(members).forEach(member => {
      if (formData.get(member) === "on") {
        selectMembers.push(member);
      }
    });

    project.createTask(title, startDate, endDate, description, selectMembers);
    localStorage.setItem("project", JSON.stringify(project));
    navigate("/Leader/Project");
  };

  return (
    <form className="mt-2" action="/" onSubmit={onCreate}>
      <div className="d-grid gap-3">
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">
    Title
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              name="title"
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Start Date</label>
          <div className="col-sm-4">
            <input
              type="date"
              className="form-control"
              name="startDate"
              required
            />
          </div>
          <label className="col-sm-2 col-form-label">End Date</label>
          <div className="col-sm-4">
            <input
              type="date"
              className="form-control"
              name="endDate"
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">
    Description
          </label>
          <div className="col-sm-10">
            <textarea
              className="form-control"
              name="description"
              rows="3"
              required
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-2">Members</div>
          <div className="col-sm-10">
            {Object.keys(members).map(member => (
              <div className="form-check" key={member}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  name={member}
                  checked={members[member]}
                  onChange={handleCheckboxChange}
                />
                <label className="form-check-label" htmlFor={member}>
                  {member}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-10">
            <button type="submit" className="btn btn-primary">
      Submit
            </button>
          </div>
        </div>
      </div>
    </form>

  );

}

CreateTaskForm.propTypes = {
  project: PropTypes.shape({
    createTask: PropTypes.func.isRequired,
  }).isRequired,
};