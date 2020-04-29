import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

class Show extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <div className="post-container">
                <h1 className="post_heading">Student Details</h1>
                {this.props.posts.map((el) => (
                    <div>
                        <p>First Name: {el.firstName}</p>
                        <p>Last Name: {el.lastName}</p>
                        <p>Phone No: {el.phone}</p>
                        <p>GPA: {el.gpa}</p>
                    </div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}
export default connect(mapStateToProps)(Show);