import React, { Component } from 'react'
import { Link } from 'react-router'
import TimeAgo from '../TimeAgo'


class Comment extends Component {

    render() {
        return (
            <div className="comment">
              {/* <Link to={`/profile/${this.props.userId}`}> */}
                <div className="comment__user">
                  {/* {this.props.firstName} {this.props.lastName.charAt(0) + '.'} */}
                </div>
              </Link>
              <div className="comment__time">
                {/* <TimeAgo timestamp={this.props.createdAt}/> */}
              </div>
              <div className="comment__text">
                {/* {this.props.message} */}
              </div>
            </div>
        )
    }

}

export default Comment
