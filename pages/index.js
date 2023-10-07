// next image

import Image from "next/image";

//components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

//farmer motion
import { motion } from 'framer-motion';


//variants
import { fadeIn } from '../variants';


const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* test */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-35 xl:text-left h-full container mx-auto ">
          {/* Title */}
          <motion.h1 
          variants={fadeIn('down', 0.2)} 
          initial='hidden'
           animate='show' 
           exit='hidden'
          className='h1'> 
          
          Transforming Ideas <br /> Into

            <span className="text-accent"> Digital Reality </span>

          </motion.h1>
          {/* sub title */}

          <motion.p

            variants={fadeIn('down', 0.3)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">  
            
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus

          </motion.p>

          {/* btn */}

          <div className="flex justify-center xl:hidden relative ">
            <ProjectsBtn />
          </div>

          <motion.div
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="hidden xl:flex"

          >

            <ProjectsBtn />

          </motion.div>

        </div>
      </div>
      {/* image */}
      <div>Image</div>
    </div>
  );
};

export default Home;
