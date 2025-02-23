// import React from 'react';

// const newsItems = [
//   {
//     image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEizGFUHQOfFzDKFXpeS-tgdUb9FqMTcPN3YuU-A9tTkuS-0Nol0_VUYqCZ9ZXzaKFoAgkE3qopgAKydGcRPQzy6BXkfopfHklYYNyJV8zkUKEemoE62qn3Z669rbYeHZHc2hbh2WhBnJQCqU8YRFts9xCqS_og4qhbZWm9MaBrXKRjbn67O99H3Elb9tFTm/w640-h426/_DSC5056.JPG",
//     title: "La Universidad Técnica de Cotopaxi celebra 30 años",
//     description: "La UTC celebró su trigésimo aniversario con una sesión solemne el 24 de enero de 2025.",
//     date: "Jan 27, 2025",
//     link: "https://blogutc.blogspot.com"
//   },
//   {
//     image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgLcRo_722YUN5vT9uFBoly5BIkkKpiZnZGNZ_ltwOOUPHUtX1xirmKNS0VUR2vskBajrzxUSmYZ-sTzPJIYBwcXN3WDhjn4K-iJuK7ITu0dEPn_0naQUVFvZgisWHrb4ZziUEWL1S5OUXdPS1Uf0X_UulY2LE-8bXDjAFcWkGtQOQ49ohVNf7W4ILV0_Om/w640-h426/475280005_1023434099827829_7231237232714127975_n.jpg",
//     title: "Serenata a la UTC por su Trigésimo Aniversario",
//     description: "Un evento sin precedentes que promete unir generaciones y estilos musicales.",
//     date: "Jan 22, 2025",
//     link: "https://blogutc.blogspot.com"
//   },
//   {
//     image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj2GQ63EMFtxjhvkqo_SwnX7FEc_0RPdgYhry5ss4aKSzhB9RNgci-SRN3Idah0FmkoHIkj-Pac8yBjQq7439jWKAtqdxe81ExYy5bQCtna84GY9sOmFaHj_rH-44zDxAy9hbKL35erDTzlaC1QhV6Kn3v2i2kRhz3m04S-OGQjThHGz-wf0YTSznbDTWdq/w640-h480/WhatsApp%20Image%202025-01-21%20at%2020.41.47%20(1).jpeg",
//     title: "Festival KUNKA: ¡Un espacio donde el arte cobra vida!",
//     description: "La UTC inauguró el Festival KUNKA, celebrando la creatividad y el talento estudiantil.",
//     date: "Feb 21, 2025",
//     link: "https://blogutc.blogspot.com"
//   }
// ];

