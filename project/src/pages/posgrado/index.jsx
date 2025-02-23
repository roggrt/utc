// // import React, { useState } from 'react';
// // 
// // 
// // import { ChevronRight, Clock, Monitor, Users, Globe, BookOpen } from 'lucide-react';

// // const maestrias = {
// //   ingenieria: [
// //     { 
// //       titulo: "Sistemas de Información",
// //       imagen: "https://posgrado.utc.edu.ec/wp-content/uploads/2023/11/PONENCIA-.jpeg",
// //       modalidad: "Presencial"
// //     },
// //     { 
// //       titulo: "Ingeniería Industrial",
// //       imagen: "https://posgrado.utc.edu.ec/wp-content/uploads/2024/02/Recurso-16-1.png",
// //       modalidad: "En línea"
// //     },
// //     { 
// //       titulo: "Software",
// //       imagen: "https://posgrado.utc.edu.ec/wp-content/uploads/2024/03/Recurso-32.png",
// //       modalidad: "Híbrida"
// //     },
// //     { 
// //       titulo: "Electricidad",
// //       imagen: "https://posgrado.utc.edu.ec/wp-content/uploads/2024/03/Recurso-23.png",
// //       modalidad: "Presencial"
// //     }
// //   ],
// //   sociales: [
// //     {
// //       titulo: "Comunicación",
// //       imagen: "https://posgrado.utc.edu.ec/wp-content/uploads/2024/02/Medios-1.jpg",
// //       modalidad: "En línea"
// //     },
// //     {
// //       titulo: "Desarrollo Social",
// //       imagen: "https://posgrado.utc.edu.ec/wp-content/uploads/2024/03/Recurso-27.png",
// //       modalidad: "Presencial"
// //     },
// //     {
// //       titulo: "Arte y Cultura",
// //       imagen: "https://posgrado.utc.edu.ec/wp-content/uploads/2024/03/Recurso-21-1.png",
// //       modalidad: "Híbrida"
// //     }
// //   ],
// //   administrativas: [
// //     {
// //       titulo: "Administración de Empresas",
// //       imagen: "https://posgrado.utc.edu.ec/wp-content/uploads/2024/03/Recurso-29.png",
// //       modalidad: "En línea"
// //     },
// //     {
// //       titulo: "Finanzas",
// //       imagen: "https://posgrado.utc.edu.ec/wp-content/uploads/2024/03/Recurso-36-1.png",
// //       modalidad: "Presencial"
// //     }
// //   ],
// //   agropecuarias: [
// //     {
// //       titulo: "Agronomía",
// //       imagen: "https://posgrado.utc.edu.ec/wp-content/uploads/2024/08/Recurso-47.png",
// //       modalidad: "Presencial"
// //     },
// //     {
// //       titulo: "Agroindustria",
// //       imagen: "https://posgrado.utc.edu.ec/wp-content/uploads/2024/08/Recurso-48.png",
// //       modalidad: "Híbrida"
// //     },
// //     {
// //       titulo: "Gestión Ambiental",
// //       imagen: "https://posgrado.utc.edu.ec/wp-content/uploads/2024/03/Recurso-22.png",
// //       modalidad: "En línea"
// //     },
// //     {
// //       titulo: "Biotecnología",
// //       imagen: "https://posgrado.utc.edu.ec/wp-content/uploads/2024/03/Recurso-31.png",
// //       modalidad: "Presencial"
// //     },
// //     {
// //       titulo: "Sanidad Vegetal",
// //       imagen: "https://posgrado.utc.edu.ec/wp-content/uploads/2024/03/Recurso-28-1.png",
// //       modalidad: "Híbrida"
// //     }
// //   ],
// //   educacion: [
// //     {
// //       titulo: "Educación Inicial",
// //       imagen: "https://posgrado.utc.edu.ec/wp-content/uploads/2024/02/Recurso-10.png",
// //       modalidad: "En línea"
// //     },
// //     {
// //       titulo: "Pedagogía",
// //       imagen: "https://posgrado.utc.edu.ec/wp-content/uploads/2024/03/Recurso-38.png",
// //       modalidad: "Híbrida"
// //     },
// //     {
// //       titulo: "Educación Básica",
// //       imagen: "https://posgrado.utc.edu.ec/wp-content/uploads/2024/03/Recurso-37.png",
// //       modalidad: "En línea"
// //     }
// //   ]
// // };

