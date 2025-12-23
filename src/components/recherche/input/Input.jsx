import React from 'react'

function Input({texte, ontexte}) {
  return (
    <>
        <input type="text" value={texte} onChange={(e) => ontexte(e.target.value)}/>
    </>
  )
}

export default Input
