import { createStore } from 'vuex'
import deviceStore from './deviceStore'
import model from './modelStore'

export default createStore({
  modules: {
    model: model,
    device: deviceStore
  },
  strict:true
})