// export function News() {
//   return (
//     <section className="py-16 bg-gray-100">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-12 text-primary">
//           Noticias y Eventos
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {newsItems.map((item, index) => (
//             <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-200">
//               <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
//                 />
//               </div>
//               <div className="p-6">
//                 <span className="text-sm text-gray-500">{item.date}</span>
//                 <h3 className="text-xl font-semibold mt-2 mb-3 text-gray-800 line-clamp-2">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-600 mb-4 line-clamp-3">
//                   {item.description}
//                 </p>
//                 <a
//                   href={item.link}
//                   className="text-primary font-medium hover:text-primary/80 transition-colors duration-200"
//                 >
//                   Leer más →
//                 </a>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import React from 'react';
import { Shield, BookOpen, Lightbulb, MessageSquare, FileText, Scale, Bell, Monitor, Heart, Book, Users, FileSpreadsheet, File, Users2 } from 'lucide-react';

const services = [
  { icon: Shield, title: 'ASEGURAMIENTO DE LA CALIDAD', description: 'Garantizamos la excelencia académica' },
  { icon: BookOpen, title: 'EDUCACIÓN CONTINUA', description: 'Formación permanente y actualización' },
  { icon: Lightbulb, title: 'CENTRO DE EMPRENDIMIENTO', description: 'Impulsando ideas innovadoras' },
  { icon: MessageSquare, title: 'COMUNICACIÓN', description: 'Mantente informado' },
  { icon: FileText, title: 'TRANSPARENCIA', description: 'Acceso a la información pública' },
  { icon: Scale, title: 'NORMATIVA LEGAL', description: 'Marco legal institucional' },
  { icon: Bell, title: 'CITACIONES JUDICIALES', description: 'Información legal importante' },
  { icon: Monitor, title: 'DIRECCIÓN DE TI', description: 'Soporte tecnológico' },
  { icon: Heart, title: 'BIENESTAR UNIVERSITARIO', description: 'Apoyo estudiantil integral' },
  { icon: Book, title: 'BIBLIOTECA', description: 'Recursos académicos' },
  { icon: Users, title: 'VINCULACIÓN CON LA SOCIEDAD', description: 'Impacto social' },
  { icon: FileSpreadsheet, title: 'FORMATOS INSTITUCIONALES', description: 'Documentación oficial' },
  { icon: File, title: 'GACETA OFICIAL', description: 'Publicaciones institucionales' },
  { icon: Users2, title: 'CLUBES UTC', description: 'Actividades extracurriculares' }
];

export function Services() {
  return (
    <section className="py-16 bg-white lg:py-0 lg:bg-transparent">
      <div className="lg:w-80 lg:flex-shrink-0">
        <h2 className="text-2xl font-bold text-primary mb-6 px-4">
          Servicios Universitarios
        </h2>
        <div className="bg-white rounded-lg shadow-md">
          {services.map((service, index) => (
            <a
              key={index}
              href="#"
              className="flex items-center space-x-3 p-4 hover:bg-gray-50 group transition-colors duration-200 border-b last:border-b-0 border-gray-100"
            >
              <service.icon className="h-5 w-5 text-primary group-hover:text-secondary flex-shrink-0" />
              <div>
                <h3 className="text-sm font-medium text-gray-900 group-hover:text-secondary">{service.title}</h3>
                <p className="text-xs text-gray-500 mt-0.5">{service.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
// News.tsx
const newsItems = [
  {
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEizGFUHQOfFzDKFXpeS-tgdUb9FqMTcPN3YuU-A9tTkuS-0Nol0_VUYqCZ9ZXzaKFoAgkE3qopgAKydGcRPQzy6BXkfopfHklYYNyJV8zkUKEemoE62qn3Z669rbYeHZHc2hbh2WhBnJQCqU8YRFts9xCqS_og4qhbZWm9MaBrXKRjbn67O99H3Elb9tFTm/w640-h426/_DSC5056.JPG",
    title: "La Universidad Técnica de Cotopaxi celebra 30 años",
    description: "La UTC celebró su trigésimo aniversario con una sesión solemne el 24 de enero de 2025.",
    date: "Jan 27, 2025",
    link: "https://blogutc.blogspot.com"
  },
  {
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgLcRo_722YUN5vT9uFBoly5BIkkKpiZnZGNZ_ltwOOUPHUtX1xirmKNS0VUR2vskBajrzxUSmYZ-sTzPJIYBwcXN3WDhjn4K-iJuK7ITu0dEPn_0naQUVFvZgisWHrb4ZziUEWL1S5OUXdPS1Uf0X_UulY2LE-8bXDjAFcWkGtQOQ49ohVNf7W4ILV0_Om/w640-h426/475280005_1023434099827829_7231237232714127975_n.jpg",
    title: "Serenata a la UTC por su Trigésimo Aniversario",
    description: "Un evento sin precedentes que promete unir generaciones y estilos musicales.",
    date: "Jan 22, 2025",
    link: "https://blogutc.blogspot.com"
  },
  {
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj2GQ63EMFtxjhvkqo_SwnX7FEc_0RPdgYhry5ss4aKSzhB9RNgci-SRN3Idah0FmkoHIkj-Pac8yBjQq7439jWKAtqdxe81ExYy5bQCtna84GY9sOmFaHj_rH-44zDxAy9hbKL35erDTzlaC1QhV6Kn3v2i2kRhz3m04S-OGQjThHGz-wf0YTSznbDTWdq/w640-h480/WhatsApp%20Image%202025-01-21%20at%2020.41.47%20(1).jpeg",
    title: "Festival KUNKA: ¡Un espacio donde el arte cobra vida!",
    description: "La UTC inauguró el Festival KUNKA, celebrando la creatividad y el talento estudiantil.",
    date: "Feb 21, 2025",
    link: "https://blogutc.blogspot.com"
  },
  {
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEizGFUHQOfFzDKFXpeS-tgdUb9FqMTcPN3YuU-A9tTkuS-0Nol0_VUYqCZ9ZXzaKFoAgkE3qopgAKydGcRPQzy6BXkfopfHklYYNyJV8zkUKEemoE62qn3Z669rbYeHZHc2hbh2WhBnJQCqU8YRFts9xCqS_og4qhbZWm9MaBrXKRjbn67O99H3Elb9tFTm/w640-h426/_DSC5056.JPG",
    title: "La Universidad Técnica de Cotopaxi celebra 30 años",
    description: "La UTC celebró su trigésimo aniversario con una sesión solemne el 24 de enero de 2025.",
    date: "Jan 27, 2025",
    link: "https://blogutc.blogspot.com"
  },
  {
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgLcRo_722YUN5vT9uFBoly5BIkkKpiZnZGNZ_ltwOOUPHUtX1xirmKNS0VUR2vskBajrzxUSmYZ-sTzPJIYBwcXN3WDhjn4K-iJuK7ITu0dEPn_0naQUVFvZgisWHrb4ZziUEWL1S5OUXdPS1Uf0X_UulY2LE-8bXDjAFcWkGtQOQ49ohVNf7W4ILV0_Om/w640-h426/475280005_1023434099827829_7231237232714127975_n.jpg",
    title: "Serenata a la UTC por su Trigésimo Aniversario",
    description: "Un evento sin precedentes que promete unir generaciones y estilos musicales.",
    date: "Jan 22, 2025",
    link: "https://blogutc.blogspot.com"
  },
  {
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj2GQ63EMFtxjhvkqo_SwnX7FEc_0RPdgYhry5ss4aKSzhB9RNgci-SRN3Idah0FmkoHIkj-Pac8yBjQq7439jWKAtqdxe81ExYy5bQCtna84GY9sOmFaHj_rH-44zDxAy9hbKL35erDTzlaC1QhV6Kn3v2i2kRhz3m04S-OGQjThHGz-wf0YTSznbDTWdq/w640-h480/WhatsApp%20Image%202025-01-21%20at%2020.41.47%20(1).jpeg",
    title: "Festival KUNKA: ¡Un espacio donde el arte cobra vida!",
    description: "La UTC inauguró el Festival KUNKA, celebrando la creatividad y el talento estudiantil.",
    date: "Feb 21, 2025",
    link: "https://blogutc.blogspot.com"
  }
];

export function News() {
  return (
    <section className="py-16 bg-gray-100 lg:bg-transparent lg:py-0">
      <div className="lg:pl-8 flex-1">
        <h2 className="text-2xl font-bold text-primary mb-6">
          Noticias y Eventos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-200">
              <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-gray-500">{item.date}</span>
                <h3 className="text-xl font-semibold mt-2 mb-3 text-gray-800 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>
                <a
                  href={item.link}
                  className="text-primary font-medium hover:text-secondary transition-colors duration-200"
                >
                  Leer más →
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <a
            href="https://blogutc.blogspot.com/2025/02/festival-kunka-un-espacio-donde-el-arte.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-primary text-white font-medium rounded-full hover:bg-secondary transition-colors duration-200"
          >
            Ver más noticias
          </a>
        </div>
      </div>
    </section>
  );
}

// Wrapper component to combine Services and News
export function ContentWrapper() {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row lg:gap-8">
          <Services />
          <News />
        </div>
      </div>
    </div>
  );
}