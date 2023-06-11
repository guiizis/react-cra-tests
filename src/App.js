import logo from './logo.svg';
import { Component } from 'react';
import './App.css';

class App extends Component {
 state = {
      name: 'teste',
      counter: 0
    }

  handlePClick = () => {
    this.setState({name: 'teste2'});
  }

  handleAclick = (event) => {
    event.preventDefault();
    const { counter } = this.state;
    this.setState({counter: counter + 1});
  }

  render() {
    const { name, counter } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handlePClick}>
            {name}
            <br/>
            {counter}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            onClick={this.handleAclick}
          >
            Learn React
          </a>
        </header>
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
