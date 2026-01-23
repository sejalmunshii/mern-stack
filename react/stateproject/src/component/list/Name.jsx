import React from 'react'

function Name() {
    const fruit =["apple","orange","banana","mango"]
  return (
    <>
    <ul>
      {fruit.map((fruit, index) => (
        <li key={fruit}>{index}</li>
      ))}
    </ul>
    </>
  )
}

export default Name;