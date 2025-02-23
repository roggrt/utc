// // // import React, { useState, useRef, useEffect } from 'react';
// // // import { ChevronRight, Search, Calendar, Clock, CheckCircle, AlertCircle, ArrowRight, HelpCircle, BookOpen, MapPin } from 'lucide-react';

// // // // Datos del proceso de admisión
// // // const processSteps = [
// // //   {
// // //     id: 1,
// // //     title: "Registro Nacional",
// // //     dates: "Del 30 de noviembre al 08 de diciembre 2024",
// // //     status: "Culminó",
// // //     description: "Primera etapa del proceso de admisión. El registro nacional es un paso fundamental para iniciar tu proceso de admisión en la Universidad Técnica de Cotopaxi.",
// // //     icon: "/wp-content/uploads/2024/02/1Recurso-19@2x.png",
// // //     buttonText: "",
// // //     buttonLink: "",
// // //     requirements: [
// // //       "Documento de identidad",
// // //       "Correo electrónico activo",
// // //       "Información personal básica"
// // //     ]
// // //   },
// // //   {
// // //     id: 2,
// // //     title: "Inscripción",
// // //     dates: "Del 09 al 20 de enero",
// // //     status: "Culminó",
// // //     description: "Segunda etapa donde formalizas tu inscripción en el sistema de la UTC. Asegúrate de tener toda la documentación requerida lista.",
// // //     icon: "/wp-content/uploads/2024/02/1Recurso-20@2x.png",
// // //     buttonText: "",
// // //     buttonLink: "",
// // //     requirements: [
// // //       "Título de bachiller o acta de grado",
// // //       "Fotografía tamaño carnet",
// // //       "Documentos personales digitalizados"
// // //     ]
// // //   },
// // //   {
// // //     id: 3,
// // //     title: "Evaluación",
// // //     dates: "15 de febrero",
// // //     status: "Próximo",
// // //     description: "Evaluación de conocimientos y aptitudes. Esta etapa es crucial para determinar tu ingreso a la carrera seleccionada.",
// // //     icon: "/wp-content/uploads/2024/02/1Recurso-21@2x.png",
// // //     buttonText: "Ir a evaluación",
// // //     buttonLink: "#evaluacion",
// // //     image: "/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-04-at-09.14.30-1024x1014.jpeg",
// // //     requirements: [
// // //       "Identificación oficial vigente",
// // //       "Comprobante de inscripción",
// // //       "Llegar 30 minutos antes del examen"
// // //     ]
// // //   }
// // // ];

// // // // Preguntas frecuentes
// // // const faqData = [
// // //   {
// // //     question: "Soy tecnólogo y quiero seguir estudiando para obtener una ingeniería, ¿debo seguir el mismo procedimiento para el ingreso?",
// // //     answer: "Si, por favor debe realizar el mismo proceso, la primera etapa del Registro Nacional, la segunda etapa la inscripción y cada una de las etapas necesarias para la aceptación de un cupo."
// // //   },
// // //   {
// // //     question: "¿Si ya tenía un cupo aceptado, si puedo realizar de igual manera el registro nacional?",
// // //     answer: "Si ya tiene un cupo aceptado y activo, debe verificar su estado en el sistema. En caso de duda, le recomendamos contactar directamente a la Secretaría de Admisión para recibir orientación específica sobre su caso."
// // //   },
// // //   {
// // //     question: "¿Cómo saber si realicé la inscripción?",
// // //     answer: "Al completar exitosamente su inscripción, recibirá un correo electrónico de confirmación. También puede verificar su estado iniciando sesión en el sistema de admisión con sus credenciales."
// // //   }
// // // ];

// // // export default function AdmisionPage() {
// // //   const [activeStep, setActiveStep] = useState(2); // Comienza en la evaluación
// // //   const [isSticky, setIsSticky] = useState(false);
// // //   const stepRefs = useRef([]);
// // //   const [searchQuery, setSearchQuery] = useState('');

// // //   useEffect(() => {
// // //     stepRefs.current = Array(processSteps.length)
// // //       .fill()
// // //       .map((_, i) => stepRefs.current[i] || React.createRef());
// // //   }, []);

// // //   useEffect(() => {
// // //     const handleScroll = () => {
// // //       const headerOffset = 200;
// // //       const scrollPosition = window.scrollY;
      
// // //       if (scrollPosition > headerOffset) {
// // //         setIsSticky(true);
// // //       } else {
// // //         setIsSticky(false);
// // //       }

// // //       // Actualizar paso activo basado en la posición de scroll
// // //       stepRefs.current.forEach((ref, index) => {
// // //         if (ref.current) {
// // //           const rect = ref.current.getBoundingClientRect();
// // //           if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
// // //             setActiveStep(index);
// // //           }
// // //         }
// // //       });
// // //     };

// // //     window.addEventListener('scroll', handleScroll);
// // //     return () => window.removeEventListener('scroll', handleScroll);
// // //   }, []);

