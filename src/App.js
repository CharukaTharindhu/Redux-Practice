import './App.css';
import ButtonComponents from './components/ButtonComponents';
import PostList from './components/PostList';
import SelectedPost from './components/SelectedPost';

function App() {
  return (
    <div className='App'>
      <ButtonComponents />
      <br />
      <PostList />
      <br />
      <br />
      <br />
      <SelectedPost />
    </div>
  );
}

export default App;
