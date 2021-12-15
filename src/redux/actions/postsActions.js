import { FETCH_BUTTON_CLICKED, SELECT_POST } from './types';
import axios from 'axios';

// export const fetchPosts = () => {
//   return {
//     type: FETCH_BUTTON_CLICKED, // description about action
//     payload: [
//       {
//         userId: 1,
//         id: 1,
//         title: 'asdfasdfasdfasdfasasfasfdsa',
//         body: 'asdfasdgxfigsoed',
//       },
//       {
//         userId: 1,
//         id: 2,
//         title: 'asdfasdfasdfasdfasasfasfdsa',
//         body: 'asdfasdgxfigsoed',
//       },
//       {
//         userId: 1,
//         id: 3,
//         title: 'asdfasdfasdfasdfasasfasfdsa',
//         body: 'asdfasdgxfigsoed',
//       },
//     ], //normal we passed API request for payload of action , here we passed dummy data
//   };
// };

//get all by API call
export const fetchPosts = () => async (dispatch) => {
  const results = await axios.get(
    'https://jsonplaceholder.typicode.com/posts?_limit=5'
  );

  if (results) {
    dispatch({
      type: FETCH_BUTTON_CLICKED,
      payload: results.data,
    });
  }
};

//Get one by clicking
export const selectPost = (post) => {
  return {
    type: SELECT_POST,
    payload: post,
  };
};
