import React from 'react'

import FullPageLoader from './Components/FullPageLoader'
import FullPageMessage from './Components/FullPageMessage'
import Typography from './Components/Typography'
import Button from './Components/Button'

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
    const { isLoading, infoMessage, isInfoDisplayed, hasError, errorMessage } = this.state

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
        <br />
        <br />
        <Button variant={'contained'} color={'primary'}>
          CONTAINED PRIMARY
        </Button>
        <br />
        <br />
        <Button variant={'contained'} color={'secondary'}>
          CONTAINED SECONDARY
        </Button>
        <br />
        <br />
        <Button variant={'text'} color={'primary'}>
          TEXT PRIMARY
        </Button>
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
