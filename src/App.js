import React from 'react'

import isEmail from 'validator/lib/isEmail';

import FullPageLoader from './Components/FullPageLoader'
import FullPageMessage from './Components/FullPageMessage'
import LoginForm from './Components/LoginForm/LoginForm'
import FullPageLayout from './Components/FullPageLayout'
import CreateAccountForm from './Components/CreateAccountForm'
import RecoverPasswordForm from './Components/RecoverPasswordForm'

import { signIn } from './auth'

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
    loginEmailError: '',
    loginPassword: '',
    loginPasswordError: '',
    loginSubmitted: false,

    // create account page state
    createAccountEmail: '',
    createAccountPassword: '',
    createAccountRepeatPassword: '',

    // recover password state
    recoverPasswordEmail: '',

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
      createAccountPassword,
      createAccountRepeatPassword,
      recoverPasswordEmail } = this.state

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
                    loginEmailError: isEmail(e.target.value) ? '' : 'Please type a valid e-mail'
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
                  password={createAccountPassword}
                  repeatPassword={createAccountRepeatPassword}
                  onChangeEmail={(e) => this.setState(() => ({ createAccountEmail: e.target.value }))}
                  onChangePassword={(e) => this.setState(() => ({ createAccountPassword: e.target.value }))}
                  onChangeRepeatPassword={(e) => this.setState(() => ({ repeatPassword: e.target.value }))}
                  onClickCreateAccount={() => this.setState(() => ({ notLoginUserRoute: 'CREATE-ACCOUNT' }))}
                  onClickBackToLogin={() => this.setState(() => ({ notLoginUserRoute: 'LOGIN' }))}
                />
              </FullPageLayout>
              :
              notLoginUserRoute === 'RECOVER-PASSWORD' ?
                <FullPageLayout>
                  <RecoverPasswordForm
                    email={recoverPasswordEmail}
                    onChangeEmail={() => this.setState((e) => ({ recoverPasswordEmail: e.target.value }))}
                    onClickRecover={() => console.log('onClickRecover')}
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
