// // import React, { useState } from 'react';
// // import { Menu, X, ChevronDown } from 'lucide-react';
// // import { cn } from '../lib/utils';

// // const navItems = [
// //   { 
// //     label: 'Inicio',
// //     href: '#'
// //   },
// //   {
// //     label: 'UTC',
// //     href: '#',
// //     children: [
// //       { label: 'Historia', href: '#' },
// //       { label: 'Misión y Visión', href: '#' },
// //       { label: 'Autoridades', href: '#' }
// //     ]
// //   },
// //   {
// //     label: 'GRADO',
// //     href: '#',
// //     children: [
// //       { label: 'Facultades', href: '#' },
// //       { label: 'Carreras', href: '#' },
// //       { label: 'Admisión', href: '#' }
// //     ]
// //   },
// //   {
// //     label: 'POSGRADO',
// //     href: '#',
// //     children: [
// //       { label: 'Maestrías', href: '#' },
// //       { label: 'Doctorados', href: '#' },
// //       { label: 'Investigación', href: '#' }
// //     ]
// //   },
// //   {
// //     label: 'INVESTIGACIÓN',
// //     href: '#',
// //     children: [
// //       { label: 'Proyectos', href: '#' },
// //       { label: 'Publicaciones', href: '#' },
// //       { label: 'Grupos de Investigación', href: '#' }
// //     ]
// //   },
// //   {
// //     label: 'APLICACIONES',
// //     href: '#',
// //     children: [
// //       { label: 'Sistema Académico', href: '#' },
// //       { label: 'Biblioteca Virtual', href: '#' },
// //       { label: 'Campus Virtual', href: '#' }
// //     ]
// //   }
// // ];

// // export function Navbar() {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

// //   return (
// //     <nav className="bg-black text-white sticky top-0 z-50">
// //       <div className="container mx-auto px-4">
// //         <div className="flex justify-between h-14">
// //           <div className="hidden md:flex items-center space-x-1">
// //             {navItems.map((item) => (
// //               <div
// //                 key={item.label}
// //                 className="relative group"
// //                 onMouseEnter={() => setActiveDropdown(item.label)}
// //                 onMouseLeave={() => setActiveDropdown(null)}
// //               >
// //                 <a
// //                   href={item.href}
// //                   className={cn(
// //                     "px-4 py-4 flex items-center text-sm font-medium",
// //                     "hover:text-secondary transition-colors duration-200",
// //                     "border-b-2 border-transparent hover:border-secondary"
// //                   )}
// //                 >
// //                   {item.label}
// //                   {item.children && (
// //                     <ChevronDown className="ml-1 h-4 w-4 group-hover:text-secondary" />
// //                   )}
// //                 </a>
                
// //                 {item.children && activeDropdown === item.label && (
// //                   <div className="absolute left-0 mt-0 w-48 bg-black shadow-lg">
// //                     <div className="py-1" role="menu">
// //                       {item.children.map((child) => (
// //                         <a
// //                           key={child.label}
// //                           href={child.href}
// //                           className="block px-4 py-2 text-sm hover:bg-secondary/10 hover:text-secondary transition-colors duration-200"
// //                           role="menuitem"
// //                         >
// //                           {child.label}
// //                         </a>
// //                       ))}
// //                     </div>
// //                   </div>
// //                 )}
// //               </div>
// //             ))}
// //           </div>

// //           <div className="md:hidden flex items-center">
// //             <button
// //               onClick={() => setIsOpen(!isOpen)}
// //               className="p-2 hover:bg-secondary/10 rounded-md"
// //             >
// //               {isOpen ? (
// //                 <X className="h-6 w-6" />
// //               ) : (
// //                 <Menu className="h-6 w-6" />
// //               )}
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Mobile menu */}
// //       <div className={cn("md:hidden", isOpen ? "block" : "hidden")}>
// //         <div className="px-2 pt-2 pb-3 space-y-1">
// //           {navItems.map((item) => (
// //             <div key={item.label}>
// //               <a
// //                 href={item.href}
// //                 className="block px-3 py-2 text-base font-medium hover:bg-secondary/10 hover:text-secondary rounded-md"
// //               >
// //                 {item.label}
// //               </a>
// //               {item.children && (
// //                 <div className="pl-4">
// //                   {item.children.map((child) => (
// //                     <a
// //                       key={child.label}
// //                       href={child.href}
// //                       className="block px-3 py-2 text-sm text-gray-300 hover:bg-secondary/10 hover:text-secondary rounded-md"
// //                     >
// //                       {child.label}
// //                     </a>
// //                   ))}
// //                 </div>
// //               )}
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // }


// import React, { useState } from 'react';
// import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
// import { cn } from '../lib/utils';

