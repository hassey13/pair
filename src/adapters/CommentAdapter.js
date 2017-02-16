import _ from 'lodash'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:4000/api/v1/'
axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')

export const commentAdapter = {

        fetchComments: () => {
            return axios.get('comments').then(response => response.data)
        },

        createComment: (comment) => {
            return axios.post('comments', comment).then(response => response.data)
        },

        updateComment: (comment) => {
            return _.debounce(() => {
                        axios.patch(`comments/${comment.id}`), comment.message.then(response => response.data)
                        }, 500)()
                }

        }
