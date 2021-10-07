import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.module.css'

export const TextField = (props) => {
  const {
    className,
    ...otherProps
  } = props

  return (
    <div
      className={`${styles.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >

    </div>
  )
}

TextField.propTypes = {
    className: PropTypes.string
}

export default TextField
