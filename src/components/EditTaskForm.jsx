import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { myFirebase } from "../models/MyFirebase.jsx";



export default function EditTaskForm({ taskId, project }) {
  const navigate = useNavigate();
  const task = project.getTaskById(taskId);

  const [members, setMembers] = useState({
    Joe: false,
    Lee: false,
    Zaco: false,
    Malcolm: false,
    Jason: false
  });

  useEffect(() => {
    const updateMembers = {...members};
    task.members.forEach((member) => {
      updateMembers[member] = true;
    });
    setMembers(updateMembers);
  }, []);

  function handleCheckboxChange(event) {
    const { name, checked } = event.target;
    setMembers((prevMembers) => ({
      ...prevMembers,
      [name]: checked
    }));
  };
    
  async function update(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const selectMembers = [];
    Object.keys(members).forEach(member => {
      if (formData.get(member) === "on") {
        selectMembers.push(member);
      }
    });
    const updateTaskForm = { ...task };
    updateTaskForm.title = formData.get("title");
    updateTaskForm.startDate = formData.get("startDate");
    updateTaskForm.endDate = formData.get("endDate");
    updateTaskForm.description = formData.get("description");
    updateTaskForm.members = selectMembers;
    project.editTask(updateTaskForm);
    await myFirebase.updateProject(project);
    navigate("/Leader/Project");
  };
  return (
    <form className="mt-2" action="/" onSubmit={update}>
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
              defaultValue={task.title}
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
              defaultValue={task.startDate}
              required
            />
          </div>
          <label className="col-sm-2 col-form-label">End Date</label>
          <div className="col-sm-4">
            <input
              type="date"
              className="form-control"
              name="endDate"
              defaultValue={task.endDate}
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
              defaultValue={task.description}
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
        Update
            </button>
          </div>
        </div>
      </div>
    </form>
  
  );
}

EditTaskForm.propTypes = {
  taskId: PropTypes.number.isRequired,
  project: PropTypes.shape({
    getTaskById: PropTypes.func.isRequired,
    editTask: PropTypes.func.isRequired,
  }).isRequired,
};
