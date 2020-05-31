export const fetchProducts = () => {
    console.log('env: ', process.env.REACT_APP_API_URL);
    return fetch(process.env.REACT_APP_API_URL as string, {
        method: 'GET'
    }).then(response => {
        if (response.ok) {
            return response.json()
        }
    })
}