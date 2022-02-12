import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.module.css'

export const TextField = (props) => {
  const {
    className,
    errorMessage,
    ...otherProps
  } = props

  return (
    <div className={styles.root}>
      <input
        className={`${styles.input}${className ? ` ${className}` : ''}${errorMessage ? ` ${styles.hasError}` : ''
          }`}
        {...otherProps}
      />
      <div className={styles.errorMessage}>
        {errorMessage}
      </div>
    </div>
  )
}

TextField.propTypes = {
  className: PropTypes.string
}

export default TextField
