import { Component } from 'react';
import './styles.css';
import { Posts } from '../../components/Posts';
import { loadPosts } from '../../utils/loadPosts';
import { Button } from '../../components/Button';


class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 10
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

  render() {
    const { posts, page, postsPerPage, allPosts } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    return (
      <section className='container'>
        <Posts posts={posts} />
        <div className="button-container">
          <Button
            disabled={noMorePosts}
            text="Load More Posts"
            loadMorePosts={this.loadMorePosts}
          />
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
