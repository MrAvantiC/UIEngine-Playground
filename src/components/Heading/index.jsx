import React from 'react'
import PropTypes from 'prop-types'

const createTag = element => `${element}`

const Heading = ({ children, element }) => {
  // TODO: Remove prop-section from page and refactor this
  element = element || 'h1'
  const Tag = createTag(element)

  return <Tag>{children}</Tag>
}

export default Heading
