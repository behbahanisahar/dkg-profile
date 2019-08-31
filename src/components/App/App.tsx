import React, { useState } from 'react';
import { useAsyncEffect } from '../../util/hooks';
import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import './App.css';
import '../../assets/css/Main.css';

import { AppContext, useAppValue } from '../../AppContext';
import { AppTitle } from './AppTitle';
import ProfileContainer from '../../features/profile/components/ProfileContainer';

const useStyles = makeStyles<Theme>({
  root: {
    textAlign: 'center'
  },
  logo: {
    animation: '$App-logo-spin infinite 20s linear',
    height: '40vmin'
  },
  header: {
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white'
  },
  link: {
    color: '#61dafb'
  },
  '@keyframes App-logo-spin': {
    from: {
      transform: 'rotate(0deg)'
    },
    to: {
      transform: 'rotate(360deg)'
    }
  }
});

const App: React.FunctionComponent = () => {
  const [theAnswer, setTheAnswer] = useState(0);
  const classes = useStyles();
  let appStore = useAppValue();

  useAsyncEffect(async () => {
    // This is just an example.
    const answer = await appStore.appService.getTheAnswerToLifeTheUniverseAndEverything();
    setTheAnswer(answer);
  });

  return (
    <AppContext.Provider value={appStore}>
      <p>
        Connected to <AppTitle />, {theAnswer}
      </p>
      <ProfileContainer />
    </AppContext.Provider>
  );
};

export default App;
