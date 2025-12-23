import React from 'react'

function Checkbox({check, onchange}) {
  return (
    <>
        <input type="checkbox" id='check' checked={check} onChange={(e) => onchange(e.target.checked)}/>
        <label htmlFor="check">N'afficher que les produits en stock</label>
    </>
  )
}

export default Checkbox
