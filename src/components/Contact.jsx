import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

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
          to_email: "sujata@jsmastery.pro",
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
        <p className={styles.sectionSubText}>Давайте знайомитись...</p>
        <h3 className={styles.sectionHeadText}>Контакти</h3>

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
              placeholder="+380...."
              className='bg-white-100 py-4 px-6 placeholder:text-gray text-black rounded-lg outline-none border-none font-medium'
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

          <button
            type='submit'
            className='bg-white-100 py-3 px-6 rounded-xl outline-none w-fit text-black shadow-md shadow-black hover:bg-blue-100'
          >
            {loading ? "Надсилається..." : "Залишити заявку"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='flex-[0.75] bg-tertiary p-8 rounded-2xl'
      >
        <div>
        <p className={styles.sectionSubText}>Адреси наших дитячих садочків у м. Дніпро</p>
        {/* <h3 className={styles.sectionHeadText}>Адреси наших дитячих сдочків</h3> */}
          <p className='pt-10 text-white font-bold text-center'>Дитячий садочок на вул. Червоної рути, 55
Дніпро 
</p>
          <a className='pt-5 text-black ml-40 mt-5' href="tel:+380955696255">+38 095 569 62 55</a>
          <p className='pt-10 text-white font-bold text-center'>Дитячий садочок на вул. Грушевського, 34
Дніпро
</p>
          <a className='pt-5 text-black ml-40 mt-5' href="tel:+380991742715">+380 99 174 27 15</a>
          <p className='pt-10 text-white font-bold text-center'>Початкова школа на Верещагіна,99
Дніпро
</p>
          <a className='pt-5 text-black ml-40 mt-5' href="tel:+380993704729">+380 99 370 47 29</a>
          <a href='https://www.instagram.com/one.seven.ua/?igshid=MzRlODBiNWFlZA%3D%3D'>
          <img src="src/assets/github.png" alt="Instagram" className='inline w-20 h-20 mt-20 ml-40'></img>
          </a>
          <a href='https://one-seven.com.ua/'>
          <img src="src/assets/site.png" alt="Instagram" className='inline w-50 h-20 mt-20 ml-10'></img>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
