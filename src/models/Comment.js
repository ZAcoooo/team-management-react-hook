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
  me.id = getId();
  me.content = getContent();
  me.name = getName();
  me.date = getDate();
  return me;
}