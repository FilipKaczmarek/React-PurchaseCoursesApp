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
    ...otherProps
  } = props

  return (
    <div
      className={`${styles.root}${className ? ` ${className}` : ''}`}
      {...otherProps}
    >
      <Logo className={styles.logo}/>
      <Typography
        variant={'h1'}
        className={styles.header}
      >
        Log in 👋
      </Typography>
      <TextField className={styles.textField} placeholder={'E-mail'} />
      <TextField className={styles.textField} placeholder={'Password'} />
      <Button className={styles.button} variant={'contained'} color={'primary'}>
        LOGIN
      </Button>
      <Button className={styles.button} variant={'contained'} color={'secondary'}>
        CREATE ACCOUNT
      </Button>
      <Button className={styles.button} variant={'text'}>
        FORGOT PASSWORD
      </Button>
    </div>
  )
}

LoginForm.propTypes = {
  className: PropTypes.string
}

export default LoginForm
