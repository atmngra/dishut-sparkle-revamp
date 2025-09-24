import { Trees, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Beranda", href: "#home" },
    { name: "Layanan", href: "#services" },
    { name: "Program", href: "#programs" },
    { name: "Tentang Kami", href: "#about" },
    { name: "Kontak", href: "#contact" }
  ];

  const services = [
    { name: "Perizinan Kehutanan", href: "#" },
    { name: "Sertifikasi Kayu", href: "#" },
    { name: "Perlindungan Hutan", href: "#" },
    { name: "Pemberdayaan Masyarakat", href: "#" }
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "YouTube", icon: Youtube, href: "#" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-white/10 p-2 rounded-lg">
                <Trees className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Dishut Kaltara</h3>
                <p className="text-sm opacity-80">Dinas Kehutanan</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed mb-4">
              Melindungi dan mengelola hutan Kalimantan Timur untuk masa depan yang berkelanjutan.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigasi</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Layanan</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a 
                    href={service.href} 
                    className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Kontak</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0 opacity-80" />
                <span className="text-sm opacity-80">
                  Jl. Kesuma Bangsa No. 2<br />
                  Samarinda, Kalimantan Timur<br />
                  75124
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 opacity-80" />
                <span className="text-sm opacity-80">(0541) 732237</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 opacity-80" />
                <span className="text-sm opacity-80">info@dishut.kaltaraprov.go.id</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm opacity-80 mb-4 sm:mb-0">
            © 2024 Dinas Kehutanan Provinsi Kalimantan Timur. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
              Privasi
            </a>
            <a href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
              Syarat & Ketentuan
            </a>
            <a href="#" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;