import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Upload, Calendar, Sparkles, Zap, ArrowRight, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    industry: "",
    message: "",
    file: null as File | null
  });

  const { ref: formRef, isVisible: formVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: infoRef, isVisible: infoVisible } = useScrollAnimation({ threshold: 0.1 });
  const { ref: calendlyRef, isVisible: calendlyVisible } = useScrollAnimation({ threshold: 0.1 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        file: e.target.files[0]
      });
    }
  };

  const industries = [
    "Technology",
    "Healthcare",
    "Finance",
    "Manufacturing",
    "Retail",
    "Education",
    "Energy",
    "Transportation",
    "Telecommunications",
    "Other"
  ];

  // Marquee content
  const marqueeItems = [
    "AI Consulting • Data Analytics • Machine Learning • Business Intelligence • Predictive Modeling • Cloud Solutions",
    "Schedule a Demo • Get Expert Consultation • Transform Your Business • Start Your AI Journey • Book Free Assessment",
    "San Francisco • New York • Austin • Chicago • Remote • Global Clients • 24/7 Support"
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
          title="Start Your AI Transformation"
          subtitle="Ready to unlock the power of your data? Let's discuss how our AI solutions can drive innovation and growth for your business."
          showImage={false}
        />
      </div>

      <Section className="py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div
            ref={formRef}
            className={`transition-all duration-700 ${
              formVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">Get Started Today</h2>
                  <p className="text-slate-600">Tell us about your project and we'll reach out within 24 hours</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-slate-700 font-medium">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-white border-slate-300 focus:border-blue-500"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-slate-700 font-medium">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-white border-slate-300 focus:border-blue-500"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-slate-700 font-medium">Company *</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="bg-white border-slate-300 focus:border-blue-500"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="industry" className="text-slate-700 font-medium">Industry *</Label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={(e) => setFormData({...formData, industry: e.target.value})}
                      required
                      className="flex h-10 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    >
                      <option value="">Select Industry</option>
                      {industries.map((industry) => (
                        <option key={industry} value={industry}>
                          {industry}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-slate-700 font-medium">Project Details *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="bg-white border-slate-300 focus:border-blue-500"
                    placeholder="Tell us about your data challenges, goals, and what you'd like to achieve with AI..."
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="file" className="flex items-center gap-2 text-slate-700 font-medium">
                    <Upload className="w-4 h-4" />
                    Attach Project Files (Optional)
                  </Label>
                  <div className="border-2 border-dashed border-slate-300 rounded-xl p-4 hover:border-blue-400 transition-colors">
                    <Input
                      id="file"
                      name="file"
                      type="file"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <Label htmlFor="file" className="cursor-pointer text-center block">
                      <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <Upload className="w-6 h-6 text-slate-400" />
                      </div>
                      <p className="text-sm text-slate-600 mb-1 font-medium">
                        {formData.file ? formData.file.name : 'Click to upload files'}
                      </p>
                      <p className="text-xs text-slate-500">PDF, DOC, XLS, PPT, TXT (Max 10MB)</p>
                    </Label>
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 text-lg transition-all duration-300 hover:shadow-xl"
                >
                  Send Message
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information & Calendly */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div
              ref={infoRef}
              className={`transition-all duration-700 delay-200 ${
                infoVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            >
              <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 hover:bg-slate-50 rounded-xl transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Email</h3>
                      <p className="text-slate-600">contact@scovatics.com</p>
                      <p className="text-slate-600">sales@scovatics.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 hover:bg-slate-50 rounded-xl transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Phone</h3>
                      <p className="text-slate-600">+1 (555) 123-4567</p>
                      <p className="text-slate-600">+1 (555) 987-6543</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 hover:bg-slate-50 rounded-xl transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Headquarters</h3>
                      <p className="text-slate-600 leading-relaxed">
                        123 Innovation Drive<br />
                        San Francisco, CA 94105<br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200 p-6">
                    <h3 className="font-bold text-slate-900 mb-2">Office Hours</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                      Saturday - Sunday: Closed<br />
                      <span className="text-blue-600 font-medium">24/7 Emergency Support Available</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Marquee */}
            <div className="relative bg-slate-50 border border-slate-200 rounded-xl py-3 overflow-hidden">
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

            {/* Calendly Integration */}
            <div
              ref={calendlyRef}
              className={`transition-all duration-700 delay-400 ${
                calendlyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl border-0 p-8 text-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 25px 25px, white 2%, transparent 0%), radial-gradient(circle at 75px 75px, white 2%, transparent 0%)`,
                    backgroundSize: '100px 100px'
                  }}></div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">Schedule a Live Demo</h3>
                  </div>
                  <p className="text-blue-100 mb-6 leading-relaxed">
                    Prefer a live demonstration? Book a time that works for you and we'll show you how our AI solutions can transform your business operations.
                  </p>
                  <Button 
                    className="w-full bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 text-lg transition-all duration-300 hover:shadow-lg"
                    onClick={() => {
                      window.open('https://calendly.com/your-username', '_blank');
                    }}
                  >
                    Book Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <div className="mt-4 text-sm text-blue-200 text-center space-y-1">
                    <p>30-minute personalized demo</p>
                    <p>Live Q&A with AI experts</p>
                    <p>Custom solution recommendations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Third Marquee */}
        <div className="relative bg-white border border-slate-200 rounded-xl py-3 overflow-hidden mt-12">
          <div className="marquee-container">
            <div className="marquee-content">
              {marqueeItems[2].split(" • ").map((item, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-slate-700 font-semibold text-sm">{item}</span>
                  {index < marqueeItems[2].split(" • ").length - 1 && (
                    <Sparkles className="w-3 h-3 text-green-500 mx-4" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-16">
        <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl p-8 lg:p-12 text-center text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25px 25px, white 2%, transparent 0%), radial-gradient(circle at 75px 75px, white 2%, transparent 0%)`,
              backgroundSize: '100px 100px'
            }}></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Start Your AI Journey?
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Join hundreds of companies that have transformed their business with our AI solutions. Let's build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-slate-900 hover:bg-slate-100 font-bold px-8 py-3 rounded-lg transition-all duration-200 hover:shadow-lg">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-3 rounded-lg transition-all duration-200">
                View Case Studies
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

export default Contact;