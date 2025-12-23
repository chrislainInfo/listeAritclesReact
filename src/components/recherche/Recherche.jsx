import React from 'react'
import Input from './input/Input'
import Checkbox from './checkbox/Checkbox'

function Recherche({texte, ontexte, check, onchange}) {
  return (
    <>
        <Input texte={texte} ontexte={ontexte}/>
        <Checkbox check={check} onchange={onchange}/>
    </>
  )
}

export default Recherche
