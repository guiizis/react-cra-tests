export const PostCard = (props) => {
  const { title, body, cover } = props

  return (
    <div className='post'>
      <img src={cover} alt={title}></img>
      <div className='post-content'>
        <h2>
          {title}
        </h2>
        <h5>
          {body}
        </h5>
      </div>
    </div>
  )
}
