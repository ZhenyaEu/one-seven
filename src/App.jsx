import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Works, StarsCanvas, Footer } from "./components";
import { ToyCanvas, FoxCanvas, /* AirplaneCanvas, */ CrocodileCanvas } from "./components/canvas"; 

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary '>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
         <div className='relative z-[-1]'> 
        <ToyCanvas />
        {/* <CrocodileCanvas /> */}
        <FoxCanvas />
       {/*  <AirplaneCanvas /> */}
        <About />
        <Experience />
       {/*  <Tech /> */}
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
