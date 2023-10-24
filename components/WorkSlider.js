// imprt swiper Reat component 
import { Swiper, SwiperSlide } from 'swiper/react'

// import swper styles 
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// icons
import {
  BsArrowRight
} from "react-icons/bs";


// imprt required module 
import { Pagination } from 'swiper'

//next image
import Image from 'next/image';

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[340px]'
    >



      {
        workSlides.slides.map((Slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer' >
                {Slide.images.map((images, index) => {
                  return (
                    <div className='relative rounded-lg overflow-hidden flex items-center justify-center group
                    '>
                      <div>
                        {/* images */}
                        <Image
                          src={images.path}
                          width={500}
                          height={300}
                          alt='' />
                      </div>
                    </div>
                  );
                })}
              </div>

            </SwiperSlide>
          );
        })}
    </Swiper >
  );
};

export default WorkSlider;