// // //   const scrollToStep = (index) => {
// // //     stepRefs.current[index]?.current?.scrollIntoView({
// // //       behavior: 'smooth',
// // //       block: 'center'
// // //     });
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gray-50">
// // //       {/* Hero Section */}
// // //       <div className="bg-primary text-white py-12">
// // //         <div className="container mx-auto px-4">
// // //           <div className="flex items-center">
// // //             <div className="flex-1">
// // //               <div className="flex items-center text-sm mb-2">
// // //                 <a href="/" className="text-white/80 hover:text-white">Inicio</a>
// // //                 <ChevronRight className="h-4 w-4 mx-1 text-white/60" />
// // //                 <span>Admisión 2025</span>
// // //               </div>
// // //               <h1 className="text-4xl font-bold mb-4">CRONOGRAMA Proceso de admisión UTC 2025</h1>
// // //               <p className="text-white/90 max-w-2xl">
// // //                 Aquí podrás conocer cada etapa en este nuevo proceso de admisión 2025.
// // //               </p>
// // //               <div className="mt-6">
// // //                 <div className="text-white/90 mb-2">¿Todavía no sabes que carrera escoger?</div>
// // //                 <a href="/oferta-academica" className="inline-flex items-center bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors">
// // //                   Ver oferta académica
// // //                   <ChevronRight className="ml-2 h-4 w-4" />
// // //                 </a>
// // //               </div>
// // //             </div>
// // //             <div className="hidden lg:block">
// // //               <BookOpen className="h-24 w-24 text-white/20" />
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Navegación de pasos (sticky) */}
// // //       <div className={`bg-white border-b ${isSticky ? 'sticky top-0 z-50 shadow-sm' : ''}`}>
// // //         <div className="container mx-auto px-4">
// // //           <div className="max-w-4xl mx-auto">
// // //             <div className="flex justify-between py-4">
// // //               {processSteps.map((step, index) => (
// // //                 <button
// // //                   key={step.id}
// // //                   onClick={() => scrollToStep(index)}
// // //                   className={`flex flex-col items-center p-2 transition-colors relative ${
// // //                     activeStep === index ? 'text-primary' : 'text-gray-500'
// // //                   }`}
// // //                 >
// // //                   <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2">
// // //                     <img src={step.icon} alt={step.title} className="w-8 h-8" />
// // //                   </div>
// // //                   <span className="text-sm font-medium">{step.title}</span>
// // //                   {activeStep === index && (
// // //                     <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
// // //                   )}
// // //                 </button>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Contenido principal */}
// // //       <div className="container mx-auto px-4 py-8">
// // //         <div className="max-w-4xl mx-auto">
// // //           {processSteps.map((step, index) => (
// // //             <div
// // //               key={step.id}
// // //               ref={stepRefs.current[index]}
// // //               className={`mb-12 last:mb-0 scroll-mt-24`}
// // //             >
// // //               <div className="bg-white rounded-xl shadow-sm p-6">
// // //                 <div className="flex items-center justify-between mb-6">
// // //                   <div className="flex items-center">
// // //                     <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
// // //                       <img src={step.icon} alt={step.title} className="w-8 h-8" />
// // //                     </div>
// // //                     <div>
// // //                       <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
// // //                       <div className="flex items-center text-gray-600 mt-1">
// // //                         <Calendar className="w-4 h-4 mr-2" />
// // //                         <span>{step.dates}</span>
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                   <span className={`px-4 py-1 rounded-full text-sm ${
// // //                     step.status === 'Culminó' 
// // //                       ? 'bg-green-100 text-green-800' 
// // //                       : 'bg-blue-100 text-blue-800'
// // //                   }`}>
// // //                     {step.status}
// // //                   </span>
// // //                 </div>

// // //                 <div className="prose max-w-none">
// // //                   <p className="text-gray-600">{step.description}</p>
                  
// // //                   {step.requirements && (
// // //                     <div className="mt-6">
// // //                       <h4 className="text-sm font-medium text-gray-900 mb-3">Requisitos:</h4>
// // //                       <ul className="space-y-2">
// // //                         {step.requirements.map((req, idx) => (
// // //                           <li key={idx} className="flex items-center text-sm text-gray-600">
// // //                             <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
// // //                             {req}
// // //                           </li>
// // //                         ))}
// // //                       </ul>
// // //                     </div>
// // //                   )}
// // //                 </div>

// // //                 {step.image && (
// // //                   <div className="mt-6">
// // //                     <img
// // //                       src={step.image}
// // //                       alt={`${step.title} información`}
// // //                       className="w-full rounded-lg"
// // //                     />
// // //                   </div>
// // //                 )}

// // //                 {step.buttonText && (
// // //                   <div className="mt-6">
// // //                     <a
// // //                       href={step.buttonLink}
// // //                       className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors"
// // //                     >
// // //                       {step.buttonText}
// // //                       <ArrowRight className="ml-2 w-4 h-4" />
// // //                     </a>
// // //                   </div>
// // //                 )}
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>

