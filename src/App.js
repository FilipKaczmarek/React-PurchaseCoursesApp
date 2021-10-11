import React from 'react'

import FullPageLoader from './Components/FullPageLoader'
import FullPageMessage from './Components/FullPageMessage'
import Typography from './Components/Typography'
import Button from './Components/Button'
import TextField from './Components/TextField/TextField'
import LoginForm from './Components/LoginForm/LoginForm'
import FullPageLayout from './Components/FullPageLayout'

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
    notLoginUserRoute: 'LOGIN', // 'NEW-ACCOUNT' or 'FORGOT-PASSWORD'

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
    const { isLoading, infoMessage, isInfoDisplayed, hasError, errorMessage, notLoginUserRoute } = this.state

    return (
      <div className="App">
        {
          notLoginUserRoute === 'LOGIN' ?
            <FullPageLayout>
              <LoginForm />
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
