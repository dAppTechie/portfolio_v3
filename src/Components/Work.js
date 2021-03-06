import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import WorkCard from '../subComponents/WorkCard';

const Work = () => {
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
    <motion.div ref={ref} animate={controls} className='flex flex-col'>
      <h1 className='text-white main-text md:text-2xl antialiased font-bold tracking-wide mt-7 flex items-center space-x-4'>
        <span className='text-[#ff7f50] md:text-xl mr-2'>03. </span>My Work{' '}
        <hr className='md:w-80 w-40 opacity-50' />
      </h1>
      <div className='mt-5 md:mt-0'>
        <WorkCard />
      </div>
    </motion.div>
  );
};
export default Work;
