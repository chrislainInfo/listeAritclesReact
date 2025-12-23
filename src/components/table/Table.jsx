import React from 'react'
import Category from './CategoryTable/Category'
import Article from './ArticlesTable/Article'

function Table({articles}) {

    const table = []
    let category = ""
    for( let element of articles) {
        if (category !== element.category) {
            table.push(<Category key={element.id} cat={element.category}/>)
            category = element.category
        }

        table.push(<Article key={element.title} article={element}/>)

    }

  return (
    <>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Stock</th>
                </tr>
            </thead>
            <tbody>
                {
                    table
                }
            </tbody>
        </table>
    </>
  )
}

export default Table
