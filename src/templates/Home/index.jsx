import { useCallback, useEffect, useState } from 'react';
import './styles.css';
import { Posts } from '../../components/Posts';
import { loadPosts } from '../../utils/loadPosts';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setallPosts] = useState([]);
  const [pages, setPages] = useState(0);
  const [postsPerPage] = useState(5);
  const [searchValue, setSearchValue] = useState('');

  const handleLoadPosts = useCallback(async (pages, postsPerPage) => {
    const postAndPhotos = await loadPosts();

    setPosts(postAndPhotos.slice(pages, postsPerPage));
    setallPosts(postAndPhotos);
  }, []);

  const noMorePosts = pages + postsPerPage >= allPosts.length;

  const filteredPosts = searchValue
    ? allPosts.filter((post) => post.title.toUpperCase().includes(searchValue.toUpperCase()))
    : posts;

  const loadMorePosts = () => {
    const nextPage = pages + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);

    posts.push(...nextPosts);

    setPosts(posts);
    setPages(nextPage);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  useEffect(() => {
    handleLoadPosts(0, postsPerPage);
  }, [handleLoadPosts, postsPerPage]);

  return (
    <section className="container">
      <div className="search-container">
        {!!searchValue && <h1>Você pesquisou por:{searchValue}</h1>}
        <TextInput filterInput={handleChange} />
      </div>

      {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}
      {filteredPosts.length === 0 && <p>Não existem Posts</p>}
      <div className="button-container">
        {!searchValue && <Button disabled={noMorePosts} text="Load More Posts" loadMorePosts={loadMorePosts} />}
      </div>
    </section>
  );
};

export default Home;
