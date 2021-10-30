import React from 'react'
import PropTypes from 'prop-types'

import Logo from '../Logo'
import Typography from '../Typography'
import TextField from '../TextField'
import Button from '../Button'

import styles from './styles.module.css'

export const CreateAccountForm = (props) => {
  const {
    className,
    email,
    password,
    repeatPassword,
    onChangeEmail,
    onChangePassword,
    onChangeRepeatPassword,
    onClickCreateAccount,
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
        Create new account
      </Typography>
      <TextField
        value={email}
        placeholder={'E-mail'}
        className={styles.textField}
        onChange={onChangeEmail}
      />
      <TextField
        value={password}
        className={styles.textField}
        placeholder={'Password'}
        type={'password'}
        onChange={onChangePassword}
      />
      <TextField
        value={repeatPassword}
        placeholder={'Repeat Password'}
        type={'password'}
        className={styles.textField}
        onChange={onChangeRepeatPassword}
      />
      <Button
        variant={'contained'}
        color={'primary'}
        onClick={onClickCreateAccount}
        className={styles.button}
      >
        CREATE ACCOUNT
      </Button>
      <Button
        variant={'text'}
        onClick={onClickBackToLogin}
        className={styles.button}
      >
        BACK TO LOGIN
      </Button>
    </div>
  )
}

CreateAccountForm.propTypes = {
  className: PropTypes.string,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  repeatPassword: PropTypes.string.isRequired,
  onChangeEmail: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
  onChangeRepeatPassword: PropTypes.func.isRequired,
  onClickCreateAccount: PropTypes.func.isRequired,
  onClickBackToLogin: PropTypes.func.isRequired,
}

export default CreateAccountForm
