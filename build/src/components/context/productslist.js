import React from 'react'

function Productslist() {
  const names=["vikasj","dfdf"]
  return (
    <>
      <ul>
      {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </>
  )
}

export default Productslist
