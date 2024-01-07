import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import * as Three from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import App from "./Apps/AccordionApp";

import TipCalculationApp from "./Apps/TipCalculationApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
function Test(){
  
useEffect(() => {
  const rendnder = new Three.WebGLRenderer();
  rendnder.setSize(window.innerWidth, window.innerHeight);
  document.body.append(rendnder.domElement);

  const scene = new Three.Scene();
  const camera = new Three.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    2000
  );
  const orbit = new OrbitControls(camera, rendnder.domElement);

  const boxGeometry = new Three.BoxGeometry(2, 2, 2);
  const boxMaterial = new Three.MeshBasicMaterial({ color: 0x00ff00 });
  const box = new Three.Mesh(boxGeometry, boxMaterial);
  const axesHelper = new Three.AxesHelper(5);
  const gridHelper = new Three.GridHelper(30, 30);

  const planeGeometry = new Three.PlaneGeometry(5, 5);
  const planeMaterial = new Three.MeshBasicMaterial({
    color: 0xffff00,
    side: Three.DoubleSide,
  });
  const plane = new Three.Mesh(planeGeometry, planeMaterial);
  plane.rotation.x = -Math.PI / 2;

  const sphereGeometry = new Three.SphereGeometry(1, 32, 32);
  const sphereMaterial = new Three.MeshBasicMaterial({ color: 0xffff00 });
  const sphere = new Three.Mesh(sphereGeometry, sphereMaterial);
  sphere.position.set(2, 2, 2);

  camera.position.set(5, 5, 5);
  orbit.update();
  scene.add(axesHelper);
  scene.add(gridHelper);
  scene.add(box);
  scene.add(plane);
  scene.add(sphere);
  function animate(time) {
    box.rotation.x = time / 100;
    box.rotation.y = time / 100;
    rendnder.render(scene, camera);
  }
  rendnder.setAnimationLoop(animate);
}, []);
return <></>;
}
root.render(
    <Test/>
);