// const navItems = [
//   { 
//     label: 'Inicio',
//     href: '#'
//   },
//   {
//     label: 'UTC',
//     href: '#',
//     children: [
//       { label: 'Historia', href: '#' },
//       { label: 'Misión y Visión', href: '#' },
//       { label: 'Autoridades', href: '#' }
//     ]
//   },
//   {
//     label: 'GRADO',
//     href: '#',
//     children: [
//       { label: 'Facultades', href: '#' },
//       { label: 'Carreras', href: '#' },
//       { label: 'Admisión', href: '#' }
//     ]
//   },
//   {
//     label: 'POSGRADO',
//     href: '#',
//     children: [
//       { label: 'Maestrías', href: '#' },
//       { label: 'Doctorados', href: '#' },
//       { label: 'Investigación', href: '#' }
//     ]
//   },
//   {
//     label: 'INVESTIGACIÓN',
//     href: '#',
//     children: [
//       { label: 'Proyectos', href: '#' },
//       { label: 'Publicaciones', href: '#' },
//       { label: 'Grupos de Investigación', href: '#' }
//     ]
//   },
//   {
//     label: 'APLICACIONES',
//     href: '#',
//     children: [
//       { label: 'Sistema Académico', href: '#' },
//       { label: 'Biblioteca Virtual', href: '#' },
//       { label: 'Campus Virtual', href: '#' }
//     ]
//   }
// ];

// export function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
//   const [expandedMobileItems, setExpandedMobileItems] = useState<string[]>([]);

//   // Toggle mobile submenu
//   const toggleMobileSubmenu = (label: string) => {
//     setExpandedMobileItems(prev => 
//       prev.includes(label) 
//         ? prev.filter(item => item !== label)
//         : [...prev, label]
//     );
//   };

//   // Handle overlay click
//   const handleOverlayClick = (e: React.MouseEvent) => {
//     if (e.target === e.currentTarget) {
//       setIsOpen(false);
//     }
//   };

//   return (
//     <nav className="bg-black text-white sticky top-0 z-50">
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between h-14">
//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-1">
//             {navItems.map((item) => (
//               <div
//                 key={item.label}
//                 className="relative group"
//                 onMouseEnter={() => setActiveDropdown(item.label)}
//                 onMouseLeave={() => setActiveDropdown(null)}
//               >
//                 <a
//                   href={item.href}
//                   className={cn(
//                     "px-4 py-4 flex items-center text-sm font-medium",
//                     "hover:text-secondary transition-colors duration-200",
//                     "border-b-2 border-transparent hover:border-secondary"
//                   )}
//                 >
//                   {item.label}
//                   {item.children && (
//                     <ChevronDown className="ml-1 h-4 w-4 group-hover:text-secondary" />
//                   )}
//                 </a>
                
//                 {item.children && activeDropdown === item.label && (
//                   <div className="absolute left-0 mt-0 w-48 bg-black shadow-lg">
//                     <div className="py-1" role="menu">
//                       {item.children.map((child) => (
//                         <a
//                           key={child.label}
//                           href={child.href}
//                           className="block px-4 py-2 text-sm hover:bg-secondary/10 hover:text-secondary transition-colors duration-200"
//                           role="menuitem"
//                         >
//                           {child.label}
//                         </a>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="p-2 hover:bg-secondary/10 rounded-md"
//               aria-label="Toggle menu"
//             >
//               {isOpen ? (
//                 <X className="h-6 w-6" />
//               ) : (
//                 <Menu className="h-6 w-6" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu Overlay */}
//       {isOpen && (
//         <div 
//           className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-50"
//           onClick={handleOverlayClick}
//         >
//           {/* Mobile Sidebar */}
//           <div className="fixed inset-y-0 left-0 w-64 bg-black shadow-lg transform transition-transform duration-300 ease-in-out">
//             <div className="flex justify-end p-4">
//               <button
//                 onClick={() => setIsOpen(false)}
//                 className="p-2 hover:bg-secondary/10 rounded-md"
//               >
//                 <X className="h-6 w-6" />
//               </button>
//             </div>
//             <div className="px-2 py-3 space-y-1">
//               {navItems.map((item) => (
//                 <div key={item.label} className="space-y-1">
//                   <div className="flex items-center justify-between">
//                     <a
//                       href={item.href}
//                       className="block px-3 py-2 text-base font-medium hover:bg-secondary/10 hover:text-secondary rounded-md"
//                       onClick={(e) => {
//                         if (item.children) {
//                           e.preventDefault();
//                           toggleMobileSubmenu(item.label);
//                         }
//                       }}
//                     >
//                       {item.label}
//                     </a>
//                     {item.children && (
//                       <button
//                         onClick={() => toggleMobileSubmenu(item.label)}
//                         className="px-3 py-2 hover:bg-secondary/10 rounded-md"
//                       >
//                         <ChevronRight
//                           className={cn(
//                             "h-4 w-4 transition-transform duration-200",
//                             expandedMobileItems.includes(item.label) ? "rotate-90" : ""
//                           )}
//                         />
//                       </button>
//                     )}
//                   </div>
//                   {item.children && expandedMobileItems.includes(item.label) && (
//                     <div className="pl-4 space-y-1">
//                       {item.children.map((child) => (
//                         <a
//                           key={child.label}
//                           href={child.href}
//                           className="block px-3 py-2 text-sm text-gray-300 hover:bg-secondary/10 hover:text-secondary rounded-md"
//                         >
//                           {child.label}
//                         </a>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;


