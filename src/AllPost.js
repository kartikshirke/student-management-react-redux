import React, { Component } from 'react';
import { connect } from 'react-redux'

class AllPost extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="post-container">
                 <h1 className="post_heading">All Students Record</h1>
                <div className="table">

                    <table style={{ width: '80%' }}>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Phone</th>
                            <th>GPA</th>
                            <th>Delete</th>
                        </tr>

                        {
                            this.props.posts.map(el => (

                                <tr>
                                    <td style={{ cursor: "pointer" }} onClick={(e) => {
                                        e.preventDefault();
                                        this.props.dispatch({ type: 'REVIEW_POST', id: el.id })
                                        this.props.history.push('/show');
                                    }}>{el.firstName}</td>
                                    <td style={{ cursor: "pointer" }} onClick={(e) => {
                                        e.preventDefault();
                                        this.props.dispatch({ type: 'REVIEW_POST', id: el.id })
                                        this.props.history.push('/show');
                                    }}>{el.lastName}</td>
                                    <td style={{ cursor: "pointer" }} onClick={(e) => {
                                        e.preventDefault();
                                        this.props.dispatch({ type: 'REVIEW_POST', id: el.id })
                                        this.props.history.push('/show');
                                    }}>{el.phone}</td>
                                    <td style={{ cursor: "pointer" }} onClick={(e) => {
                                        e.preventDefault();
                                        this.props.dispatch({ type: 'REVIEW_POST', id: el.id })
                                        this.props.history.push('/show');
                                    }}>{el.gpa}</td>
                                    <td>
                                        <span className="control-buttons">
                                            <button className="delete"
                                                onClick={() => this.props.dispatch({ type: 'DELETE_POST', id: el.id })}>Delete</button>
                                        </span>
                                    </td>
                                </tr>
                            ))}
                            <br/><br/>
                            <button className="button-class" onClick={()=> this.props.history.push('/')}>Home</button>
                    </table>
                    
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
export default connect(mapStateToProps)(AllPost);