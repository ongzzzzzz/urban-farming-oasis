import Image from 'next/image'
import Link from 'next/link'
import NavBar from '../components/navbar';
import { Camera } from "react-camera-pro";
import { useState, useRef } from 'react';

export default function Scan() {

  const camera = useRef(null);
  const [image, setImage] = useState(null);
  const [taken, setTaken] = useState(false);
  const [numberOfCameras, setNumberOfCameras] = useState(0);

  return (
    <>
      <div style={{ height: "calc(100vh - 70px)", backgroundColor: "#FAF4DF" }}
        className="flex flex-col justify-center items-center">

        <div className="w-11/12 font-bold text-center">Place soil in camera view to determine the most suitable type of crop to plant!</div>

        <div style={{ display: !taken ? "block" : "none" }} className="w-11/12 my-2">
          <Camera ref={camera} aspectRatio={1 / 1} numberOfCamerasCallback={setNumberOfCameras} />
        </div>
        <div style={{ display: !taken ? "none" : "block" }} className="w-11/12 my-2">
          <img src={image} alt='Taken photo' />
        </div>

        <button onClick={() => {
          setImage(camera.current.takePhoto());
          setTaken(!taken);
        }}
          className="text-white bg-slate-600 px-2 py-1 rounded-md"
        >
          {!taken ? "Take Photo" : "Retake Photo"}
        </button>
        <button onClick={() => {
          camera.current.switchCamera();
        }}
          hidden={numberOfCameras <= 1}
          className="text-white bg-slate-600 px-2 py-1 rounded-md my-2"

        />
        <Link href="/scan-result"
          className="text-white bg-slate-600 px-2 py-1 rounded-md"
        >Process Image</Link>
      </div>
      <NavBar />
    </>
  )
}