// // const modalidades = [
// //   {
// //     titulo: "Presencial",
// //     icon: Users,
// //     descripcion: "Interacción directa entre estudiante y profesor en tiempo real. 144 horas por módulo distribuidas en aprendizaje con docente, tutorías, actividades supervisadas y prácticas."
// //   },
// //   {
// //     titulo: "En línea",
// //     icon: Monitor,
// //     descripcion: "Aprendizaje basado en tecnologías multimedia y entornos virtuales. 144 horas por módulo entre enseñanza en línea, aprendizaje autónomo y aplicación práctica virtual."
// //   },
// //   {
// //     titulo: "Híbrida",
// //     icon: Clock,
// //     descripcion: "Combina actividades presenciales, semipresenciales y en línea. 144 horas por módulo equilibrando interacción docente, aprendizaje autónomo y práctico."
// //   }
// // ];

// // const aliados = [
// //   "https://posgrado.utc.edu.ec/wp-content/uploads/2023/11/banco-pichincha-logo.png",
// //   "https://posgrado.utc.edu.ec/wp-content/uploads/2023/11/LOGOS-19.png",
// //   "https://posgrado.utc.edu.ec/wp-content/uploads/2023/11/logo-menu-v1-retina.webp",
// //   "https://posgrado.utc.edu.ec/wp-content/uploads/2023/11/logo.png"
// // ];

// // export default function PosgradoPage() {
// //   const [activeTab, setActiveTab] = useState('ingenieria');

// //   return (
// //     <div className="min-h-screen bg-white">
// //       {/* Hero Section */}
// //       <div className="bg-primary text-white">
// //         <div className="container mx-auto px-4 py-16">
// //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
// //             <div>
// //               <h1 className="text-4xl font-bold mb-6">
// //                 ¿Por qué estudiar con nosotros?
// //               </h1>
// //               <p className="text-xl mb-4">
// //                 Estudia tu maestría en una de las universidades más prestigiosas de Ecuador
// //               </p>
// //               <ul className="space-y-4">
// //                 <li className="flex items-center">
// //                   <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
// //                   28 años de experiencia académica
// //                 </li>
// //                 <li className="flex items-center">
// //                   <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
// //                   Programas avalados por el CES
// //                 </li>
// //                 <li className="flex items-center">
// //                   <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
// //                   Enfoque en el mercado laboral
// //                 </li>
// //               </ul>
// //             </div>
// //             <div className="hidden lg:block">
// //               <Globe className="w-48 h-48 text-white/20" />
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Modalidades Section */}
// //       <section className="py-16 bg-gray-50">
// //         <div className="container mx-auto px-4">
// //           <h2 className="text-3xl font-bold text-center mb-12">Modalidades de Estudio</h2>
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //             {modalidades.map((modalidad, index) => (
// //               <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
// //                 <modalidad.icon className="h-12 w-12 text-primary mb-4" />
// //                 <h3 className="text-xl font-semibold mb-3">{modalidad.titulo}</h3>
// //                 <p className="text-gray-600 text-sm">{modalidad.descripcion}</p>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Programas Section */}
// //       <section className="py-16">
// //         <div className="container mx-auto px-4">
// //           <h2 className="text-3xl font-bold text-center mb-12">Descubre nuestras maestrías</h2>
          
// //           {/* Tabs */}
// //           <div className="flex flex-wrap justify-center gap-4 mb-8">
// //             {Object.keys(maestrias).map((area) => (
// //               <button
// //                 key={area}
// //                 onClick={() => setActiveTab(area)}
// //                 className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
// //                   activeTab === area
// //                     ? 'bg-primary text-white'
// //                     : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
// //                 }`}
// //               >
// //                 {area.charAt(0).toUpperCase() + area.slice(1)}
// //               </button>
// //             ))}
// //           </div>

