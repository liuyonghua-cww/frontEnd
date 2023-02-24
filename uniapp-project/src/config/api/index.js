const http = uni.$u.http;
export const baseFileUrl = (id) => {
    return `http://ts.lagou.uieee.com/api/v2/files/${id}`
}
export const getAdvertisingSpace = () => {
    return http.get('/advertisingspace/1/advertising')
}

export const getFeeds = () => {
    return http.get('/feeds')
}

export const getNews = () => {
    return http.get('/news')

}
