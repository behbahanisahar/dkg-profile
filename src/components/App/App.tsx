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
    await appStore.appService.getTheAnswerToLifeTheUniverseAndEverything().then(x => {
      setTheAnswer(x.data.login);
    });
  });

  return (
    <AppContext.Provider value={appStore}>
      <div className={classes.link}>
        Connected to <AppTitle />, {theAnswer}
      </div>
      <ProfileContainer />
    </AppContext.Provider>
  );
};

export default App;
