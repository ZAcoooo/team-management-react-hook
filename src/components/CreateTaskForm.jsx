import React, { Component } from "react";
import PropTypes from "prop-types";

export default class CreateTaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      startDate: "",
      endDate: "",
      description: "",
      members: {
        Joe: false,
        Lee: false,
        Zaco: false,
        Malcolm: false,
        Jason: false
      }
    };
  }

  handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    this.setState(prevState => ({
      members: {
        ...prevState.members,
        [name]: checked
      }
    }));
  };

  onCreate = (event) => {
    event.preventDefault();
    const { project } = this.props;
    const formData = new FormData(event.target);
    const title = formData.get("title");
    const startDate = formData.get("startDate");
    const endDate = formData.get("endDate");
    const description = formData.get("description");
    const members = [];
    
    for (const pair of formData.entries()) {
      const [name] = pair;
      if (name !== "title" && name !== "startDate" && name !== "endDate" && name !== "description") {
        members.push(name);
      }
    }


    project.createTask(title, startDate, endDate, description, members);
    // store in the local browser
    localStorage.setItem("project", JSON.stringify(project));

    // clean the form
    event.target.querySelector("input[name=title]").value = "";
    event.target.querySelector("input[name=startDate]").value = "";
    event.target.querySelector("input[name=endDate]").value = "";
    event.target.querySelector("textarea[name=description]").value = "";
    const checkboxes = event.target.querySelectorAll("input[type=checkbox]");
    checkboxes.forEach(checkbox => {
      checkbox.checked = false;
    });
  };

  render() {
    const { members } = this.state;
    return (
      <form className="mt-2" action="/" onSubmit={this.onCreate}>
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
                    onChange={this.handleCheckboxChange}
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
}

CreateTaskForm.propTypes = {
  project: PropTypes.object.isRequired,
};