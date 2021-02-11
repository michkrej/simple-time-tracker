import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { Copyright } from '../index'

const useStyles = makeStyles((theme) => ({
  footer: {
    display: 'flex',
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    marginLeft: 0,
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.primary.light : theme.palette.primary.dark
  }
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="sm">
        <Copyright />
      </Container>
    </footer>
  );
}
