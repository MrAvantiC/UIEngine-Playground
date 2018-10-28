import React from 'react'
import fetch from 'isomorphic-fetch'
import Home from '../src/page_components/Home'

function formatKnowHowItem(item) {
  const { icon } = item

  return {
    ...item,
    icon: icon ? `http://localhost:1337${icon.url}` : null,
  }
}

Home.getInitialProps = async () => {
  const response = await fetch('http://localhost:1337/knowhows')
  let knowHowItems = await response.json()

  knowHowItems = knowHowItems
    .filter(item => item.isActive)
    .map(formatKnowHowItem)
    .sort((a, b) => a.position - b.position)

  return { knowHowItems }
}

export default Home
