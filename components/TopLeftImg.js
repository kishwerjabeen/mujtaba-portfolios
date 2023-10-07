import Image from "next/image";
import React from 'react';


const TopLeftImg = () => {
  return (
     <div className='absolute  left-0 top-0 mix-blend-color-dodge z-10 w-[200px] x:w-[400] opacity-50'>
      <Image
        src={'/top-left-img.png'} // Corrected with a leading slash
        alt="abc"
        width={400}
        height={400}
      />
    </div>
  );
};

export default TopLeftImg;
