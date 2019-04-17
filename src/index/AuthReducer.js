const INITIAL_STATE = {
  email: '',
  password: '',
  user:null,
  error:'',
  loading:false
}

export default (state=INITIAL_STATE, action) => {
  console.log(action)
  switch (action.type) {
    default:
      return state
  }
}
