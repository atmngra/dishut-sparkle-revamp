import { ArrowRight, Shield, TreePine, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-forest.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Menjaga Hutan
            <span className="block text-accent">Kalimantan Timur</span>
          </h1>
          
          <p className="text-lg sm:text-xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Dinas Kehutanan Provinsi Kalimantan Timur berkomitmen dalam pelestarian, 
            pengelolaan berkelanjutan, dan perlindungan hutan untuk generasi mendatang.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="xl" className="group">
              Layanan Publik
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="xl" className="border-white/30 text-white hover:bg-white/10 hover:border-white">
              Pelajari Lebih Lanjut
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-card animate-slide-up">
              <TreePine className="h-10 w-10 text-accent mx-auto mb-3" />
              <div className="text-2xl font-bold mb-1">2.5M</div>
              <div className="text-sm text-white/80">Hektar Hutan Dilindungi</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-card animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <Shield className="h-10 w-10 text-accent mx-auto mb-3" />
              <div className="text-2xl font-bold mb-1">150+</div>
              <div className="text-sm text-white/80">Program Konservasi</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-card animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Users className="h-10 w-10 text-accent mx-auto mb-3" />
              <div className="text-2xl font-bold mb-1">50K+</div>
              <div className="text-sm text-white/80">Masyarakat Terlibat</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;