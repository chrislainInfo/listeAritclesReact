import React from 'react'

function Article({article}) {

    const style = article.stocke ? {} : {color: 'red'}
  return (
    <>
        <tr style={style}>
            <td>{article.id}</td>
            <td>{article.title}</td>
            <td>{article.price}</td>
            <td>
                <input type="checkbox" checked={article.stocke} />
            </td>
        </tr>
    </>
  )
}

export default Article
