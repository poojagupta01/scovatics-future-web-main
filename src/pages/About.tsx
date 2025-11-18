import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Award, Users, Clock, Shield, TrendingUp, Globe, Target, Star, Zap, Heart } from "lucide-react";

const About = () => {
  const { ref: missionRef, isVisible: missionVisible } = useScrollAnimation();
  const { ref: storyRef, isVisible: storyVisible } = useScrollAnimation();
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation();
  const { ref: teamRef, isVisible: teamVisible } = useScrollAnimation();
  const { ref: timelineRef, isVisible: timelineVisible } = useScrollAnimation();
  const { ref: certificationsRef, isVisible: certificationsVisible } = useScrollAnimation();

  const timeline = [
    { year: "2018", event: "Company Founded", description: "Started with a vision to democratize AI analytics" },
    { year: "2019", event: "Series A Funding", description: "Secured $5M to expand our platform capabilities" },
    { year: "2020", event: "Enterprise Launch", description: "Launched enterprise-grade solutions" },
    { year: "2021", event: "Global Expansion", description: "Expanded to European and Asian markets" },
    { year: "2022", event: "AI Ethics Framework", description: "Introduced industry-leading ethical AI guidelines" },
    { year: "2023", event: "Platform 2.0", description: "Launched next-generation analytics platform" },
  ];

  const certifications = [
    { name: "ISO 27001 Certified", issuer: "International Security" },
    { name: "SOC 2 Type II", issuer: "Data Protection Standard" },
    { name: "Forbes AI 50", issuer: "2023 Edition" },
    { name: "TechCrunch Disrupt", issuer: "Finalist 2022" },
  ];

  const teamStats = [
    { icon: Users, number: "50+", label: "Team Members", color: "from-blue-500 to-cyan-500" },
    { icon: Award, number: "15+", label: "Industries Served", color: "from-green-500 to-emerald-500" },
    { icon: Clock, number: "5+", label: "Years Experience", color: "from-purple-500 to-pink-500" },
    { icon: Shield, number: "100%", label: "Client Retention", color: "from-orange-500 to-red-500" },
  ];

  const values = [
    { icon: Zap, title: "Innovation", description: "Constantly pushing boundaries to deliver cutting-edge AI solutions", color: "from-purple-500 to-pink-500" },
    { icon: Shield, title: "Ethical AI", description: "Building trustworthy, transparent, and responsible AI systems", color: "from-green-500 to-teal-500" },
    { icon: Star, title: "Excellence", description: "Committed to delivering exceptional quality and measurable results", color: "from-blue-500 to-cyan-500" },
    { icon: Heart, title: "Partnership", description: "Working collaboratively with clients for shared success", color: "from-orange-500 to-red-500" },
  ];

  // Marquee data
  const marqueeItems = [
    "🚀 Ethical AI • 📊 Data Analytics • 🤖 Machine Learning • 💼 Business Intelligence •",
    "🔮 Predictive Modeling • ☁️ Cloud Solutions • 🛡️ Data Security • ⚡ Real-time Insights •"
  ];

  return (
    <>
      <Hero
        title="About Scovatics"
        subtitle="Pioneering ethical AI and data analytics for a smarter tomorrow"
        showImage={false}
      />

      {/* Animated Marquee */}
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 py-4 border-y border-blue-200 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          <span className="mx-6 text-base font-semibold text-blue-700">{marqueeItems[0]}</span>
          <span className="mx-6 text-base font-semibold text-blue-700">{marqueeItems[1]}</span>
        </div>
      </div>

      <Section className="bg-white">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Mission & Vision */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              ref={missionRef}
              className={`transition-all duration-700 ${
                missionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Our Mission & Vision
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  At <span className="font-semibold text-blue-600">Scovatics</span>, we believe in the transformative power of data. Our mission is to democratize advanced analytics, making AI-powered insights accessible and actionable for organizations of all sizes.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We envision a future where every decision is empowered by <span className="font-semibold text-purple-600">ethical, transparent, and reliable artificial intelligence</span>—driving innovation while maintaining the highest standards of data privacy and security.
                </p>
                <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 rounded-r-xl mt-6 shadow-sm">
                  <p className="text-lg text-gray-800 italic font-medium">
                    "Ethical AI isn't just a feature—it's the foundation of everything we build."
                  </p>
                </div>
              </div>
            </div>
            
            {/* Team Stats */}
            <div className="grid grid-cols-2 gap-6">
              {teamStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`p-6 bg-gradient-to-br ${stat.color} rounded-2xl text-center text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
                >
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                    <stat.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-2xl font-bold mb-1">{stat.number}</div>
                  <div className="text-sm text-white/90 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Our Story */}
          <div
            ref={storyRef}
            className={`transition-all duration-700 ${
              storyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                Our Journey
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
                From visionary beginnings to industry leadership—our story of innovation and impact
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-3xl p-8 shadow-sm border border-green-100">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <Target className="w-10 h-10 text-green-600 mx-auto mb-4" />
                  <h3 className="font-bold text-gray-800 mb-3 text-lg">Our Vision</h3>
                  <p className="text-gray-600 text-sm">Making AI accessible to all businesses worldwide</p>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <TrendingUp className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-bold text-gray-800 mb-3 text-lg">Our Growth</h3>
                  <p className="text-gray-600 text-sm">Serving 15+ industries across the globe</p>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <Globe className="w-10 h-10 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-bold text-gray-800 mb-3 text-lg">Our Reach</h3>
                  <p className="text-gray-600 text-sm">Trusted by enterprises in 20+ countries</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Founded by data scientists and industry veterans, <span className="font-semibold text-green-600">Scovatics</span> emerged from a shared vision: to bridge the gap between complex data science and practical business applications. What started as a small team of passionate innovators has grown into a leading analytics platform trusted by enterprises worldwide.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Today, we serve clients across <span className="font-semibold text-blue-600">healthcare, finance, retail, and manufacturing</span>, helping them navigate the complexities of big data and AI with confidence, transparency, and measurable results.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div
            ref={timelineRef}
            className={`transition-all duration-700 ${
              timelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Our Timeline
            </h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full shadow-lg"></div>
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div
                    key={item.year}
                    className={`flex items-center ${
                      index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    }`}
                  >
                    <div className="w-1/2 pr-8 pl-8">
                      <div className={`p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 ${
                        index % 2 === 0 
                          ? 'text-right border-l-blue-500 hover:border-l-blue-600' 
                          : 'text-left border-l-green-500 hover:border-l-green-600'
                      }`}>
                        <div className="text-sm font-bold text-purple-600 mb-2">{item.year}</div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">{item.event}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-white z-10 shadow-xl flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div className="w-1/2 pl-8 pr-8">
                      {/* Empty space for alternating layout */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Values */}
          <div
            ref={valuesRef}
            className={`transition-all duration-700 ${
              valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Our Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div 
                  key={value.title}
                  className="group cursor-pointer"
                >
                  <div className={`p-8 bg-gradient-to-br ${value.color} rounded-2xl text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl h-full`}>
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm group-hover:bg-white/30 transition-colors">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-center">{value.title}</h3>
                    <p className="text-white/90 text-sm text-center leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Press */}
          <div
            ref={certificationsRef}
            className={`transition-all duration-700 ${
              certificationsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Certifications & Recognition
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl text-center hover:shadow-lg transition-all duration-300 border border-cyan-200 hover:border-cyan-300 group"
                >
                  <div className="text-lg font-bold text-cyan-700 mb-2 group-hover:text-cyan-800 transition-colors">
                    {cert.name}
                  </div>
                  <div className="text-sm text-cyan-600 font-medium">
                    {cert.issuer}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center p-12 bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-bold mb-8 text-gray-800">
                Featured In
              </h3>
              <div className="flex flex-wrap justify-center items-center gap-12">
                {["Forbes", "TechCrunch", "Wired", "AI Business", "Bloomberg", "Business Insider"].map((publication) => (
                  <div 
                    key={publication}
                    className="text-xl font-bold text-gray-700 hover:text-blue-600 transition-colors duration-300 cursor-pointer hover:scale-110 transform"
                  >
                    {publication}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Add this to your global CSS or Tailwind config */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
          display: inline-block;
        }
      `}</style>
    </>
  );
};

export default About;