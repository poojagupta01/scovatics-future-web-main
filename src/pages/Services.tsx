import Hero from "@/components/Hero";
import Section from "@/components/Section";
import FeatureCard from "@/components/FeatureCard";
import { 
  Brain, 
  BarChart3, 
  Target, 
  Cpu, 
  Database, 
  Cloud, 
  Eye,
  HeartPulse,
  Shield,
  GitBranch,
  ArrowRight,
  CheckCircle,
  Play,
  Zap,
  LineChart,
  Workflow,
  Factory,
  Stethoscope,
  Scale,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Services = () => {
  const { ref: approachRef, isVisible: approachVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  const services = [
    {
      icon: Brain,
      title: "AI Strategy",
      description: "Custom AI roadmaps and implementation plans that align with your business goals.",
      features: ["AI Roadmap", "Use Case Analysis", "ROI Planning", "Strategy Development"],
      link: "/services/ai-strategy",
      gradient: "from-purple-500 to-pink-500",
      color: "purple"
    },
    {
      icon: GitBranch,
      title: "MLOps & Engineering",
      description: "Scalable machine learning operations and data infrastructure for production AI.",
      features: ["Pipeline Automation", "Model Deployment", "Monitoring", "CI/CD"],
      link: "/services/mlops",
      gradient: "from-blue-500 to-teal-500",
      color: "blue"
    },
    {
      icon: Eye,
      title: "Computer Vision",
      description: "Advanced visual inspection and quality control for manufacturing.",
      features: ["Quality Control", "Predictive Maintenance", "Process Optimization", "Safety"],
      link: "/services/computer-vision",
      gradient: "from-amber-500 to-orange-500",
      color: "orange"
    },
    {
      icon: Target,
      title: "Predictive Analytics",
      description: "Forecast trends and outcomes with cutting-edge predictive modeling.",
      features: ["Demand Forecasting", "Risk Analysis", "Customer Insights", "Trends"],
      link: "/services/predictive-analytics",
      gradient: "from-green-500 to-emerald-500",
      color: "green"
    },
    {
      icon: HeartPulse,
      title: "Healthcare AI",
      description: "Responsible AI solutions for diagnostics and patient care.",
      features: ["Medical Imaging", "Risk Scoring", "Drug Discovery", "Clinical Support"],
      link: "/services/healthcare-ai",
      gradient: "from-red-500 to-rose-500",
      color: "red"
    },
    {
      icon: Shield,
      title: "Responsible AI",
      description: "Ethical, transparent, and compliant AI implementations.",
      features: ["Ethical Frameworks", "Bias Detection", "Compliance", "Transparency"],
      link: "/services/responsible-ai",
      gradient: "from-indigo-500 to-purple-500",
      color: "indigo"
    }
  ];

  const approachSteps = [
    {
      step: "01",
      title: "Discover & Assess",
      description: "Understand your goals and challenges through comprehensive analysis.",
      icon: Brain
    },
    {
      step: "02",
      title: "Design Solution",
      description: "Create customized architecture for your needs and objectives.",
      icon: Cpu
    },
    {
      step: "03",
      title: "Implement",
      description: "Deploy and integrate with minimal disruption using agile methods.",
      icon: Zap
    },
    {
      step: "04",
      title: "Optimize & Support",
      description: "Continuous monitoring and optimization for maximum ROI.",
      icon: BarChart3
    }
  ];

  // Marquee content
  const marqueeItems = [
    "AI Strategy • MLOps • Computer Vision • Predictive Analytics • Healthcare AI • Responsible AI",
    "40% Cost Reduction • 3.2x ROI • 85% Efficiency Gain • 25% Revenue Growth",
    "Manufacturing • Healthcare • Finance • Retail • Technology • Energy"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-200 to-teal-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-amber-200 to-orange-200 rounded-full blur-3xl opacity-10"></div>
      </div>

      {/* Marquee Sections */}
      <div className="relative bg-white/80 backdrop-blur-sm border-b border-slate-200 py-3 overflow-hidden">
        <div className="marquee-container">
          <div className="marquee-content">
            {marqueeItems[0].split(" • ").map((item, index) => (
              <div key={index} className="flex items-center">
                <span className="text-slate-700 font-semibold text-sm">{item}</span>
                {index < marqueeItems[0].split(" • ").length - 1 && (
                  <Sparkles className="w-3 h-3 text-purple-500 mx-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <Hero
        title="Transform Your Business with AI"
        subtitle="End-to-end artificial intelligence solutions that deliver measurable results and drive innovation across industries."
        ctaText="Start Your AI Journey"
        ctaLink="/contact"
        showImage={false}
        background="light"
      />

      {/* Services Grid */}
      <Section className="relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            AI Service Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            Comprehensive AI Solutions
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Specialized services designed to solve your unique business challenges
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="group relative p-8 rounded-3xl bg-white border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Gradient Border Effect */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm`} />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-700">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button variant="ghost" className="w-full justify-center group/btn text-slate-600 hover:text-blue-600 font-semibold" asChild>
                  <Link to={service.link}>
                    Explore Service
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Second Marquee */}
      <div className="relative bg-slate-50 border-y border-slate-200 py-3 overflow-hidden">
        <div className="marquee-container reverse">
          <div className="marquee-content">
            {marqueeItems[1].split(" • ").map((item, index) => (
              <div key={index} className="flex items-center">
                <span className="text-slate-800 font-bold text-sm">{item}</span>
                {index < marqueeItems[1].split(" • ").length - 1 && (
                  <Zap className="w-3 h-3 text-amber-500 mx-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Approach Section */}
      <Section className="bg-white relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Zap className="w-4 h-4" />
              Our Methodology
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Proven Implementation Process
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A structured approach ensuring successful AI deployment and maximum ROI
            </p>
          </div>

          <div
            ref={approachRef}
            className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-700 ${
              approachVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {approachSteps.map((step, index) => (
              <div key={step.step} className="group text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-teal-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-all duration-300 group-hover:scale-110">
                    {step.step}
                  </div>
                  {index < approachSteps.length - 1 && (
                    <div className="absolute top-10 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-teal-500 opacity-50 group-hover:opacity-80 transition-opacity hidden lg:block" />
                  )}
                </div>
                <step.icon className="w-8 h-8 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Results Section */}
      <Section className="bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Target className="w-4 h-4" />
              Measurable Results
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Driving Business Impact
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: LineChart, value: "40%", label: "Cost Reduction", desc: "Process automation" },
              { icon: Target, value: "3.2x", label: "Average ROI", desc: "AI investments" },
              { icon: Workflow, value: "85%", label: "Efficiency Gain", desc: "Operational processes" },
              { icon: BarChart3, value: "25%", label: "Revenue Growth", desc: "AI-driven insights" }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center p-8 rounded-3xl bg-white border border-slate-200 shadow-sm group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <stat.icon className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-lg font-bold text-slate-800 mb-2">{stat.label}</div>
                <div className="text-sm text-slate-600">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Third Marquee */}
      <div className="relative bg-white border-y border-slate-200 py-3 overflow-hidden">
        <div className="marquee-container">
          <div className="marquee-content">
            {marqueeItems[2].split(" • ").map((item, index) => (
              <div key={index} className="flex items-center">
                <span className="text-slate-700 font-semibold text-sm">{item}</span>
                {index < marqueeItems[2].split(" • ").length - 1 && (
                  <Factory className="w-3 h-3 text-green-500 mx-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-blue-500 to-teal-500 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, white 2%, transparent 0%), radial-gradient(circle at 75px 75px, white 2%, transparent 0%)`,
            backgroundSize: '100px 100px'
          }}></div>
        </div>
        
        <div
          ref={ctaRef}
          className={`max-w-4xl mx-auto text-center relative z-10 transition-all duration-700 ${
            ctaVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
            Let's discuss how AI can drive innovation and growth for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-bold shadow-lg hover:shadow-xl transition-all" asChild>
              <Link to="/contact">Start Free Consultation</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg font-semibold" asChild>
              <Link to="/case-studies">
                <Play className="mr-2 w-5 h-5" />
                View Success Stories
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      <style jsx>{`
        .marquee-container {
          display: flex;
          overflow: hidden;
          white-space: nowrap;
          position: relative;
        }

        .marquee-container.reverse .marquee-content {
          animation-direction: reverse;
        }

        .marquee-content {
          display: flex;
          gap: 2rem;
          animation: marquee 30s linear infinite;
          padding: 0 2rem;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default Services;