export const loadPosts = async () => {
  const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
  const photosResponse = await fetch('https://jsonplaceholder.typicode.com/photos');
  const [posts, photos] = await Promise.all([postsResponse, photosResponse]);
  const postJson = await posts.json();
  const photosJson = await photos.json();
  const postAndPhotos = postJson.map((element, index) => {
    return { ...element, cover: photosJson[index].url };
  });
  return postAndPhotos;
};
