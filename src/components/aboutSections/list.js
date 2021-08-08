import React from 'react'

const List = ({ items }) => {
  return (
    <div className="list">
    {items.map(item => {
      return (
        <div className="item">{item}</div>
      )
    })}
    </div>
  )
}

export default List
