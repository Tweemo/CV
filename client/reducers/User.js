const emptyUser = {
  auth0Id: '',
  email: '',
  token: '',
}

export default function user(state = emptyUser, action) {
  switch (action.type) {
    default:
      return state
  }
}
