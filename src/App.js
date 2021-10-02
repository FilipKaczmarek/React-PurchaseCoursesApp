import React from 'react'

import FullPageLoader from './Components/FullPageLoader'
import Typography from './Typography'

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
    notLoginUserRoute: 'LOGIN', // 'NEW-ACCOUNT' or 'FORGOT PASSWORD'

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
    const { isLoading } = this.state

    return (
      <div className="App">
        <h1>TEXT</h1>
        {
          isLoading ?
            <FullPageLoader />
            :
            null
        }
        <Typography
          variant={'h1'}>
        Header 1
        </Typography>
        <Typography
          variant={'h3'}>
        Header 3
        </Typography>
        <Typography
          variant={'button'}>
        Button
        </Typography>
      </div>
    );
  }
}

export default App;
