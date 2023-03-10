const server = "https://queuelio.vercel.app/api"
const accessToken = () => {
    const token = localStorage.getItem('accessToken')
    const config = {headers : {Authorization : `Bearer ${token}`}};
    return config;
}
const getRefreshToken = () => {
    const token = localStorage.getItem('refreshToken');
    return token;
}
const refreshToken = () => {
    const token = localStorage.getItem('refreshToken');
    const config = {headers : {Authorization : `Bearer ${token}`}};
    return config;
}
export {server, accessToken, refreshToken, getRefreshToken}