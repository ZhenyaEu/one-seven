import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Works, StarsCanvas, Footer } from "./components";
import { ToyCanvas, FoxCanvas, CrocodileCanvas  } from "./components/canvas"; 
import { useState } from "react";


const App = () => {

  const [isHeroLoaded, setIsHeroLoaded] = useState(false);

  const handleHeroLoaded = () => {
    setIsHeroLoaded(true);
  };


  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary '>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
           <Hero onLoaded={handleHeroLoaded} /> 
        </div>
         <div className='relative z-[-1]'> 
         {isHeroLoaded && <ToyCanvas />}
          {isHeroLoaded && <CrocodileCanvas />}
          {isHeroLoaded && <FoxCanvas />}
        <About />
        <Experience />
        <Works />
        <Feedbacks />
         </div> 
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      <div className=' z-1'>
      <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
