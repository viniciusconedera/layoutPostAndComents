import React from 'react';
import './Comment.css';
import { comment } from 'postcss';

function Comment({data}) {
  return (
    <>
      <div id="comment">
        <img src={data.author.avatar} className="avatar"/>
        <p className="commentText">
          <span className="name">{data.author.name}: </span>
          {data.content}</p>
      </div>
    </>
  )
}

export default Comment;