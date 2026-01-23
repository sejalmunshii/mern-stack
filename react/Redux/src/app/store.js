import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/CounterSlice.jsx'
import todoReducer from '../features/todo/TodoSlice.jsx'

export default configureStore({
  reducer: {
    counter: counterReducer,
    todo:todoReducer,
  },
})