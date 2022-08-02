import {post} from '../utils/requester'

const baseURL ='http://localhost:3030/user'

export const register= (data)=> post(`${baseURL}/register`,data)