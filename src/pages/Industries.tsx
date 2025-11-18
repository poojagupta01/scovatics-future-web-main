import Hero from "@/components/Hero";
import Section from "@/components/Section";
import IndustryCard from "@/components/IndustryCard";
import { Building2, Heart, ShoppingCart, Factory, Landmark, Rocket, ArrowRight, Download, Truck, Cpu, Sparkles, Zap, Target, TrendingUp } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: Landmark,
      title: "Financial Services",
      description: "AI-powered risk management, fraud detection, and algorithmic trading solutions.",
      painPoints: ["High false positives in fraud", "Regulatory compliance complexity", "Inefficient risk assessment"],
      valueProps: ["78% reduction in false positives", "92% fraud detection accuracy", "Real-time compliance"],
      slug: "finance",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Patient analytics, drug discovery acceleration, and operational efficiency.",
      painPoints: ["Patient data fragmentation", "Drug discovery inefficiencies", "Operational bottlenecks"],
      valueProps: ["40% faster drug discovery", "30% operational cost reduction", "Personalized treatment"],
      slug: "healthcare",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: ShoppingCart,
      title: "Retail & E-commerce",
      description: "Customer behavior analytics, inventory optimization, and personalization.",
      painPoints: ["Low conversion rates", "Inventory mismanagement", "Generic experiences"],
      valueProps: ["34% higher conversions", "28% reduced abandonment", "22% increased order value"],
      slug: "retail",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Predictive maintenance, supply chain optimization, and quality control.",
      painPoints: ["Unplanned downtime costs", "Supply chain disruptions", "Quality inconsistencies"],
      valueProps: ["65% reduced downtime", "40% equipment lifespan", "$1.5M annual savings"],
      slug: "manufacturing",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Truck,
      title: "Logistics",
      description: "Route optimization, fleet management, and supply chain visibility.",
      painPoints: ["Inefficient route planning", "Poor fleet utilization", "No real-time visibility"],
      valueProps: ["25% fuel cost reduction", "98% on-time delivery", "Real-time tracking"],
      slug: "logistics",
      gradient: "from-teal-500 to-blue-500"
    },
    {
      icon: Cpu,
      title: "Technology",
      description: "Product analytics, user behavior insights, and growth optimization.",
      painPoints: ["Poor user engagement", "Inefficient development", "Growth stagnation"],
      valueProps: ["45% engagement boost", "Data-driven roadmaps", "Scalable frameworks"],
      slug: "technology",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: Building2,
      title: "Enterprise",
      description: "Business intelligence, workforce analytics, and decision support.",
      painPoints: ["Data silos", "Poor decision-making", "Productivity issues"],
      valueProps: ["360° visibility", "35% faster decisions", "20% efficiency gain"],
      slug: "enterprise",
      gradient: "from-slate-600 to-slate-800"
    },
    {
      icon: Rocket,
      title: "Startups & Scale-ups",
      description: "Growth analytics, market fit analysis, and scalable infrastructure.",
      painPoints: ["Unclear product-market fit", "Inefficient spending", "Technical debt"],
      valueProps: ["Data-driven decisions", "Optimized CAC/LTV", "Future-proof architecture"],
      slug: "startups",
      gradient: "from-amber-500 to-orange-500"
    }
  ];

  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Fraud Detection for Global Bank",
      industry: "Financial Services",
      challenge: "High false positive rates in transaction monitoring causing customer dissatisfaction.",
      approach: "Machine learning models with real-time behavioral analysis and adaptive learning.",
      outcome: "78% fewer false positives, 92% fraud detection accuracy, improved satisfaction.",
      tech: ["Python", "TensorFlow", "Apache Spark", "AWS SageMaker"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Predictive Maintenance in Automotive Manufacturing",
      industry: "Manufacturing",
      challenge: "Unplanned downtime costing $2.3M annually affecting production.",
      approach: "IoT sensors and predictive analytics for equipment health monitoring.",
      outcome: "65% less downtime, 40% longer equipment life, $1.5M first-year savings.",
      tech: ["IoT Sensors", "Azure IoT", "Python", "Power BI"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: 3,
      title: "Personalized Recommendation Engine for E-commerce",
      industry: "Retail & E-commerce",
      challenge: "Low conversions and high cart abandonment from generic recommendations.",
      approach: "Collaborative filtering and deep learning for hyper-personalized suggestions.",
      outcome: "34% higher conversions, 28% less abandonment, 22% larger orders.",
      tech: ["React", "Node.js", "MongoDB", "TensorFlow"],
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  // Marquee content
  const marqueeItems = [
    "Financial Services • Healthcare • Retail • Manufacturing • Logistics • Technology • Enterprise • Startups",
    "78% Fraud Detection • 40% Faster Drug Discovery • 34% Higher Conversions • 65% Less Downtime",
    "AI Solutions • Machine Learning • Predictive Analytics • Real-time Insights • Business Transformation"
  ];

  const handleLearnMore = (slug: string) => {
    alert(`Navigating to ${slug} industry page. This would show detailed pain points, solutions, and case studies.`);
  };

  const handleDownload = (title: string) => {
    alert(`Downloading case study: ${title}. In a real app, this would download the PDF.`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/20 relative overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-200 to-emerald-200 rounded-full blur-3xl opacity-10"></div>
      </div>

      {/* Marquee Section */}
      <div className="relative bg-white/80 backdrop-blur-sm border-b border-slate-200 py-3 overflow-hidden">
        <div className="marquee-container">
          <div className="marquee-content">
            {marqueeItems[0].split(" • ").map((item, index) => (
              <div key={index} className="flex items-center">
                <span className="text-slate-700 font-semibold text-sm">{item}</span>
                {index < marqueeItems[0].split(" • ").length - 1 && (
                  <Sparkles className="w-3 h-3 text-blue-500 mx-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-800/20 to-transparent"></div>
        <Hero
          title="Industry-Specific AI Solutions"
          subtitle="Tailored artificial intelligence solutions addressing unique industry challenges. Discover how we've driven measurable transformation across diverse sectors."
          showImage={false}
        />
      </div>

      {/* Industries Grid */}
      <Section className="py-16 lg:py-20 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Target className="w-4 h-4" />
            Industry Solutions
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            AI Solutions for Every Sector
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Customized artificial intelligence solutions designed to solve your industry's specific challenges and deliver measurable ROI.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-blue-300 overflow-hidden hover:-translate-y-2"
            >
              <div className="p-6 relative">
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${industry.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`} />
                
                {/* Icon */}
                <div className={`w-12 h-12 bg-gradient-to-r ${industry.gradient} rounded-xl flex items-center justify-center text-white shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <industry.icon className="w-6 h-6" />
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {industry.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  {industry.description}
                </p>

                {/* Pain Points */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                    Key Challenges
                  </h4>
                  <ul className="space-y-1">
                    {industry.painPoints.slice(0, 2).map((point, i) => (
                      <li key={i} className="text-xs text-slate-600 flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Value Props */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                    Delivered Value
                  </h4>
                  <ul className="space-y-1">
                    {industry.valueProps.slice(0, 2).map((value, i) => (
                      <li key={i} className="text-xs text-green-600 flex items-start font-medium">
                        <span className="text-green-500 mr-2">✓</span>
                        {value}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <button 
                  onClick={() => handleLearnMore(industry.slug)}
                  className="w-full flex items-center justify-center space-x-2 bg-slate-50 hover:bg-blue-50 text-blue-600 hover:text-blue-700 font-semibold py-2 px-4 rounded-lg transition-all duration-200 group-hover:shadow-sm border border-slate-200 hover:border-blue-200"
                >
                  <span className="text-sm">Explore Solutions</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
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

      {/* Case Studies Section */}
      <Section className="py-16 lg:py-20 bg-white relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <TrendingUp className="w-4 h-4" />
            Success Stories
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Real-World AI Impact
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            See how data-driven AI solutions are solving critical business challenges across industries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div 
              key={study.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200 hover:-translate-y-2"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
                    {study.industry}
                  </span>
                  <div className="flex items-center space-x-2 text-slate-400 group-hover:text-slate-600 transition-colors cursor-pointer">
                    <Download className="w-4 h-4" />
                    <span className="text-sm">PDF</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                  {study.title}
                </h3>

                {/* Challenge */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-slate-700 mb-2 uppercase tracking-wide">
                    Challenge
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {study.challenge}
                  </p>
                </div>

                {/* Approach */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-slate-700 mb-2 uppercase tracking-wide">
                    AI Solution
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {study.approach}
                  </p>
                </div>

                {/* Outcome */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-700 mb-2 uppercase tracking-wide">
                    Business Impact
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {study.outcome}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-700 mb-2 uppercase tracking-wide">
                    Technology
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {study.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                  <button 
                    onClick={() => handleLearnMore(study.industry.toLowerCase().replace(' & ', '-').replace(' ', '-'))}
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors"
                  >
                    <span>Read Full Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  
                  <button 
                    onClick={() => handleDownload(study.title)}
                    className="flex items-center space-x-2 text-slate-600 hover:text-slate-800 font-semibold text-sm transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Case Studies Button */}
        <div className="text-center mt-12">
          <button 
            onClick={() => alert('Navigating to all case studies')}
            className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
          >
            <span>Explore All Case Studies</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </Section>

      {/* Third Marquee */}
      <div className="relative bg-slate-50 border-y border-slate-200 py-3 overflow-hidden">
        <div className="marquee-container">
          <div className="marquee-content">
            {marqueeItems[2].split(" • ").map((item, index) => (
              <div key={index} className="flex items-center">
                <span className="text-slate-700 font-semibold text-sm">{item}</span>
                {index < marqueeItems[2].split(" • ").length - 1 && (
                  <Target className="w-3 h-3 text-green-500 mx-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <Section className="py-16 lg:py-20">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 lg:p-12 text-center text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25px 25px, white 2%, transparent 0%), radial-gradient(circle at 75px 75px, white 2%, transparent 0%)`,
              backgroundSize: '100px 100px'
            }}></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Transform Your Industry with AI?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how our industry-specific AI solutions can address your unique challenges and drive measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-8 py-3 rounded-lg transition-all duration-200 hover:shadow-lg">
                Schedule AI Consultation
              </button>
              <button className="border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-3 rounded-lg transition-all duration-200">
                View Industry Solutions
              </button>
            </div>
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

export default Industries;