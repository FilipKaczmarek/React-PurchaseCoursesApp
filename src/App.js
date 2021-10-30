import React from 'react'

import FullPageLoader from './Components/FullPageLoader'
import FullPageMessage from './Components/FullPageMessage'
import LoginForm from './Components/LoginForm/LoginForm'
import FullPageLayout from './Components/FullPageLayout'
import CreateAccountForm from './Components/CreateAccountForm/CreateAccountForm'

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
    notLoginUserRoute: 'LOGIN', // 'CREATE-ACCOUNT' or 'FORGOT-PASSWORD'

    // login page state
    loginEmail: '',
    loginPassword: '',

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

  render() {
    const { 
      isLoading, 
      infoMessage, 
      isInfoDisplayed, 
      hasError, 
      errorMessage, 
      notLoginUserRoute, 
      loginEmail, 
      loginPassword,
      createAccountEmail,
      createAccountPassword,
      createAccountRepeatPassword } = this.state

    return (
      <div className="App">
        {
          notLoginUserRoute === 'LOGIN' ?
            <FullPageLayout>
              <LoginForm
                onClickLogin={() => console.log('onClickLogin')}
                onClickCreateAccount={() => console.log('onClickCreateAccount')}
                onClickForgotPassword={() => console.log('onClickForgotPassword')}
                onChangeMail={(e) => this.setState(() => ({ loginEmail: e.target.value }))}
                onChangePassword={(e) => this.setState(() => ({ loginPassword: e.target.value }))}
                email={loginEmail}
                password={loginPassword}
              />
            </FullPageLayout>
            :
            notLoginUserRoute === 'CREATE-ACCOUNT' ?
              <FullPageLayout>
                <CreateAccountForm
                  email={createAccountEmail}
                  password={createAccountPassword}
                  repeatPassword={createAccountRepeatPassword}
                  onChangeEmail={() => console.log('onChangeEmail')}
                  onChangePassword={() => console.log('onChangePassword')}
                  onChangeRepeatPassword={() => console.log('onChangeRepeatPassword')}
                  createAccount={() => console.log('createAccount')}
                  backToLogin={() => console.log('backToLogin')}
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
              onButtonClick={console.log}
            />
            :
            null
        }
      </div>
    );
  }
}

export default App;
