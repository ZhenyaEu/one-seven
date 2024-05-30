import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-tilt";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import { Carousel, Typography, Button } from "@material-tailwind/react"

const FeedbackCard = ({
  index,
  testimonial,
  name,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
     /* className='flex'  */
  >
    <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-white p-6 m-1 rounded-2xl sm:w-[310px] w-full flex'
      >
    <p className='text-black m-3 font-black text-[48px]'>"</p>
<a href='https://www.instagram.com/stories/highlights/17969906500307302/'>
    <div className='mt-1'>
      <p className='text-black tracking-wider text-[18px]'>{testimonial}</p>
<hr/>
      <div className='mt-7 flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
          <p className='text-blue font-medium text-[16px]'>
            <span className='blue-text-gradient'>@</span> {name}
          </p>
          <p className='mt-1 text-secondary text-[12px]'>
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className='w-10 h-10 rounded-full object-cover'
          loading="lazy"
        />
      </div>
    </div>
    </a>
    </Tilt>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className='sm:text-[18px] text-[14px] text-black uppercase tracking-wider'>Що про нас кажуть...</p>
          <h2 className='text-black font-white md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>Відгуки</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-nowrap gap-7 overflow-x-auto overflow-y-hidden`}> 

         {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))} 
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
