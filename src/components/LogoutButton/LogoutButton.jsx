import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import { signOut } from '../../firebase/firebase.utils'

import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing(5),
    right: theme.spacing(2)
  }
}));

const LogoutButton = () => {
  const classes = useStyles();

  const isStartPage = window.location.pathname === '/'

  const handleClick = () => {
    if (!isStartPage) signOut()
  }

  return (
    <>
      <Link to={isStartPage ? '/login' : '/'}>
        <Fab className={classes.fab} color="secondary" onClick={() => handleClick()}>
          <ExitToAppIcon />
        </Fab>
      </Link>
    </>
  );
}

export default LogoutButton
