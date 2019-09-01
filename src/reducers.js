const INITIAL_STATE = { texts: '' }
let messages = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SEND':
      if (action.payload !== '') 
        messages.push(action.payload)
      return { ...state, texts: messages }
    default:
      return state
  }
}