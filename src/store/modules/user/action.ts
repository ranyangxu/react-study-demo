import storeType from '@/store/type'

// 修改用户名的 action 创建函数
export const setUserName = name => ({
  type: storeType.SET_USER_NAME,
  payload: name
})
