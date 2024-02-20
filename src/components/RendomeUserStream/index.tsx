// RandomUserStream.tsx
'use client'
import React, { useEffect, useRef } from "react";

interface RandomUserStreamProps {
  stream: MediaStream;
}

const RandomUserStream: React.FC<RandomUserStreamProps> = ({ stream }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.srcObject = stream;
    }

    return () => {
      // Cleanup code if needed
    };
  }, [stream]);

  return <video ref={videoRef} autoPlay playsInline muted />;
};

export default RandomUserStream;
