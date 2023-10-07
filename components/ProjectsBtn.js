// next image
import Image from "next/image";

//next link

import Link from "next/link";

//icons
import { HiArrowRight } from 'react-icons/hi2'

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">

      <Link href={'/work'} className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-no-repeat group p-4">
        <Image 
        src={'/rounded-text.png'}
        width={135}
        height={138}
        alt=''
        className="animate-spin-slow w-full h-full mx-w-[135px] mx-h-[138px]"
        />
<HiArrowRight className="absolute text-4xl group-hover:translate-x-2  transition-all duration-300" />
      </Link>

    </div>

  );
};

export default ProjectsBtn;
