import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ArticleCard from "@/components/ArticleCard";
import { Play, Download, Calendar, Clock, Eye, FileText, Video, Users, Sparkles, Zap, ArrowRight } from "lucide-react";

const Resources = () => {
  const articles = [
    {
      title: "The Future of AI in Business Analytics",
      category: "AI & ML",
      date: "2024-11-10",
      excerpt: "Explore how artificial intelligence is reshaping the landscape of business analytics and decision-making.",
      readTime: "5 min read",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Building Scalable Data Pipelines",
      category: "Data Engineering",
      date: "2024-11-05",
      excerpt: "Best practices for designing and implementing data pipelines that scale with your business needs.",
      readTime: "7 min read",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Predictive Analytics: A Beginner's Guide",
      category: "Analytics",
      date: "2024-10-28",
      excerpt: "Learn the fundamentals of predictive analytics and how to start implementing it in your organization.",
      readTime: "6 min read",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Data Security in the Cloud Era",
      category: "Security",
      date: "2024-10-20",
      excerpt: "Understanding best practices for maintaining data security when migrating analytics to the cloud.",
      readTime: "8 min read",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "ROI of Business Intelligence Platforms",
      category: "Business Strategy",
      date: "2024-10-15",
      excerpt: "Quantifying the business value and return on investment of modern BI implementations.",
      readTime: "4 min read",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "Real-Time Analytics at Scale",
      category: "Technology",
      date: "2024-10-08",
      excerpt: "Technical approaches and architecture patterns for implementing real-time analytics systems.",
      readTime: "9 min read",
      gradient: "from-teal-500 to-blue-500"
    }
  ];

  const whitepapers = [
    {
      title: "Enterprise Data Strategy Framework",
      description: "Comprehensive guide to building a scalable data infrastructure for modern businesses",
      type: "PDF",
      size: "2.4 MB",
      gated: true,
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      title: "AI Implementation Roadmap",
      description: "Step-by-step guide for successful AI integration and digital transformation",
      type: "PDF",
      size: "1.8 MB",
      gated: true,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Cloud Migration Best Practices",
      description: "Ensuring successful analytics platform migration with zero downtime",
      type: "PDF",
      size: "3.1 MB",
      gated: true,
      gradient: "from-green-500 to-teal-500"
    }
  ];

  const videos = [
    {
      title: "Data Visualization Techniques",
      duration: "12:45",
      thumbnail: "/api/placeholder/300/180",
      views: "1.2K",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Machine Learning Demystified",
      duration: "18:30",
      thumbnail: "/api/placeholder/300/180",
      views: "2.4K",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Building Data Teams",
      duration: "22:15",
      thumbnail: "/api/placeholder/300/180",
      views: "895",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const webinars = [
    {
      title: "Future of Data Analytics 2024",
      date: "2024-11-20",
      time: "2:00 PM EST",
      speaker: "Sarah Chen, Chief Data Officer",
      registered: true,
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      title: "AI Governance & Ethics",
      date: "2024-11-25",
      time: "11:00 AM EST",
      speaker: "Dr. Michael Torres, AI Ethics Lead",
      registered: false,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Data Mesh Architecture",
      date: "2024-12-03",
      time: "1:30 PM EST",
      speaker: "Alex Rivera, Principal Architect",
      registered: false,
      gradient: "from-green-500 to-teal-500"
    }
  ];

  // Marquee content
  const marqueeItems = [
    "AI & Machine Learning • Data Engineering • Business Intelligence • Predictive Analytics • Cloud Computing • Data Security",
    "Whitepapers • Case Studies • Video Tutorials • Webinars • Research Papers • Expert Guides",
    "Latest Trends • Best Practices • Industry Insights • Technical Deep Dives • Strategy Guides"
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
          title="Resources & Insights"
          subtitle="Stay ahead with the latest trends, best practices, and expert knowledge in AI and data analytics."
          showImage={false}
        />
      </div>

      {/* Blogs Section */}
      <Section className="py-16 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <FileText className="w-4 h-4" />
            Latest Articles
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Insights & Thought Leadership
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Dive into our collection of articles covering AI, data engineering, analytics, and emerging technologies.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 overflow-hidden hover:-translate-y-2"
            >
              <div className="p-6">
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 bg-gradient-to-r ${article.gradient} text-white text-xs font-bold rounded-full`}>
                    {article.category}
                  </span>
                  <span className="text-slate-500 text-sm flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>

                {/* Date & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                  <span className="text-slate-500 text-sm flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(article.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                  <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm group/btn">
                    Read Article
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
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

      {/* Whitepapers Section */}
      <Section className="py-16 bg-white relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Download className="w-4 h-4" />
            Research & Guides
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Whitepapers & Research
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            In-depth research and comprehensive guides to drive your data strategy forward.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {whitepapers.map((paper, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-slate-200 hover:-translate-y-2"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className={`w-12 h-12 bg-gradient-to-r ${paper.gradient} rounded-xl flex items-center justify-center text-white mb-4`}>
                    <FileText className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{paper.title}</h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">{paper.description}</p>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
                <span className="font-medium">{paper.type}</span>
                <span>{paper.size}</span>
              </div>
              {paper.gated && (
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span>Email required for download</span>
                </div>
              )}
              <button className="w-full group/btn bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 font-bold flex items-center justify-center gap-2">
                <Download className="w-4 h-4" />
                Download Whitepaper
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </Section>

      {/* Videos Section */}
      <Section className="py-16 bg-slate-50 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Video className="w-4 h-4" />
            Video Library
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Learn with Video Content
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Watch tutorials, expert interviews, and technical deep dives from industry leaders.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {videos.map((video, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
            >
              <div className="relative">
                <div className={`w-full h-48 bg-gradient-to-br ${video.gradient} rounded-t-2xl flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                  <div className="text-white text-center relative z-10">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-white fill-current" />
                    </div>
                    <span className="text-sm font-medium">Watch Now</span>
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded-lg font-medium">
                  {video.duration}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {video.title}
                </h3>
                <div className="flex items-center text-sm text-slate-500">
                  <Eye className="w-4 h-4 mr-2" />
                  {video.views} views
                </div>
              </div>
            </div>
          ))}
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
                  <Sparkles className="w-3 h-3 text-green-500 mx-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Webinars Section */}
      <Section className="py-16 bg-white relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Users className="w-4 h-4" />
            Live Events
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Upcoming Webinars
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Join our live sessions and interact with industry experts and thought leaders.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {webinars.map((webinar, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-slate-200 hover:-translate-y-2"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${webinar.gradient} rounded-xl flex items-center justify-center text-white mb-4`}>
                <Users className="w-6 h-6" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                {webinar.title}
              </h3>
              
              <p className="text-slate-600 text-sm mb-4 font-medium">{webinar.speaker}</p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center text-sm text-slate-500">
                  <Calendar className="w-4 h-4 mr-3" />
                  {new Date(webinar.date).toLocaleDateString('en-US', { 
                    weekday: 'short', 
                    year: 'numeric', 
                    month: 'short', 
                    day: 'numeric' 
                  })}
                </div>
                <div className="flex items-center text-sm text-slate-500">
                  <Clock className="w-4 h-4 mr-3" />
                  {webinar.time}
                </div>
              </div>
              
              <button className={`w-full py-3 px-4 rounded-xl font-bold transition-all duration-200 flex items-center justify-center gap-2 ${
                webinar.registered 
                  ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                  : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg'
              }`}>
                {webinar.registered ? (
                  <>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Registered ✓
                  </>
                ) : (
                  <>
                    <Users className="w-4 h-4" />
                    Register Now
                  </>
                )}
              </button>
            </div>
          ))}
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
              Stay Updated with Latest Insights
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest resources delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="bg-white text-blue-600 hover:bg-blue-50 font-bold px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-lg">
                Subscribe
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

export default Resources;