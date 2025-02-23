// // // import React from 'react';
// // // import { Search, Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

// // // const socialLinks = [
// // //   { icon: Facebook, href: "#", label: "Facebook" },
// // //   { icon: Twitter, href: "#", label: "Twitter" },
// // //   { icon: Instagram, href: "#", label: "Instagram" },
// // //   { icon: Youtube, href: "#", label: "YouTube" },
// // //   { icon: Linkedin, href: "#", label: "LinkedIn" }
// // // ];

// // // export function Topbar() {
// // //   return (
// // //     <div className="bg-primary text-white py-2">
// // //       <div className="container mx-auto px-4">
// // //         <div className="flex items-center justify-between">
// // //           <div className="flex items-center space-x-4">
// // //             <img
// // //               src="http://www.utc.edu.ec/Portals/0/BELEN/NUEVAimagen/universidad_def.png?ver=2019-05-08-101730-527"
// // //               alt="UTC Logo"
// // //               className="h-12"
// // //             />
// // //           </div>

// // //           <div className="flex-1 max-w-md mx-8">
// // //             <div className="relative">
// // //               <input
// // //                 type="search"
// // //                 placeholder="Buscar..."
// // //                 className="w-full py-1 px-4 pr-10 rounded-full text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
// // //               />
// // //               <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
// // //             </div>
// // //           </div>

// // //           <div className="flex items-center space-x-6">
// // //             <div className="flex space-x-3">
// // //               {socialLinks.map((link, index) => (
// // //                 <a
// // //                   key={index}
// // //                   href={link.href}
// // //                   className="hover:text-secondary transition-colors duration-200"
// // //                   aria-label={link.label}
// // //                 >
// // //                   <link.icon className="h-4 w-4" />
// // //                 </a>
// // //               ))}
// // //             </div>
// // //             <button className="bg-secondary hover:bg-secondary/90 text-white px-4 py-1 rounded-full text-sm font-medium transition-colors duration-200">
// // //               Iniciar Sesión
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }


// // import React from 'react';
// // import { Search, Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

// // const socialLinks = [
// //   { icon: Facebook, href: "#", label: "Facebook" },
// //   { icon: Twitter, href: "#", label: "Twitter" },
// //   { icon: Instagram, href: "#", label: "Instagram" },
// //   { icon: Youtube, href: "#", label: "YouTube" },
// //   { icon: Linkedin, href: "#", label: "LinkedIn" }
// // ];

// // export function Topbar() {
// //   return (
// //     <div className="bg-white text-gray-800 py-2">
// //       <div className="container mx-auto px-4">
// //         <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
// //           {/* Logo - Centered on mobile, left on desktop */}
// //           <div className="flex justify-center md:justify-start">
// //             <img
// //               src="http://www.utc.edu.ec/Portals/0/BELEN/NUEVAimagen/universidad_def.png?ver=2019-05-08-101730-527"
// //               alt="UTC Logo"
// //               className="h-16 md:h-12"
// //             />
// //           </div>

// //           {/* Search Bar - Full width on mobile */}
// //           <div className="w-full md:flex-1 md:max-w-md md:mx-8">
// //             <div className="relative">
// //               <input
// //                 type="search"
// //                 placeholder="Buscar..."
// //                 className="w-full py-2 md:py-1 px-4 pr-10 rounded-full border border-gray-300 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
// //               />
// //               <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
// //             </div>
// //           </div>

// //           {/* Social Links & Login - Centered on mobile */}
// //           <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-6">
// //             <div className="flex space-x-4">
// //               {socialLinks.map((link, index) => (
// //                 <a
// //                   key={index}
// //                   href={link.href}
// //                   className="hover:text-blue-600 transition-colors duration-200"
// //                   aria-label={link.label}
// //                 >
// //                   <link.icon className="h-5 w-5" />
// //                 </a>
// //               ))}
// //             </div>
// //             <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200">
// //               Iniciar Sesión
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Topbar;


// import React from 'react';
// import { Search, Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

// const socialLinks = [
//   { icon: Facebook, href: "#", label: "Facebook" },
//   { icon: Twitter, href: "#", label: "Twitter" },
//   { icon: Instagram, href: "#", label: "Instagram" },
//   { icon: Youtube, href: "#", label: "YouTube" },
//   { icon: Linkedin, href: "#", label: "LinkedIn" }
// ];

// export function Topbar() {
//   return (
//     <div className="bg-white text-gray-800 py-2">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
//           {/* Logo - Centered on mobile, left on desktop */}
//           <div className="flex justify-center md:justify-start">
//             <img
//               src="http://www.utc.edu.ec/Portals/0/BELEN/NUEVAimagen/universidad_def.png?ver=2019-05-08-101730-527"
//               alt="UTC Logo"
//               className="h-16 md:h-12"
//             />
//           </div>

//           {/* Search Bar - Full width on mobile */}
//           <div className="w-full md:flex-1 md:max-w-md md:mx-8">
//             <div className="relative">
//               <input
//                 type="search"
//                 placeholder="Buscar..."
//                 className="w-full py-2 md:py-1 px-4 pr-10 rounded-full border border-gray-300 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
//               />
//               <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
//             </div>
//           </div>

//           {/* Social Links & Login - Centered on mobile */}
//           <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-6">
//             <div className="flex space-x-4">
//               {socialLinks.map((link, index) => (
//                 <a
//                   key={index}
//                   href={link.href}
//                   className="hover:text-secondary transition-colors duration-200"
//                   aria-label={link.label}
//                 >
//                   <link.icon className="h-5 w-5" />
//                 </a>
//               ))}
//             </div>
//             <button className="bg-secondary hover:bg-secondary/90 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200">
//               Iniciar Sesión
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Topbar;


import React from 'react';
import { Search, Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" }
];

export function Topbar() {
  return (
    <div className="bg-white text-gray-800 py-3 md:py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          {/* Logo - Centered on mobile, left on desktop */}
          <div className="flex justify-center md:justify-start">
            <img
              src="http://www.utc.edu.ec/Portals/0/BELEN/NUEVAimagen/universidad_def.png?ver=2019-05-08-101730-527"
              alt="UTC Logo"
              className="h-16 md:h-20"
            />
          </div>

          {/* Search Bar - Full width on mobile */}
          <div className="w-full md:flex-1 md:max-w-md md:mx-8">
            <div className="relative">
              <input
                type="search"
                placeholder="Buscar..."
                className="w-full py-2 md:py-3 px-4 pr-10 rounded-full border border-gray-300 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
            </div>
          </div>

          {/* Social Links & Login - Centered on mobile */}
          <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-8">
            <div className="flex space-x-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="hover:text-secondary transition-colors duration-200"
                  aria-label={link.label}
                >
                  <link.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
            <button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3 rounded-full text-sm font-medium transition-colors duration-200">
              Iniciar Sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;