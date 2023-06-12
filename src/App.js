import { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    posts: [],
    photos: []
  }

  componentDidMount() {
    this.loadPosts()
  }

  componentDidUpdate() {

  }

  componentWillUnmount() {

  }

  loadPosts = async () => {
    const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
    const photosResponse = await fetch('https://jsonplaceholder.typicode.com/photos');
    const [posts, photos] = await Promise.all([postsResponse, photosResponse]);
    const postJson = await posts.json();
    const photosJson = await photos.json();

    const postAndPhotos = postJson.map((element, index)=>{
      return {...element, cover: photosJson[index].url}
    })

    this.setState({ posts: postAndPhotos})
  }

  render() {
    const { posts } = this.state;
    return (
      <section className='container'>
        <div className='posts'>
          {posts.map((element) => (
            <div className='post' key={element.id} >
              <img src={element.cover} alt={element.title}></img>
              <div className='post-content'>
                <h1>
                  {element.title}
                </h1>
                <h5>
                  {element.body}
                </h5>
              </div>
            </div>
          ))}
        </div>
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
