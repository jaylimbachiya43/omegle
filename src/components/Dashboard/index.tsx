// dashboard.tsx
'use client'
// dashboard.tsx
import { useEffect, useState } from 'react';
import VideoChat from '../VideoChat'; // Assuming you have a VideoChat component

const Dashboard: React.FC = () => {
  const [userStream, setUserStream] = useState<MediaStream | null>(null);
  const [activeUsers, setActiveUsers] = useState<number>(0);

  useEffect(() => {
    // Code to fetch user stream goes here
    // For example, using navigator.mediaDevices.getUserMedia

    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setUserStream(stream);
      })
      .catch((error) => {
        console.error('Error accessing user media:', error);
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
          {/* Placeholder for UI elements of the random user stream */}
          <p>Username: RandomUser123</p>
          <p>Location: Random City</p>
          {/* Add more details or buttons as needed */}
        </div>
        <button className="mt-4 p-2 bg-blue-500 text-white rounded">
          Skip
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
