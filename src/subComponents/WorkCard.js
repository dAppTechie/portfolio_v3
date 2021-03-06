import { useEffect } from 'react';
import uuid from 'react-uuid';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { BsGithub } from 'react-icons/bs';
import { WorkData } from '../data/Work';

const WorkCard = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 2, ease: 'easeInOut', delay: 0.5 },
      });
    }
    if (!inView) {
      controls.start({
        opacity: 0,
        y: 50,
        transition: { duration: 2, ease: 'easeInOut', delay: 0.5 },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      className='w-full flex flex-col md:flex-row md:m-5'>
      {WorkData.map(({ type, title, desc, tags, visit, github }) => (
        <div
          key={uuid()}
          className='w-full md:w-96 flex flex-col rounded-tl-[50px] rounded-br-[50px] bg-white items-center md:m-5 mt-3 md:h-[400px] relative'>
          <div className='flex justify-end w-11/12'>
            <h1 className='text-gray-800 text-xl main-text opacity-60 mt-2'>
              {type}
            </h1>
          </div>
          <div className='w-3/4 flex flex-col justify-start mt-4 mb-32'>
            <h1 className='text-black font-bold md:text-3xl text-2xl main-text'>
              {title}
            </h1>
            <p className='text-black font-light secondary-text mt-5 text-xl'>
              {desc}
            </p>
            <hr className='bg-black h-1 opacity-60 mt-5' />

            <ul className='flex mt-3 flex-wrap'>
              {tags.map((tag) => (
                <li
                  key={uuid()}
                  className='text-gray-800 mr-2 text-xs main-text'>
                  #{tag}
                </li>
              ))}
            </ul>
          </div>
          <div className='flex justify-end items-center space-x-3 absolute bottom-1 right-1'>
            <motion.a
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 0.9 }}
              href={github}
              target='_blank'
              rel='noopener noreferrer'
              alt='Bank of Ethereumn'>
              <BsGithub className='text-black text-4xl cursor-pointer select-none' />
            </motion.a>
            <motion.a
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 0.9 }}
              href={visit}
              target='_blank'
              rel='noopener noreferrer'
              alt='Bank of Ethereumn'>
              <button className='btn btn-active rounded-br-[50px] px-10 text-white'>
                Visit
              </button>
            </motion.a>
          </div>
        </div>
      ))}
    </motion.div>
  );
};
export default WorkCard;
