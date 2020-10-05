import React, { useState } from 'react';
import { firestore } from '../../firebase';

import { Button } from '../common/Button';
import { AddPostWrapper } from '../style/AddPostStyle';

export const AddPost = () => {
  const [ newPost, setNewPost ] = useState({
    title: '',
    body: ''
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // store Post in firestore
    firestore
      .collection('posts')
      .add({
        title: newPost.title,
        body: newPost.body,
        created: new Date()
      })
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewPost({
      ...newPost,
      [name]: value
    });
  };

  const handleInput = ({ target }) => {
    const { id, innerHTML } = target;
    setNewPost({
      ...newPost,
      [id]: innerHTML
    });
  };

  return (
    <AddPostWrapper>
      <form onSubmit={ handleSubmit }>
        <input 
          id="title"
          type="text"
          name="title"
          placeholder={"Title"}
          onChange={ handleChange }
          value={ newPost.title }
        />
        <label htmlFor="body">Content</label>        
        <div
          className="textAreaElement"
          id="body"
          contentEditable="true"
          onInput={ handleInput } 
          html={ newPost.body }>
        </div>
        <Button type="submit" message={'Submit'} />
      </form>
    </AddPostWrapper>
  )
};