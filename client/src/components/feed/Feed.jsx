import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './feed.css';
import Post from '../post/Post';

const Feed = () => {
  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    setLoading(true);

    try {
      const response = await axios.get("/api/videos/1");
      setVideos(response.data);
    } catch (e) {
      console.log(e);
    };
  };

  useEffect(() => {
    getVideos();
  }, []);
  
  return (
    <div className='feed'>
      {videos.map(video => (
        <Post key={video.id} video={video} loading={loading} />
      ))}
      
    </div>
  );
};

export default Feed;