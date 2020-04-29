import React, { Component } from 'react';
import { connect } from 'react-redux';
class Post extends Component {
   
    render() {
        return (
            <>
            <div className="post">
                <p className="post_message">{this.props.post.firstName}</p>
                <p className="post_message">{this.props.post.lastName}</p>
                <p className="post_message">{this.props.post.address}</p>
                <p className="post_message">{this.props.post.city}</p>
                <p className="post_message">{this.props.post.phone}</p>
                <p className="post_message">{this.props.post.gpa}</p>
               
            </div>
           
            </>
        );
    }
}
export default connect()(Post);