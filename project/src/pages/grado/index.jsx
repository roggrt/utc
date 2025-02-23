// // import React, { useState } from 'react';
// // import { ChevronRight, Search, Building2, GraduationCap } from 'lucide-react';

// // const faculties = [
// //   {
// //     id: 'caye',
// //     name: 'FACULTAD DE CIENCIAS ADMINISTRATIVAS Y ECONÓMICAS (CAYE)',
// //     image: '/api/placeholder/800/400',
// //     description: 'Formando profesionales en el ámbito empresarial y económico',
// //     careers: [
// //       'Administración de Empresas',
// //       'Contabilidad y Auditoría',
// //       'Economía',
// //       'Gestión de la Información Gerencial',
// //       'Gestión del Talento Humano',
// //       'Mercadotécnia',
// //       'Finanzas'
// //     ]
// //   },
// //   {
// //     id: 'caren',
// //     name: 'FACULTAD DE CIENCIAS AGROPECUARIAS Y RECURSOS NATURALES (CAREN)',
// //     image: '/api/placeholder/800/400',
// //     description: 'Líderes en formación agrícola y gestión de recursos naturales',
// //     careers: [
// //       'Agroindustrial',
// //       'Agronomía',
// //       'Agropecuarias',
// //       'Ambiente',
// //       'Biotecnología',
// //       'Turismo',
// //       'Veterinaria'
// //     ]
// //   },
// //   {
// //     id: 'csaye',
// //     name: 'FACULTAD DE CIENCIAS SOCIALES ARTES Y EDUCACIÓN (CSAYE)',
// //     image: '/api/placeholder/800/400',
// //     description: 'Formando profesionales en el ámbito social, artístico y educativo',
// //     careers: [
// //       'Comunicación',
// //       'Diseño Gráfico',
// //       'Animación Digital',
// //       'Trabajo Social',
// //       'Psicología Social',
// //       'Educación Básica',
// //       'Educación Inicial',
// //       'Pedagogía de los Idiomas',
// //       'Pedagogía de la Lengua y la Literatura',
// //       'Pedagogía de las Matemáticas y la Física'
// //     ]
// //   },
// //   {
// //     id: 'ciya',
// //     name: 'FACULTAD DE CIENCIAS DE LA INGENIERÍA Y APLICADAS (CIYA)',
// //     image: '/api/placeholder/800/400',
// //     description: 'Excelencia en formación de ingenieros y profesionales técnicos',
// //     careers: [
// //       'Electricidad',
// //       'Electromecánica',
// //       'Industrial',
// //       'Sistema de Información',
// //       'Hidráulica',
// //       'Software'
// //     ]
// //   },
// //   {
// //     id: 'pujili',
// //     name: 'EXTENSIÓN PUJILÍ',
// //     image: '/api/placeholder/800/400',
// //     description: 'Educación de calidad en la extensión de Pujilí',
// //     careers: [
// //       'Educación Básica',
// //       'Educación Inicial',
// //       'Pedagogía de los Idiomas',
// //       'Pedagogía de la Lengua y la Literatura',
// //       'Pedagogía de las Matemáticas y la Física'
// //     ]
// //   },
// //   {
// //     id: 'mana',
// //     name: 'EXTENSIÓN LA MANÁ',
// //     image: '/api/placeholder/800/400',
// //     description: 'Formación profesional en la extensión La Maná',
// //     careers: [
// //       'Administración de Empresas',
// //       'Contabilidad y Auditoría',
// //       'Electromecánica',
// //       'Sistema de Información',
// //       'Agroindustrias',
// //       'Agronomía',
// //       'Turismo'
// //     ]
// //   }
// // ];

// // export default function GradoPage() {
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const [selectedFaculty, setSelectedFaculty] = useState(null);

// //   const filteredFaculties = faculties.filter(faculty => {
// //     const matchesFaculty = faculty.name.toLowerCase().includes(searchTerm.toLowerCase());
// //     const matchesCareers = faculty.careers.some(career => 
// //       career.toLowerCase().includes(searchTerm.toLowerCase())
// //     );
// //     return matchesFaculty || matchesCareers;
// //   });

