import {post,get} from '../utils/requester'

const baseURL ='http://localhost:3030/user'

export const register= (data)=> post(`${baseURL}/register`,data)

export const login=(data)=>post(`${baseURL}/login`,data)

export const logout =()=> get (`${baseURL}/logout`)

