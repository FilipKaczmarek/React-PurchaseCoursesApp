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
    <div className={`${styles.root}${className ? ` ${className}` : ''}`}>
      <input
        className={`${styles.input}${errorMessage ? ` ${styles.hasError}` : ''
          }`}
        {...otherProps}
      />
      {errorMessage ?
        <div className={styles.errorMessage}>
          {errorMessage}
        </div>
        :
        null}
    </div>
  )
}

TextField.propTypes = {
  className: PropTypes.string
}

export default TextField
