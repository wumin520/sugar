function setStorage (name, val) {
  localStorage.setItem(name, val)
}
function getStorage (name) {
  return localStorage.getItem(name)
}
export default {
  setStorage,
  getStorage
}