// //   return (
// //     <div className="min-h-screen bg-gray-50">
// //       {/* Breadcrumb */}
// //       <div className="bg-white border-b">
// //         <div className="container mx-auto px-4 py-3">
// //           <div className="flex items-center space-x-2 text-sm">
// //             <a href="/" className="text-gray-500 hover:text-primary">Inicio</a>
// //             <ChevronRight className="h-4 w-4 text-gray-400" />
// //             <span className="text-gray-900">Grado</span>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Hero Section */}
// //       <div className="bg-primary text-white py-12">
// //         <div className="container mx-auto px-4">
// //           <div className="max-w-4xl">
// //             <h1 className="text-4xl font-bold mb-4">Oferta Académica de Grado</h1>
// //             <p className="text-lg opacity-90">
// //               Descubre nuestras carreras de pregrado distribuidas en facultades y extensiones,
// //               diseñadas para formar profesionales de excelencia.
// //             </p>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Search Section */}
// //       <div className="container mx-auto px-4 py-8">
// //         <div className="flex flex-col md:flex-row gap-4 mb-8">
// //           <div className="flex-1 relative">
// //             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
// //             <input
// //               type="text"
// //               placeholder="Buscar por facultad o carrera..."
// //               className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
// //               value={searchTerm}
// //               onChange={(e) => setSearchTerm(e.target.value)}
// //             />
// //           </div>
// //         </div>

// //         {/* Stats */}
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
// //           <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
// //             <div className="flex items-center space-x-3">
// //               <Building2 className="h-8 w-8 text-primary" />
// //               <div>
// //                 <div className="text-2xl font-bold text-gray-900">6</div>
// //                 <div className="text-sm text-gray-500">Facultades y Extensiones</div>
// //               </div>
// //             </div>
// //           </div>
// //           <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
// //             <div className="flex items-center space-x-3">
// //               <GraduationCap className="h-8 w-8 text-primary" />
// //               <div>
// //                 <div className="text-2xl font-bold text-gray-900">24</div>
// //                 <div className="text-sm text-gray-500">Carreras Disponibles</div>
// //               </div>
// //             </div>
// //           </div>
// //           <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
// //             <div className="flex items-center space-x-3">
// //               <Building2 className="h-8 w-8 text-primary" />
// //               <div>
// //                 <div className="text-2xl font-bold text-gray-900">3</div>
// //                 <div className="text-sm text-gray-500">Campus</div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Faculties Grid */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// //           {filteredFaculties.map((faculty) => (
// //             <div
// //               key={faculty.id}
// //               className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-300"
// //             >
// //               <img
// //                 src={faculty.image}
// //                 alt={faculty.name}
// //                 className="w-full h-48 object-cover"
// //               />
// //               <div className="p-6">
// //                 <h2 className="text-xl font-bold text-gray-900 mb-2">
// //                   {faculty.name}
// //                 </h2>
// //                 <p className="text-gray-600 mb-4">
// //                   {faculty.description}
// //                 </p>
// //                 <div className="mb-4">
// //                   <h3 className="text-sm font-semibold text-gray-900 mb-2">
// //                     Carreras disponibles:
// //                   </h3>
// //                   <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
// //                     {faculty.careers.map((career, index) => (
// //                       <li
// //                         key={index}
// //                         className="text-sm text-gray-600 flex items-center space-x-1"
// //                       >
// //                         <span className="w-1 h-1 bg-primary rounded-full" />
// //                         <span>{career}</span>
// //                       </li>
// //                     ))}
// //                   </ul>
// //                 </div>
// //                 <a
// //                   href={`/facultad/${faculty.id}`}
// //                   className="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-200"
// //                 >
// //                   <span className="text-sm font-medium">Ver más detalles</span>
// //                   <ChevronRight className="h-4 w-4 ml-1" />
// //                 </a>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// import React, { useState, useEffect } from 'react';
// import { ChevronRight, Search, Building2, GraduationCap, BookOpen, Users } from 'lucide-react';

