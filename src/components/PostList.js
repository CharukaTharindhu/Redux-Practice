import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectPost } from '../redux/actions/postsActions';

function PostList(props) {
  const createListItems = () => {
    return props.allPosts.map((post) => {
      return (
        <li key={post.id} onClick={() => props.selectPost(post)}>
          {post.title} {post.body}
        </li>
      );
    });
  };

  if (!props.allPosts) {
    return <h2>Please click the button</h2>;
  }
  return (
    <div>
      <ul>{createListItems()}</ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    allPosts: state.allPosts,
  };
};

//connect component to action
const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({ selectPost: selectPost }, dispatch);
};

export default connect(mapStateToProps, matchDispatchToProps)(PostList);