// // //       {/* Sección FAQ */}
// // //       <div className="bg-white py-16">
// // //         <div className="container mx-auto px-4">
// // //           <div className="max-w-4xl mx-auto">
// // //             <div className="text-center mb-12">
// // //               <h2 className="text-3xl font-bold mb-2">Preguntas frecuentes</h2>
// // //               <p className="text-gray-600">Encuentra respuestas a las dudas más comunes sobre el proceso de admisión</p>
// // //             </div>

// // //             <div className="space-y-6">
// // //               {faqData.map((faq, index) => (
// // //                 <div key={index} className="bg-gray-50 rounded-lg p-6">
// // //                   <h3 className="text-lg font-medium text-gray-900 mb-2 flex items-start">
// // //                     <HelpCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-1" />
// // //                     <span>{faq.question}</span>
// // //                   </h3>
// // //                   <p className="text-gray-600 ml-7">{faq.answer}</p>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* CTA Section */}
// // //       <div className="bg-primary text-white py-12">
// // //         <div className="container mx-auto px-4 text-center">
// // //           <h2 className="text-2xl font-bold mb-4">¿Tienes dudas sobre el proceso?</h2>
// // //           <a
// // //             href="#contacto"
// // //             className="inline-flex items-center bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors"
// // //           >
// // //             Hablemos
// // //             <ArrowRight className="ml-2 w-4 h-4" />
// // //           </a>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }





// // import React, { useState, useRef, useEffect } from 'react';
// // import { ChevronRight, Search, Calendar, Clock, CheckCircle, AlertCircle, ArrowRight, HelpCircle, BookOpen, MapPin, Play } from 'lucide-react';

// // // Datos del proceso de admisión con URLs correctas
// // const processSteps = [
// //   {
// //     id: 1,
// //     title: "Registro Nacional",
// //     dates: "Del 30 de noviembre al 08 de diciembre 2024",
// //     status: "Culminó",
// //     description: "Primera etapa del proceso de admisión. El registro nacional es un paso fundamental para iniciar tu proceso de admisión en la Universidad Técnica de Cotopaxi.",
// //     icon: "https://admision.utc.edu.ec/wp-content/uploads/2024/02/1Recurso-19@2x.png",
// //     requirements: [
// //       "Documento de identidad",
// //       "Correo electrónico activo",
// //       "Información personal básica"
// //     ]
// //   },
// //   {
// //     id: 2,
// //     title: "Inscripción",
// //     dates: "Del 09 al 20 de enero",
// //     status: "Culminó",
// //     description: "Segunda etapa donde formalizas tu inscripción en el sistema de la UTC. Asegúrate de tener toda la documentación requerida lista.",
// //     icon: "https://admision.utc.edu.ec/wp-content/uploads/2024/02/1Recurso-20@2x.png",
// //     videoUrl: "https://youtu.be/MJFemx1U4Sg",
// //     requirements: [
// //       "Título de bachiller o acta de grado",
// //       "Fotografía tamaño carnet",
// //       "Documentos personales digitalizados"
// //     ]
// //   },
// //   {
// //     id: 3,
// //     title: "Evaluación",
// //     dates: "15 de febrero",
// //     status: "Próximo",
// //     description: "Evaluación de conocimientos y aptitudes. Esta etapa es crucial para determinar tu ingreso a la carrera seleccionada.",
// //     icon: "https://admision.utc.edu.ec/wp-content/uploads/2024/02/1Recurso-21@2x.png",
// //     videoUrl: "https://youtu.be/NgkRIu-yOQ8",
// //     image: "https://admision.utc.edu.ec/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-04-at-09.14.30-1024x1014.jpeg",
// //     buttonText: "Ir a evaluación",
// //     buttonLink: "#evaluacion",
// //     requirements: [
// //       "Identificación oficial vigente",
// //       "Comprobante de inscripción",
// //       "Llegar 30 minutos antes del examen"
// //     ]
// //   }
// // ];

// // // Componente para manejar videos de YouTube
// // const VideoEmbed = ({ url }) => {
// //   const [isPlaying, setIsPlaying] = useState(false);
// //   const videoId = url.split('/').pop();
  
