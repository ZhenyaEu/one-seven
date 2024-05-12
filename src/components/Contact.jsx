import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
/* import { EarthCanvas } from "./canvas"; */
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import {
  TERipple,
  TEModal,
  TEModalDialog,
  TEModalContent,
  TEModalHeader,
  TEModalBody,
  TEModalFooter,
} from "tw-elements-react";
import { github } from "../assets";


const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "expert2904@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ой, щось пішло не так. Будь ласка спробуйте ще.");
        }
      );
  };

  

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-tertiary p-8 rounded-2xl'
      >
        <p className='sm:text-[18px] text-[14px] text-black uppercase tracking-wider'>Давайте знайомитись...</p>
        <h3 className='text-black font-white md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]'>Контакти</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-black font-medium mb-4'>Як вас звати?</span>
            <input
              type='text'
              name='name'
              value={form.name}
              autocomplete="+380"
              onChange={handleChange}
              placeholder="Ваше ім'я"
              className='bg-white-100 py-4 px-6 placeholder:text-gray text-black rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-black font-medium mb-4'>Ваш номер телефону</span>
            
     
            <input
              type='tel'
              name='email'
              value={form.email}
              onChange={handleChange}
              /* pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}" */
              placeholder="+380..."
              className='bg-white-100 py-4 px-6 placeholder:text-gray text-black rounded-lg outline-none border-none font-medium'
              required
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-black font-medium mb-4'>Додати повідомлення</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Текст повідомлення...'
              className='bg-white-100 py-4 px-6 placeholder:text-gray text-black rounded-lg outline-none border-none font-medium'
            />
          </label>

          <TERipple rippleColor="white">
          <button
            type='submit'
            className='bg-white-100 py-3 px-6 rounded-xl outline-none w-fit text-black text-[16px] shadow-md shadow-black bg-gradient-to-r from-white-400 to-white-500 hover:from-pink-500 hover:to-yellow-500'
            onClick={() => setShowModal(true)}
          >
           {/*  {loading ? "Надсилається..." : "Залишити заявку"} */}
           Відправити
          </button>
          </TERipple>

        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='flex-[0.75] bg-tertiary p-8 rounded-2xl'
      >
        <div>
        <p className='sm:text-[18px] text-[14px] text-black uppercase tracking-wider'>Адреси наших дитячих садочків у Дніпрі</p>
        {/* <h3 className={styles.sectionHeadText}>Адреси наших дитячих сдочків</h3> */}
          <p className='pt-20 text-xl text-black text-center'>Дитячий садочок на вул. Червоної рути, 55 
</p>
<p className='pt-5 pb-5 text-black text-center text-lg hover:text-2xl'><a class="group text-[21px] transition-all duration-300 ease-in-out" href="tel:+380955696255"><span class="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">+38 095 569 62 55</span></a></p>
<hr/>          
          <p className='pt-10 text-xl text-black text-center'>Дитячий садочок на вул. Грушевського, 34
</p>
<p className='pt-5 pb-5 text-black text-center text-lg hover:text-2xl'>
          <a class="group text-[21px] transition-all duration-300 ease-in-out" href="tel:+380991742715">
          <span class="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">+380 99 174 27 15</span></a></p>
          
          <hr/>
          <p className='pt-10 text-xl text-black text-center'>Початкова школа на вул. Верещагіна 99
</p>
<p className='pt-5 pb-5 text-black text-center text-lg hover:text-2xl'>
          <a class="group text-[21px] transition-all duration-300 ease-in-out" href="tel:+380993704729"><span class="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">+380 99 370 47 29</span></a></p>
          <hr/>
          <div className='flex justify-center pt-10'>
           <div className='ml-50 w-20 h-20 animate-bounce hover:animate-pulse'> 
          <a href='https://www.instagram.com/one.seven.ua/?igshid=MzRlODBiNWFlZA%3D%3D'>
          <img  src={github} alt="Instagram" ></img>
          </a>
          </div>  
          </div>
          <div className='flex justify-center pt-10'>
          <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d119644.5010652589!2d35.013598008222985!3d48.49882403093483!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe33f4d54229b%3A0xe618cfcc15866f55!2sONE-SEVEN!5e0!3m2!1sen!2sua!4v1701524834264!5m2!1sen!2sua"
      ></iframe>
      </div>
        </div>
      </motion.div>
      <TEModal show={showModal} setShow={setShowModal}>
        <TEModalDialog centered>
          <TEModalContent>
            <TEModalHeader>
              {/* <!--Modal title--> */}
              <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">
                Повідомлення відправлено!
              </h5>
              {/* <!--Close button--> */}
              
            </TEModalHeader>
            {/* <!--Modal body--> */}
            <TEModalBody className="m-auto">Ми з Вами зв'яжемося якомога швидше!</TEModalBody>
            <TEModalFooter>
              <TERipple rippleColor="light">
                <button
                  type="button"
                  className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-tertiary focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                  onClick={() => setShowModal(false)}
                >
                  Закрити
                </button>
              </TERipple>
              
            </TEModalFooter>
          </TEModalContent>
        </TEModalDialog>
      </TEModal>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
