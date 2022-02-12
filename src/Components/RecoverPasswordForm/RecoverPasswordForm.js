import React from 'react'
import PropTypes from 'prop-types'

import Logo from '../Logo'
import Typography from '../Typography'
import TextField from '../TextField'
import Button from '../Button'

import styles from './styles.module.css'

export const RecoverPasswordForm = (props) => {
  const {
    className,
    email,
    emailError,
    onChangeEmail,
    onClickRecover,
    onClickBackToLogin,
    ...otherProps
  } = props

  return (
    <div
      className={`${styles.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <Logo
        className={styles.logo}
      />
      <Typography
        className={styles.header}
        variant={'h1'}
      >
        Recover Password
      </Typography>
      <TextField
        className={styles.textField}
        errorMessage={emailError}
        placeholder={'E-mail'}
        value={email}
        onChange={onChangeEmail}
      />
      <Button
        variant={'contained'}
        color={'primary'}
        className={styles.button}
        onClick={onClickRecover}
      >
        RECOVER
      </Button>
      <Button
        variant={'text'}
        className={styles.button}
        onClick={onClickBackToLogin}
      >
        BACK TO LOGIN
      </Button>
    </div>
  )
}

RecoverPasswordForm.propTypes = {
  className: PropTypes.string,
  email: PropTypes.string.isRequired,
  emailError: PropTypes.string,
  onChangeEmail: PropTypes.func.isRequired,
  onClickRecover: PropTypes.func.isRequired,
  onClickBackToLogin: PropTypes.func.isRequired,
}

export default RecoverPasswordForm
