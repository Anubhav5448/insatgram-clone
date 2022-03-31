import React from 'react';
import Post from './Post';

const posts =[{
  id: '123',
  username:'anubhav_yadav06',
  userImg: '/profile.png ',
  img: "/profile.png",
  caption: "Like my post"
}]
function Posts() {
  return (
    <div>
      {posts.map((post) => (
      <Post
       key = {post.id} 
       id= {post.id}
      username={post.username}
      userImg={post.userImg} 
      img={post.img}
      caption={post.caption}
      />
      ))}
     
   
     
    </div>
  );
}

export default Posts;