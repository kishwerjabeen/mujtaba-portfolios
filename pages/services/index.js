// icons
import { IconName } from "react-icons/rx";

//components
import ServiceSlider from '../../components/ServiceSlider';
import Bulb from '../../components/Bulb';
import Circles from "../../components/Circles";

//  data
// check slider component

// farmar motion

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants'

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36  flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl-w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <h2 className="h2 xl:mt-8">
              My Services  <span className="text-accent">.</span>
            </h2>
            <p className="mb-4 max-w-[400px] mx-auto lg:max-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies a urna eu porta. In facilisis eros sit amet neque.
            </p>

          </div>
          {/* Slider */}
          <ServiceSlider />
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
