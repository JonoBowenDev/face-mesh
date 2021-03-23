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
      <Webcam ref={webcamRef} style={styles.container}/>
      <canvas ref={canvasRef} style={{
        position: "absolute",
        marginLeft: "auto",
        marginRight: "auto",
        left: 0,
        right: 0,
        textAlign: "center",
        zIndex: 9,
        width: 640,
        height: 480
      }}
    </div>
  )
}