import React from 'react'

const Students = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.usn}</p>
      <p>{props.branch}</p>
    </div>
  )
}

export default Students
