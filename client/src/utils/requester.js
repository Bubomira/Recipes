
const requester = async (method, url, data) => {
    const user = localStorage.getItem('user')
    const userData = JSON.parse(user|| '{}')
   let customHeaders = {};
   if(userData.token){
       customHeaders['x-authorization']=JSON.parse(user).token;
    }

    let request;
    if (method == 'GET') {
        request = fetch(url ,{
            headers:{...customHeaders}
        })
    }else{
        request = fetch(url,{
            method,
            headers:{
                ...customHeaders,
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
    }
    const response = await request;
    if(response.ok){
        const result = response.json()
        return result;
    }
        const error = await response.json();
        throw new Error(error.message)
}


export const get = requester.bind({}, 'GET')
export const post = requester.bind({}, 'POST')
export const put = requester.bind({}, 'PUT')
export const del = requester.bind({}, 'DELETE')