import React,{useRef,useEffect,useState} from 'react'
import { useNavigate } from "react-router-dom"; // Import for navigation
import movie from '../../assets/movie/movie.mp4'
import './Player.css'


const Player = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(0.5);
  const navigate = useNavigate(); // Initialize navigation

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume;
      videoRef.current.play().catch(() => console.log("Autoplay blocked"));
    }
  }, []);

  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const changeVolume = (event) => {
    const newVolume = event.target.value;
    videoRef.current.volume = newVolume;
    setVolume(newVolume);
    setIsMuted(newVolume === "0");
  };

  const enterFullScreen = () => {
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.webkitRequestFullscreen) {
      videoRef.current.webkitRequestFullscreen();
    } else if (videoRef.current.mozRequestFullScreen) {
      videoRef.current.mozRequestFullScreen();
    } else if (videoRef.current.msRequestFullscreen) {
      videoRef.current.msRequestFullscreen();
    }
    videoRef.current.play();
    setIsPlaying(true);
  };

  return (
    <div style={{ 
      width: "100vw", 
      height: "100vh", 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      backgroundColor: "black", 
      position: "relative" 
    }}>
      {/* Back Button */}
      <button 
        onClick={() => navigate("/")} 
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          backgroundColor: "#333",
          color: "white",
          border: "none",
          padding: "10px 15px",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "14px",
        }}
      >
        ⬅ Back
      </button>

      <video 
        ref={videoRef} 
        width="100%" 
        autoPlay 
        muted={isMuted} 
        loop 
        playsInline
        style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "cover" }}
      >
        <source src={movie} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Controls */}
      <div style={{ 
        position: "absolute", 
        bottom: "10px", 
        left: "50%", 
        transform: "translateX(-50%)", 
        backgroundColor: "rgba(0,0,0,0.6)", 
        padding: "10px", 
        borderRadius: "10px", 
        display: "flex", 
        alignItems: "center",
        gap: "10px"
      }}>
        {/* Play/Pause Button */}
        <button onClick={togglePlayPause} style={buttonStyle}>
          {isPlaying ? "Pause ⏸️" : "Play ▶️"}
        </button>

        {/* Mute/Unmute Button */}
        <button onClick={toggleMute} style={buttonStyle}>
          {isMuted ? "Unmute 🔊" : "Mute 🔇"}
        </button>

        {/* Volume Control */}
        <input 
          type="range" 
          min="0" 
          max="1" 
          step="0.1" 
          value={volume} 
          onChange={changeVolume} 
          style={{ cursor: "pointer" }} 
        />

        {/* Full-Screen Button */}
        <button onClick={enterFullScreen} style={buttonStyle}>
          Full Screen 🔲
        </button>
      </div>
    </div>
  );
};

const buttonStyle = {
  backgroundColor: "#444",
  color: "white",
  border: "none",
  padding: "10px 15px",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "14px"
};

export default Player;
