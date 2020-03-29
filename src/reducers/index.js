import { RECEIVING, SENDING, RESET, SWITCHTABS } from '../constants';

const initialState = {
  settings: {
    username: 'Guest001',
    color: 'dark',
    clock_display: '1200',
    ctrl_enter: false,
    language: 'en',
  },
  messages: {
    recipients: {

    }
  },
  page: {
    viewing: 0
  }
};

function rootReducer(state = initialState, action) {
  if(action.type === RECEIVING) {
    return Object.assign({}, state, {
      messages: {
        recipients: {

        }
      }
    });
  }

  if(action.type === SENDING) {
    return Object.assign({}, state, {
      messages: {
        recipients: {

        }
      }
    });
  }

  if(action.type === RESET) {
    return Object.assign({}, state, {
      settings: {
        username: 'Guest001',
        color: 'dark',
        clock_display: '1200',
        ctrl_enter: false,
        language: 'en',
      }
    })
  }

  if(action.type === SWITCHTABS) {
    return Object.assign({}, state, {
      page: {
        viewing: parseInt(action.payload)
      }
    })
  }

  return state;
}

export default rootReducer;