// const faculties = [
//   {
//     id: 'caye',
//     name: 'FACULTAD DE CIENCIAS ADMINISTRATIVAS Y ECONÓMICAS',
//     shortName: 'CAYE',
//     image: "https://www.utc.edu.ec/Portals/0/BELEN/2021%20IMAGENES/PRUEBApagina/ADMINISTRATIVAS.jpg?ver=2021-06-23-145818-207",
//     description: 'Formando líderes empresariales y económicos con visión global, ética profesional y responsabilidad social.',
//     careers: [
//       'Administración de Empresas',
//       'Contabilidad y Auditoría',
//       'Economía',
//       'Gestión de la Información Gerencial',
//       'Gestión del Talento Humano',
//       'Mercadotécnia',
//       'Finanzas'
//     ]
//   },
//   {
//     id: 'caren',
//     name: 'FACULTAD DE CIENCIAS AGROPECUARIAS Y RECURSOS NATURALES',
//     shortName: 'CAREN',
//     image: "https://www.utc.edu.ec/Portals/0/BELEN/2021%20IMAGENES/PRUEBApagina/hacienda1.jpg?ver=2021-06-23-150603-013",
//     description: 'Innovación y excelencia en ciencias agrarias y gestión sostenible de recursos naturales.',
//     careers: [
//       'Agroindustrial',
//       'Agronomía',
//       'Agropecuarias',
//       'Ambiente',
//       'Biotecnología',
//       'Turismo',
//       'Veterinaria'
//     ]
//   },
//   {
//     id: 'csaye',
//     name: 'FACULTAD DE CIENCIAS SOCIALES ARTES Y EDUCACIÓN',
//     shortName: 'CSAYE',
//     image: "https://www.utc.edu.ec/Portals/0/BELEN/2021%20IMAGENES/PRUEBApagina/HUMANAS1.jpg?ver=2021-06-23-150704-290",
//     description: 'Desarrollando el potencial creativo y humano para transformar la sociedad a través de la educación y el arte.',
//     careers: [
//       'Comunicación',
//       'Diseño Gráfico',
//       'Animación Digital',
//       'Trabajo Social',
//       'Psicología Social',
//       'Educación Básica',
//       'Educación Inicial',
//       'Pedagogía de los Idiomas',
//       'Pedagogía de la Lengua y la Literatura',
//       'Pedagogía de las Matemáticas y la Física'
//     ]
//   },
//   {
//     id: 'ciya',
//     name: 'FACULTAD DE CIENCIAS DE LA INGENIERÍA Y APLICADAS',
//     shortName: 'CIYA',
//     image: "https://www.utc.edu.ec/Portals/0/BELEN/2021%20IMAGENES/PRUEBApagina/CIYA1.jpg?ver=2021-06-23-150754-973",
//     description: 'Formando ingenieros innovadores que lideran el desarrollo tecnológico del futuro.',
//     careers: [
//       'Electricidad',
//       'Electromecánica',
//       'Industrial',
//       'Sistema de Información',
//       'Hidráulica',
//       'Software'
//     ]
//   },
//   {
//     id: 'pujili',
//     name: 'EXTENSIÓN PUJILÍ',
//     shortName: 'PUJILÍ',
//     image: "https://www.utc.edu.ec/Portals/0/BELEN/2021%20IMAGENES/PRUEBApagina/educacion1.jpg?ver=2021-06-23-154204-760",
//     description: 'Excelencia académica y formación integral en el corazón de Pujilí.',
//     careers: [
//       'Educación Básica',
//       'Educación Inicial',
//       'Pedagogía de los Idiomas',
//       'Pedagogía de la Lengua y la Literatura',
//       'Pedagogía de las Matemáticas y la Física'
//     ]
//   },
//   {
//     id: 'mana',
//     name: 'EXTENSIÓN LA MANÁ',
//     shortName: 'LA MANÁ',
//     image: "/api/placeholder/800/400",
//     description: 'Educación de calidad y desarrollo profesional en la región de La Maná.',
//     careers: [
//       'Administración de Empresas',
//       'Contabilidad y Auditoría',
//       'Electromecánica',
//       'Sistema de Información',
//       'Agroindustrias',
//       'Agronomía',
//       'Turismo'
//     ]
//   }
// ];

