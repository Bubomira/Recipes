
const requester = async (method, url, data) => {
    const user = localStorage.getItem('user')

   const headers = {};
   if(user.token){
    headers['x-authorization']=user.token;
   }

    let request;
    if (method == 'GET') {
        request = fetch(url,{
            method,
            headers
        })
    }else{
        request = fetch(url,{
            method,
            headers:{
                ...headers,
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
    }

    const response = await request;
    const result = response.json()
    return result;
}


export const get = requester.bind({}, 'GET')
export const post = requester.bind({}, 'POST')
export const put = requester.bind({}, 'PUT')
export const del = requester.bind({}, 'DELETE')