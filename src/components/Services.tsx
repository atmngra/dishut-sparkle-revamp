import { FileText, Shield, TreePine, Users, Clock, Award, Map, Clipboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import servicesIcon from "@/assets/services-icon.jpg";

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: "Perizinan Kehutanan",
      description: "Pengurusan izin usaha pemanfaatan hutan, izin pemungutan hasil hutan, dan perizinan lainnya.",
      features: ["Izin HPH", "Izin IUPHHK", "Izin HKm", "Izin HKR"]
    },
    {
      icon: TreePine,
      title: "Sertifikasi Kayu",
      description: "Layanan sertifikasi legalitas kayu dan produk kehutanan lainnya sesuai standar nasional.",
      features: ["SVLK", "Sertifikat Asal", "V-Legal", "PHPL"]
    },
    {
      icon: Shield,
      title: "Perlindungan Hutan",
      description: "Program pengawasan, patroli, dan perlindungan kawasan hutan dari kerusakan dan perambahan.",
      features: ["Patroli Rutin", "Monitoring", "Penegakan Hukum", "Rehabilitasi"]
    },
    {
      icon: Users,
      title: "Pemberdayaan Masyarakat",
      description: "Program pemberdayaan masyarakat sekitar hutan dalam pengelolaan hutan berkelanjutan.",
      features: ["Pelatihan", "Pendampingan", "Modal Usaha", "Kelompok Tani"]
    },
    {
      icon: Map,
      title: "Pemetaan Kawasan",
      description: "Layanan pemetaan dan inventarisasi kawasan hutan untuk perencanaan pengelolaan.",
      features: ["Pemetaan Digital", "GIS", "Inventarisasi", "Monitoring"]
    },
    {
      icon: Clipboard,
      title: "Pelaporan Online",
      description: "Sistem pelaporan online untuk memudahkan pelaporan kegiatan kehutanan.",
      features: ["SIMONEV", "E-Reporting", "Dashboard", "Analytics"]
    }
  ];

  const quickServices = [
    { name: "Cek Status Perizinan", time: "Real-time", icon: Clock },
    { name: "Download Formulir", time: "Instant", icon: FileText },
    { name: "Konsultasi Online", time: "24/7", icon: Users },
    { name: "Lapor Masalah", time: "Fast Response", icon: Shield }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Layanan Publik
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kami menyediakan berbagai layanan kehutanan yang mudah, cepat, dan transparan
            untuk mendukung pengelolaan hutan berkelanjutan.
          </p>
        </div>

        {/* Quick Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {quickServices.map((service, index) => (
            <Card key={service.name} className="hover:shadow-card transition-all duration-300 hover:-translate-y-1 cursor-pointer border-forest-primary/10 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6 text-center">
                <service.icon className="h-8 w-8 text-forest-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-1">{service.name}</h3>
                <p className="text-sm text-accent font-medium">{service.time}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={service.title} className="h-full hover:shadow-card transition-all duration-300 hover:-translate-y-2 group animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-gradient-forest p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-foreground">{service.title}</CardTitle>
                  </div>
                </div>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-forest-primary rounded-full" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button variant="service" className="w-full group">
                  Akses Layanan
                  <Award className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-card rounded-2xl p-8 shadow-card">
          <div className="flex justify-center mb-6">
            <img 
              src={servicesIcon} 
              alt="Services" 
              className="w-16 h-16 rounded-lg object-cover"
            />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Butuh Bantuan Layanan Lainnya?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Tim customer service kami siap membantu Anda dalam mengurus berbagai keperluan
            administrasi dan perizinan kehutanan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Hubungi Customer Service
            </Button>
            <Button variant="outline" size="lg">
              Panduan Lengkap
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;