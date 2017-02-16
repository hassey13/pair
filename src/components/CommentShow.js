import React, {Component} from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux'
import {fetchComments} from '../actions/index'

class CommentShow extends Component {
    componentDidMount() {
        this.props.fetchComments()
    }

    render() {
      debugger
        const comments = this.props.comments
        const user = this.props.user
        // const commentFiltered = comments.filter(comment => )

        // if (!comments){return <div></div>}

            return (
              <div>{comments.map(comment => <p>{comment.message}</p>)}</div>
            )
                }
              }



  function mapStateToProps(state) {
    return {
      comments: state.comments,
      user: state.users
    }
  }

  function mapDispatchToProps(dispatch) {
    return {
      fetchComments: function() {
        let action = fetchComments()
        dispatch(action)
      }
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(CommentShow)
