
// // // // import React from 'react';
// // // // import { Topbar } from './components/Topbar';
// // // // import { Navbar } from './components/Navbar';
// // // // import { Hero } from './components/Hero';
// // // // import { QuickAccess } from './components/QuickAccess';
// // // // import { Services } from './components/Services';
// // // // import { News } from './components/News';
// // // // import { VideoSection } from './components/VideoSection';
// // // // import { Footer } from './components/Footer';

// // // // function App() {
// // // //   return (
// // // //     <div className="min-h-screen flex flex-col">
// // // //       <Topbar />
// // // //       <Navbar />
// // // //       <main>
// // // //         <Hero />
// // // //         <QuickAccess />
// // // //         <div className="bg-gray-100">
// // // //           <div className="container mx-auto px-4 py-16">
// // // //             <div className="flex flex-col lg:flex-row lg:gap-8">
// // // //               <Services />
// // // //               <News />
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //         <VideoSection />
// // // //       </main>
// // // //       <Footer />
// // // //     </div>
// // // //   );
// // // // }

// // // // export default App;


// // // import React from 'react';
// // // import { Topbar } from './components/Topbar';
// // // import { Navbar } from './components/Navbar';
// // // import { Hero } from './components/Hero';
// // // import { QuickAccess } from './components/QuickAccess';
// // // import { Services } from './components/Services';
// // // import { News } from './components/News';
// // // import { VideoSection } from './components/VideoSection';
// // // import { Footer } from './components/Footer';
// // // import GradoPage from './pages/grado';

// // // function App() {
// // //   // Simple routing based on pathname
// // //   const pathname = window.location.pathname;

// // //   if (pathname === '/pages/grado') {
// // //     return (
// // //       <div className="min-h-screen flex flex-col">
// // //         <Topbar />
// // //         <Navbar />
// // //         <GradoPage />
// // //         <Footer />
// // //       </div>
// // //     );
// // //   }

// // //   // Default home page
// // //   return (
// // //     <div className="min-h-screen flex flex-col">
// // //       <Topbar />
// // //       <Navbar />
// // //       <main>
// // //         <Hero />
// // //         <QuickAccess />
// // //         <div className="bg-gray-100">
// // //           <div className="container mx-auto px-4 py-16">
// // //             <div className="flex flex-col lg:flex-row lg:gap-8">
// // //               <Services />
// // //               <News />
// // //             </div>
// // //           </div>
// // //         </div>
// // //         <VideoSection />
// // //       </main>
// // //       <Footer />
// // //     </div>
// // //   );
// // // }

// // // export default App;


// // import React from 'react';
// // import { Topbar } from './components/Topbar';
// // import { Navbar } from './components/Navbar';
// // import { Hero } from './components/Hero';
// // import { QuickAccess } from './components/QuickAccess';
// // import { Services } from './components/Services';
// // import { News } from './components/News';
// // import { VideoSection } from './components/VideoSection';
// // import { Footer } from './components/Footer';
// // import GradoPage from './pages/grado';
// // import PosgradoPage from './pages/posgrado';

// // function App() {
// //   // Simple routing based on pathname
// //   const pathname = window.location.pathname;

// //   // Shared Layout Components
// //   const Layout = ({ children }) => (
// //     <div className="min-h-screen flex flex-col">
// //       <Topbar />
// //       <Navbar />
// //       {children}
// //       <Footer />
// //     </div>
// //   );

// //   // Route handling
// //   switch (pathname) {
// //     case '/pages/grado':
// //       return (
// //         <Layout>
// //           <GradoPage />
// //         </Layout>
// //       );

// //     case '/pages/posgrado':
// //       return (
// //         <Layout>
// //           <PosgradoPage />
// //         </Layout>
// //       );

// //     default:
// //       return (
// //         <Layout>
// //           <main>
// //             <Hero />
// //             <QuickAccess />
// //             <div className="bg-gray-100">
// //               <div className="container mx-auto px-4 py-16">
// //                 <div className="flex flex-col lg:flex-row lg:gap-8">
// //                   <Services />
// //                   <News />
// //                 </div>
// //               </div>
// //             </div>
// //             <VideoSection />
// //           </main>
// //         </Layout>
// //       );
// //   }
// // }

// // export default App;


// import React from 'react';
// import { Topbar } from './components/Topbar';
// import { Navbar } from './components/Navbar';
// import { Hero } from './components/Hero';
// import { QuickAccess } from './components/QuickAccess';
// import { Services } from './components/Services';
// import { News } from './components/News';
// import { VideoSection } from './components/VideoSection';
// import { Footer } from './components/Footer';
// import GradoPage from './pages/grado';
// import PosgradoPage from './pages/posgrado';

// function App() {
//   // Simple routing based on pathname
//   const pathname = window.location.pathname;

//   // Shared Layout Components
//   const Layout = ({ children }) => (
//     <div className="min-h-screen flex flex-col">
//       <Topbar />
//       <Navbar />
//       {children}
//       <Footer />
//     </div>
//   );

//   // Routing logic
//   const renderPage = () => {
//     switch (pathname) {
//       case '/pages/grado':
//         return <GradoPage />;
      
//       case '/pages/posgrado':
//         return <PosgradoPage />;

        
      
//       default:
//         return (
//           <main>
//             <Hero />
//             <QuickAccess />
//             <div className="bg-gray-100">
//               <div className="container mx-auto px-4 py-16">
//                 <div className="flex flex-col lg:flex-row lg:gap-8">
//                   <Services />
//                   <News />
//                 </div>
//               </div>
//             </div>
//             <VideoSection />
//           </main>
//         );
//     }
//   };

//   return (
//     <Layout>
//       {renderPage()}
//     </Layout>
//   );
// }

// export default App;


import React from 'react';
import { Topbar } from './components/Topbar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickAccess } from './components/QuickAccess';
import { Services } from './components/Services';
import { News } from './components/News';
import { VideoSection } from './components/VideoSection';
import { Footer } from './components/Footer';
import GradoPage from './pages/grado';
import PosgradoPage from './pages/posgrado';
import AdmisionPage from './pages/admision'; // Nueva importación

function App() {
  const pathname = window.location.pathname;
  
  const Layout = ({ children }) => (
    <div className="min-h-screen flex flex-col">
      <Topbar />
      <Navbar />
      {children}
      <Footer />
    </div>
  );

  const renderPage = () => {
    switch (pathname) {
      case '/pages/grado':
        return <GradoPage />;
      case '/pages/posgrado':
        return <PosgradoPage />;
      case '/pages/admision':
        return <AdmisionPage />; // Nueva ruta
      default:
        return (
          <main>
            <Hero />
            <QuickAccess />
            <div className="bg-gray-100">
              <div className="container mx-auto px-4 py-16">
                <div className="flex flex-col lg:flex-row lg:gap-8">
                  <Services />
                  <News />
                </div>
              </div>
            </div>
            <VideoSection />
          </main>
        );
    }
  };

  return (
    <Layout>
      {renderPage()}
    </Layout>
  );
}

export default App;