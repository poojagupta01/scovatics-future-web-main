import Hero from "@/components/Hero";
import Section from "@/components/Section";
import FeatureCard from "@/components/FeatureCard";
import { Brain, TrendingUp, Shield, Zap, Database, LineChart, ArrowRight, Play, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import heroImage from "@/assets/hero-wireframe.jpg";

const Home = () => {
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation({ threshold: 0.3 });

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Leverage cutting-edge artificial intelligence to uncover hidden patterns in your data."
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Forecast trends and make data-driven decisions with advanced predictive modeling."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption and compliance ensuring your data remains protected."
    },
    {
      icon: Zap,
      title: "Real-Time Processing",
      description: "Process and analyze massive datasets in real-time for instant insights."
    },
    {
      icon: Database,
      title: "Data Integration",
      description: "Seamlessly integrate with existing systems and data sources."
    },
    {
      icon: LineChart,
      title: "Custom Dashboards",
      description: "Visualize your data with beautiful, customizable analytics dashboards."
    }
  ];

  const sectors = [
    { name: "Healthcare", description: "Patient analytics & operational efficiency" },
    { name: "Finance", description: "Risk analysis & fraud detection" },
    { name: "Retail", description: "Customer behavior & inventory optimization" },
    { name: "Manufacturing", description: "Predictive maintenance & supply chain" }
  ];

  const caseStudies = [
    {
      company: "Global Finance Corp",
      result: "47% increase in fraud detection",
      industry: "Financial Services"
    },
    {
      company: "MedTech Solutions",
      result: "32% reduction in operational costs",
      industry: "Healthcare"
    },
    {
      company: "Retail Giant Inc",
      result: "28% boost in customer retention",
      industry: "E-commerce"
    }
  ];

  const processSteps = [
    { step: "01", title: "Discovery", description: "Deep dive into your business needs" },
    { step: "02", title: "Strategy", description: "Custom analytics roadmap development" },
    { step: "03", title: "Implementation", description: "Seamless integration & deployment" },
    { step: "04", title: "Optimization", description: "Continuous improvement & support" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Enhanced Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Main background image with light overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
          }}
        />
        
        {/* Light overlay for better text readability */}
        <div className="absolute inset-0 bg-white/80 backdrop-blur-[1px]" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(248,250,252,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(248,250,252,0.8)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
        
        {/* Professional gradient orbs */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-teal-200/40 to-blue-200/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-200/40 to-indigo-200/40 rounded-full blur-3xl" />
        
        {/* Subtle geometric shapes */}
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-teal-400/30 rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-blue-400/30 rounded-full animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-indigo-400/20 rounded-full animate-pulse delay-500" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-blue-50/90 to-indigo-50/90 backdrop-blur-[1px]" />
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2065&q=80"
            alt="Data Analytics Visualization"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <div className="relative">
              
              <div className="absolute -inset-2 bg-gradient-to-r from-teal-500/20 to-blue-600/20 rounded-2xl blur-xl" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
            Transform Data
            <span className="block bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              Into Intelligence
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-700 mb-8 max-w-4xl mx-auto leading-relaxed">
            Enterprise-grade AI and advanced analytics solutions to drive strategic decision-making 
            and accelerate business growth in the digital economy.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 px-8 py-3 text-lg font-semibold text-white shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 transition-all duration-300 group" asChild>
              <Link to="/services">
                Explore Solutions
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg border-slate-300 text-slate-700 hover:bg-white/50 hover:border-slate-400 transition-all duration-300 bg-white/80">
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Trusted By */}
          <div className="border-t border-slate-300 pt-8">
            <p className="text-slate-600 mb-6 text-sm uppercase tracking-wider font-medium">Trusted by Industry Leaders</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              {["TechCorp", "InnovateCo", "DataSystems", "FutureLabs", "SmartSolutions"].map((company) => (
                <div key={company} className="text-slate-700 font-semibold text-lg hover:text-teal-600 transition-colors cursor-default">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Served */}
      <Section className="relative bg-white/80 backdrop-blur-sm border-y border-slate-300/50">
        {/* Section Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80")',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-white/70" />
        </div>
        
        <div className="relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Sectors We Serve
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Delivering tailored analytics solutions across diverse industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((sector, index) => (
              <div 
                key={sector.name}
                className="group p-6 rounded-xl bg-white/60 border border-slate-300 hover:border-teal-500/50 transition-all duration-300 hover:transform hover:-translate-y-1 backdrop-blur-sm shadow-sm hover:shadow-md"
              >
                <div className="text-3xl font-bold text-teal-400/40 group-hover:text-teal-400/50 transition-colors mb-4">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{sector.name}</h3>
                <p className="text-slate-600">{sector.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Features Section */}
      <Section className="relative bg-slate-50/80">
        {/* Section Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 to-slate-50/60" />
        </div>

        <div className="relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Why Choose Scovatics
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver solutions that matter.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} delay={index * 100} />
            ))}
          </div>
        </div>
      </Section>

      {/* Case Studies Preview */}
      <Section className="relative bg-white/80 backdrop-blur-sm border-y border-slate-300/50">
        {/* Section Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80")',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-white/70" />
        </div>

        <div className="relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Success Stories
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              See how we've helped businesses transform their operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <div 
                key={study.company}
                className="group p-6 rounded-xl bg-white/60 border border-slate-300 hover:border-teal-500/50 transition-all duration-500 hover:transform hover:-translate-y-1 backdrop-blur-sm shadow-sm hover:shadow-md"
              >
                <div className="text-4xl font-bold text-teal-400/40 mb-4">0{index + 1}</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{study.company}</h3>
                <p className="text-teal-600 font-semibold text-lg mb-2">{study.result}</p>
                <p className="text-slate-600 mb-4">{study.industry}</p>
                <Button variant="ghost" className="text-slate-600 hover:text-teal-600 p-0 group/btn transition-colors" asChild>
                  <Link to="/case-studies">
                    Read Case Study
                    <ChevronRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <Section className="relative bg-slate-50/80">
        {/* Section Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 to-slate-50/60" />
        </div>

        <div className="relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Our Process
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A structured approach to delivering exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={step.step} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-teal-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-teal-500/30 group-hover:shadow-teal-500/40 transition-all duration-300">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-teal-500/30 to-blue-500/30 group-hover:from-teal-500/50 group-hover:to-blue-500/50 transition-opacity" />
                  )}
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="relative bg-gradient-to-r from-teal-500/30 via-blue-500/30 to-indigo-500/30 backdrop-blur-sm border-y border-teal-500/50">
        {/* Section Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 via-blue-500/20 to-indigo-500/20" />
        </div>

        <div className="relative z-10">
          <div
            ref={ctaRef}
            className={`max-w-4xl mx-auto text-center transition-all duration-700 ${
              ctaVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-700 mb-8 max-w-2xl mx-auto">
              Join industry leaders who trust Scovatics for their data analytics needs. 
              Let's build the future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 px-8 py-3 text-lg font-semibold text-white shadow-lg shadow-teal-500/30 hover:shadow-teal-500/50 transition-all duration-300" asChild>
                <Link to="/contact">Get Started Today</Link>
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3 text-lg border-slate-300 text-slate-700 hover:bg-white/50 hover:border-slate-400 transition-all duration-300 bg-white/80">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Home;