// //           {/* Maestrías Grid */}
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //             {maestrias[activeTab].map((maestria, index) => (
// //               <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden group hover:shadow-md transition-all duration-300">
// //                 <div className="relative h-48">
// //                   <img
// //                     src={maestria.imagen}
// //                     alt={maestria.titulo}
// //                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
// //                   />
// //                   <div className="absolute top-2 right-2 bg-white/90 px-3 py-1 rounded-full text-xs font-medium">
// //                     {maestria.modalidad}
// //                   </div>
// //                 </div>
// //                 <div className="p-4">
// //                   <h3 className="text-lg font-semibold mb-2">{maestria.titulo}</h3>
// //                   <a href="#" className="text-primary text-sm font-medium flex items-center group-hover:text-primary/80">
// //                     Ver detalles
// //                     <ChevronRight className="h-4 w-4 ml-1" />
// //                   </a>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Internacionalización Section */}
// //       <section className="py-16 bg-gray-50">
// //         <div className="container mx-auto px-4">
// //           <div className="max-w-4xl mx-auto text-center">
// //             <h2 className="text-3xl font-bold mb-6">Posgrado en el mundo</h2>
// //             <p className="text-gray-600 mb-8">
// //               Dinamizar los procesos de difusión de resultados de investigación/vinculación e 
// //               internacionalización de la Universidad Técnica de Cotopaxi, a través de su Unidad 
// //               Académica de Posgrado, creando oportunidades de aprendizaje global y cooperación internacional.
// //             </p>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Aliados Section */}
// //       <section className="py-16">
// //         <div className="container mx-auto px-4">
// //           <h2 className="text-3xl font-bold text-center mb-12">Aliados estratégicos</h2>
// //           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
// //             {aliados.map((logo, index) => (
// //               <div key={index} className="flex items-center justify-center p-4">
// //                 <img
// //                   src={logo}
// //                   alt={`Aliado ${index + 1}`}
// //                   className="max-h-16 opacity-70 hover:opacity-100 transition-opacity duration-300"
// //                 />
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }



// import React, { useState } from 'react';
// import { ChevronRight, Clock, Monitor, Users, Globe, BookOpen, Check } from 'lucide-react';

