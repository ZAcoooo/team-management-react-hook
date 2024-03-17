export default function Comment({ id, content, name, date } = {}) {
  const me = {};
  function getId() {
    return id;
  }
  function getContent() {
    return content;
  }
  function getName() {
    return name;
  }
  function getDate() {
    return date;
  }
  me.getId = getId;
  me.getContent = getContent;
  me.getName = getName;
  me.getDate = getDate;
  return me;
}