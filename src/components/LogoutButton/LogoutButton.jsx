import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

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

  console.log(isStartPage)

  return (
    <>
      <Link to={isStartPage ? '/login' : '/'}>
        <Fab className={classes.fab} color="secondary" >
          <ExitToAppIcon />
        </Fab>
      </Link>
    </>
  );
}

export default LogoutButton
