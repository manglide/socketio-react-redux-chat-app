import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { connect } from "react-redux";
import { switchtabs } from '../actions'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

function mapDispatchToProps(dispatch) {
  return {
    switchtabs: value => dispatch(switchtabs(value))
  }
}

export function NavigationTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.switchtabs(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="Chat" />
        <Tab label="Settings" />
      </Tabs>
    </div>
  );
}

export default connect(
  null,
  mapDispatchToProps
)(NavigationTabs);
