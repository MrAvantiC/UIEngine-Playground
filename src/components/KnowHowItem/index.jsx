import React from 'react'
import Heading from '../heading'

const KnowHowItem = ({ item }) => {
  const { title, description, icon } = item

  return (
    <div className="knowhow-item">
      <img src={icon} alt="Optimize" className="knowhow-item__icon" />
      <span className="knowhow-item__info">
        <span element="span" className="knowhow-item__title">
          {title}
        </span>
        <span className="knowhow-item__description">{description}</span>
      </span>
    </div>
  )
}

export default KnowHowItem
