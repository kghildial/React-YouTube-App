// Since this just takes and displays data (ie. a passive component)
// Thus it can be a functional component

import React from 'react';
import VideoListItem from './video_list_item'

const VideoList =  (props) => {
  
  const videoItems = props.videos.map((video) => {
    return <VideoListItem video={video} />
  });


  return (
    <ul className="col-md-4 list-group">
      {videoItems} {/* videoItems: videoItems */}
    </ul>
  )
}

export default VideoList;