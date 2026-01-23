import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,incrementByAmount } from '../features/counter/CounterSlice'
// import styles from './Counter.module.css

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button className='btn btn-success'
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
        className='btn btn-danger'
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Decrement value"
          className='btn btn-info'
          onClick={() => dispatch(incrementByAmount(10))}
        >
          increment by 10
        </button>
      </div>
    </div>
  )
}