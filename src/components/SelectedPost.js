import React from 'react';
import { connect } from 'react-redux';

function SelectedPost(props) {
  if (!props.selectedPost) {
    return <h2>Please click on the post</h2>;
  }
  return (
    <div>
      <h2>User ID : {props.selectedPost.userId}</h2>
      <h2>Title : {props.selectedPost.title}</h2>
      <h2>Body : {props.selectedPost.body}</h2>
    </div>
  );
}

//connect component to state of store
const mapStateToProps = (state) => {
  return {
    selectedPost: state.selectedPost,
  };
};

export default connect(mapStateToProps)(SelectedPost);