// const areasEstudio = {
//   educacion: {
//     titulo: "Educación",
//     maestrias: [
//       {
//         nombre: "Maestría en Educación Inicial",
//         modalidad: "En línea",
//         imagen: "https://posgrado.utc.edu.ec/wp-content/uploads/2024/02/Recurso-10.png"
//       },
//       {
//         nombre: "Maestría en Pedagogía",
//         modalidad: "Híbrida",
//         imagen: "https://posgrado.utc.edu.ec/wp-content/uploads/2024/03/Recurso-38.png"
//       },
//       {
//         nombre: "Maestría en Educación Básica",
//         modalidad: "En línea",
//         imagen: "https://posgrado.utc.edu.ec/wp-content/uploads/2024/03/Recurso-37.png"
//       }
//     ]
//   },
//   agropecuarias: {
//     titulo: "Agropecuarias y Recursos Naturales",
//     maestrias: [
//       {
//         nombre: "Maestría en Agronomía",
//         modalidad: "Presencial",
//         imagen: "https://posgrado.utc.edu.ec/wp-content/uploads/2024/08/Recurso-47.png"
//       },
//       {
//         nombre: "Maestría en Agroindustria",
//         modalidad: "Híbrida",
//         imagen: "https://posgrado.utc.edu.ec/wp-content/uploads/2024/08/Recurso-48.png"
//       },
//       {
//         nombre: "Maestría en Gestión Ambiental",
//         modalidad: "En línea",
//         imagen: "https://posgrado.utc.edu.ec/wp-content/uploads/2024/03/Recurso-22.png"
//       },
//       {
//         nombre: "Maestría en Biotecnología",
//         modalidad: "Presencial",
//         imagen: "https://posgrado.utc.edu.ec/wp-content/uploads/2024/03/Recurso-31.png"
//       },
//       {
//         nombre: "Maestría en Sanidad Vegetal",
//         modalidad: "Híbrida",
//         imagen: "https://posgrado.utc.edu.ec/wp-content/uploads/2024/03/Recurso-28-1.png"
//       },
//       {
//         nombre: "Maestría en Recursos Naturales",
//         modalidad: "Presencial",
//         imagen: "https://posgrado.utc.edu.ec/wp-content/uploads/2024/02/Recurso-1.png"
//       }
//     ]
//   },
//   administrativas: {
//     titulo: "Administrativas y Económicas",
//     maestrias: [
//       {
//         nombre: "Maestría en Administración de Empresas",
//         modalidad: "En línea",
//         imagen: "https://posgrado.utc.edu.ec/wp-content/uploads/2024/03/Recurso-29.png"
//       },
//       {
//         nombre: "Maestría en Finanzas",
//         modalidad: "Presencial",
//         imagen: "https://posgrado.utc.edu.ec/wp-content/uploads/2024/03/Recurso-36-1.png"
//       }
//     ]
//   },
//   sociales: {
//     titulo: "Ciencias Sociales",
//     maestrias: [
//       {
//         nombre: "Maestría en Comunicación",
//         modalidad: "En línea",
//         imagen: "https://posgrado.utc.edu.ec/wp-content/uploads/2024/02/Medios-1.jpg"
//       },
//       {
//         nombre: "Maestría en Desarrollo Social",
//         modalidad: "Presencial",
//         imagen: "https://posgrado.utc.edu.ec/wp-content/uploads/2024/03/Recurso-27.png"
//       },
//       {
//         nombre: "Maestría en Arte y Cultura",
//         modalidad: "Híbrida",
//         imagen: "https://posgrado.utc.edu.ec/wp-content/uploads/2024/03/Recurso-21-1.png"
//       },
//       {
//         nombre: "Maestría en Diseño y Gestión de Marca",
//         modalidad: "Híbrida",
//         imagen: "https://posgrado.utc.edu.ec/wp-content/uploads/2024/06/Posgrdfsado-diseno-06-1-1024x1015.jpg"
//       }
//     ]
//   },
//   ingenierias: {
//     titulo: "Ingenierías y Aplicadas",
//     maestrias: [
//       {
//         nombre: "Maestría en Sistemas de Información",
//         modalidad: "Presencial",
//         imagen: "https://posgrado.utc.edu.ec/wp-content/uploads/2023/11/PONENCIA-.jpeg"
//       },
//       {
//         nombre: "Maestría en Ingeniería Industrial",
//         modalidad: "En línea",
//         imagen: "https://posgrado.utc.edu.ec/wp-content/uploads/2024/02/Recurso-16-1.png"
//       },
//       {
//         nombre: "Maestría en Software",
//         modalidad: "Híbrida",
//         imagen: "https://posgrado.utc.edu.ec/wp-content/uploads/2024/03/Recurso-32.png"
//       },
//       {
//         nombre: "Maestría en Electricidad",
//         modalidad: "Presencial",
//         imagen: "https://posgrado.utc.edu.ec/wp-content/uploads/2024/03/Recurso-23.png"
//       }
//     ]
//   }
// };

// const modalidades = [
//   {
//     titulo: "Presencial",
//     descripcion: "Interacción directa con el docente en tiempo real. 144 horas por módulo:",
//     detalles: [
//       "Aprendizaje con el docente y tutorías",
//       "Actividades supervisadas",
//       "Aprendizaje autónomo",
//       "Aprendizaje práctico-experimental"
//     ]
//   },
//   {
//     titulo: "En línea",
//     descripcion: "Basado en tecnologías multimedia y entornos virtuales. 144 horas por módulo:",
//     detalles: [
//       "Enseñanza en línea con el docente",
//       "Aprendizaje autónomo asincrónico",
//       "Aplicación práctica mediante tecnologías virtuales",
//       "Interacción a través de plataformas digitales"
//     ]
//   },
//   {
//     titulo: "Híbrida",
//     descripcion: "Combina diferentes modalidades de aprendizaje. 144 horas por módulo:",
//     detalles: [
//       "Actividades presenciales y semipresenciales",
//       "Componentes en línea y a distancia",
//       "Aprendizaje autónomo guiado",
//       "Prácticas experimentales combinadas"
//     ]
//   }
// ];

