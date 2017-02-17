import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Button, Comment, Form, Header} from 'semantic-ui-react'
import { addComment, getCurrentUser } from '../actions'


class ThreadedComments extends Component {
  state = {formData: {}}


  componentDidMount(){
    this.props.getCurrentUser()
  }


  handleChange = (e, { value }) => this.setState({
    comment: value,
    user_id: this.props.user.id,
    stock_id: ''
  })



  handleSubmit = (e, { formData }) => {
    e.preventDefault()
    const message = formData.message
    const userID = this.props.user.id
    const commentParams = {
      message: message,
      user_id: userID,
      stock_id: 1
    }

    this.props.addComment( commentParams)
    this.setState({comment: ''})
  }



  render(){
    return (
    <Comment.Group>
      <Header as='h3' dividing>Comments</Header>

      <Comment>
        <Comment.Avatar src='http://semantic-ui.com/images/avatar/small/matt.jpg' />
        <Comment.Content>
          <Comment.Author as='a'>Matt</Comment.Author>
          <Comment.Metadata>
            <div>Today at 5:42PM</div>
          </Comment.Metadata>
          <Comment.Text>How artistic!</Comment.Text>
          <Comment.Actions>
            <Comment.Action>Reply</Comment.Action>
          </Comment.Actions>
        </Comment.Content>
      </Comment>



      <Form reply onSubmit={this.handleSubmit}>

        <Form.TextArea name='message' onChange={this.handleChange} value={this.state.comment} autoHeight/>
        <button type="submit" labelPosition='left' className="button-primary">Add Comment</button>
      </Form>
    </Comment.Group>
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


  export default connect(mapStateToProps, mapDispatchToProps)(ThreadedComments)
