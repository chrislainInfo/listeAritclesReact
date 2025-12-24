import React from 'react'

function Input({texte, ontexte}) {
  return (
    <>
        <input type="text" placeholder="Recherchez ici" value={texte} onChange={(e) => ontexte(e.target.value)}/>
    </>
  )
}

export default Input