// export default function GradoPage() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedFaculty, setSelectedFaculty] = useState(null);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 0);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const filteredFaculties = faculties.filter(faculty => {
//     const matchesFaculty = faculty.name.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCareers = faculty.careers.some(career => 
//       career.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     return matchesFaculty || matchesCareers;
//   });

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section with parallax effect */}
//       <div className="relative h-[60vh] overflow-hidden">
//         <div 
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//           style={{
//             backgroundImage: `url(${faculties[0].image})`,
//             transform: scrolled ? 'scale(1.1)' : 'scale(1)',
//             transition: 'transform 0.5s ease-out'
//           }}
//         >
//           <div className="absolute inset-0 bg-black/50" />
//         </div>
//         <div className="relative h-full flex items-center justify-center text-center px-4">
//           <div className="max-w-4xl">
//             <h1 className="text-5xl font-serif font-bold text-white mb-6">
//               Oferta Académica de Grado
//             </h1>
//             <p className="text-xl text-white/90 max-w-2xl mx-auto">
//               Descubre tu potencial en una de nuestras carreras de excelencia académica.
//               Formamos los líderes del mañana con educación de calidad y valores.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Breadcrumb - floating over hero */}
//       <div className={`sticky top-0 z-50 bg-white/80 backdrop-blur-md transition-all duration-300 ${
//         scrolled ? 'shadow-md' : ''
//       }`}>
//         <div className="container mx-auto px-4 py-4">
//           <div className="flex items-center space-x-2 text-sm">
//             <a href="/" className="text-gray-600 hover:text-primary transition-colors">Inicio</a>
//             <ChevronRight className="h-4 w-4 text-gray-400" />
//             <span className="text-gray-900 font-medium">Grado</span>
//           </div>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 py-12">
//         {/* Search and Stats Section */}
//         <div className="max-w-4xl mx-auto mb-16">
//           <div className="relative mb-8">
//             <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
//             <input
//               type="text"
//               placeholder="Buscar facultad o carrera..."
//               className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-full focus:outline-none focus:border-primary transition-colors duration-200 text-lg"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-gray-50 rounded-2xl p-6 text-center transform hover:-translate-y-1 transition-transform duration-300">
//               <Building2 className="h-8 w-8 text-primary mx-auto mb-3" />
//               <div className="text-3xl font-bold text-gray-900 mb-1">6</div>
//               <div className="text-gray-600">Facultades y Extensiones</div>
//             </div>
//             <div className="bg-gray-50 rounded-2xl p-6 text-center transform hover:-translate-y-1 transition-transform duration-300">
//               <BookOpen className="h-8 w-8 text-primary mx-auto mb-3" />
//               <div className="text-3xl font-bold text-gray-900 mb-1">35+</div>
//               <div className="text-gray-600">Carreras Disponibles</div>
//             </div>
//             <div className="bg-gray-50 rounded-2xl p-6 text-center transform hover:-translate-y-1 transition-transform duration-300">
//               <Users className="h-8 w-8 text-primary mx-auto mb-3" />
//               <div className="text-3xl font-bold text-gray-900 mb-1">15k+</div>
//               <div className="text-gray-600">Estudiantes Activos</div>
//             </div>
//           </div>
//         </div>

//         {/* Faculties Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {filteredFaculties.map((faculty) => (
//             <div
//               key={faculty.id}
//               className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
//             >
//               <div className="relative h-64 overflow-hidden">
//                 <img
//                   src={faculty.image}
//                   alt={faculty.name}
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
//                 <div className="absolute bottom-0 left-0 right-0 p-6">
//                   <div className="text-sm font-medium text-white/80 mb-2">{faculty.shortName}</div>
//                   <h2 className="text-xl font-bold text-white">{faculty.name}</h2>
//                 </div>
//               </div>
              
