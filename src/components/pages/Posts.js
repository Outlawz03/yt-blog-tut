import React, {useState, useEffect} from 'react';

import { AddPostWrapper } from '../style/AddPostStyle';

import  { firestore } from '../../firebase';

export const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    firestore
      .collection('posts')
      .get()
      .then(snapshot => {
        console.log('test');
        const result = snapshot.docs.map( post => ({          
          title: post.data().title,
          created: post.data().created.toDate(),
          body: post.data().body,
          postId: post.id,
        }));
        
        if(JSON.stringify(result) !== JSON.stringify(posts)) {
          setPosts(result);
        }
      })
  }, [posts]);
  
  return (
    <AddPostWrapper>
      <table>
        <thead>
          <tr>
            <th>Post Id</th>
            <th>Title</th>
            <th>Created On</th>
          </tr>
        </thead>
        <tbody>
          { posts.map(post => 
            <tr key={ post.postId }>
              <td>{ post.postId }</td>
              <td>{ post.title }</td>
              <td>{post.created.toLocaleDateString('en-US',{
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}</td>
            </tr>
          )}        
        </tbody>
      </table>
    </AddPostWrapper>
  );
};