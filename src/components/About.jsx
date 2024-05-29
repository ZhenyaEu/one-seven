import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";


const ServiceCard = ({ index, title, icon, discription }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full  green-pink-gradient  p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-gradient-to-r from-indigo-50 from-5% via-sky-100 via-10% to-emerald-50 to-90% rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-black text-[20px]  text-center'>
          {title}
        </h3>
        <h6 className='text-black text-[15px]  text-center mt-4'>
        {discription}
        </h6>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
  
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Дозвольте представитися...</p>
        <h2 className={styles.sectionHeadText}>Про нас</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Наче корабель у космосі, на якому діти, викладачі та батьки — одна команда, команда космічного корабля One Seven, що разом долає усі перешкоди та труднощі, переживає миті “турбулентності” вікових криз, і стає єдиною рушійною силою на великому та важливому шляху зростання та навчання. Ми продумали усі деталі, щоб це місце стало другим домом, де ви можете без остраху залишити своїх дітей, довіривши нашій команді найцінніше.
      </motion.p>

      <motion.div variants={textVariant()} className='mt-10 '>
        <h2 className={styles.sectionHeadText}>Наші переваги</h2>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