//               <div className="p-6">
//                 <p className="text-gray-600 mb-6 line-clamp-2">
//                   {faculty.description}
//                 </p>
                
//                 <div className="mb-6">
//                   <h3 className="font-semibold text-gray-900 mb-3">
//                     Carreras disponibles:
//                   </h3>
//                   <ul className="grid grid-cols-1 gap-2">
//                     {faculty.careers.map((career, index) => (
//                       <li
//                         key={index}
//                         className="text-gray-600 flex items-center space-x-2 group/item hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200"
//                       >
//                         <span className="w-2 h-2 rounded-full bg-primary/20 group-hover/item:bg-primary transition-colors duration-200" />
//                         <span className="group-hover/item:text-primary transition-colors duration-200">{career}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <a
//                   href={`/facultad/${faculty.id}`}
//                   className="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-200 group/link"
//                 >
//                   <span className="text-sm font-medium">Explorar facultad</span>
//                   <ChevronRight className="h-4 w-4 ml-1 transform group-hover/link:translate-x-1 transition-transform duration-200" />
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';
import { ChevronRight, Search, MapPin, School } from 'lucide-react';

const faculties = [
  {
    id: 'caye',
    name: 'FACULTAD DE CIENCIAS ADMINISTRATIVAS Y ECONÓMICAS',
    shortName: 'CAYE',
    image: "https://www.utc.edu.ec/Portals/0/BELEN/2021%20IMAGENES/PRUEBApagina/ADMINISTRATIVAS.jpg?ver=2021-06-23-145818-207",
    location: 'Campus Matriz',
    careerGroups: [
      {
        title: 'Administración',
        careers: ['Administración de Empresas', 'Gestión del Talento Humano', 'Gestión de la Información Gerencial']
      },
      {
        title: 'Finanzas y Economía',
        careers: ['Contabilidad y Auditoría', 'Economía', 'Finanzas', 'Mercadotécnia']
      }
    ]
  },
  {
    id: 'caren',
    name: 'FACULTAD DE CIENCIAS AGROPECUARIAS Y RECURSOS NATURALES',
    shortName: 'CAREN',
    image: "https://www.utc.edu.ec/Portals/0/BELEN/2021%20IMAGENES/PRUEBApagina/hacienda1.jpg?ver=2021-06-23-150603-013",
    location: 'Campus Salache',
    careerGroups: [
      {
        title: 'Ciencias Agropecuarias',
        careers: ['Agroindustrial', 'Agronomía', 'Agropecuarias', 'Veterinaria']
      },
      {
        title: 'Recursos Naturales',
        careers: ['Ambiente', 'Biotecnología', 'Turismo']
      }
    ]
  },
  {
    id: 'csaye',
    name: 'FACULTAD DE CIENCIAS SOCIALES ARTES Y EDUCACIÓN',
    shortName: 'CSAYE',
    image: "https://www.utc.edu.ec/Portals/0/BELEN/2021%20IMAGENES/PRUEBApagina/HUMANAS1.jpg?ver=2021-06-23-150704-290",
    location: 'Campus Matriz',
    careerGroups: [
      {
        title: 'Comunicación y Diseño',
        careers: ['Comunicación', 'Diseño Gráfico', 'Animación Digital']
      },
      {
        title: 'Ciencias Sociales',
        careers: ['Trabajo Social', 'Psicología Social']
      }
    ]
  },
  {
    id: 'ciya',
    name: 'FACULTAD DE CIENCIAS DE LA INGENIERÍA Y APLICADAS',
    shortName: 'CIYA',
    image: "https://www.utc.edu.ec/Portals/0/BELEN/2021%20IMAGENES/PRUEBApagina/CIYA1.jpg?ver=2021-06-23-150754-973",
    location: 'Campus Matriz',
    careerGroups: [
      {
        title: 'Ingenierías Técnicas',
        careers: ['Electricidad', 'Electromecánica', 'Industrial', 'Hidráulica']
      },
      {
        title: 'Tecnologías de Información',
        careers: ['Sistema de Información', 'Software']
      }
    ]
  },
  {
    id: 'pujili',
    name: 'EXTENSIÓN PUJILÍ',
    shortName: 'PUJILÍ',
    image: "https://www.utc.edu.ec/Portals/0/BELEN/2021%20IMAGENES/PRUEBApagina/educacion1.jpg?ver=2021-06-23-154204-760",
    location: 'Pujilí',
    careerGroups: [
      {
        title: 'Educación',
        careers: [
          'Educación Básica',
          'Educación Inicial',
          'Pedagogía de los Idiomas',
          'Pedagogía de la Lengua y la Literatura',
          'Pedagogía de las Matemáticas y la Física'
        ]
      }
    ]
  },
  {
    id: 'mana',
    name: 'EXTENSIÓN LA MANÁ',
    shortName: 'LA MANÁ',
    image: "https://www.utc.edu.ec/Portals/0/BELEN/2021%20IMAGENES/PRUEBApagina/caren.jpg?ver=2021-06-23-150900-370",
    location: 'La Maná',
    careerGroups: [
      {
        title: 'Carreras Empresariales',
        careers: ['Administración de Empresas', 'Contabilidad y Auditoría']
      },
      {
        title: 'Carreras Técnicas',
        careers: ['Electromecánica', 'Sistema de Información', 'Agroindustrias', 'Agronomía', 'Turismo']
      }
    ]
  }
];