// //   return (
// //     <div className="relative rounded-lg overflow-hidden">
// //       {!isPlaying ? (
// //         <div 
// //           className="relative aspect-video cursor-pointer group"
// //           onClick={() => setIsPlaying(true)}
// //         >
// //           <img 
// //             src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
// //             alt="Video thumbnail"
// //             className="w-full h-full object-cover"
// //           />
// //           <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/50 transition-colors">
// //             <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
// //               <Play className="w-8 h-8 text-white" />
// //             </div>
// //           </div>
// //         </div>
// //       ) : (
// //         <div className="aspect-video">
// //           <iframe
// //             width="100%"
// //             height="100%"
// //             src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
// //             title="YouTube video player"
// //             frameBorder="0"
// //             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
// //             allowFullScreen
// //             className="rounded-lg"
// //           />
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default function AdmisionPage() {
// //   const [activeStep, setActiveStep] = useState(2);
// //   const [isSticky, setIsSticky] = useState(false);
// //   const stepRefs = useRef([]);
// //   const [searchQuery, setSearchQuery] = useState('');

// //   useEffect(() => {
// //     stepRefs.current = Array(processSteps.length)
// //       .fill()
// //       .map((_, i) => stepRefs.current[i] || React.createRef());
// //   }, []);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       const headerOffset = 200;
// //       const scrollPosition = window.scrollY;
      
// //       setIsSticky(scrollPosition > headerOffset);

// //       stepRefs.current.forEach((ref, index) => {
// //         if (ref.current) {
// //           const rect = ref.current.getBoundingClientRect();
// //           if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
// //             setActiveStep(index);
// //           }
// //         }
// //       });
// //     };

// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   const scrollToStep = (index) => {
// //     stepRefs.current[index]?.current?.scrollIntoView({
// //       behavior: 'smooth',
// //       block: 'center'
// //     });
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-50">
// //       {/* Hero Section */}
// //       <div className="bg-primary text-white py-12">
// //         <div className="container mx-auto px-4">
// //           <div className="flex items-center">
// //             <div className="flex-1">
// //               <div className="flex items-center text-sm mb-2">
// //                 <a href="/" className="text-white/80 hover:text-white">Inicio</a>
// //                 <ChevronRight className="h-4 w-4 mx-1 text-white/60" />
// //                 <span>Admisión 2025</span>
// //               </div>
// //               <h1 className="text-4xl font-bold mb-4">CRONOGRAMA Proceso de admisión UTC 2025</h1>
// //               <p className="text-white/90 max-w-2xl">
// //                 Aquí podrás conocer cada etapa en este nuevo proceso de admisión 2025.
// //               </p>
// //               <div className="mt-6">
// //                 <div className="text-white/90 mb-2">¿Todavía no sabes que carrera escoger?</div>
// //                 <a href="/oferta-academica" className="inline-flex items-center bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors">
// //                   Ver oferta académica
// //                   <ChevronRight className="ml-2 h-4 w-4" />
// //                 </a>
// //               </div>
// //             </div>
// //             <div className="hidden lg:block">
// //               <BookOpen className="h-24 w-24 text-white/20" />
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Navegación de pasos (sticky) */}
// //       <div className={`bg-white border-b ${isSticky ? 'sticky top-0 z-50 shadow-sm' : ''}`}>
// //         <div className="container mx-auto px-4">
// //           <div className="max-w-4xl mx-auto">
// //             <div className="flex justify-between py-4">
// //               {processSteps.map((step, index) => (
// //                 <button
// //                   key={step.id}
// //                   onClick={() => scrollToStep(index)}
// //                   className={`flex flex-col items-center p-2 transition-colors relative ${
// //                     activeStep === index ? 'text-primary' : 'text-gray-500'
// //                   }`}
// //                 >
// //                   <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2">
// //                     <img src={step.icon} alt={step.title} className="w-8 h-8" />
// //                   </div>
// //                   <span className="text-sm font-medium">{step.title}</span>
// //                   {activeStep === index && (
// //                     <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
// //                   )}
// //                 </button>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Contenido principal */}
// //       <div className="container mx-auto px-4 py-8">
// //         <div className="max-w-4xl mx-auto">
// //           {processSteps.map((step, index) => (
// //             <div
// //               key={step.id}
// //               ref={stepRefs.current[index]}
// //               className="mb-12 last:mb-0 scroll-mt-24"
// //             >
// //               <div className="bg-white rounded-xl shadow-sm p-6">
// //                 <div className="flex items-center justify-between mb-6">
// //                   <div className="flex items-center">
// //                     <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
// //                       <img src={step.icon} alt={step.title} className="w-8 h-8" />
// //                     </div>
// //                     <div>
// //                       <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
// //                       <div className="flex items-center text-gray-600 mt-1">
// //                         <Calendar className="w-4 h-4 mr-2" />
// //                         <span>{step.dates}</span>
// //                       </div>
// //                     </div>
// //                   </div>
// //                   <span className={`px-4 py-1 rounded-full text-sm ${
// //                     step.status === 'Culminó' 
// //                       ? 'bg-green-100 text-green-800' 
// //                       : 'bg-blue-100 text-blue-800'
// //                   }`}>
// //                     {step.status}
// //                   </span>
// //                 </div>

// //                 <div className="prose max-w-none">
// //                   <p className="text-gray-600">{step.description}</p>
                  
// //                   {step.requirements && (
// //                     <div className="mt-6">
// //                       <h4 className="text-sm font-medium text-gray-900 mb-3">Requisitos:</h4>
// //                       <ul className="space-y-2">
// //                         {step.requirements.map((req, idx) => (
// //                           <li key={idx} className="flex items-center text-sm text-gray-600">
// //                             <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
// //                             {req}
// //                           </li>
// //                         ))}
// //                       </ul>
// //                     </div>
// //                   )}
// //                 </div>

// //                 {step.videoUrl && (
// //                   <div className="mt-6">
// //                     <VideoEmbed url={step.videoUrl} />
// //                   </div>
// //                 )}

// //                 {step.image && (
// //                   <div className="mt-6">
// //                     <img
// //                       src={step.image}
// //                       alt={`${step.title} información`}
// //                       className="w-full rounded-lg"
// //                     />
// //                   </div>
// //                 )}

