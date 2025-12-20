import React, { useState } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

export default function ImageCropper({ image, onCropComplete }) {
  const [crop, setCrop] = useState({
    unit: "px",
    width: 400,
    height: 300,
    x: 0,
    y: 0,
  });

  const handleCropComplete = async (crop) => {
    const canvas = document.createElement("canvas");
    const img = document.getElementById("crop-image");

    canvas.width = 400;
    canvas.height = 300;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(
      img,
      crop.x,
      crop.y,
      crop.width,
      crop.height,
      0,
      0,
      400,
      300
    );

    canvas.toBlob((blob) => {
      onCropComplete(blob);
    }, "image/jpeg");
  };

  return (
    <div>
      <ReactCrop crop={crop} onChange={setCrop} onComplete={handleCropComplete}>
        <img id="crop-image" src={image} alt="Crop" />
      </ReactCrop>
    </div>
  );
}
