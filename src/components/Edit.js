import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'

class Edit extends Component {
  constructor() {
      super()

      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleCancel = this.handleCancel.bind(this)
  }

  handleSubmit() {

  }

  handleCancel() {
    browserHistory.push('/profile')
  }

  render() {
    return (
      <div>
        <h2>Edit Profile</h2>
        <form>
          <div className='row'>
            <div className='four columns'>
              <label >Username</label>
              <input className='u-full-width' type='text' ref='' />
              <label>First Name</label>
              <input className='u-full-width' type='text' ref='' />
              <label>Last Name</label>
              <input className='u-full-width' type='text' ref='' />
              <label>E-Mail</label>
              <input className='u-full-width' type='text' ref='' />
              <label>Avatar URL</label>
              <input className='u-full-width' type='text' ref='' />
            </div>
          </div>

          <div className='row'>
            <div className='two columns'>
              <button
                className='button-primary u-full-width'
                onClick={ this.handleSubmit } >
                  Submit
              </button>
            </div>

            <div className='two columns'>
              <button
                className='u-full-width'
                onClick={ this.handleCancel } >
                  Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = () => {
  return {
    
  }
}

export default connect( null, mapDispatchToProps)(Edit)
