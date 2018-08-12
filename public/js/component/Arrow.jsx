import React from 'react'

import './Arrow.scss'

function Arrow (props) {
  const classes = `arrow ${props.direction}_arrow`
  const altText = `${props.direction} arrow`

  return (
    <img width="46px" className={classes} src="/img/landing/arrow.svg" alt={altText} />
  )
}

export default Arrow
