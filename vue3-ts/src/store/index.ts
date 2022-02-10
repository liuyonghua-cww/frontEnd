import { createStore } from 'vuex';
import { todoModule as todo } from './modules/todo';

export default createStore({
  modules: {
    todo
  }
})
