// import React, {
//     Component
// } from 'react'
//
// import {
//     Link
// } from 'react-router'
// import {
//     connect
// } from 'redux'
// import {
//     fetchComments
// } from '../../actions/index'
//
// class CommentShow extends Component {
//     componentDidMount() {
//         this.props.fetchComments()
//     }
//
//     render() {
//         const comment = this.props.comment
//         const user = this.props.user
//         // const commentFiltered = comments.filter(comment => )
//
//         if (!comments) {
//             return <div></div>
//               }
//
//
//               return ( <div> {
//                 comments.map((comment, i) =>
//                   <div key = {i} comment = {comment
//                   } >
//
//                     <
//                     div className = "comment" >
//                     <
//                     Link to = {
//                         `/profile/${user.id}`
//                     } >
//                     <
//                     div className = "comment__user" >
//                     <
//                     p > `${user.firstName} ${user.lastName}` < /p> < /
//                     div > <
//                     /Link>
//
//                     <
//                     div className = "comment__text" > {
//                         comment.message
//                     } <
//                     /div> < /
//                     div >
//
//                     <
//                     /div> ) }
//
//                     )
//
//
//
//
//                     <
//                     div className = "comment" >
//                     <
//                     Link to = {
//                     `/profile/${user.id}`
//                     } >
//                     <
//                     div className = "comment__user" >
//                     <
//                     p > `${user.firstName} ${this.props.lastName}` < /p> < /
//                     div > <
//                     /Link>
//
//                     <
//                     div className = "comment__text" > {
//                       comments.message
//                     } <
//                     /div> < /
//                     div >
//                     )
//                     }
//
//                     }
//
//
//
//                     const mapStateToProps = (state) => {
//                       return {
//                         comments: state.comments,
//                         user: state.users,
//                         stocks: state.stocks
//                       }
//                     }
//
//                     function mapDispatchToProps(dispatch) {
//                       return {
//                         fetchComments: function() {
//                           let action = fetchComments()
//                           dispatch(action)
//                         }
//                       }
//                     }
//
//                     export default connect(mapStateToProps, mapDispatchToProps)(CommentShow)
//                     
