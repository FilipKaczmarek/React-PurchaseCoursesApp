import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.module.css'

export const CreateAccountForm = (props) => {
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

CreateAccountForm.propTypes = {
    className: PropTypes.string
}

export default CreateAccountForm
