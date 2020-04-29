import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';

import './list.css'
class AllPost extends Component {
    constructor(props){
        super(props);
    }
   
    render() {
        return (
            <div className="table">

            <table style={{ width: '50%' }}>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Phone</th>
                    <th>GPA</th>
                    <th>Remove</th>
                    <th>Details</th>
                </tr>

                {
                    this.props.posts.map(el => (

                        <tr>
                            <td>{el.firstName}</td>
                            <td>{el.lastName}</td>
                            <td>{el.phone}</td>
                            <td>{el.gpa}</td>
                            <td>
                                <span className="control-buttons">
                                    <button className="delete"
                                onClick={() => this.props.dispatch({ type: 'DELETE_POST', id: el.id })}>Delete</button>
                                </span>
                                </td>
                               
                                <td><span className="control-buttons"><button className="delete"
                                    
                                    onClick={(e)=>{
                                        e.preventDefault();
                                        this.props.dispatch({ type: 'REVIEW_POST', id: el.id })
                                        this.props.history.push('/show');
                                    }}
                                    
                                    >Details</button>
                                </span>
                                </td>
                           
                
                        </tr>
                    ))}
            </table>

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