// const aliados = [
//   {
//     imagen: "https://posgrado.utc.edu.ec/wp-content/uploads/2023/11/banco-pichincha-logo.png",
//     nombre: "Banco Pichincha"
//   },
//   {
//     imagen: "https://posgrado.utc.edu.ec/wp-content/uploads/2023/11/LOGOS-19.png",
//     nombre: "Aliado 2"
//   },
//   {
//     imagen: "https://posgrado.utc.edu.ec/wp-content/uploads/2023/11/logo-menu-v1-retina.webp",
//     nombre: "Aliado 3"
//   },
//   {
//     imagen: "https://posgrado.utc.edu.ec/wp-content/uploads/2023/11/logo.png",
//     nombre: "Aliado 4"
//   }
// ];

// export default function PosgradoPage() {
//   const [activeTab, setActiveTab] = useState('educacion');
//   const [activeModalidad, setActiveModalidad] = useState('Presencial');

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Breadcrumb */}
//       <div className="bg-gray-100 border-b">
//         <div className="container mx-auto px-4 py-3">
//           <div className="flex items-center space-x-2 text-sm">
//             <a href="/" className="text-gray-600 hover:text-primary">Inicio</a>
//             <ChevronRight className="h-4 w-4 text-gray-400" />
//             <span className="text-gray-900">Posgrado</span>
//           </div>
//         </div>
//       </div>

//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-r from-primary to-primary/80 text-white py-20">
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div>
//               <h1 className="text-4xl md:text-5xl font-bold mb-6">
//                 ¿Por qué estudiar con nosotros?
//               </h1>
//               <p className="text-xl mb-8">
//                 Estudia tu maestría en una de las universidades más prestigiosas de Ecuador
//               </p>
//               <div className="space-y-4">
//                 <div className="flex items-start">
//                   <div className="flex-shrink-0 p-1">
//                     <Check className="h-6 w-6 text-white" />
//                   </div>
//                   <p className="ml-4">28 años de experiencia en educación superior de calidad</p>
//                 </div>
//                 <div className="flex items-start">
//                   <div className="flex-shrink-0 p-1">
//                     <Check className="h-6 w-6 text-white" />
//                   </div>
//                   <p className="ml-4">Amplia oferta académica de maestrías reconocidas por el CES</p>
//                 </div>
//                 <div className="flex items-start">
//                   <div className="flex-shrink-0 p-1">
//                     <Check className="h-6 w-6 text-white" />
//                   </div>
//                   <p className="ml-4">Programas diseñados para potenciar tu perfil profesional</p>
//                 </div>
//               </div>
//             </div>
//             <div className="hidden md:flex justify-center">
//               <Globe className="h-64 w-64 text-white/20" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Modalidades Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12">Modalidades de Estudio</h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             {modalidades.map((modalidad) => (
//               <div 
//                 key={modalidad.titulo}
//                 className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
//               >
//                 <h3 className="text-xl font-bold text-primary mb-4">{modalidad.titulo}</h3>
//                 <p className="text-gray-600 mb-4">{modalidad.descripcion}</p>
//                 <ul className="space-y-2">
//                   {modalidad.detalles.map((detalle, index) => (
//                     <li key={index} className="flex items-center text-sm text-gray-600">
//                       <Check className="h-4 w-4 text-primary mr-2" />
//                       {detalle}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Programas de Estudio Section */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12">Descubre nuestras maestrías</h2>
          
