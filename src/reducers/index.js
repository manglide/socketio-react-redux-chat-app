import { RECEIVED,
        SEND,
        RESET, SWITCHTABS,
        CHANGE_USERNAME, CHANGE_COLOR, CHANGE_CLOCK,
        CHANGE_CTRL_ENTER, CHANGE_LANGUAGE } from '../constants';

const initialState = {
  settings: {
    username: 'Guest001',
    color: 'light',
    clock_display: '12',
    ctrl_enter: 'on',
    language: 'english',
  },
  messages: {
    received: [],
    sent: []
  },
  page: {
    viewing: 0
  }
};

function rootReducer(state = initialState, action) {
  localStorage.setItem('settings', JSON.stringify(initialState.settings));
  if(action.type === RECEIVED) {
    return Object.assign({}, state, {
      messages: {
        received: [
          ...state.messages.received,
          action.payload
        ],
        sent: [
          ...state.messages.sent
        ]
      }
    });
  }

  if(action.type === SEND) {
    return Object.assign({}, state, {
      messages: {
        received: [
          ...state.messages.received
        ],
        sent: [
          ...state.messages.sent,
          action.payload
        ]
      }
    });
  }

  if(action.type === RESET) {
    return Object.assign({}, state, {
      settings: action.payload
    });
  }

  if(action.type === CHANGE_USERNAME) {
    return Object.assign({}, state, {
      settings: {
        ...state.settings,
        username: action.payload
      }
    })
  }

  if(action.type === CHANGE_COLOR) {
    return Object.assign({}, state, {
      settings: {
        ...state.settings,
        color: action.payload
      }
    })
  }

  if(action.type === CHANGE_CLOCK) {
    return Object.assign({}, state, {
      settings: {
        ...state.settings,
        clock_display: action.payload,
      }
    })
  }

  if(action.type === CHANGE_LANGUAGE) {
    return Object.assign({}, state, {
      settings: {
        ...state.settings,
        language: action.payload
      }
    })
  }

  if(action.type === CHANGE_CTRL_ENTER) {
    return Object.assign({}, state, {
      settings: {
        ...state.settings,
        ctrl_enter: action.payload
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
