import { process_image } from 'image-processor';
import { useState } from 'react';

export const Home = () => {
  const [imageUrl, setImageUrl] = useState('');

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      const fileType = file.type; // image/png

      reader.onload = async (e) => {
        const arrayBuffer = e.target?.result;
        if (arrayBuffer && typeof arrayBuffer !== 'string') {
          const uint8Array = new Uint8Array(arrayBuffer);

          const processedData = process_image(
            uint8Array,
            fileType.replace('image/', '')
          );

          // Convert Vec<u8> to Uint8Array
          const processedImgUint8Array = new Uint8Array(processedData);

          // Create Blob from Uint8Array
          const blob = new Blob([processedImgUint8Array], { type: fileType });

          // Create object URL from Blob
          setImageUrl(URL.createObjectURL(blob));
        }
      };

      reader.readAsArrayBuffer(file);
    }
  };

  return (
    <>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {imageUrl && <img src={imageUrl} alt="Uploaded Image" />}
    </>
  );
};
