export const getProducts = async () => {
    return await fetch(process.env.REACT_APP_API_URL as string, {
        method: 'GET'
    })
}