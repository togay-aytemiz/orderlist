import { useState } from "react";

function ImageList({ images }) {
  const [selectedName, setSelectedName] = useState("");

  const handleClick = (id) => {
    let filteredImage = images.find((image) => image.id === id);
    console.log(filteredImage);
    setSelectedName(filteredImage.name);
  };

  const renderedImages = images.map((image, index) => {
    return (
      <img
        key={image.id}
        src={image.src}
        onClick={() => handleClick(image.id)}
      />
    );
  });

  return (
    <div>
      <h1>Image ismi: {selectedName}</h1>
      <div>{renderedImages}</div>
    </div>
  );
}

export { ImageList };