import React, { useState } from 'react';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

const navItems = [
  { 
    label: 'Inicio',
    href: '#'
  },
  {
    label: 'UTC',
    href: '#',
    children: [
      { label: 'Historia', href: '#' },
      { label: 'Misión y Visión', href: '#' },
      { label: 'Autoridades', href: '#' }
    ]
  },
  {
    label: 'GRADO',
    href: '#',
    children: [
      { label: 'Facultades', href: '#' },
      { label: 'Carreras', href: '#' },
      { label: 'Admisión', href: '#' }
    ]
  },
  {
    label: 'POSGRADO',
    href: '#',
    children: [
      { label: 'Maestrías', href: '#' },
      { label: 'Doctorados', href: '#' },
      { label: 'Investigación', href: '#' }
    ]
  },
  {
    label: 'INVESTIGACIÓN',
    href: '#',
    children: [
      { label: 'Proyectos', href: '#' },
      { label: 'Publicaciones', href: '#' },
      { label: 'Grupos de Investigación', href: '#' }
    ]
  },
  {
    label: 'APLICACIONES',
    href: '#',
    children: [
      { label: 'Sistema Académico', href: '#' },
      { label: 'Biblioteca Virtual', href: '#' },
      { label: 'Campus Virtual', href: '#' }
    ]
  }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [expandedMobileItems, setExpandedMobileItems] = useState<string[]>([]);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [activeChild, setActiveChild] = useState<string | null>(null);

  const toggleMobileSubmenu = (label: string) => {
    setExpandedMobileItems(prev => 
      prev.includes(label) 
        ? prev.filter(item => item !== label)
        : [...prev, label]
    );
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setIsOpen(false);
    }
  };

  const handleItemClick = (label: string) => {
    setActiveItem(label);
    setActiveChild(null);
  };

  const handleChildClick = (parentLabel: string, childLabel: string) => {
    setActiveItem(parentLabel);
    setActiveChild(childLabel);
  };

  return (
    <nav className="bg-black text-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-14">
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  onClick={() => handleItemClick(item.label)}
                  className={cn(
                    "px-4 py-4 flex items-center text-sm font-medium",
                    "hover:text-secondary transition-colors duration-200",
                    "border-b-2 border-transparent hover:border-secondary",
                    activeItem === item.label && "text-secondary border-secondary"
                  )}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className={cn(
                      "ml-1 h-4 w-4 group-hover:text-secondary",
                      activeItem === item.label && "text-secondary"
                    )} />
                  )}
                </a>
                
                {item.children && activeDropdown === item.label && (
                  <div className="absolute left-0 mt-0 w-48 bg-black shadow-lg">
                    <div className="py-1" role="menu">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          onClick={() => handleChildClick(item.label, child.label)}
                          className={cn(
                            "block px-4 py-2 text-sm hover:bg-secondary/10 hover:text-secondary transition-colors duration-200",
                            activeChild === child.label && "text-secondary bg-secondary/10"
                          )}
                          role="menuitem"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:bg-secondary/10 rounded-md"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-50"
          onClick={handleOverlayClick}
        >
          {/* Mobile Sidebar */}
          <div className="fixed inset-y-0 left-0 w-64 bg-black shadow-lg transform transition-transform duration-300 ease-in-out">
            <div className="flex justify-end p-4">
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-secondary/10 rounded-md"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="px-2 py-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.label} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <a
                      href={item.href}
                      className={cn(
                        "block px-3 py-2 text-base font-medium rounded-md",
                        "hover:bg-secondary/10 hover:text-secondary",
                        activeItem === item.label && "text-secondary bg-secondary/10"
                      )}
                      onClick={(e) => {
                        if (item.children) {
                          e.preventDefault();
                          toggleMobileSubmenu(item.label);
                        }
                        handleItemClick(item.label);
                      }}
                    >
                      {item.label}
                    </a>
                    {item.children && (
                      <button
                        onClick={() => toggleMobileSubmenu(item.label)}
                        className={cn(
                          "px-3 py-2 hover:bg-secondary/10 rounded-md",
                          activeItem === item.label && "text-secondary"
                        )}
                      >
                        <ChevronRight
                          className={cn(
                            "h-4 w-4 transition-transform duration-200",
                            expandedMobileItems.includes(item.label) ? "rotate-90" : "",
                            activeItem === item.label && "text-secondary"
                          )}
                        />
                      </button>
                    )}
                  </div>
                  {item.children && expandedMobileItems.includes(item.label) && (
                    <div className="pl-4 space-y-1">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className={cn(
                            "block px-3 py-2 text-sm text-gray-300 rounded-md",
                            "hover:bg-secondary/10 hover:text-secondary",
                            activeChild === child.label && "text-secondary bg-secondary/10"
                          )}
                          onClick={() => handleChildClick(item.label, child.label)}
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar