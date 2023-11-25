import { useState } from "react";

import "./style.scss";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import VideoPopup from "../../../components/videoPopup/VideoPopup";
import Img from "../../../components/lazyLoadImage/Img";
import { PlayIcon } from "../PlayBtn";

const VideoItem = ({ video, onVideoClick }) => (
  <div className="videoItem" onClick={() => onVideoClick(video.key)}>
    <div className="videoThumbnail">
      <Img src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`} />
      <PlayIcon />
    </div>
    <div className="videoTitle">{video.name}</div>
  </div>
);

const LoadingSkeleton = () => (
  <div className="skItem">
    <div className="thumb skeleton"></div>
    <div className="row skeleton"></div>
    <div className="row2 skeleton"></div>
  </div>
);

const VideosSection = ({ data, loading }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  return (
    <div className="videosSection">
      <ContentWrapper>
        <div className="sectionHeading">Official Videos</div>
        {!loading ? (
          <div className="videos">
            {data?.results?.map((video) => (
              <VideoItem
                key={video.id}
                video={video}
                onVideoClick={(key) => {
                  setVideoId(key);
                  setShow(true);
                }}
              />
            ))}
          </div>
        ) : (
          <div className="videoSkeleton">
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
          </div>
        )}
      </ContentWrapper>
      <VideoPopup
        show={show}
        setShow={setShow}
        videoId={videoId}
        setVideoId={setVideoId}
      />
    </div>
  );
};

export default VideosSection;