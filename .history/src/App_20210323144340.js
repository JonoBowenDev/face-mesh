import React, { useRef } from "react";
import * as tf from "@tensorflow/tfjs"; 
import * as facemesh from "@tensorflow-models/facemesh";
import Webcam from "react-webcam";
import styles from "./styles"; 

export default function App() {

  const webCamRef = useRef(null);
  const canvasRef = useRef(null); 

  return (
    <div>
      <Webcam ref={webCamRef} style={styles.container}/>
      <canvas ref={canvasRef} style={styles.container}/>
    </div>
  )
}