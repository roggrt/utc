import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

const footerSections = {
  contact: {
    title: "Información de Contacto",
    items: [
      { icon: MapPin, text: "Av. Simón Rodríguez s/n, Latacunga, Ecuador" },
      { icon: Phone, text: "+593 3-280-1444" },
      { icon: Mail, text: "info@utc.edu.ec" }
    ]
  },
  quickLinks: {
    title: "Enlaces Rápidos",
    items: [
      { text: "Biblioteca Virtual", href: "#" },
      { text: "Sistema Académico", href: "#" },
      { text: "Bolsa de Empleo", href: "#" },
      { text: "Campus Virtual", href: "#" },
      { text: "Calendario Académico", href: "#" }
    ]
  },
  academic: {
    title: "Información Académica",
    items: [
      { text: "Oferta Académica", href: "#" },
      { text: "Investigación", href: "#" },
      { text: "Vinculación", href: "#" },
      { text: "Posgrados", href: "#" },
      { text: "Educación Continua", href: "#" }
    ]
  },
  social: {
    title: "Síguenos",
    items: [
      { icon: Facebook, href: "#", label: "Facebook" },
      { icon: Twitter, href: "#", label: "Twitter" },
      { icon: Instagram, href: "#", label: "Instagram" },
      { icon: Youtube, href: "#", label: "YouTube" },
      { icon: Linkedin, href: "#", label: "LinkedIn" }
    ]
  }
};

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{footerSections.contact.title}</h3>
            <ul className="space-y-3">
              {footerSections.contact.items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <item.icon className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{footerSections.quickLinks.title}</h3>
            <ul className="space-y-2">
              {footerSections.quickLinks.items.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="hover:text-gray-300 transition-colors duration-200">
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{footerSections.academic.title}</h3>
            <ul className="space-y-2">
              {footerSections.academic.items.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className="hover:text-gray-300 transition-colors duration-200">
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{footerSections.social.title}</h3>
            <div className="flex space-x-4">
              {footerSections.social.items.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="hover:text-gray-300 transition-colors duration-200"
                  aria-label={item.label}
                >
                  <item.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p>© 2025 Universidad Técnica de Cotopaxi. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}