// //                 {step.buttonText && (
// //                   <div className="mt-6">
// //                     <a
// //                       href={step.buttonLink}
// //                       className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors"
// //                     >
// //                       {step.buttonText}
// //                       <ArrowRight className="ml-2 w-4 h-4" />
// //                     </a>
// //                   </div>
// //                 )}
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       {/* FAQ Section */}
// //       <div className="bg-white py-16">
// //         <div className="container mx-auto px-4">
// //           <div className="max-w-4xl mx-auto">
// //             <div className="text-center mb-12">
// //               <h2 className="text-3xl font-bold mb-2">Preguntas frecuentes</h2>
// //               <p className="text-gray-600">Encuentra respuestas a las dudas más comunes sobre el proceso de admisión</p>
// //             </div>
// //             <div className="space-y-6">
// //               {faqData.map((faq, index) => (
// //                 <div key={index} className="bg-gray-50 rounded-lg p-6">
// //                   <h3 className="text-lg font-medium text-gray-900 mb-2 flex items-start">
// //                     <HelpCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-1" />
// //                     <span>{faq.question}</span>
// //                   </h3>
// //                   <p className="text-gray-600 ml-7">{faq.answer}</p>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* CTA Section */}
// //       <div className="bg-primary text-white py-12">
// //         <div className="container mx-auto px-4 text-center">
// //           <h2 className="text-2xl font-bold mb-4">¿Tienes dudas sobre el proceso?</h2>
// //           <a
// //             href="#contacto"
// //             className="inline-flex items-center bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors"
// //           >
// //             Hablemos
// //             <ArrowRight className="ml-2 w-4 h-4" />
// //           </a>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }



// import React, { useState, useRef, useEffect } from 'react';
// import { ChevronRight, Calendar, CheckCircle, ArrowRight, HelpCircle, BookOpen, Play } from 'lucide-react';

// // Datos del proceso de admisión
// const processSteps = [
//   {
//     id: 1,
//     title: "Registro Nacional",
//     dates: "Del 30 de noviembre al 08 de diciembre 2024",
//     status: "Culminó",
//     description: "Primera etapa del proceso de admisión. El registro nacional es un paso fundamental para iniciar tu proceso de admisión en la Universidad Técnica de Cotopaxi.",
//     icon: "https://admision.utc.edu.ec/wp-content/uploads/2024/02/1Recurso-19@2x.png",
//     requirements: [
//       "Documento de identidad",
//       "Correo electrónico activo",
//       "Información personal básica"
//     ]
//   },
//   {
//     id: 2,
//     title: "Inscripción",
//     dates: "Del 09 al 20 de enero",
//     status: "Culminó",
//     description: "Segunda etapa donde formalizas tu inscripción en el sistema de la UTC. Asegúrate de tener toda la documentación requerida lista.",
//     icon: "https://admision.utc.edu.ec/wp-content/uploads/2024/02/1Recurso-20@2x.png",
//     videoUrl: "https://youtu.be/MJFemx1U4Sg",
//     requirements: [
//       "Título de bachiller o acta de grado",
//       "Fotografía tamaño carnet",
//       "Documentos personales digitalizados"
//     ]
//   },
//   {
//     id: 3,
//     title: "Evaluación",
//     dates: "15 de febrero",
//     status: "Próximo",
//     description: "Evaluación de conocimientos y aptitudes. Esta etapa es crucial para determinar tu ingreso a la carrera seleccionada.",
//     icon: "https://admision.utc.edu.ec/wp-content/uploads/2024/02/1Recurso-21@2x.png",
//     videoUrl: "https://youtu.be/NgkRIu-yOQ8",
//     image: "https://admision.utc.edu.ec/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-04-at-09.14.30-1024x1014.jpeg",
//     buttonText: "Ir a evaluación",
//     buttonLink: "#evaluacion",
//     requirements: [
//       "Identificación oficial vigente",
//       "Comprobante de inscripción",
//       "Llegar 30 minutos antes del examen"
//     ]
//   }
// ];

// // Preguntas frecuentes
// const faqData = [
//   {
//     question: "Soy tecnólogo y quiero seguir estudiando para obtener una ingeniería, ¿debo seguir el mismo procedimiento para el ingreso?",
//     answer: "Si, por favor debe realizar el mismo proceso, la primera etapa del Registro Nacional, la segunda etapa la inscripción y cada una de las etapas necesarias para la aceptación de un cupo."
//   },
//   {
//     question: "¿Si ya tenía un cupo aceptado, si puedo realizar de igual manera el registro nacional?",
//     answer: "Si ya tiene un cupo aceptado y activo, debe verificar su estado en el sistema. En caso de duda, le recomendamos contactar directamente a la Secretaría de Admisión para recibir orientación específica sobre su caso."
//   },
//   {
//     question: "¿Cómo saber si realicé la inscripción?",
//     answer: "Al completar exitosamente su inscripción, recibirá un correo electrónico de confirmación. También puede verificar su estado iniciando sesión en el sistema de admisión con sus credenciales."
//   }
// ];

