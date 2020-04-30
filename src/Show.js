import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

class Show extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <><br />
                <div className="show-container">
                    <h1 className="post_heading">Student Details</h1>
                    <div style={{ float: "left", backgroundColor: "gray", width: "200px", height: "200px" }}>
                        <img src='#' style={{ border: "1px solid black" }} alt='Placeholder for photo' />
                    </div>
                    <div style={{ float: 'right' }}>
                        {this.props.posts.map((el) => (
                            <div className="show_message">
                                <p>First Name: {el.firstName}</p>
                                <p>Last Name: {el.lastName}</p>
                                <p>Address: {el.address}</p>
                                <p>City: {el.city}</p>
                                <p>Phone No: {el.phone}</p>
                                <p>GPA: {el.gpa}</p>
                            </div>
                        ))}
                        <button className="button-class" onClick={() => this.props.history.push('/')}>Home</button>
                        <br /><br />
                    </div>

                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
}
export default connect(mapStateToProps)(Show);