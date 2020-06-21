import React, { useEffect } from 'react';
import '../assets/css/App.css';
import { makeStyles } from '@material-ui/core/styles';
import MessageForm from './MessageForm'
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux'

import socketIOClient from "socket.io-client";

import { received_msg } from '../actions'

const useStyles = makeStyles((theme) => ({
  root: {
  }
}));

function mapStateToProps(state) {
  return {
    settings: state.settings,
    messages: state.messages
  }
}

function mapDispatchToProps(dispatch) {
  return {
    received_msg: message => dispatch(received_msg(message))
  }
}

export function MessagesDisplayCanvas(props) {

  useEffect(() => {
    const socket = socketIOClient("http://127.0.0.1:4001");
    socket.on("NewChatMSG", data => {
      let time = props.settings.clock_display === '12' ?
      ((new Date().getHours() + 24 ) % 12 || 12).toString()  + ":" + new Date().getMinutes().toString()
      :
      new Date().getHours().toString() + ":" + new Date().getMinutes().toString();
      let load = {
        text: data,
        time: time
      };
      props.received_msg(load);
    });
  })
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <div>
        <div className="messageCanvas">
          <ul id="messages">
          {
            props.messages.received.map((item, index) => (
              <li key={index}>
                <div>

                  <div className="timeandusername">
                    <div className="indi"></div>
                    <span className="time">{props.settings.username},
                    {item.time}</span>
                  </div>
                  <div className="wrapper">
                    <p className="comment">
                    {item.text}
                    </p>
                  </div>
                </div>
              </li>
            ))
          }
          </ul>
        </div>
        <div className="bottomCanvas">
          <MessageForm />
        </div>
      </div>
    </Paper>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagesDisplayCanvas);
