import { SWITCHTABS, RESET, CHANGE_USERNAME, CHANGE_COLOR, CHANGE_LANGUAGE, CHANGE_CLOCK, CHANGE_CTRL_ENTER,
RECEIVED, SEND } from '../constants';

export function switchtabs(payload) {
  return { type: SWITCHTABS, payload: payload };
}

export function reset(payload) {
  return { type: RESET, payload: payload };
}

export function change_username(payload) {
  return { type: CHANGE_USERNAME, payload: payload };
}

export function change_color(payload) {
  return { type: CHANGE_COLOR, payload: payload };
}

export function change_clock(payload) {
  return { type: CHANGE_CLOCK, payload: payload };
}

export function change_language(payload) {
  return { type: CHANGE_LANGUAGE, payload: payload };
}

export function change_ctrl_enter(payload) {
  return { type: CHANGE_CTRL_ENTER, payload: payload };
}

export function received_msg(payload) {
  return { type: RECEIVED, payload: payload };
}

export function send_msg(payload) {
  return { type: SEND, payload: payload };
}
