
const requester = async (method, url, data) => {

    let request;
    if (method == 'GET') {
        request = fetch(url)
    }else{
        request = fetch(url,{
            method,
            headers:{
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