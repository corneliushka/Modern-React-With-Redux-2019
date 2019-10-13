import React from 'react'
import ReactDOM from 'react-dom'

import faker from 'faker';

import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => { 
    return (
        <div className="ui container comments">     

                <ApprovalCard>
                    <div>
                        <h4>Warning !</h4>
                        Are you sure you want to do this ? 
                    </div>
                </ApprovalCard>
f
                <ApprovalCard>
                    <CommentDetail 
                        author="Sam" 
                        avatar={faker.image.avatar()} 
                        timeAgo="Today at 4:44" 
                        content={faker.hacker.phrase()}/>   
                </ApprovalCard>

                <ApprovalCard>
                    <CommentDetail 
                        author="Alex" 
                        avatar={faker.image.avatar()} 
                        timeAgo="Today at 6:11" 
                        content={faker.hacker.phrase()}/>    
                </ApprovalCard>

                <ApprovalCard>
                    <CommentDetail 
                        author="June" 
                        avatar={faker.image.avatar()} 
                        timeAgo="Yesterday at 0:32" 
                        content={faker.hacker.phrase()}/>    
                </ApprovalCard>
        </div>
    )  

};

ReactDOM.render(<App/>, document.querySelector('#root'))     