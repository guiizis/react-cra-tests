import { Component } from 'react';
import './styles.css';
import { Posts } from '../../components/Posts';
import { loadPosts } from '../../utils/loadPosts';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';


class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 5,
    searchValue: ''
  }

  async componentDidMount() {
    const postAndPhotos = await loadPosts();
    const { pages, postsPerPage } = this.state;

    this.setState(
      {
        posts: postAndPhotos.slice(pages, postsPerPage),
        allPosts: postAndPhotos
      }
    );
  }

  componentDidUpdate() {

  }

  componentWillUnmount() {

  }

  loadMorePosts = () => {
    const {
      page,
      postsPerPage,
      allPosts,
      posts
    } = this.state;

    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);

    posts.push(...nextPosts)

    this.setState({ posts, page: nextPage })

  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value })
  }


  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    const filteredPosts = !!searchValue ?
      allPosts.filter(post => post.title.toUpperCase().includes(searchValue.toUpperCase()))
      :
      posts;

    return (
      <section className='container'>
        <div className='search-container'>
          {!!searchValue && (
            <h1>Você pesquisou por:{searchValue}</h1>
          )}
          <TextInput
            filterInput={this.handleChange}
          />
        </div>

        {filteredPosts.length > 0 && (
          <Posts posts={filteredPosts} />
        )}
        {filteredPosts.length === 0 && (
          <p>Não existem Posts</p>
        )}
        <div className="button-container">
          {!searchValue && (
            <Button
              disabled={noMorePosts}
              text="Load More Posts"
              loadMorePosts={this.loadMorePosts}
            />
          )}
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

export default Home;
