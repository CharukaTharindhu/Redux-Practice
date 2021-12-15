import React from 'react';
import { fetchPosts } from '../redux/actions/postsActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function ButtonComponents(props) {
  return (
    <div>
      <h1>Hi Redux</h1>
      <button onClick={() => props.fetchPosts()}>Click Me</button>
    </div>
  );
}

//connect component to action
const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchPosts: fetchPosts }, dispatch);
};

export default connect(null, matchDispatchToProps)(ButtonComponents);
