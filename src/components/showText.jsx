import React from 'react'

const ShowText = ({val}) => {
  return (
    <div>
        <h1>{val}</h1>
        <h3>count : {val?val.trim().split(" ").length:0}</h3>
    </div>
  )
}

export default ShowText