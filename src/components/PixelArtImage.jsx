import React, { useEffect, useRef } from "react";

const PixelArtImage = ({ src, pixelSize }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const img = new Image();
        img.src = src;

        img.onload = () => {
            const width = Math.floor(img.width / pixelSize);
            const height = Math.floor(img.height / pixelSize);

            // Устанавливаем размеры для канваса
            canvas.width = img.width;
            canvas.height = img.height;

            const tempCanvas = document.createElement("canvas");
            const tempCtx = tempCanvas.getContext("2d");
            tempCanvas.width = width;
            tempCanvas.height = height;

            tempCtx.drawImage(img, 0, 0, width, height);

            ctx.imageSmoothingEnabled = false;
            ctx.drawImage(tempCanvas, 0, 0, width, height, 0, 0, canvas.width, canvas.height);
        };
    }, [src, pixelSize]);

    return (
        <div className="pixel-art-container">
            <canvas ref={canvasRef} />
        </div>
    );
};

export default PixelArtImage;
