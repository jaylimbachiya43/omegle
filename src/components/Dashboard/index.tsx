"use client";
import { useEffect, useState } from "react";
import VideoChat from "../VideoChat";
import RandomUserStream from "../RendomeUserStream";

const Dashboard: React.FC = () => {
  const [userStream, setUserStream] = useState<MediaStream | null>(null);
  const [activeUsers, setActiveUsers] = useState<number>(0);
  const [randomUserStream, setRandomUserStream] = useState<MediaStream | null>(
    null
  );

  useEffect(() => {
    // Code to fetch user stream goes here
    // For example, using navigator.mediaDevices.getUserMedia

    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setUserStream(stream);
      })
      .catch((error) => {
        console.error("Error accessing user media:", error);
      });

    // Simulating active users increment on mount
    setActiveUsers((prevCount) => prevCount + 1);

    // Simulating active users decrement on unmount
    return () => {
      setActiveUsers((prevCount) => prevCount - 1);
    };
  }, []);

  return (
    <div className="flex justify-between p-4">
      <div>
        <h2>Your Stream</h2>
        {userStream && <VideoChat stream={userStream} />}
      </div>
      <div className="flex flex-col items-end">
        <span className="bg-blue-500 text-white p-2 rounded">
          Active Users: {activeUsers}
        </span>
        <h2>Random User Stream</h2>
        <div className="bg-gray-300 p-4 rounded mb-4">
          {/* Import and use your RandomUserStream component here */}
          {randomUserStream && <RandomUserStream stream={randomUserStream} />}
        </div>
        <button className="mt-4 p-2 bg-blue-500 text-white rounded">
          Skip
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
