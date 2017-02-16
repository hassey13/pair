import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addComment } from '../actions'

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {comment: ''}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    this.setState({
      note: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.addComment( this.state.comment )
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
    addComment: function(comment){
      let action = addComment(comment)
      dispatch(action)
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CommentForm)
