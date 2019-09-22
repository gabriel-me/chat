export const currentUsers = (users = []) => ({
  type: 'CURRENT_USERS',
  payload: users
})