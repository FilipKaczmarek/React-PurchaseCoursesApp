import React from 'react'

import isEmail from 'validator/lib/isEmail';

import FullPageLoader from './Components/FullPageLoader'
import FullPageMessage from './Components/FullPageMessage'
import LoginForm from './Components/LoginForm/LoginForm'
import FullPageLayout from './Components/FullPageLayout'
import CreateAccountForm from './Components/CreateAccountForm'
import RecoverPasswordForm from './Components/RecoverPasswordForm'

import { signIn } from './auth'

const EMAIL_VALIDATION_ERROR = 'Please type a valid e-mail';
const PASSWORD_VALIDATION_ERROR = 'Password must have at least 6 chars!';
const REPEAT_PASSWORD_VALIDATION_ERROR = 'Password must be the same!'

export class App extends React.Component {
  state = {
    // global state
    isLoading: false,
    hasError: false,
    errorMessage: '',
    isInfoDisplayed: false,
    infoMessage: '',

    // user/auth stane
    isUserLoggedIn: false,
    userDisplayName: '',
    userEmail: '',
    userAvatar: '',

    // router state
    notLoginUserRoute: 'LOGIN', // 'CREATE-ACCOUNT' or 'RECOVER-PASSWORD'

    // login page state
    loginEmail: '',
    loginEmailError: EMAIL_VALIDATION_ERROR,
    loginPassword: '',
    loginPasswordError: PASSWORD_VALIDATION_ERROR,
    loginSubmitted: false,

    // create account page state
    createAccountEmail: '',
    createAccountEmailError: EMAIL_VALIDATION_ERROR,
    createAccountPassword: '',
    createAccountPasswordError: PASSWORD_VALIDATION_ERROR,
    createAccountRepeatPassword: '',
    createAccountRepeatPasswordError: REPEAT_PASSWORD_VALIDATION_ERROR,
    createAccountSubmitted: false,

    // recover password state
    recoverPasswordEmail: '',
    recoverPasswordEmailError: EMAIL_VALIDATION_ERROR,
    recoverPasswordSubmitted: false,

    // course list page
    courses: null,
    searchPhrase: '',
  }

  onClickLogin = async () => {
    this.setState(() => ({ loginSubmitted: true }))

    if (this.state.loginEmailError) return
    if (this.state.loginPasswordError) return

    this.setState(() => ({ isLoading: true }))
    try {
      await signIn(this.state.loginEmail, this.state.loginPassword)
    } catch (error) {
      this.setState(() => ({ hasError: true, errorMessage: JSON.stringify(error.data.error.message) }))
    } finally {
      this.setState(() => ({ isLoading: false }))
    }
  }

  onClickCreateAccount = async () => {
    this.setState(() => ({ createAccountSubmitted: true }))

    if (this.state.createAccountEmailError) return
    if (this.state.createAccountPasswordError) return
    if (this.state.createAccountRepeatPasswordError) return

    console.log('onClickCreateAccount')
  }

  onClickRecover = async () => {
    this.setState(() => ({ recoverPasswordSubmitted: true }))

    if (this.state.recoverPasswordEmailError) return

    console.log('onClickRecover')
  }

  dismissError = () => {
    this.setState(() => ({
      hasError: false,
      errorMessage: ''
    }))
  }

