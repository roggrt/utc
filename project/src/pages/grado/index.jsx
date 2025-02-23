

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