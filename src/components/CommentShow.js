import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchComments, getCurrentUser} from '../actions/index'

class CommentShow extends Component {
    componentDidMount() {
        this.props.getCurrentUser()
        this.props.fetchComments()
    }

    render() {
      debugger
        const comments = this.props.comments
        // const commentFiltered = comments.filter(comment => )

        // if (!comments){return <div></div>}
        return (
          <div>{comments}</div>
        )
    }
}



  function mapStateToProps(state) {
    return {
      comments: state.comments,
      user: state.users
    }
  }



  function mapDispatchToProps(dispatch){
    return {
      fetchComments: function() {
        let action = fetchComments()
        dispatch(action)
      },
      getCurrentUser: function() {
        let action = getCurrentUser()
        dispatch( action )
      }
    }
  }

  export default connect( mapStateToProps, mapDispatchToProps )( CommentShow )
