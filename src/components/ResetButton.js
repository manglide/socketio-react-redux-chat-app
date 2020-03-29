import React from 'react';
import '../assets/css/App.css';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '99.6%',
    textTransform: "none"
  },
}));

function ResetButton() {
  const classes = useStyles();
  return (
    <div >
      <Button variant="contained" color="primary" className={classes.root}>
        Reset to Defaults
      </Button>
    </div>
  );
}

export default ResetButton;
