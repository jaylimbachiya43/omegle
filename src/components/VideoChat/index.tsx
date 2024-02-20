// VideoChat.tsx
'use client'
import React, { useRef, useEffect } from 'react';

interface VideoChatProps {
  stream: MediaStream;
}

const VideoChat: React.FC<VideoChatProps> = ({ stream }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  return (
    <div>
      <video ref={videoRef} autoPlay playsInline muted />
    </div>
  );
};

export default VideoChat;
