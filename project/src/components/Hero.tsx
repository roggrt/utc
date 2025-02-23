// // import React, { useEffect } from 'react';
// // import { Swiper, SwiperSlide } from 'swiper/react';
// // import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// // import 'swiper/css';
// // import 'swiper/css/navigation';
// // import 'swiper/css/pagination';

// // const slides = [
// //   // {
// //   //   image: "http://www.utc.edu.ec/Portals/0/BELEN/NUEVAimagen/universidad_def.png?ver=2019-05-08-101730-527",
// //   // },
// //   {
// //     image: "https://www.utc.edu.ec/Portals/0/2025/10K/WhatsApp%20Image%202025-02-13%20at%2014.49.35.jpeg",
// //   },
// //   {
// //     image: "https://www.utc.edu.ec/Portals/0/2024/WhatsApp%20Image%202024-11-15%20at%2016.22.24%20(1).jpeg",
// //   },
// //   {
// //     image: "https://www.utc.edu.ec/Portals/0/DAYIS/BECAS%20Certificacion%20Internacional%20.jpg",
// //   }
// // ];

// // export function Hero() {
// //   return (
// //     <div className="relative">
// //       <Swiper
// //         modules={[Navigation, Pagination, Autoplay]}
// //         navigation
// //         pagination={{ clickable: true }}
// //         autoplay={{ delay: 6000, disableOnInteraction: false }}
// //         loop={true}
// //         className="h-[600px] w-full"
// //       >
// //         {slides.map((slide, index) => (
// //           <SwiperSlide key={index}>
// //             <div className="relative h-full w-full">
// //               <img
// //                 src={slide.image}
// //                 alt={`Slide ${index + 1}`}
// //                 className="absolute inset-0 w-full h-full object-cover"
// //               />
// //             </div>
// //           </SwiperSlide>
// //         ))}
// //       </Swiper>
// //     </div>
// //   );
// // }


// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// const slides = [
//   {
//     image: "https://www.utc.edu.ec/Portals/0/2024/WhatsApp%20Image%202024-11-15%20at%2016.22.24%20(1).jpeg",
//     alt: "Universidad Técnica de Cotopaxi"
//   },
//   {
//     image: "https://www.utc.edu.ec/Portals/0/2025/10K/WhatsApp%20Image%202025-02-13%20at%2014.49.35.jpeg",
//     alt: "UTC Campus"
//   },
//   {
//     image: "https://www.utc.edu.ec/Portals/0/2024/WhatsApp%20Image%202024-11-15%20at%2016.22.24%20(1).jpeg",
//     alt: "UTC Events"
//   },
//   {
//     image: "https://www.utc.edu.ec/Portals/0/DAYIS/BECAS%20Certificacion%20Internacional%20.jpg",
//     alt: "UTC Becas"
//   }
// ];

// export function Hero() {
//   return (
//     <div className="relative w-full">
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         navigation
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 6000, disableOnInteraction: false }}
//         loop={true}
//         className="w-full h-64 sm:h-96 md:h-[32rem] lg:h-[40rem]"
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}>
//             <div className="relative w-full h-full">
//               <img
//                 src={slide.image}
//                 alt={slide.alt}
//                 className="absolute inset-0 w-full h-full object-contain md:object-cover"
//               />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

// export default Hero;
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  // {
  //   image: "http://www.utc.edu.ec/Portals/0/BELEN/NUEVAimagen/universidad_def.png?ver=2019-05-08-101730-527",
  //   alt: "Universidad Técnica de Cotopaxi"
  // },
  {
    image: "https://www.utc.edu.ec/Portals/0/2025/10K/WhatsApp%20Image%202025-02-13%20at%2014.49.35.jpeg",
    alt: "UTC Campus"
  },
  {
    image: "https://www.utc.edu.ec/Portals/0/2024/WhatsApp%20Image%202024-11-15%20at%2016.22.24%20(1).jpeg",
    alt: "UTC Events"
  },
  {
    image: "https://www.utc.edu.ec/Portals/0/DAYIS/BECAS%20Certificacion%20Internacional%20.jpg",
    alt: "UTC Becas"
  }
];

export function Hero() {
  return (
    <div className="relative w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-48 md:h-[40rem]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={slide.image}
                alt={slide.alt}
                className="absolute inset-0 w-full h-full object-contain md:object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Hero;