import Task from "./Task";
import Comment from "./Comment";

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
        id: Date.now(),
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

  function addCommentToTask(taskId, commentData) {
    const task = getTaskById(taskId);
    const comment = new Comment({ ...commentData, id: commentData.name + commentData.date });
    if (task) {
      task.comments.push(comment);
      return true;
    }
    return false;
  }

  function markTaskAsCompleted(taskId) {
    const task = getTaskById(taskId);
    if (task) {
      task.status.status = true;
      task.status.date = Date.now();
      return true;
    }
    return false;
  }

  function deleteTask(taskId) {
    const index = tasks.findIndex(task => task.id === taskId);
    if (index !== -1) {
      tasks.splice(index, 1);
      return true;
    }
    return false;
  }

  function deleteCommentFromTask(taskId, commentId) {
    const task = getTaskById(taskId);
    const index = task.comments.findIndex(comment => comment.getId() === commentId);
    if (index !== -1) {
      task.comments.splice(index, 1);
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
  me.deleteTask = deleteTask;
  me.deleteCommentFromTask = deleteCommentFromTask;
  return me;
}