import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Briefcase, Upload, Linkedin, X, Users, TrendingUp, Globe, Award, Sparkles, Zap, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";

const Careers = () => {
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation({ threshold: 0.3 });
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApplyForm, setShowApplyForm] = useState(false);
  const [resumeFile, setResumeFile] = useState(null);

  const openings = [
    {
      id: 1,
      title: "Senior Data Scientist",
      department: "Data Science",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Join our data science team to build cutting-edge ML models and analytics solutions.",
      salary: "$140,000 - $180,000",
      experience: "5+ years",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Machine Learning Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Design and deploy scalable ML systems that power our analytics platform.",
      salary: "$130,000 - $170,000",
      experience: "4+ years",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Analytics Consultant",
      department: "Consulting",
      location: "New York, NY",
      type: "Full-time",
      description: "Work directly with clients to deliver data-driven insights and solutions.",
      salary: "$120,000 - $160,000",
      experience: "3+ years",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: "Data Engineer",
      department: "Engineering",
      location: "Austin, TX",
      type: "Full-time",
      description: "Build and maintain robust data pipelines and infrastructure at scale.",
      salary: "$125,000 - $165,000",
      experience: "4+ years",
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "Product Manager - Analytics",
      department: "Product",
      location: "Remote",
      type: "Full-time",
      description: "Define product strategy and roadmap for our analytics platform.",
      salary: "$135,000 - $175,000",
      experience: "5+ years",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      id: 6,
      title: "Business Intelligence Analyst",
      department: "Analytics",
      location: "Chicago, IL",
      type: "Full-time",
      description: "Create insightful dashboards and reports that drive business decisions.",
      salary: "$95,000 - $130,000",
      experience: "2+ years",
      gradient: "from-teal-500 to-blue-500"
    }
  ];

  // Marquee content
  const marqueeItems = [
    "Data Science • Machine Learning • AI Engineering • Analytics • Data Engineering • Business Intelligence • Product Management",
    "San Francisco • New York • Austin • Chicago • Remote • Global Opportunities • Flexible Work",
    "Competitive Salaries • Equity Options • Health Benefits • Learning Budget • Career Growth • Innovation Projects"
  ];

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setShowApplyForm(true);
  };

  const handleLinkedInAutofill = () => {
    alert("LinkedIn autofill would populate your profile data here");
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      setResumeFile(file);
    } else {
      alert("Please upload a PDF file");
    }
  };

  const handleSubmitApplication = (e) => {
    e.preventDefault();
    alert(`Application submitted for ${selectedJob.title}`);
    setShowApplyForm(false);
    setSelectedJob(null);
    setResumeFile(null);
  };

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
          title="Join Our AI Revolution"
          subtitle="Help shape the future of artificial intelligence and data analytics. We're looking for brilliant minds passionate about innovation and impact."
          showImage={false}
        />
      </div>

      {/* Stats Section */}
      <Section className="py-16 relative z-10">
        <div
          ref={statsRef}
          className={`max-w-6xl mx-auto mb-16 transition-all duration-700 ${
            statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Award className="w-4 h-4" />
              Why Join Scovatics?
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Build Your Career in AI
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Join a team that's pushing the boundaries of what's possible with artificial intelligence and data analytics.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-2 border-slate-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl bg-white/80 backdrop-blur-sm group hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-slate-900 mb-4">Innovative Projects</CardTitle>
              <CardDescription className="text-slate-600 text-base leading-relaxed">
                Work on cutting-edge AI and analytics projects with Fortune 500 companies and industry leaders.
              </CardDescription>
            </Card>
            
            <Card className="text-center p-8 border-2 border-slate-200 hover:border-purple-300 transition-all duration-300 hover:shadow-xl bg-white/80 backdrop-blur-sm group hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-slate-900 mb-4">Career Growth</CardTitle>
              <CardDescription className="text-slate-600 text-base leading-relaxed">
                Continuous learning, mentorship programs, and clear career progression in fast-growing AI fields.
              </CardDescription>
            </Card>
            
            <Card className="text-center p-8 border-2 border-slate-200 hover:border-green-300 transition-all duration-300 hover:shadow-xl bg-white/80 backdrop-blur-sm group hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl font-bold text-slate-900 mb-4">Global Impact</CardTitle>
              <CardDescription className="text-slate-600 text-base leading-relaxed">
                Make a real difference for clients worldwide while enjoying competitive benefits and flexible work.
              </CardDescription>
            </Card>
          </div>
        </div>

        {/* Second Marquee */}
        <div className="relative bg-slate-50 border-y border-slate-200 py-3 overflow-hidden my-12">
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

        {/* Job Openings */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Users className="w-4 h-4" />
              Open Positions
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Join Our Growing Team
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {openings.length} exciting positions available across all departments and locations
            </p>
          </div>
          
          <div className="grid gap-6">
            {openings.map((job, index) => {
              const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
              
              return (
                <div
                  key={job.id}
                  ref={ref}
                  className={`transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Card className="bg-white/80 backdrop-blur-sm border border-slate-200 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                    <CardHeader>
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">
                        <div className="flex-1">
                          <div className="flex items-start gap-4 mb-4">
                            <div className={`w-12 h-12 bg-gradient-to-r ${job.gradient} rounded-xl flex items-center justify-center text-white flex-shrink-0`}>
                              <Briefcase className="w-6 h-6" />
                            </div>
                            <div className="flex-1">
                              <CardTitle className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                {job.title}
                              </CardTitle>
                              <div className="flex flex-wrap gap-2 mb-4">
                                <Badge className="bg-blue-100 text-blue-700 border-0 text-sm font-medium">{job.department}</Badge>
                                <Badge variant="outline" className="text-sm">{job.type}</Badge>
                                <Badge className="bg-green-100 text-green-700 border-0 text-sm font-medium">
                                  {job.salary}
                                </Badge>
                              </div>
                              <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                                <div className="flex items-center">
                                  <MapPin className="w-4 h-4 mr-2" />
                                  {job.location}
                                </div>
                                <div className="flex items-center">
                                  <Users className="w-4 h-4 mr-2" />
                                  {job.experience} experience
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Button 
                          onClick={() => handleApplyClick(job)}
                          className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform group-hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                          Apply Now
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 text-lg leading-relaxed">{job.description}</p>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* Third Marquee */}
        <div className="relative bg-white border-y border-slate-200 py-3 overflow-hidden mt-12">
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
              Don't See the Perfect Role?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              We're always looking for talented people. Send us your resume and we'll contact you when a matching position opens.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-8 py-3 rounded-lg transition-all duration-200 hover:shadow-lg">
                Submit General Application
              </button>
              <button className="border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-3 rounded-lg transition-all duration-200">
                Contact Talent Team
              </button>
            </div>
          </div>
        </div>
      </Section>

      {/* Application Form Modal */}
      {showApplyForm && selectedJob && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-slate-200 p-6 rounded-t-2xl">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Apply for {selectedJob.title}</h3>
                  <p className="text-slate-600 mt-1 font-medium">{selectedJob.department} • {selectedJob.location}</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowApplyForm(false)}
                  className="rounded-full hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </div>
            
            <form onSubmit={handleSubmitApplication} className="p-6 space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-slate-700 font-medium">First Name *</Label>
                  <Input id="firstName" required className="border-slate-300 focus:border-blue-500" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-slate-700 font-medium">Last Name *</Label>
                  <Input id="lastName" required className="border-slate-300 focus:border-blue-500" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-700 font-medium">Email *</Label>
                <Input id="email" type="email" required className="border-slate-300 focus:border-blue-500" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-slate-700 font-medium">Phone Number</Label>
                <Input id="phone" type="tel" className="border-slate-300 focus:border-blue-500" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="linkedin" className="text-slate-700 font-medium">LinkedIn Profile</Label>
                <div className="flex gap-2">
                  <Input id="linkedin" type="url" placeholder="https://linkedin.com/in/yourprofile" className="border-slate-300 focus:border-blue-500" />
                  <Button type="button" variant="outline" onClick={handleLinkedInAutofill} className="whitespace-nowrap border-slate-300">
                    <Linkedin className="w-4 h-4 mr-2" />
                    Autofill
                  </Button>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="resume" className="text-slate-700 font-medium">Resume/CV *</Label>
                <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 text-center hover:border-blue-400 transition-colors">
                  <Input
                    id="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <Label htmlFor="resume" className="cursor-pointer">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-slate-400" />
                    <p className="text-sm text-slate-600 mb-1 font-medium">
                      {resumeFile ? resumeFile.name : 'Click to upload resume (PDF, DOC, DOCX)'}
                    </p>
                    <p className="text-xs text-slate-500">Max file size: 5MB</p>
                  </Label>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="coverLetter" className="text-slate-700 font-medium">Cover Letter</Label>
                <Textarea
                  id="coverLetter"
                  placeholder="Tell us why you're excited about this role and what you can bring to our team..."
                  rows={4}
                  className="border-slate-300 focus:border-blue-500"
                />
              </div>
              
              <div className="flex gap-4 pt-4">
                <Button type="submit" className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 font-bold">
                  Submit Application
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowApplyForm(false)}
                  className="border-slate-300 text-slate-700"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

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

export default Careers;