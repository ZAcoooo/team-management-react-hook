export default function Task({id = "", title, startDate, endDate, description, comments = [], members = []} = {}) {
  const me = {};
  me.id = id;
  me.title = title;
  me.startDate = startDate;
  me.endDate = endDate;
  me.description = description;
  me.comments = comments;
  me.members = members;
  me.status = false;
  return me;
}