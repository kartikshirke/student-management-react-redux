import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

class Show extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <div style={{ paddingLeft: '30%' }}><div style={{ width: "100px", float: "left", height: "100px", background: "gray", margin: "10px" }}>
                <img src='#' style={{ border: "1px solid black" }} alt='not found' />
            </div>
                <div style={{ width: "500px", float: "left", height: "300px", background: "white", margin: "10px" }}>
                    {this.props.posts.map((el) => (
                        <div>
                            <p>First Name: {el.firstName}</p>
                            <p>Last Name: {el.lastName}</p>
                            <p>Address: {el.address}</p>
                            <p>City: {el.city}</p>
                            <p>Phone No: {el.phone}</p>
                            <p>GPA: {el.gpa}</p>
                        </div>
                    ))}
                </div>
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