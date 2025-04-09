import React from 'react';

const VideoPlayer = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="relative pt-[56.25%]">
        <iframe
          src="https://player.vimeo.com/video/1073668418?h=5f94a91706&badge=0&autopause=0&player_id=0&app_id=58479"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          allowFullScreen
          title="Section 3 Assignment 1"
          className="absolute top-0 left-0 w-full h-full"
        ></iframe>
      </div>
      <p className="mt-4 text-lg text-gray-700">
        This video explores the nuances of the Penn experience through personal reflections, community insights, and questions about identity, belonging, and growth.
        <br />
        <br />
        Following a script, participants interview strangers around campus, asking them questions about their experiences and perspectives. Their answers correlate to a positive or negative amount of points; the participant must continue asking questions until 20 points are reached.
        <br />
        <br />
        In this video, Zara and Angie, two Penn students, are performing the script.
      </p>
    </div>
  );
};

export default VideoPlayer;