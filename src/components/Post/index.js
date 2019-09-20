import React from 'react';
import './Post.css'
import Comment from '../Comment';

function Post({data}) {
  console.log(data.comments);
  const {comments} = data;
  return (
    <div className="postContainer">
      <div className="post">
        <img src={data.author.avatar} className="avatar"/>
        <div className="info">
          <span className='name'>{data.author.name}</span>
          <span className='date'>{data.date}</span>
        </div>
      </div>
      <p className="postText">{data.content}</p>
      <div className="comments">
      <div className="line" />
        {comments.map(comment => <Comment key={comment.id} data={comment} />)}
      </div>
    </div>
  )
}

export default Post;