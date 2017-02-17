import React, { Component } from 'react'

class Edit extends Component {
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
              <button className='button-primary u-full-width'>Submit</button>
            </div>

            <div className='two columns'>
              <button className='u-full-width'>Cancel</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default (Edit)