//           {/* Tabs de Áreas */}
//           <div className="flex flex-wrap justify-center gap-4 mb-12">
//             {Object.entries(areasEstudio).map(([key, area]) => (
//               <button
//                 key={key}
//                 onClick={() => setActiveTab(key)}
//                 className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
//                   activeTab === key
//                     ? 'bg-primary text-white shadow-md'
//                     : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
//                 }`}
//               >
//                 {area.titulo}
//               </button>
//             ))}
//           </div>

//        {/* Grid de Maestrías */}
//        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {areasEstudio[activeTab].maestrias.map((maestria, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
//               >
//                 <div className="relative h-48 overflow-hidden">
//                   <img
//                     src={maestria.imagen}
//                     alt={maestria.nombre}
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                   />
//                   <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full">
//                     <span className="text-sm font-medium text-primary">
//                       {maestria.modalidad}
//                     </span>
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-lg font-semibold mb-4 min-h-[56px]">
//                     {maestria.nombre}
//                   </h3>
//                   <a
//                     href={`/maestria/${maestria.nombre.toLowerCase().replace(/ /g, '-')}`}
//                     className="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-200 group/link"
//                   >
//                     <span className="text-sm font-medium">Más información</span>
//                     <ChevronRight className="h-4 w-4 ml-1 group-hover/link:translate-x-1 transition-transform duration-200" />
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Posgrado en el Mundo Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto text-center">
//             <Globe className="h-16 w-16 text-primary/20 mx-auto mb-6" />
//             <h2 className="text-3xl font-bold mb-6">Posgrado en el mundo</h2>
//             <p className="text-gray-600 text-lg leading-relaxed mb-8">
//               Dinamizar los procesos de difusión de resultados de investigación/vinculación 
//               e internacionalización de la Universidad Técnica de Cotopaxi, a través de su 
//               Unidad Académica de Posgrado, creando oportunidades de aprendizaje global y 
//               cooperación internacional.
//             </p>
//             <a
//               href="#"
//               className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors duration-200"
//             >
//               Ver oportunidades internacionales
//               <ChevronRight className="h-5 w-5 ml-2" />
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Aliados Estratégicos Section */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12">Aliados estratégicos</h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center max-w-4xl mx-auto">
//             {aliados.map((aliado, index) => (
//               <div
//                 key={index}
//                 className="p-6 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
//               >
//                 <img
//                   src={aliado.imagen}
//                   alt={aliado.nombre}
//                   className="max-h-16 max-w-full object-contain"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="bg-primary py-20">
//         <div className="container mx-auto px-4 text-center text-white">
//           <h2 className="text-3xl font-bold mb-6">¿Listo para dar el siguiente paso?</h2>
//           <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
//             Únete a nuestra comunidad académica y potencia tu desarrollo profesional 
//             con programas de posgrado diseñados para el éxito.
//           </p>
//           <div className="flex flex-wrap justify-center gap-4">
//             <a
//               href="#"
//               className="bg-white text-primary px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200"
//             >
//               Proceso de admisión
//             </a>
//             <a
//               href="#"
//               className="bg-primary-dark text-white px-8 py-3 rounded-full font-medium border-2 border-white hover:bg-white hover:text-primary transition-colors duration-200"
//             >
//               Contactar un asesor
//             </a>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


import React, { useState } from 'react';
import { ChevronRight, Clock, Monitor, Users, Globe, Check } from 'lucide-react';

