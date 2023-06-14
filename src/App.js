import { Component } from 'react';
import './App.css';
import { loadPosts } from './utils/loadPosts';
import { Posts } from './components/Posts';

class App extends Component {
  state = {
    posts: [],
    photos: []
  }

  async componentDidMount() {
    const postAndPhotos = await loadPosts()
    this.setState({ posts: postAndPhotos})
  }

  componentDidUpdate() {

  }

  componentWillUnmount() {

  }

  render() {
    const { posts } = this.state;
    return (
      <section className='container'>
          <Posts posts={posts}/>
      </section>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           NOW YOU DO WHAT THEY TOLD YOU.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
