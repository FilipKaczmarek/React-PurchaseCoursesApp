import React from 'react'
import PropTypes from 'prop-types'

import Logo from '../Logo'
import Typography from '../Typography'
import TextField from '../TextField'
import Button from '../Button'

import styles from './styles.module.css'


export const LoginForm = (props) => {
  const {
    className,
    onClickLogin,
    onClickCreateAccount,
    onClickForgotPassword,
    onChangeMail,
    onChangePassword,
    email,
    emailError,
    password,
    ...otherProps
  } = props

  return (
    <div
      className={`${styles.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <Logo className={styles.logo} />
      <Typography
        variant={'h1'}
        className={styles.header}
      >
        Log in 👋
      </Typography>
      <TextField
        className={styles.textField}
        placeholder={'E-mail'}
        errorMessage={emailError}
        value={email}
        onChange={onChangeMail}
      />
      <TextField
        className={styles.textField}
        type={'password'}
        placeholder={'Password'}
        value={password}
        onChange={onChangePassword} />
      <Button
        className={styles.button}
        variant={'contained'}
        color={'primary'}
        onClick={onClickLogin}>
        LOGIN
      </Button>
      <Button
        className={styles.button}
        variant={'contained'}
        color={'secondary'}
        onClick={onClickCreateAccount}>
        CREATE ACCOUNT
      </Button>
      <Button
        className={styles.button}
        variant={'text'}
        onClick={onClickForgotPassword}>
        FORGOT PASSWORD
      </Button>
    </div>
  )
}

LoginForm.propTypes = {
  className: PropTypes.string,
  onClickLogin: PropTypes.func.isRequired,
  onClickCreateAccount: PropTypes.func.isRequired,
  onClickForgotPassword: PropTypes.func.isRequired,
  onChangeMail: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  emailError: PropTypes.string,
  password: PropTypes.string.isRequired
}

export default LoginForm
