import React from 'react'
import Post from '../Post'

export default function PostsContainer({data_posts, change_like}) {
  return (
    <div>
     {
        data_posts.map(el => <Post key ={el.id}{...el} change_like={change_like} />)
     } 
    </div>
  )
}
