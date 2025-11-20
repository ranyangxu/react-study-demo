import storeType from '@/store/type'

const initialState = {
  userName:'ranyang'
}

const userReducer = (state = initialState, action: object) => {
  switch (action.type) {
    case storeType.SET_USER_NAME:
      return {
        userName: action.payload
      }
    default:
      return state
  }
}
export default userReducer