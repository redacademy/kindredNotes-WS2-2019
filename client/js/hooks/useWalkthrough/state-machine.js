const walkthroughMachine = {
  WRITE_FADING_IN: {
    DONE: 'WRITE_VIEW',
  },
  WRITE_VIEW: {
    NEXT_VIEW: 'RECEIVE_FADING_IN',
  },
  RECEIVE_FADING_IN: {
    DONE: 'MAIL_OPENING',
  },
  RECEIVE_FADING_OUT: {
    DONE: 'WRITE_VIEW',
  },
  MAIL_OPENING: {
    DONE: 'RECEIVE_VIEW',
  },
  RECEIVE_VIEW: {
    NEXT_VIEW: 'SPREAD_FADING_IN',
    PREV_VIEW: 'RECEIVE_FADING_OUT',
  },
  SPREAD_FADING_IN: {
    DONE: 'SPREAD_VIEW',
  },
  SPREAD_FADING_OUT: {
    DONE: 'RECEIVE_VIEW',
  },
  SPREAD_VIEW: {
    NEXT_VIEW: 'WALKTHROUGH_FADING_OUT',
    PREV_VIEW: 'SPREAD_FADING_OUT',
  },
}

export default walkthroughMachine
