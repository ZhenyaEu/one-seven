import React, { Suspense, useEffect, useState, useRef, useCallback } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";


const Crocodile = ({ isMobile }) => {

const [scrollY, setScrollY] = useState(0);  
const { scene } = useGLTF("./crocodile_toy/scene.gltf"); 
const modelRef = useRef();

// Memoized handleScroll function
const handleScroll = () => {
  setScrollY(window.scrollY);
  const rotationSpeed = 0.0009;
  modelRef.current.rotation.x = scrollY * rotationSpeed;
  modelRef.current.rotation.y = scrollY * rotationSpeed;
  
};

// Attach the scroll listener to the window
 useEffect(() => {
  function watchScroll() {
  window.addEventListener('scroll', handleScroll);
  }
  watchScroll()
  return () => {
    window.removeEventListener('scroll', handleScroll);
  }; 
}, [scrollY]); 


return (
  <mesh ref={modelRef} onScroll={handleScroll}>
    <hemisphereLight intensity={0.45} groundColor='black' />
    <spotLight
      position={[-30, 50, 5]}
      angle={90.12}
      penumbra={1}
      intensity={1}
      castShadow
      shadow-mapSize={1024}
    />
    <pointLight intensity={1} />
    
    <primitive
      object={scene}
      scale={isMobile ? 0.3 : 0.6}
      position={isMobile ? [-7, -3, -2.2] : [0, 3.25, -1.5]}
      rotation={[-0.01, -0.2, -0.1]}
    />
   
  </mesh>
);
};

const CrocodileCanvas = () => {
const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  // Add a listener for changes to the screen size
  const mediaQuery = window.matchMedia("(max-width: 500px)");

  // Set the initial value of the `isMobile` state variable
  setIsMobile(mediaQuery.matches);

  // Define a callback function to handle changes to the media query
  const handleMediaQueryChange = (event) => {
    setIsMobile(event.matches);
  };

  // Add the callback function as a listener for changes to the media query
  mediaQuery.addEventListener("change", handleMediaQueryChange);

  // Remove the listener when the component is unmounted
  return () => {
    mediaQuery.removeEventListener("change", handleMediaQueryChange);
  };
}, []);

return (
  <div className='fixed mt-[10px]  w-full h-auto inset-0 z-[-1]'>
  <Canvas
    frameloop='demand'
    shadows
    dpr={[2, 4]}
    camera={{ position: [25, -5, 10], fov: 45 }}
    gl={{ preserveDrawingBuffer: true }}
  >
    <Suspense fallback={<CanvasLoader />}>
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Crocodile isMobile={isMobile} />
    </Suspense>

    <Preload all />
  </Canvas>
  </div>
);
};

export default CrocodileCanvas;
 