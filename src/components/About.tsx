import { Target, Eye, Award, Users, TreePine, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import conservationIcon from "@/assets/conservation-icon.jpg";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Integritas",
      description: "Berkomitmen pada transparansi dan akuntabilitas dalam setiap pelayanan"
    },
    {
      icon: TreePine,
      title: "Berkelanjutan",
      description: "Mengelola hutan dengan prinsip keberlanjutan untuk generasi mendatang"
    },
    {
      icon: Users,
      title: "Kolaboratif",
      description: "Bekerja sama dengan semua pihak untuk mencapai tujuan bersama"
    },
    {
      icon: Award,
      title: "Profesional",
      description: "Memberikan pelayanan terbaik dengan standar profesional tertinggi"
    }
  ];

  const achievements = [
    { number: "2.5M", label: "Hektar Hutan Terlindungi", icon: TreePine },
    { number: "150+", label: "Program Konservasi", icon: Shield },
    { number: "50K+", label: "Masyarakat Terberdayakan", icon: Users },
    { number: "25+", label: "Penghargaan Diterima", icon: Award }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Tentang Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dinas Kehutanan Provinsi Kalimantan Timur adalah institusi pemerintah yang bertanggung jawab 
            dalam pengelolaan dan pelestarian hutan di Kalimantan Timur.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-fade-in">
            <img 
              src={conservationIcon} 
              alt="Conservation" 
              className="w-full h-80 object-cover rounded-2xl shadow-card"
            />
          </div>
          
          <div className="space-y-8 animate-slide-up">
            {/* Vision */}
            <Card className="border-l-4 border-l-forest-primary shadow-soft">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Eye className="h-6 w-6 text-forest-primary" />
                  <CardTitle className="text-xl text-foreground">Visi</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  "Terwujudnya pengelolaan hutan yang berkelanjutan, lestari, dan memberikan manfaat 
                  sebesar-besarnya bagi kesejahteraan masyarakat Kalimantan Timur."
                </p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="border-l-4 border-l-nature shadow-soft">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Target className="h-6 w-6 text-nature" />
                  <CardTitle className="text-xl text-foreground">Misi</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-nature rounded-full mt-2 flex-shrink-0" />
                    <span>Melaksanakan pengelolaan hutan yang berkelanjutan dan berbasis pada kearifan lokal</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-nature rounded-full mt-2 flex-shrink-0" />
                    <span>Memberikan pelayanan publik yang prima dalam bidang kehutanan</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-nature rounded-full mt-2 flex-shrink-0" />
                    <span>Memberdayakan masyarakat dalam pengelolaan hutan berkelanjutan</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-nature rounded-full mt-2 flex-shrink-0" />
                    <span>Mengembangkan sistem monitoring dan evaluasi hutan yang efektif</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Nilai-Nilai Kami
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={value.title} className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="bg-gradient-forest p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-gradient-card rounded-2xl p-8 shadow-card">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Pencapaian Kami
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={achievement.label} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <achievement.icon className="h-8 w-8 text-forest-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-foreground mb-1">{achievement.number}</div>
                <div className="text-sm text-muted-foreground">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;