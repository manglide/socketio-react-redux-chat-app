import React from 'react';
import { connect } from 'react-redux';
import '../assets/css/App.css';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from '@material-ui/core/Button';

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import { reset, change_username, change_clock, change_color, change_language, change_ctrl_enter } from '../actions';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '25px'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
  pad: {
    padding: '15px'
  },
  btn: {
    width: '99.6%',
    textTransform: "none"
  },
}));

function mapStateToProps(state) {
  return {
    settings: state.settings
  }
}

function mapDispatchToProps(dispatch) {
  return {
    reset: payload => dispatch(reset(payload)),
    change_clock: payload => dispatch(change_clock(payload)),
    change_username: payload => dispatch(change_username(payload)),
    change_color: payload => dispatch(change_color(payload)),
    change_language: payload => dispatch(change_language(payload)),
    change_ctrl_enter: payload => dispatch(change_ctrl_enter(payload))
  }
}

export function SettingsForm(props) {

  const [defaultSettings, setDefaultSettings] = React.useState(JSON.parse(localStorage.getItem("settings")))
  const [selectedColor, setSelectedColor] = React.useState(props.settings.color === undefined ? defaultSettings.color : props.settings.color);
  const [clockDisplay, setClockDisplay] = React.useState(props.settings.clock_display === undefined ? defaultSettings.clock_display : props.settings.clock_display);
  const [ctrlEnter, setCtrlEnter] = React.useState(props.settings.ctrl_enter === undefined ? defaultSettings.ctrl_enter : props.settings.ctrl_enter);
  const [language, setLanguage] = React.useState(props.settings.language === undefined ? defaultSettings.language : props.settings.language);
  const [username, setUsername] = React.useState(props.settings.username === undefined ? defaultSettings.username : props.settings.username);

  const handleChangeLang = (event) => {
    setLanguage(event.target.value);
    props.change_language(event.target.value)
  };
  const handleChangeColor = (event) => {
    setSelectedColor(event.target.value);
    props.change_color(event.target.value);
  };
  const handleChangeClock = (event) => {
    setClockDisplay(event.target.value);
    props.change_clock(event.target.value)
  };
  const handleChangeMsgControl = (event) => {
    setCtrlEnter(event.target.value);
    props.change_ctrl_enter(event.target.value)
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    props.change_username(event.target.value);
  };

  const handleResetToDefaults = (event) => {
    var objectS = JSON.parse(localStorage.getItem('settings'));
    props.reset(objectS);
    setUsername(objectS.username)
    setCtrlEnter(objectS.ctrl_enter)
    setClockDisplay(objectS.clock_display)
    setSelectedColor(objectS.color)
    setLanguage(objectS.language)
    setDefaultSettings(objectS);
  }

  const classes = useStyles();

  return (
    <Paper className={classes.root}>
    <div >

      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
        >

        <div>
          <FormLabel style={{ fontSize: '15px' }}>Username</FormLabel>
          <TextField
            id="standard-full-width"
            style={{ margin: 8 }}
            placeholder="guest0001"
            fullWidth
            value={username}
            onChange={handleUsernameChange}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div className={classes.pad}></div>
        <div>
        <FormControl component="fieldset">
          <FormLabel component="legend" style={{ fontSize: '15px' }}>Interface Color</FormLabel>
          <RadioGroup row aria-label="position" name="position" value={selectedColor} onChange={handleChangeColor}>
            <FormControlLabel
              value="light"
              label="Light"
              control={<Radio color="primary" />}
            />
            <FormControlLabel
              value="dark"
              label="Dark"
              control={<Radio color="primary" />}
            />
          </RadioGroup>
        </FormControl>
        </div>
        <div className={classes.pad}></div>
        <div>
          <FormControl component="fieldset">
            <FormLabel component="legend" style={{ fontSize: '15px' }}>Clock Display</FormLabel>
            <RadioGroup row aria-label="position" name="position" value={clockDisplay} onChange={handleChangeClock}>
              <FormControlLabel
                value="12"
                label="12 Hours"
                control={<Radio color="primary" />}
              />
              <FormControlLabel
                value="24"
                label="24 Hours"
                control={<Radio color="primary" />}
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className={classes.pad}></div>
        <div>
          <FormControl component="fieldset">
            <FormLabel component="legend" style={{ fontSize: '15px' }}>Send messages on CTRL+ENTER</FormLabel>
            <RadioGroup row aria-label="position" name="position" value={ctrlEnter} onChange={handleChangeMsgControl}>
              <FormControlLabel
                value="on"
                label="On"
                control={<Radio color="primary" />}
              />
              <FormControlLabel
                value="off"
                label="Off"
                control={<Radio color="primary" />}
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className={classes.pad}></div>
        <div>
        <FormControl component="fieldset">
          <FormLabel component="legend" style={{ fontSize: '15px' }}>Language</FormLabel>
            <Select
              value={language}
              onChange={handleChangeLang}>
            <MenuItem value="english">English</MenuItem>
            <MenuItem value="french">French</MenuItem>
          </Select>
        </FormControl>
        </div>
      </Grid>
    </div>
    <div className="bottomCanvas">
      <Button variant="contained" onClick={handleResetToDefaults} color="primary" className={classes.btn}>
        Reset to Defaults
      </Button>
    </div>
    </Paper>
  );
}

export default connect(mapStateToProps,mapDispatchToProps)(SettingsForm);
