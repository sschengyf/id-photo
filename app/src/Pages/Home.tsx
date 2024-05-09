import { process_image } from 'image-processor';
import { useState } from 'react';
import { FileIcon } from '../components';
import './Home.css';

export const Home = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [photoSize, setPhotoSize] = useState('3x4cm');
  const [printSize, setPrintSize] = useState('10x15cm');
  const [isDraggingOver, setIsDraggingOver] = useState(false);

  const handleFile = (file: File) => {
    const reader = new FileReader();
    const fileType = file.type;

    reader.onload = async (e) => {
      const arrayBuffer = e.target?.result;
      if (arrayBuffer && typeof arrayBuffer !== 'string') {
        const uint8Array = new Uint8Array(arrayBuffer);

        const processedData = process_image(
          uint8Array,
          fileType.replace('image/', ''),
          photoSize,
          printSize
        );

        console.log('Processed data:', processedData);

        // Convert Vec<u8> to Uint8Array
        const processedImgUint8Array = new Uint8Array(processedData);

        console.log('Processed image:', processedImgUint8Array);

        // Create Blob from Uint8Array
        const blob = new Blob([processedImgUint8Array], { type: fileType });

        // Create object URL from Blob
        setImageUrl(URL.createObjectURL(blob));
      }
    };

    reader.readAsArrayBuffer(file);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDraggingOver(false);
    const file = event.dataTransfer.files?.[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDraggingOver(true);
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDraggingOver(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDraggingOver(false);
  };

  return (
    <div className="mt-24">
      <form>
        <div className="flex flex-row justify-center">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Photo size
            </label>
            <div>
              <select
                name="photo_size"
                value={photoSize}
                onChange={(e) => setPhotoSize(e.target.value)}
                className="block appearance-none w-full border border-gray-200 text-gray-500 py-3 px-5 rounded"
              >
                <option value="3x4cm">3 x 4 cm (1.18 x 1.57 inches)</option>
                <option value="3.5x4.5cm">
                  3.5 x 4.5 cm (1.38 x 1.77 inches)
                </option>
                <option value="5.1x5.1cm">5.1 x 5.1 cm (2 x 2 inches)</option>
              </select>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Print size
            </label>
            <div>
              <select
                name="print_size"
                value={printSize}
                onChange={(e) => setPrintSize(e.target.value)}
                className="block appearance-none w-full border border-gray-200 text-gray-500 py-3 px-5 rounded"
              >
                <option value="10x15cm">10 x 15 cm (4 x 6 inches)</option>
              </select>
            </div>
          </div>
        </div>
        <div
          className={
            'm-auto w-2/4 rounded-md border-2 border-dashed py-8 mt-10 text-center cursor-pointer' +
            (isDraggingOver ? ' border-blue-500' : ' border-gray-300')
          }
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
        >
          <div>
            <FileIcon className="m-auto" />
          </div>
          <p className="mt-4">Select a file or drag and drop here</p>
          <label>
            <div className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 file-button cursor-pointer inline-block mt-4">
              <span className="pl-2">Select photo</span>
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
          <p className="mt-4">We don't store your photos</p>
        </div>
      </form>
      {imageUrl && <img src={imageUrl} alt="Uploaded Image" />}
    </div>
  );
};
