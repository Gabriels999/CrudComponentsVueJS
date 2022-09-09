import axios from 'axios'

export default {
  getTasks: (callback) => {
    axios.get('http://localhost:3000/tasks/').then((r) => callback(r.data))
  },
  getTask: (taskId, callback) => {
    axios
      .get(`http://localhost:3000/tasks/${taskId}`)
      .then((r) => callback(r.data))
  },
  postTask: (newTask, callback) => {
    axios
      .post('http://localhost:3000/tasks/', newTask)
      .then((r) => callback(r.data))
  },
}
