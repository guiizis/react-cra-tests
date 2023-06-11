import { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'teste 1',
        body: 'body 1'
      },
      {
        id: 2,
        title: 'teste 2',
        body: 'body 2'
      },
      {
        id: 3,
        title: 'teste 3',
        body: 'body 3'
      },
    ]
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="App">
        {posts.map(element => (
          <div key={element.id}>
            <h1>
              {element.title}
            </h1>
            <h5>
              {element.body}
            </h5>
          </div>
          ))}
      </div>
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