const maestrias = [
  {
    id: 'educacion',
    titulo: 'Educación',
    programas: [
      { imagen: "https://posgrado.utc.edu.ec/wp-content/uploads/2024/02/Recurso-10.png" },
      { imagen: "https://posgrado.utc.edu.ec/wp-content/uploads/2024/03/Recurso-38.png" },
      { imagen: "https://posgrado.utc.edu.ec/wp-content/uploads/2024/03/Recurso-37.png" }
    ]
  },
  {
    id: 'agropecuarias',
    titulo: 'Agropecuarias y Recursos Naturales',
    programas: [
      { imagen: "https://posgrado.utc.edu.ec/wp-content/uploads/2024/08/Recurso-47.png" },
      { imagen: "https://posgrado.utc.edu.ec/wp-content/uploads/2024/08/Recurso-48.png" },
      { imagen: "https://posgrado.utc.edu.ec/wp-content/uploads/2024/03/Recurso-22.png" },
      { imagen: "https://posgrado.utc.edu.ec/wp-content/uploads/2024/03/Recurso-31.png" },
      { imagen: "https://posgrado.utc.edu.ec/wp-content/uploads/2024/03/Recurso-28-1.png" },
      { imagen: "https://posgrado.utc.edu.ec/wp-content/uploads/2024/02/Recurso-1.png" }
    ]
  },
  {
    id: 'sociales',
    titulo: 'Ciencias Sociales',
    programas: [
      { imagen: "https://posgrado.utc.edu.ec/wp-content/uploads/2024/02/Medios-1.jpg" },
      { imagen: "https://posgrado.utc.edu.ec/wp-content/uploads/2024/03/Recurso-27.png" },
      { imagen: "https://posgrado.utc.edu.ec/wp-content/uploads/2024/03/Recurso-21-1.png" },
      { imagen: "https://posgrado.utc.edu.ec/wp-content/uploads/2024/06/Posgrdfsado-diseno-06-1-1024x1015.jpg" }
    ]
  },
  {
    id: 'administrativas',
    titulo: 'Administrativas y Económicas',
    programas: [
      { imagen: "https://posgrado.utc.edu.ec/wp-content/uploads/2024/03/Recurso-29.png" },
      { imagen: "https://posgrado.utc.edu.ec/wp-content/uploads/2024/03/Recurso-36-1.png" }
    ]
  },
  {
    id: 'ingenierias',
    titulo: 'Ingenierías y Aplicadas',
    programas: [
      { imagen: "https://posgrado.utc.edu.ec/wp-content/uploads/2023/11/PONENCIA-.jpeg" },
      { imagen: "https://posgrado.utc.edu.ec/wp-content/uploads/2024/02/Recurso-16-1.png" },
      { imagen: "https://posgrado.utc.edu.ec/wp-content/uploads/2024/03/Recurso-32.png" },
      { imagen: "https://posgrado.utc.edu.ec/wp-content/uploads/2024/03/Recurso-23.png" }
    ]
  }
];

const modalidades = [
  {
    icono: Users,
    titulo: "Presencial",
    descripcion: "Interacción directa entre estudiante y profesor en tiempo real.",
    detalles: [
      "Aprendizaje con el docente y tutorías",
      "Actividades supervisadas",
      "Aprendizaje autónomo",
      "Aprendizaje práctico-experimental"
    ]
  },
  {
    icono: Monitor,
    titulo: "En línea",
    descripcion: "Aprendizaje basado en tecnologías multimedia y entornos virtuales.",
    detalles: [
      "Enseñanza en línea con el docente",
      "Aprendizaje autónomo asincrónico",
      "Aplicación práctica virtual",
      "Interacción en plataformas digitales"
    ]
  },
  {
    icono: Clock,
    titulo: "Híbrida",
    descripcion: "Combina actividades presenciales y virtuales.",
    detalles: [
      "Actividades presenciales y semipresenciales",
      "Aprendizaje autónomo guiado",
      "Aprendizaje práctico-experimental",
      "Componentes en línea flexibles"
    ]
  }
];

const aliados = [
  { imagen: "https://posgrado.utc.edu.ec/wp-content/uploads/2023/11/banco-pichincha-logo.png" },
  { imagen: "https://posgrado.utc.edu.ec/wp-content/uploads/2023/11/LOGOS-19.png" },
  { imagen: "https://posgrado.utc.edu.ec/wp-content/uploads/2023/11/logo-menu-v1-retina.webp" },
  { imagen: "https://posgrado.utc.edu.ec/wp-content/uploads/2023/11/logo.png" }
];

