import Task from "./Task";

export default function Project({name = "Test Project", 
  description = "This is description of the first test project", 
  tasks = [], 
  members = [
    "Joe",
    "Lee",
    "Zaco",
    "Malcolm",
  ]} = {}) {

  const me = {};

  function getName() {
    return name;
  }

  function getDescription() {
    return description;
  }

  function getMembers() {
    return members || [];
  }

  function createTask(title, startDate, endDate, description, members) {
    tasks.push(
      new Task({
        id: tasks.length + 1,
        title,
        startDate,
        endDate,
        description,
        comments: [],
        members,
      })
    );
  }

  function getTasks() {
    return tasks || [];
  }

  function getTaskById(id) {
    return tasks.find(task => task.id == id);
  }

  function addCommentToTask(taskId, comment) {
    const task = getTaskById(taskId);
    if (task) {
      task.comments.push(comment);
      return true;
    }
    return false;
  }

  function markTaskAsCompleted(taskId) {
    const task = getTaskById(taskId);
    if (task) {
      task.status = true;
      return true;
    }
    return false;
  }

  me.getName = getName;
  me.getDescription = getDescription;
  me.getMembers = getMembers;
  me.createTask = createTask;
  me.getTasks = getTasks;
  me.getTaskById = getTaskById;
  me.addCommentToTask = addCommentToTask;
  me.markTaskAsCompleted = markTaskAsCompleted;
  return me;
}