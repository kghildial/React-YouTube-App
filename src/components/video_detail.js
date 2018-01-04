import React from 'react';

const VideoDetail = ({video}) => {
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  // ES6:: String interpolation: exactly the same as 'https://www.youtube.com/embed/' + videoId; 

  return (
    <div className="video-detail">
      <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item"></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;