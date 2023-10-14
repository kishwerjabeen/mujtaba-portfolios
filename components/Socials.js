import Link from "next/link";

// icons

import {
  RiInstagramLine,
  RiFacebookBoxLine,
  RiBehanceLine,
  RiLinkedinLine
} from "react-icons/ri"


const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link target="_blank"  href={'https://www.linkedin.com/in/mujtaba-asim-Designer/'}
        className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine />
      </Link>

      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiFacebookBoxLine />
      </Link>


      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiBehanceLine />
      </Link>

      <Link href={''} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>


    </div>
  );
};

export default Socials;
