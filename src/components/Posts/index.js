import { PostCard } from '../PostCard';

export const Posts = ({posts}) => {
  return (
    <div className='posts'>
    {posts.map((element) => (
        <PostCard
          key={element.id} 
          id={element.id}
          title={element.title}
          body={element.body}
          cover={element.cover}
        />
    ))}
  </div>
  )
}