export default function GradoPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  const filteredFaculties = faculties.filter(faculty => {
    if (!searchTerm) return true;
    const searchLower = searchTerm.toLowerCase();
    return (
      faculty.name.toLowerCase().includes(searchLower) ||
      faculty.careerGroups.some(group =>
        group.careers.some(career =>
          career.toLowerCase().includes(searchLower)
        )
      )
    );
  });

  return (
    <>
      {/* Hero Section más compacto */}
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <div className="flex-1">
              <div className="flex items-center text-sm mb-2">
                <a href="/" className="text-white/80 hover:text-white">Inicio</a>
                <ChevronRight className="h-4 w-4 mx-1 text-white/60" />
                <span>Grado</span>
              </div>
              <h1 className="text-4xl font-bold mb-4">Oferta Académica</h1>
              <p className="text-white/90 max-w-2xl">
                Explora nuestras carreras de pregrado distribuidas en facultades y extensiones. 
                Formación de calidad con reconocimiento nacional e internacional.
              </p>
            </div>
            <div className="hidden lg:block">
              <School className="h-24 w-24 text-white/20" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Barra de búsqueda */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Buscar por facultad o carrera..."
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Grid de Facultades */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFaculties.map((faculty) => (
            <div
              key={faculty.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Imagen de la facultad */}
              <div className="relative h-[260px] w-full overflow-hidden rounded-t-lg">
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center text-white/90 text-sm mb-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    {faculty.location}
                  </div>
                  <h2 className="text-lg font-bold text-white">
                    {faculty.shortName}
                  </h2>
                </div>
              </div>

              {/* Contenido de la facultad */}
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-900 mb-4">{faculty.name}</h3>
                
                {faculty.careerGroups.map((group, idx) => (
                  <div key={idx} className="mb-3 last:mb-0">
                    <h4 className="text-sm font-medium text-primary mb-2">{group.title}</h4>
                    <ul className="space-y-1">
                      {group.careers.map((career, careerIdx) => (
                        <li
                          key={careerIdx}
                          className="text-sm text-gray-600 flex items-center"
                        >
                          <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mr-2" />
                          {career}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                <a
                  href={`/facultad/${faculty.id}`}
                  className="mt-4 inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors duration-200"
                >
                  <span>Ver detalles</span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}