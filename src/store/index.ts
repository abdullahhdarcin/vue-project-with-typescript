import { createStore } from 'vuex'
import Task from '../models/Task'

export default createStore({
  state: {
    tasks:[
      {
          "title": "Example title 1",
          createdAt: new Date(),
          updatedAt: new Date(),
          "description":"asdasda",
          "completed": false
      },
      {
          "title": "Example title 2",
          createdAt: new Date(),
          updatedAt: new Date(),
          "completed": true
       }
    ] as Task[]
    
  },
  mutations: {
    setTask: (state, task) => state.tasks.push(task)
  },
  actions: {
  },
  modules: {
  }
})
