export default () => {
  const signinURL = 'http://localhost:3000/'
  const currentURL = window.location.href
  
  const username = window.localStorage.getItem('username');

  if (!username && currentURL !== signinURL)
    window.location.href = signinURL
  return false
}