export default function PosgradoPage() {
  const [categoriaActiva, setCategoriaActiva] = useState('todas');

  const programasMostrados = categoriaActiva === 'todas' 
    ? maestrias.flatMap(m => m.programas)
    : maestrias.find(m => m.id === categoriaActiva)?.programas || [];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                ¿Por qué estudiar con nosotros?
              </h1>
              <p className="text-xl mb-8">
                Estudia tu maestría en una de las universidades más prestigiosas de Ecuador
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className="h-6 w-6 mr-2 mt-1 flex-shrink-0" />
                  <p>28 años de experiencia académica avalada</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-6 w-6 mr-2 mt-1 flex-shrink-0" />
                  <p>Amplia oferta de maestrías reconocidas por el CES</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-6 w-6 mr-2 mt-1 flex-shrink-0" />
                  <p>Programas enfocados al mercado laboral actual</p>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <Globe className="h-64 w-64 text-white/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center text-sm">
            <a href="/" className="text-gray-600 hover:text-primary">Inicio</a>
            <ChevronRight className="h-4 w-4 text-gray-400 mx-2" />
            <span className="text-gray-900">Posgrado</span>
          </div>
        </div>
      </div>

      {/* Líneas decorativas */}
      <div className="py-12 flex justify-center">
        <img
          src="https://posgrado.utc.edu.ec/wp-content/uploads/2023/11/Lineas.png"
          alt="Líneas decorativas"
          className="h-12 object-contain"
        />
      </div>

      {/* Modalidades */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Modalidades de Estudio
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {modalidades.map((modalidad, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-center mb-4">
                  <modalidad.icono className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-xl font-bold">{modalidad.titulo}</h3>
                </div>
                <p className="text-gray-600 mb-6">{modalidad.descripcion}</p>
                <div className="space-y-3">
                  {modalidad.detalles.map((detalle, idx) => (
                    <div key={idx} className="flex items-start">
                      <Check className="h-4 w-4 text-primary mt-1 mr-2" />
                      <span className="text-sm text-gray-600">{detalle}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programas de Maestría */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nuestros Programas de Maestría
          </h2>

          {/* Filtros */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button
              onClick={() => setCategoriaActiva('todas')}
              className={`px-6 py-2 rounded-full transition-colors duration-200 ${
                categoriaActiva === 'todas'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Todas
            </button>
            {maestrias.map((categoria) => (
              <button
                key={categoria.id}
                onClick={() => setCategoriaActiva(categoria.id)}
                className={`px-6 py-2 rounded-full transition-colors duration-200 ${
                  categoriaActiva === categoria.id
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {categoria.titulo}
              </button>
            ))}
          </div>

          {/* Grid de Maestrías */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programasMostrados.map((programa, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={programa.imagen}
                  alt="Programa de Maestría"
                  className="w-full h-auto aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href="#"
                    className="bg-white text-primary px-6 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    Ver detalles
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internacional */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Globe className="h-16 w-16 text-primary/20 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">Posgrado en el mundo</h2>
            <p className="text-gray-600 leading-relaxed">
              Dinamizar los procesos de difusión de resultados de investigación/vinculación 
              e internacionalización de la Universidad Técnica de Cotopaxi, a través de su 
              Unidad Académica de Posgrado, creando oportunidades de aprendizaje global y 
              cooperación internacional.
            </p>
          </div>
        </div>
      </section>

      {/* Aliados */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Aliados estratégicos
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center max-w-4xl mx-auto">
            {aliados.map((aliado, index) => (
              <div
                key={index}
                className="p-4 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={aliado.imagen}
                  alt={`Aliado ${index + 1}`}
                  className="max-h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-primary/90 py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">
            ¿Listo para dar el siguiente paso?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Únete a nuestra comunidad académica y potencia tu desarrollo profesional 
            con programas de posgrado diseñados para el éxito.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="bg-white text-primary px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200"
            >
              Proceso de admisión
            </a>
            <a
              href="#"
              className="bg-transparent text-white px-8 py-3 rounded-full font-medium border-2 border-white hover:bg-white hover:text-primary transition-colors duration-200"
            >
              Contactar un asesor
            </a>
          </div>
        </div>
      </section>
    </>
  );
}