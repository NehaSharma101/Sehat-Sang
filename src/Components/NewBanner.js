import React from 'react';
import video from './assets/banner-video.mp4'
const NewBanner = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
      <video
        autoPlay
        muted
        loop
        style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }}
      >
        <source src={video} type="video/mp4" />
        {/* Add additional <source> elements for other video formats */}
      </video>
      <div style={{ position: 'absolute', top: '70%', left: '50%',transform: 'translate(-50%, -50%)', textAlign: 'center', color: '#ffffff', zIndex: '1' }}>
        <h1>A healthy outside starts from the inside</h1>
        <p>Get your health expert today!!</p>
      </div>
    </div>
  );
}

export default NewBanner;
