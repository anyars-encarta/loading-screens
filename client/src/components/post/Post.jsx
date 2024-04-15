import React from 'react'
import './post.css';

const Post = ({ loading, video }) => {
  return (
    <div className='post'>
        <div className="postImgContainer">
            <img className="postImage" src={video.img} alt={video.title} />
            <span className="postDuration">{video.duration}</span>
        </div>

        <div className="postInfoContainer">
            <img className='postAvatar' src={video.channel.avatar} alt="" />
            <div className="postInfo">
                <span className="postTitle">{video.title}</span>
                <span className="postChannel">{video.channel.name}</span>
                <span className="postDetail">{video.views} Views • {video.date}</span>
            </div>
        </div>
    </div>
  )
}

export default Post;