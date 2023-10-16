// icons
import { IconName } from "react-icons/rx";

//components
import ServiceSlider from '../../components/ServiceSlider';
import Bulb from '../../components/Bulb';
import Circles from "../../components/Circles";

//  data
export const serviceData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          // <FaHtml5 />,
          // <FaCss3 />,
          // <FaJs />,
          // <FaReact />,
          // <SiNextdotjs />,
          // <SiFramer />,
          // <FaWordpress />,
        ],
      },
      {
        title: 'UI/UX Design',
        // icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '2011 - 2012',
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2009 - 2010',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'UX/UI Designer - XYZ Company',
        stage: '2012 - 2023',
      },
      {
        title: 'Web Developer - ABC Agency',
        stage: '2010 - 2012',
      },
      {
        title: 'Intern - DEF Corporation',
        stage: '2008 - 2010',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - ABC University, LA, CA',
        stage: '2011',
      },
      {
        title: 'Computer Science Diploma - AV Technical Institute',
        stage: '2009',
      },
      {
        title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
        stage: '2006',
      },
    ],
  },
];

// farmar motion

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants'

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36  flex items-center">
      <Circles />
      <div className="container mx-auto"></div>
      <Bulb />
    </div>
  );
};

export default Services;
