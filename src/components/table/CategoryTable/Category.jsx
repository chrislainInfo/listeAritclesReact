import React from 'react'

function Category({cat}) {
  return (
    <>
        <tr>
            <th colSpan={4}>{cat}</th>
        </tr>
    </>
  )
}

export default Category
