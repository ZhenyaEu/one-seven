import React, { Suspense, useEffect, useState, useRef, useCallback } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";


const Fox = ({ isMobile }) => {

const [scrollY, setScrollY] = useState(0);  
const { scene } = useGLTF("./fox_toy/scene.gltf"); 
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
    <hemisphereLight intensity={0.01} groundColor='black' />
    <spotLight
      position={[-20, 50, 10]}
      angle={90.12}
      penumbra={1}
      intensity={1}
      castShadow
      shadow-mapSize={1024}
    />
    <pointLight intensity={1} />
    
     <primitive
      object={scene}
      scale={isMobile ? 2 : 5}
      position={isMobile ? [-7, -3, -2.2] : [-10, -3.25, -0.5]}
      rotation={[-0.04, 0.12, -0.2]}
    /> 
   
  </mesh> 
);
};

const FoxCanvas = () => {
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
  <div className='fixed mt-[200px] ml-10 w-full h-auto inset-0 z-[-1]'>
  <Canvas
    frameloop='demand'
    shadows
    dpr={[1, 2]}
    camera={{ position: [20, 3, 5], fov: 25 }}
    gl={{ preserveDrawingBuffer: true }}
  >
    <Suspense fallback={<CanvasLoader />}>
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Fox isMobile={isMobile} />
    </Suspense>

    <Preload all />
  </Canvas>
  </div>
);
};

export default FoxCanvas;
 