import axios from 'axios';

const GET_RELATED_ARTICLES = 'GET_RELATED_ARTICLES'
const CREATE_RELATED_ARTICLES = 'CREATE_RELATED_ARTICLES'
const defaultArticles = [];

const getRelatedArticles = articles => ({ type: GET_RELATED_ARTICLES, articles })
const createRelatedArticles = articles => ({ type: CREATE_RELATED_ARTICLES, articles })


export const fetchRelatedArticles = (url) => dispatch => {
    axios.get(`api/article/related/url/${url}`)
    .then(response => {
        dispatch(getRelatedArticles(response.data))
    })
}
export const makeRelatedArticles = (keywords, url) => dispatch => {
    axios.post('api/article/related', {keywords, url})
    .then(response => {
        dispatch(createRelatedArticles(response.data))
    })
}

export default function (state = defaultArticles, action) {
    switch (action.type) {
        case CREATE_RELATED_ARTICLES:
            window.localStorage.setItem('relatedArticles', JSON.stringify(action.articles))
            return action.articles
        case GET_RELATED_ARTICLES:
            return action.articles
        default:
            return state
    }
}
