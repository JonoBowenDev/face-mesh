import React, { useRef } from "react";
import * as tf from "@tensorflow/tfjs"; 
import * as facemesh from "@tensorflow-models/facemesh";
import Webcam from "react-webcam";
import styles from "./styles"; 
import { drawMesh } from "./utilities"; 

export default function App() {

  const webCamRef = useRef(null);
  const canvasRef = useRef(null); 

  const runFacemesh = async () => {
    const net = await facemesh.load({
      inputResolution:{width:640, height: 480}, 
      scale:0.8
    });
    setInterval(() => {
      detect(net)
    }, 100)
  }

  const detect = async (net) => {
    if (
      typeof webCamRef.current !== "undefined" && 
      webCamRef.current !== null && 
      webCamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webCamRef.current.video;
      const videoWidth = webCamRef.current.video.videoWidth;
      const videoHeight = webCamRef.current.video.videoHeight;

      // Set video width
      webCamRef.current.video.width = videoWidth;
      webCamRef.current.video.height = videoHeight;

      // Set canvas width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make detections
      const face = await net.estimateFaces(video);
      console.log(face);

      // Get canvas context for drawing
      const ctx = canvasRef.current.getContext("2d");
      drawMesh(face, ctx); 
    }
  }

  runFacemesh();

  return (
    <div>
      <header className="App-header">
      <Webcam ref={webCamRef} style={styles.container}/>
      <canvas ref={canvasRef} style={styles.container}/>
      </header>
    </div>
  )
}