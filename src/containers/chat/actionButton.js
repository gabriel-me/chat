export const sendMessage = (message = '') => ({
  type: 'SEND',
  payload: message
})