// import React from 'react';
// import { GraduationCap, BookOpen, Users, Globe } from 'lucide-react';

// const cards = [
//   {
//     title: 'Grado',
//     description: 'Explora nuestras carreras de pregrado',
//     icon: GraduationCap,
//     href: '#'
//   },
//   {
//     title: 'Posgrado',
//     description: 'Programas de maestría y doctorado',
//     icon: BookOpen,
//     href: '#'
//   },
//   {
//     title: 'Admisión',
//     description: 'Proceso de admisión y requisitos',
//     icon: Users,
//     href: '#'
//   },
//   {
//     title: 'Idiomas',
//     description: 'Centro de idiomas y certificaciones',
//     icon: Globe,
//     href: '#'
//   }
// ];

// export function QuickAccess() {
//   return (
//     <section className="py-16 bg-gray-100">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-12 text-primary">
//           Accesos Rápidos
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {cards.map((card, index) => (
//             <a
//               key={index}
//               href={card.href}
//               className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200 group"
//             >
//               <div className="flex flex-col items-center text-center">
//                 <card.icon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-200" />
//                 <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
//                 <p className="text-gray-600">{card.description}</p>
//               </div>
//             </a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import React from 'react';
import { GraduationCap, BookOpen, Users, Globe, ArrowRight } from 'lucide-react';

const cards = [
  {
    title: 'Grado',
    description: 'Explora nuestras carreras de pregrado',
    icon: GraduationCap,
    href: '/pages/grado',
    stats: {
      faculties: '6 Facultades',
      programs: '24 Carreras'
    }
  },
  {
    title: 'Posgrado',
    description: 'Programas de maestría y doctorado',
    icon: BookOpen,
    href: '/pages/posgrado',
    stats: {
      masters: '8 Maestrías',
      specialties: '4 Especialidades'
    }
  },
  {
    title: 'Admisión',
    description: 'Proceso de admisión y requisitos',
    icon: Users,
    href: '/pages/admision',
    stats: {
      process: 'Admisiones abiertas',
      deadline: 'Marzo 2025'
    }
  },
  {
    title: 'Idiomas',
    description: 'Centro de idiomas y certificaciones',
    icon: Globe,
    href: '/pages/idiomas',
    stats: {
      languages: '4 Idiomas',
      certifications: '6 Certificaciones'
    }
  }
];

export function QuickAccess() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">
          Accesos Rápidos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <a
              key={index}
              href={card.href}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="rounded-full p-3 bg-gray-50 group-hover:bg-red-50 transition-colors duration-300">
                    <card.icon className="h-8 w-8 text-primary group-hover:text-red-500 transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1 group-hover:text-red-500 transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {card.description}
                    </p>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {Object.entries(card.stats).map(([key, value]) => (
                        <div key={key} className="text-sm">
                          <span className="block text-gray-500">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center text-primary group-hover:text-red-500 transition-colors duration-300">
                  <span className="text-sm font-medium">Explorar</span>
                  <ArrowRight className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}