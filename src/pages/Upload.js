/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import axios from 'axios';
import faker from 'faker';

const Upload = () => {
  const username = 'pranavkhapra';
  const name = 'Pranav Khapra';
  const avatar = 'https://i.imgur.com/rwatmMV.jpg';
  const [video, setVideo] = useState(null);
  const [caption, setCaption] = useState(null);
  const today = new Date();
  const timestamp = today.toISOString();

  const id = faker.random.uuid();
  const data = {
    id,
    name,
    username,
    avatar,
    // we cant follow our self so..
    is_followed: false,
    video,
    caption,
    likes: 0,
    comments: 0,
    timestamp,
    button_visible: false,
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // its the things like when you upload data it should come with this things
    axios
      .post('/.netlify/functions/add', data)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="upload-page">
      <br />
      <h1>Upload video</h1>
      <p>This video will be published to @{username}</p>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="section">
            <div className="image-upload" />
            <div className="form-section">
              <div className="section input-section">
                <label className="bold">Caption</label>
                <input
                  className="input"
                  name="caption"
                  onChange={(e) => setCaption(e.target.value)}
                />
              </div>
              <div className="break" />
              <div className="section input-section">
                <label className="bold">Video Url</label>
                <input
                  className="input"
                  name="video"
                  onChange={(e) => setVideo(e.target.value)}
                />
              </div>
            </div>
          </div>
          <button>Post</button>
        </form>
      </div>
    </div>
  );
};

export default Upload;
