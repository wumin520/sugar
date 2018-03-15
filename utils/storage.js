export default function StorageFactory (localStorage) {
  try {
    // try to use localStorage
    localStorage.test = 1
  } catch (e) {
    console.log('init storage error!')
  }

  return {
    get (name) {
      let value = localStorage.getItem(name)
      if (/^(\{.*\})|(\[.*\])$/.test(value)) value = JSON.parse(value)
      return value
    },
    set (name, value) {
      if (typeof value === 'object') value = JSON.stringify(value)
      return localStorage.setItem(name, value)
    },
    remove (name) {
      return localStorage.removeItem(name)
    }
  }
}
