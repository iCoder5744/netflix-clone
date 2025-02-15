import React from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import back_arrow_icon from '../assets/back_arrow_icon.png';

const Player = () => {
  const navigate = useNavigate();
  const { videoId } = useParams();
  const location = useLocation();
  const videoData = location.state || {}; // Get Data Passed from TitleCards

  return (
    <div className="h-screen bg-gray-700 flex flex-col justify-center items-center relative">
      
      {/* Back Button */}
      <img 
        src={back_arrow_icon} 
        alt="Back" 
        className="absolute top-5 left-5 w-12 cursor-pointer" 
        onClick={() => navigate(-1)} 
      />

      {/* Video Player */}
      <iframe 
        width="90%" 
        height="90%" 
        src={`https://www.youtube.com/embed/${videoId}`} 
        title={videoData.name || "Video"} 
        frameBorder="0" 
        allowFullScreen 
        className="h-full rounded-lg"
      ></iframe>

      {/* Video Info Section */}
      <div className="flex justify-between items-center px-3 w-11/12 mt-2 text-white text-center">
        <p className="text-sm font-bold">{videoData.name || "Unknown Video"}</p>
        <p className="text-sm opacity-80">{videoData.publishedDate || "Unknown Date"}</p>
        <p className="text-sm opacity-80">{videoData.type || "Unknown Type"}</p>
      </div>

    </div>
  );
};

export default Player;
