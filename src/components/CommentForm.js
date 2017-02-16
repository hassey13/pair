import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addComment, getCurrentUser } from '../actions'

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      user_id: '',
      stock_id: ''
  }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(){
    this.props.getCurrentUser()
  }

  handleChange(event){
    this.setState({
      comment: event.target.value,
      user_id: this.props.user.id,
      stock_id: ''
    })
  }

  handleSubmit(event){
    const message = this.state.comment
    const userID = this.props.user.id
    const commentParams = {
      message: message,
      user_id: userID,
      stock_id: 1
    }
    event.preventDefault()
    this.props.addComment( commentParams)
    this.setState({comment: ''})
  }




  render() {

    const user = this.props.user

    return (


      <div className='comment-card'>
        <h5 className="comment-header"> Add Comment </h5>
        <form onSubmit={this.handleSubmit}>
          <input className="comment-input" type="text" onChange={this.handleChange} value={this.state.comment}/>


          <button className='button-primary' type="submit"> Post </button>
          <p>{user.username}</p>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    user: state.users
  }
}



function mapDispatchToProps(dispatch){
  return {
    getCurrentUser: function() {
      let action = getCurrentUser()
      dispatch( action )
    },
    addComment: function(comment){
      let action = addComment(comment)
      dispatch(action)
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CommentForm)
