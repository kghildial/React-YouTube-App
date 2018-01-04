// Since this just takes and displays data (ie. a passive component)
// Thus it can be a functional component

import React from 'react';

const VideoList =  (props) => {
  return (
    <ul className="col-md-4 list-group">
      { props.videos.length }
    </ul>
  )
}

export default VideoList;