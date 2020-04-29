import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';


class PostForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const firstName = this.getFirstName.value;
        const lastName = this.getLastName.value;
        const address = this.getAddress.value;
        const city = this.getCity.value;
        const phone = this.getPhone.value;
        const gpa = this.getGpa.value;
        const data = {
            id: new Date(),
            firstName,
            lastName,
            address,
            city,
            phone,
            gpa,
            editing: false
        }
        this.props.dispatch({
            type: 'ADD_POST',
            data
        })
        this.props.history.push('/list');
        this.getFirstName.value = '';
        this.getLastName.value = '';
        this.getAddress.value = '';
        this.getCity.value = '';
        this.getPhone.value = '';
        this.getGpa.value = '';

    }
    render() {
        return (
            <div className="post-container">
                <h1 className="post_heading">Create Student Record</h1>
                <form className="form" onSubmit={this.handleSubmit} >
                    <label>First Name</label><input required type="text" ref={(input) => this.getFirstName = input}
                        placeholder="Enter First Name" /><br /><br />
                         <label>Last Name</label><input required type="text" ref={(input) => this.getLastName = input}
                        placeholder="Enter Last Name" /><br /><br />
                         <label>Street Number/ Name</label><input required type="text" ref={(input) => this.getAddress = input}
                        placeholder="Enter Street Name /No" /><br /><br />
                        <label>City</label><input required type="text" ref={(input) => this.getCity = input}
                        placeholder="Enter City" /><br /><br />
                         <label>Phone no</label><input required type="number" ref={(input) => this.getPhone = input}
                        placeholder="Enter Phone No" /><br /><br />
                         <label>GPA</label><input required type="text" ref={(input) => this.getGpa = input}
                        placeholder="Enter GPA" /><br /><br />
                    <button>Save</button>
                </form>
            </div>
        );
    }
}
export default connect()(PostForm);