import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './feed.css';
import Post from '../post/Post';
import Skeleton from '../skeleton/Skeleton';

const Feed = () => {
  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    setLoading(true);

    try {
      const response = await axios.get("/api/videos/1");
      setVideos(response.data);
      setLoading(false);
    } catch (e) {
      console.log(e);
    };
  };

  useEffect(() => {
    getVideos();
  }, []);

  // Skeleton types: feed, circle, custom
  return (
    <div className='feed'>
      {loading ? (
        <Skeleton type='custom' />
      ) : (
        videos.map((video) => <Post key={video.id} video={video} />)
      )}
    </div>
  );
};

export default Feed;