  render() {
    const {
      isLoading,
      infoMessage,
      isInfoDisplayed,
      hasError,
      errorMessage,
      notLoginUserRoute,
      loginEmail,
      loginEmailError,
      loginSubmitted,
      loginPassword,
      loginPasswordError,
      createAccountEmail,
      createAccountEmailError,
      createAccountPassword,
      createAccountPasswordError,
      createAccountRepeatPassword,
      createAccountRepeatPasswordError,
      createAccountSubmitted,
      recoverPasswordEmail,
      recoverPasswordEmailError,
      recoverPasswordSubmitted, } = this.state

    return (
      <div className="App">
        {
          notLoginUserRoute === 'LOGIN' ?
            <FullPageLayout>
              <LoginForm
                onClickLogin={this.onClickLogin}
                onClickCreateAccount={() => this.setState(() => ({ notLoginUserRoute: 'CREATE-ACCOUNT' }))}
                onClickForgotPassword={() => this.setState(() => ({ notLoginUserRoute: 'RECOVER-PASSWORD' }))}
                onChangeMail={(e) => {
                  this.setState(() => ({
                    loginEmail: e.target.value,
                    loginEmailError: isEmail(e.target.value) ? '' : EMAIL_VALIDATION_ERROR
                  }))
                }}
                onChangePassword={(e) => {
                  this.setState(() => ({
                    loginPassword: e.target.value,
                    loginPasswordError: e.target.value.length >= 6 ? '' : 'Password must have at least 6 chars!'
                  }))
                }}
                email={loginEmail}
                emailError={loginSubmitted ? loginEmailError : undefined}
                password={loginPassword}
                passwordError={loginSubmitted ? loginPasswordError : undefined}
              />
            </FullPageLayout>
            :
            notLoginUserRoute === 'CREATE-ACCOUNT' ?
              <FullPageLayout>
                <CreateAccountForm
                  email={createAccountEmail}
                  emailError={createAccountSubmitted ? createAccountEmailError : undefined}
                  password={createAccountPassword}
                  passwordError={createAccountSubmitted ? createAccountPasswordError : undefined}
                  repeatPassword={createAccountRepeatPassword}
                  repeatPasswordError={createAccountSubmitted ? createAccountRepeatPasswordError : undefined}
                  onChangeEmail={(e) => this.setState(() => ({
                    createAccountEmail: e.target.value,
                    createAccountEmailError: isEmail(e.target.value) ? '' : EMAIL_VALIDATION_ERROR
                  }))}
                  onChangePassword={(e) => this.setState(() => ({
                    createAccountPassword: e.target.value,
                    createAccountPasswordError: e.target.value.length >= 6 ? '' : PASSWORD_VALIDATION_ERROR,
                    createAccountRepeatPasswordError: createAccountRepeatPassword === e.target.value ? '' : REPEAT_PASSWORD_VALIDATION_ERROR
                  }))}
                  onChangeRepeatPassword={(e) => this.setState(() => ({
                    createAccountRepeatPassword: e.target.value,
                    createAccountRepeatPasswordError: createAccountPassword === e.target.value ? '' : REPEAT_PASSWORD_VALIDATION_ERROR
                  }))}
                  onClickCreateAccount={this.onClickCreateAccount}
                  onClickBackToLogin={() => this.setState(() => ({ notLoginUserRoute: 'LOGIN' }))}
                />
              </FullPageLayout>
              :
              notLoginUserRoute === 'RECOVER-PASSWORD' ?
                <FullPageLayout>
                  <RecoverPasswordForm
                    email={recoverPasswordEmail}
                    emailError={recoverPasswordSubmitted ? recoverPasswordEmailError : undefined}
                    onChangeEmail={(e) => this.setState(() => ({
                      recoverPasswordEmail: e.target.value,
                      recoverPasswordEmailError: isEmail(e.target.value) ? '' : EMAIL_VALIDATION_ERROR
                    }))}
                    onClickRecover={this.onClickRecover}
                    onClickBackToLogin={() => this.setState(() => ({ notLoginUserRoute: 'LOGIN' }))}
                  />
                </FullPageLayout>
                :
                null
        }
        {
          isLoading ?
            <FullPageLoader />
            :
            null
        }
        {
          isInfoDisplayed ?
            <FullPageMessage
              message={infoMessage}
              infoVariant={'info'}
              onButtonClick={console.log}
            />
            :
            null
        }
        {
          hasError ?
            <FullPageMessage
              message={errorMessage}
              iconVariant={'error'}
              onButtonClick={this.dismissError}
            />
            :
            null
        }
      </div>
    );
  }
}

export default App;
