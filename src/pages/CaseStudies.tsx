// pages/case-studies/[slug].tsx
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { ArrowRight, Download, Calendar, Building, Target, CheckCircle, Sparkles, Zap, TrendingUp } from "lucide-react";

interface CaseStudyDetail {
  title: string;
  industry: string;
  client: string;
  duration: string;
  challenge: string;
  approach: string;
  outcome: string[];
  technologies: string[];
  metrics: { label: string; value: string }[];
}

const CaseStudyTemplate = () => {
  // This would typically come from your CMS or data source
  const caseStudy: CaseStudyDetail = {
    title: "AI-Powered Fraud Detection System",
    industry: "Financial Services",
    client: "Global Financial Institution",
    duration: "6 Months",
    challenge: "The client faced significant challenges with their existing fraud detection system generating over 90% false positives, leading to operational inefficiencies, customer frustration, and missed fraudulent activities. Manual review processes were consuming hundreds of hours monthly.",
    approach: "We implemented a comprehensive machine learning solution featuring advanced anomaly detection algorithms, real-time processing capabilities, and adaptive learning systems. Our approach included data pipeline optimization, feature engineering, and ensemble modeling techniques.",
    outcome: [
      "Reduced false positives by 40% while maintaining 99.7% detection accuracy",
      "Achieved $2M in annual operational savings",
      "Enabled real-time fraud detection with sub-second response times",
      "Improved customer satisfaction scores by 35%"
    ],
    technologies: ["Python", "TensorFlow", "Apache Spark", "AWS SageMaker", "Kafka", "React"],
    metrics: [
      { label: "False Positives Reduced", value: "40%" },
      { label: "Accuracy Rate", value: "99.7%" },
      { label: "Annual Savings", value: "$2M" },
      { label: "Processing Time", value: "< 500ms" }
    ]
  };

  // Marquee content
  const marqueeItems = [
    "AI-Powered Fraud Detection • Machine Learning • Real-time Analytics • Financial Security • Risk Management",
    "40% Fewer False Positives • 99.7% Accuracy • $2M Annual Savings • Sub-second Processing",
    "Financial Services • Banking Technology • Fraud Prevention • AI Solutions • Business Transformation"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      
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
          title={caseStudy.title}
          subtitle={`Transforming ${caseStudy.industry} with AI-powered solutions`}
          showImage={false}
        />
      </div>

      <Section className="py-12 lg:py-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Key Metrics - Enhanced */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {caseStudy.metrics.map((metric, index) => (
              <div key={index} className="group bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 hover:-translate-y-1">
                <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {metric.value}
                </div>
                <div className="text-sm lg:text-base text-slate-600 font-medium">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Challenge Section */}
              <section className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200">
                <div className="flex items-center mb-6">
                  <div className="w-4 h-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-full mr-4"></div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
                    The Challenge
                  </h2>
                </div>
                <div className="prose prose-lg max-w-none">
                  <p className="text-slate-700 leading-relaxed text-lg">
                    {caseStudy.challenge}
                  </p>
                </div>
              </section>

              {/* Approach Section */}
              <section className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200">
                <div className="flex items-center mb-6">
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-4"></div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
                    Our AI Solution
                  </h2>
                </div>
                <div className="prose prose-lg max-w-none mb-8">
                  <p className="text-slate-700 leading-relaxed text-lg">
                    {caseStudy.approach}
                  </p>
                </div>
                
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                  <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
                    <Zap className="w-5 h-5 text-amber-500 mr-2" />
                    Technology Stack
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {caseStudy.technologies.map((tech, index) => (
                      <div key={index} className="flex items-center space-x-3 p-2 bg-white rounded-lg border border-slate-200">
                        <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex-shrink-0"></div>
                        <span className="text-slate-700 font-medium text-sm">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Outcome Section */}
              <section className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200">
                <div className="flex items-center mb-6">
                  <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-4"></div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">
                    Business Impact
                  </h2>
                </div>
                <div className="space-y-4">
                  {caseStudy.outcome.map((result, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <p className="text-slate-700 text-lg font-medium">{result}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar - Enhanced */}
            <div className="space-y-6">
              {/* Project Details Card */}
              <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                  <Target className="w-5 h-5 text-blue-500 mr-2" />
                  Project Details
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <Building className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="text-sm text-slate-500">Industry</div>
                      <div className="font-bold text-slate-800">{caseStudy.industry}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <Building className="w-5 h-5 text-purple-600" />
                    <div>
                      <div className="text-sm text-slate-500">Client</div>
                      <div className="font-bold text-slate-800">{caseStudy.client}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg border border-green-200">
                    <Calendar className="w-5 h-5 text-green-600" />
                    <div>
                      <div className="text-sm text-slate-500">Duration</div>
                      <div className="font-bold text-slate-800">{caseStudy.duration}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technologies Card */}
              <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                  <TrendingUp className="w-5 h-5 text-purple-500 mr-2" />
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {caseStudy.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 rounded-lg text-sm font-semibold border border-blue-200 hover:border-blue-300 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Card */}
              <button className="w-full group bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-2xl font-bold hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-3 hover:-translate-y-1">
                <Download className="w-5 h-5" />
                <span>Download Full Case Study</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Related Case Studies */}
              <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Related Cases</h3>
                <div className="space-y-3">
                  {[
                    "Healthcare AI Diagnostics",
                    "Retail Predictive Analytics",
                    "Manufacturing Optimization"
                  ].map((title, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                      <span className="text-slate-700 font-medium text-sm">{title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
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

      {/* CTA Section */}
      <Section className="py-16">
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
              Ready to Achieve Similar Results?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI solutions can transform your business operations and drive measurable outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-8 py-3 rounded-lg transition-all duration-200 hover:shadow-lg">
                Start Your Project
              </button>
              <button className="border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-3 rounded-lg transition-all duration-200">
                View All Case Studies
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

        .prose {
          color: inherit;
        }

        .prose p {
          margin-bottom: 0;
        }
      `}</style>
    </div>
  );
};

export default CaseStudyTemplate;