import React, { useState } from 'react'
import Recherche from './components/recherche/Recherche'
import Table from './components/table/Table'

const articles = [
  { id: 1, title: 'banane', category: 'fruit', price: 100, stocke: true},
  { id: 2, title: 'paume', category: 'fruit', price: 200, stocke: true},
  { id: 3, title: 'orange', category: 'fruit', price: 150, stocke: false},
  { id: 4, title: 'tomate', category: 'legume', price: 300, stocke: false},
  { id: 5, title: 'choux', category: 'legume', price: 250, stocke: true},
  { id: 6, title: 'poivron', category: 'legume', price: 100, stocke: true}
]

function App() {

  const [check, setCheck] = useState(false)
  const [texte, setTexte] = useState("")

  const table = articles.filter(el => {
    if ( check && !el.stocke) {
      return false
    }

    if (texte !== "" && !el.title.includes(texte)) {
      return false
    }

    return true
  }) 

  return (
    <>
      <Recherche texte={texte} ontexte={setTexte} check={check} onchange={setCheck}/>
      <Table articles={table}/>  
    </>
  )
}

export default App
