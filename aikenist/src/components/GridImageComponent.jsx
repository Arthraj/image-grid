import React from 'react';

const GridImageComponent = ({ gridX = 1, gridY = 1 }) => {
  console.log(gridX, gridY);

  // Function to generate a grid of images based on gridX and gridY
  const renderImages = () => {
    let images = [];
    for (let i = 0; i < gridX * gridY; i++) {
      images.push(
        <img
          key={i}
          src='/brainMRI.jpeg' // Make sure this path is correct
          alt="grid-img"
          style={{
            width: '100%',
            height: '100%',
            maxWidth: '100%',
            minHeight: '100%'
          }}
        />
      );
    }
    return images; // Ensure you return the array of images
  };

  return (
    <div className="grid-container">
      <div className='image-set' style={{
        gridTemplateColumns: `repeat(${gridX}, 1fr)`,
        gridTemplateRows: `repeat(${gridY}, 1fr)`
      }}>
        {renderImages()}
      </div>
    </div>
  );
};

export default GridImageComponent;

