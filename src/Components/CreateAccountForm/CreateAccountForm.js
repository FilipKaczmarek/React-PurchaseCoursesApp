import React from 'react'
import PropTypes from 'prop-types'

import Logo from '../Logo'
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
    createAccount,
    backToLogin,
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
      <TextField
        value={email}
        onChange={onChangeEmail}
      />
      <TextField
        value={password}
        onChange={onChangePassword}
      />
      <TextField
        value={repeatPassword}
        onChange={onChangeRepeatPassword}
      />
      <Button
        variant={'contained'}
        color={'primary'}
        onClick={createAccount}
      >
        CREATE ACCOUNT
      </Button>
      <Button
        variant={'text'}
        onClick={backToLogin}
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
  createAccount: PropTypes.func.isRequired,
  backToLogin: PropTypes.func.isRequired,
}

export default CreateAccountForm