// // Componente para videos de YouTube
// const VideoEmbed = ({ url }) => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const videoId = url.split('/').pop();
  
//   return (
//     <div className="relative rounded-lg overflow-hidden">
//       {!isPlaying ? (
//         <div 
//           className="relative aspect-video cursor-pointer group"
//           onClick={() => setIsPlaying(true)}
//         >
//           <img 
//             src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
//             alt="Video thumbnail"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/50 transition-colors">
//             <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
//               <Play className="w-8 h-8 text-white" />
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="aspect-video">
//           <iframe
//             width="100%"
//             height="100%"
//             src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
//             title="YouTube video player"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//             className="rounded-lg"
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default function AdmisionPage() {
//   const [activeStep, setActiveStep] = useState(2);
//   const [isSticky, setIsSticky] = useState(false);
//   const stepRefs = useRef([]);

//   useEffect(() => {
//     stepRefs.current = Array(processSteps.length)
//       .fill()
//       .map((_, i) => stepRefs.current[i] || React.createRef());
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       const headerOffset = 200;
//       const scrollPosition = window.scrollY;
      
//       setIsSticky(scrollPosition > headerOffset);

//       stepRefs.current.forEach((ref, index) => {
//         if (ref.current) {
//           const rect = ref.current.getBoundingClientRect();
//           if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
//             setActiveStep(index);
//           }
//         }
//       });
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToStep = (index) => {
//     stepRefs.current[index]?.current?.scrollIntoView({
//       behavior: 'smooth',
//       block: 'center'
//     });
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <div className="bg-primary text-white py-12">
//         <div className="container mx-auto px-4">
//           <div className="flex items-center">
//             <div className="flex-1">
//               <div className="flex items-center text-sm mb-2">
//                 <a href="/" className="text-white/80 hover:text-white">Inicio</a>
//                 <ChevronRight className="h-4 w-4 mx-1 text-white/60" />
//                 <span>Admisión 2025</span>
//               </div>
//               <h1 className="text-4xl font-bold mb-4">CRONOGRAMA Proceso de admisión UTC 2025</h1>
//               <p className="text-white/90 max-w-2xl">
//                 Aquí podrás conocer cada etapa en este nuevo proceso de admisión 2025.
//               </p>
//               <div className="mt-6">
//                 <div className="text-white/90 mb-2">¿Todavía no sabes que carrera escoger?</div>
//                 <a href="/oferta-academica" className="inline-flex items-center bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors">
//                   Ver oferta académica
//                   <ChevronRight className="ml-2 h-4 w-4" />
//                 </a>
//               </div>
//             </div>
//             <div className="hidden lg:block">
//               <BookOpen className="h-24 w-24 text-white/20" />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Navegación de pasos (sticky) */}
//       <div className={`bg-white border-b ${isSticky ? 'sticky top-0 z-50 shadow-sm' : ''}`}>
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto">
//             <div className="flex justify-between py-4">
//               {processSteps.map((step, index) => (
//                 <button
//                   key={step.id}
//                   onClick={() => scrollToStep(index)}
//                   className={`flex flex-col items-center p-2 transition-colors relative ${
//                     activeStep === index ? 'text-primary' : 'text-gray-500'
//                   }`}
//                 >
//                   <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2">
//                     <img src={step.icon} alt={step.title} className="w-8 h-8" />
//                   </div>
//                   <span className="text-sm font-medium">{step.title}</span>
//                   {activeStep === index && (
//                     <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
//                   )}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//      {/* Contenido principal */}
//      <div className="container mx-auto px-4 py-8">
//         <div className="max-w-4xl mx-auto">
//           {processSteps.map((step, index) => (
//             <div
//               key={step.id}
//               ref={stepRefs.current[index]}
//               className="mb-12 last:mb-0 scroll-mt-24"
//             >
//               <div className="bg-white rounded-xl shadow-sm p-6">
//                 {/* Encabezado del paso */}
//                 <div className="flex items-center justify-between mb-6">
//                   <div className="flex items-center">
//                     <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
//                       <img src={step.icon} alt={step.title} className="w-8 h-8" />
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
//                       <div className="flex items-center text-gray-600 mt-1">
//                         <Calendar className="w-4 h-4 mr-2" />
//                         <span>{step.dates}</span>
//                       </div>
//                     </div>
//                   </div>
//                   <span className={`px-4 py-1 rounded-full text-sm ${
//                     step.status === 'Culminó' 
//                       ? 'bg-green-100 text-green-800' 
//                       : 'bg-blue-100 text-blue-800'
//                   }`}>
//                     {step.status}
//                   </span>
//                 </div>

//                 {/* Descripción y requisitos */}
//                 <div className="prose max-w-none">
//                   <p className="text-gray-600 mb-6">{step.description}</p>
                  
//                   {step.requirements && (
//                     <div className="mt-6">
//                       <h4 className="text-sm font-medium text-gray-900 mb-3">Requisitos:</h4>
//                       <ul className="space-y-2">
//                         {step.requirements.map((req, idx) => (
//                           <li key={idx} className="flex items-center text-sm text-gray-600">
//                             <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
//                             {req}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   )}
//                 </div>

//                 {/* Video si existe */}
//                 {step.videoUrl && (
//                   <div className="mt-6">
//                     <VideoEmbed url={step.videoUrl} />
//                   </div>
//                 )}

//                 {/* Imagen si existe */}
//                 {step.image && (
//                   <div className="mt-6">
//                     <img
//                       src={step.image}
//                       alt={`${step.title} información`}
//                       className="w-full rounded-lg"
//                     />
//                   </div>
//                 )}

//                 {/* Botón si existe */}
//                 {step.buttonText && (
//                   <div className="mt-6">
                    
//                       href={step.buttonLink}
//                       className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors"
//                     >
//                       {step.buttonText}
//                       <ArrowRight className="ml-2 w-4 h-4" />
//                     </a>
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Sección FAQ */}
//       <div className="bg-white py-16">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto">
//             <div className="text-center mb-12">
//               <h2 className="text-3xl font-bold mb-2">Preguntas frecuentes</h2>
//               <p className="text-gray-600">Encuentra respuestas a las dudas más comunes sobre el proceso de admisión</p>
//             </div>
//             <div className="space-y-6">
//               {faqData.map((faq, index) => (
//                 <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
//                   <h3 className="text-lg font-medium text-gray-900 mb-2 flex items-start">
//                     <HelpCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-1" />
//                     <span>{faq.question}</span>
//                   </h3>
//                   <p className="text-gray-600 ml-7">{faq.answer}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Sección CTA */}
//       <div className="bg-primary text-white py-12">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-2xl font-bold mb-4">¿Tienes dudas sobre el proceso?</h2>
          
//             href="#contacto"
//             className="inline-flex items-center bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors"
//           >
//             Hablemos
//             <ArrowRight className="ml-2 w-4 h-4" />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState, useRef, useEffect } from 'react';
import { ChevronRight, Calendar, CheckCircle, ArrowRight, HelpCircle, BookOpen, Play } from 'lucide-react';

// Datos del proceso de admisión
const processSteps = [
  {
    id: 1,
    title: "Registro Nacional",
    dates: "Del 30 de noviembre al 08 de diciembre 2024",
    status: "Culminó",
    description: "Primera etapa del proceso de admisión. El registro nacional es un paso fundamental para iniciar tu proceso de admisión en la Universidad Técnica de Cotopaxi.",
    icon: "https://admision.utc.edu.ec/wp-content/uploads/2024/02/1Recurso-19@2x.png",
    requirements: [
      "Documento de identidad",
      "Correo electrónico activo",
      "Información personal básica"
    ]
  },
  {
    id: 2,
    title: "Inscripción",
    dates: "Del 09 al 20 de enero",
    status: "Culminó",
    description: "Segunda etapa donde formalizas tu inscripción en el sistema de la UTC. Asegúrate de tener toda la documentación requerida lista.",
    icon: "https://admision.utc.edu.ec/wp-content/uploads/2024/02/1Recurso-20@2x.png",
    videoUrl: "https://youtu.be/MJFemx1U4Sg",
    requirements: [
      "Título de bachiller o acta de grado",
      "Fotografía tamaño carnet",
      "Documentos personales digitalizados"
    ]
  },
  {
    id: 3,
    title: "Evaluación",
    dates: "15 de febrero",
    status: "Próximo",
    description: "Evaluación de conocimientos y aptitudes. Esta etapa es crucial para determinar tu ingreso a la carrera seleccionada.",
    icon: "https://admision.utc.edu.ec/wp-content/uploads/2024/02/1Recurso-21@2x.png",
    videoUrl: "https://youtu.be/NgkRIu-yOQ8",
    image: "https://admision.utc.edu.ec/wp-content/uploads/2025/02/WhatsApp-Image-2025-02-04-at-09.14.30-1024x1014.jpeg",
    buttonText: "Ir a evaluación",
    buttonLink: "#evaluacion",
    requirements: [
      "Identificación oficial vigente",
      "Comprobante de inscripción",
      "Llegar 30 minutos antes del examen"
    ]
  }
];

// Preguntas frecuentes
const faqData = [
  {
    question: "Soy tecnólogo y quiero seguir estudiando para obtener una ingeniería, ¿debo seguir el mismo procedimiento para el ingreso?",
    answer: "Si, por favor debe realizar el mismo proceso, la primera etapa del Registro Nacional, la segunda etapa la inscripción y cada una de las etapas necesarias para la aceptación de un cupo."
  },
  {
    question: "¿Si ya tenía un cupo aceptado, si puedo realizar de igual manera el registro nacional?",
    answer: "Si ya tiene un cupo aceptado y activo, debe verificar su estado en el sistema. En caso de duda, le recomendamos contactar directamente a la Secretaría de Admisión para recibir orientación específica sobre su caso."
  },
  {
    question: "¿Cómo saber si realicé la inscripción?",
    answer: "Al completar exitosamente su inscripción, recibirá un correo electrónico de confirmación. También puede verificar su estado iniciando sesión en el sistema de admisión con sus credenciales."
  }
];

// Componente para videos de YouTube
const VideoEmbed = ({ url }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = url.split('/').pop();
  
  return (
    <div className="relative rounded-lg overflow-hidden">
      {!isPlaying ? (
        <div 
          className="relative aspect-video cursor-pointer group"
          onClick={() => setIsPlaying(true)}
        >
          <img 
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt="Video thumbnail"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/50 transition-colors">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
              <Play className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      ) : (
        <div className="aspect-video">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

const AdmisionPage = () => {
  const [activeStep, setActiveStep] = useState(2);
  const [isSticky, setIsSticky] = useState(false);
  const stepRefs = useRef([]);

  useEffect(() => {
    stepRefs.current = Array(processSteps.length)
      .fill()
      .map((_, i) => stepRefs.current[i] || React.createRef());
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const headerOffset = 200;
      const scrollPosition = window.scrollY;
      
      setIsSticky(scrollPosition > headerOffset);

      stepRefs.current.forEach((ref, index) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveStep(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToStep = (index) => {
    stepRefs.current[index]?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <div className="flex-1">
              <div className="flex items-center text-sm mb-2">
                <a href="/" className="text-white/80 hover:text-white">Inicio</a>
                <ChevronRight className="h-4 w-4 mx-1 text-white/60" />
                <span>Admisión 2025</span>
              </div>
              <h1 className="text-4xl font-bold mb-4">CRONOGRAMA Proceso de admisión UTC 2025</h1>
              <p className="text-white/90 max-w-2xl">
                Aquí podrás conocer cada etapa en este nuevo proceso de admisión 2025.
              </p>
              <div className="mt-6">
                <div className="text-white/90 mb-2">¿Todavía no sabes que carrera escoger?</div>
                <a href="/oferta-academica" className="inline-flex items-center bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors">
                  Ver oferta académica
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <BookOpen className="h-24 w-24 text-white/20" />
            </div>
          </div>
        </div>
      </div>

      {/* Navegación de pasos (sticky) */}
      <div className={`bg-white border-b ${isSticky ? 'sticky top-0 z-50 shadow-sm' : ''}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between py-4">
              {processSteps.map((step, index) => (
                <button
                  key={step.id}
                  onClick={() => scrollToStep(index)}
                  className={`flex flex-col items-center p-2 transition-colors relative ${
                    activeStep === index ? 'text-primary' : 'text-gray-500'
                  }`}
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2">
                    <img src={step.icon} alt={step.title} className="w-8 h-8" />
                  </div>
                  <span className="text-sm font-medium">{step.title}</span>
                  {activeStep === index && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {processSteps.map((step, index) => (
            <div
              key={step.id}
              ref={stepRefs.current[index]}
              className="mb-12 last:mb-0 scroll-mt-24"
            >
              <div className="bg-white rounded-xl shadow-sm p-6">
                {/* Encabezado del paso */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <img src={step.icon} alt={step.title} className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                      <div className="flex items-center text-gray-600 mt-1">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{step.dates}</span>
                      </div>
                    </div>
                  </div>
                  <span className={`px-4 py-1 rounded-full text-sm ${
                    step.status === 'Culminó' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {step.status}
                  </span>
                </div>

           {/* Descripción y requisitos */}
<div className="prose max-w-none">
  <p className="text-gray-600 mb-6">{step.description}</p>
  
  {step.requirements && (
    <div className="mt-6">
      <h4 className="text-sm font-medium text-gray-900 mb-3">Requisitos:</h4>
      <ul className="space-y-2">
        {step.requirements.map((req, idx) => (
          <li key={idx} className="flex items-center text-sm text-gray-600">
            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
            {req}
          </li>
        ))}
      </ul>
    </div>
  )}
</div>

{/* Video si existe */}
{step.videoUrl && (
  <div className="mt-6">
    <VideoEmbed url={step.videoUrl} />
  </div>
)}

{/* Imagen si existe */}
{step.image && (
  <div className="mt-6">
    <img
      src={step.image}
      alt={`${step.title} información`}
      className="w-full rounded-lg"
    />
  </div>
)}

{/* Botón si existe */}
{step.buttonText && (
  <div className="mt-6">
    <a 
      href={step.buttonLink}
      className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors"
    >
      {step.buttonText}
      <ArrowRight className="ml-2 w-4 h-4" />
    </a>
  </div>
)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sección FAQ */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-2">Preguntas frecuentes</h2>
              <p className="text-gray-600">Encuentra respuestas a las dudas más comunes sobre el proceso de admisión</p>
            </div>
            <div className="space-y-6">
              {faqData.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                  <h3 className="text-lg font-medium text-gray-900 mb-2 flex items-start">
                    <HelpCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-gray-600 ml-7">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sección CTA */}
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">¿Tienes dudas sobre el proceso?</h2>
          <a
            href="#contacto"
            className="inline-flex items-center bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors"
          >
            Hablemos
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdmisionPage;