export const currentMessages = (messages = []) => ({
  type: 'CURRENT_MESSAGES',
  payload: messages
})