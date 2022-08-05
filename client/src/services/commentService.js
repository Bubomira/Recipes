import {post} from '../utils/requester'

const baseURL ='http://localhost:3030/recipe/comment'

export const postComment=(id,data)=> post(`${baseURL}/${id}`,data)