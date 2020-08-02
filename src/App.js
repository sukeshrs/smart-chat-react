import React from 'react'
import faker from 'faker'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard';
import Weather from './Weather'

const App = () =>{
  return (
    <div className="ui container comments">
      <Weather></Weather>
      <ApprovalCard>
        <div>Are you sure about this</div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          avatar={faker.image.avatar()}
        ></CommentDetail>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          avatar={faker.image.avatar()}
        ></CommentDetail>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          avatar={faker.image.avatar()}
        ></CommentDetail>
      </ApprovalCard>
    </div>
  );
}
export default App;


