import React, { useState, useEffect } from 'react';
import { Upload, Brain, Play, ArrowRight, CheckCircle, Star, Users, Github, Twitter, Linkedin, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-black/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-black/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-black/4 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Header with Glassmorphism */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrollY > 50 
          ? 'backdrop-blur-xl bg-white/80 border-b border-black/10 shadow-lg' 
          : 'backdrop-blur-sm bg-white/60'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative">
                <div className="w-10 h-10 bg-black rounded-2xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <div className="w-5 h-5 bg-white rounded-full transition-all duration-300 group-hover:scale-90"></div>
                </div>
                <div className="absolute inset-0 bg-black rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>
              <span className="text-2xl font-bold text-black tracking-tight">NEXTSTEP</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {['Home', 'Dashboard', 'About Us'].map((item) => (
                <a 
                  key={item}
                  href="#" 
                  className="relative text-black/70 hover:text-black transition-all duration-300 font-medium group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-xl backdrop-blur-sm bg-black/5 hover:bg-black/10 transition-all duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-500 ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden backdrop-blur-xl bg-white/90`}>
          <div className="px-4 py-4 space-y-4">
            {['Home', 'Dashboard', 'About Us'].map((item) => (
              <a 
                key={item}
                href="#" 
                className="block text-black/70 hover:text-black transition-colors duration-300 font-medium"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-6xl lg:text-8xl font-black text-black leading-none tracking-tight">
                  <span className="block animate-fade-in-up">FIND</span>
                  <span className="block animate-fade-in-up delay-200">YOUR</span>
                  <span className="block animate-fade-in-up delay-400">PATH</span>
                  <span className="block text-black/60 animate-fade-in-up delay-600">IN TECH</span>
                </h1>
                <p className="text-xl lg:text-2xl text-black/70 leading-relaxed max-w-2xl animate-fade-in-up delay-800">
                  From resume to roadmap, instantly. Your AI-powered guide to a career in tech - 
                  whether you're exploring options or ready to build your future.
                </p>
              </div>
              
              <div className="animate-fade-in-up delay-1000">
                <button className="group relative overflow-hidden bg-black text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative flex items-center space-x-3">
                    <span>Create My Roadmap</span>
                    <ArrowRight className="w-6 h-6 transform transition-transform duration-300 group-hover:translate-x-2" />
                  </div>
                  <div className="absolute inset-0 bg-black rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                </button>
              </div>
            </div>
            
            {/* Glassmorphism Illustration */}
            <div className="relative animate-fade-in-up delay-1200">
              <div className="relative backdrop-blur-xl bg-white/10 border border-black/10 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl"></div>
                <div className="relative space-y-8">
                  {[
                    { icon: Upload, title: "Share Your Goals or Resume", desc: "Tell us about your interests", delay: "delay-0" },
                    { icon: Brain, title: "Receive AI Recommendations", desc: "Personalized career paths", delay: "delay-300" },
                    { icon: Play, title: "Start Learning with Clear Roadmap", desc: "Curated resources & milestones", delay: "delay-600" }
                  ].map((step, index) => (
                    <div key={index} className={`flex items-center space-x-4 animate-slide-in-right ${step.delay}`}>
                      <div className="relative group">
                        <div className={`w-14 h-14 ${index === 2 ? 'bg-black' : 'bg-white/20 backdrop-blur-sm'} rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110`}>
                          <step.icon className={`w-7 h-7 ${index === 2 ? 'text-white' : 'text-black'}`} />
                        </div>
                        <div className="absolute inset-0 bg-black/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-black">{step.title}</div>
                        <div className="text-sm text-black/60">{step.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative py-20 lg:py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black mb-6 animate-fade-in-up">
              How It Works?
            </h2>
            <p className="text-2xl text-white/70 animate-fade-in-up delay-200">Your journey starts in 3 simple steps</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: Upload, title: "Provide Your Input", desc: "Upload your resume or simply tell us your interests. No resume? No problem. We'll guide you from scratch.", delay: "delay-0" },
              { icon: Brain, title: "Get Your AI Roadmap", desc: "Our AI analyzes your skills and goals to generate a personalized, step-by-step roadmap with clear milestones.", delay: "delay-300" },
              { icon: Play, title: "Start Learning", desc: "Receive a curated list of the best free courses, GitHub projects, and resources to master each skill on your path.", delay: "delay-600" }
            ].map((step, index) => (
              <div key={index} className={`text-center group animate-fade-in-up ${step.delay}`}>
                <div className="relative mb-8 inline-block">
                  <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center mx-auto transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <step.icon className="w-12 h-12 text-black" />
                  </div>
                  <div className="absolute inset-0 bg-white rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                </div>
                <h3 className="text-3xl font-bold mb-6">{step.title}</h3>
                <p className="text-white/70 leading-relaxed text-lg">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Showcase */}
      <section className="relative py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-black mb-6 animate-fade-in-up">
              More Than a Plan—
              <br />
              <span className="text-black/60">It's Your Personal Mentor</span>
            </h2>
            <p className="text-2xl text-black/70 animate-fade-in-up delay-200">See what makes NextStep different</p>
          </div>
          
          <div className="relative animate-fade-in-up delay-400">
            <div className="backdrop-blur-xl bg-white/60 border border-black/10 rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent"></div>
              <div className="relative p-12">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className="space-y-8">
                    {[
                      { icon: CheckCircle, title: "AI-Generated Milestones", desc: "Clear, achievable goals tailored to your timeline", color: "bg-black/10" },
                      { icon: Star, title: "Curated Free Resources", desc: "Hand-picked courses, tutorials, and projects", color: "bg-black/10" },
                      { icon: Users, title: "Track Progress & Stay Motivated", desc: "Gamified learning with streaks and achievements", color: "bg-black/10" }
                    ].map((feature, index) => (
                      <div key={index} className={`flex items-start space-x-4 group animate-slide-in-left delay-${index * 200}`}>
                        <div className="relative">
                          <div className={`w-12 h-12 ${feature.color} backdrop-blur-sm rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110`}>
                            <feature.icon className="w-6 h-6 text-black" />
                          </div>
                          <div className="absolute inset-0 bg-black/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-black mb-2">{feature.title}</h3>
                          <p className="text-black/70">{feature.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="relative">
                    <div className="backdrop-blur-sm bg-black/5 border border-black/10 rounded-2xl p-8 hover:bg-black/10 transition-all duration-500">
                      <div className="space-y-6">
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold text-black">Frontend Developer Path</span>
                          <span className="text-sm text-black/70 font-semibold">70% Complete</span>
                        </div>
                        <div className="w-full bg-black/10 rounded-full h-3 overflow-hidden">
                          <div className="bg-black h-3 rounded-full transition-all duration-1000 ease-out" style={{width: '70%'}}></div>
                        </div>
                        <div className="space-y-4">
                          {[
                            { title: "HTML & CSS Fundamentals", completed: true },
                            { title: "JavaScript Basics", completed: true },
                            { title: "React.js Framework", completed: false, current: true },
                            { title: "Backend Integration", completed: false }
                          ].map((milestone, index) => (
                            <div key={index} className="flex items-center space-x-3 group">
                              <div className={`w-4 h-4 rounded-full transition-all duration-300 ${
                                milestone.completed ? 'bg-black' : 
                                milestone.current ? 'bg-black/50 animate-pulse' : 'bg-black/20'
                              } group-hover:scale-125`}></div>
                              <span className={`text-sm ${
                                milestone.completed ? 'text-black' : 
                                milestone.current ? 'text-black font-semibold' : 'text-black/50'
                              }`}>{milestone.title}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="relative py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-7xl font-black text-black mb-6 animate-fade-in-up">
              Built for Every Stage
              <br />
              <span className="text-black/60">of Your Journey</span>
            </h2>
            <p className="text-2xl text-black/70 animate-fade-in-up delay-200">No matter where you're starting from</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Brain, title: "The Explorer", desc: "Feeling lost in the world of tech? Tell us what you enjoy, and we'll show you career paths you'll love, complete with a beginner-friendly roadmap.", delay: "delay-0" },
              { icon: Users, title: "The Student", desc: "Turn your coursework into a career. Upload your resume to identify skill gaps and get a plan to become job-ready by graduation.", delay: "delay-300" },
              { icon: ArrowRight, title: "The Career Changer", desc: "Pivoting into tech? We'll leverage your existing experience to create the fastest, most efficient learning path to your new career.", delay: "delay-600" }
            ].map((useCase, index) => (
              <div key={index} className={`group animate-fade-in-up ${useCase.delay}`}>
                <div className="relative backdrop-blur-xl bg-white/60 border border-black/10 rounded-3xl p-8 h-full transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-white/80">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-3xl"></div>
                  <div className="relative">
                    <div className="w-16 h-16 bg-black/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-8 transition-all duration-300 group-hover:scale-110 group-hover:bg-black/20">
                      <useCase.icon className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="text-2xl font-bold text-black mb-6">{useCase.title}</h3>
                    <p className="text-black/70 leading-relaxed">{useCase.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 lg:py-32 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl lg:text-7xl font-black mb-8 animate-fade-in-up">
            Stop Wondering.
            <br />
            <span className="text-white/60">Start Building.</span>
          </h2>
          <p className="text-2xl text-white/70 mb-12 animate-fade-in-up delay-200">
            Your future in tech is one click away. Get your free, personalized roadmap now.
          </p>
          <div className="animate-fade-in-up delay-400">
            <button className="group relative overflow-hidden bg-white text-black px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-500 hover:scale-110 hover:shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex items-center space-x-4">
                <span>Create My Roadmap</span>
                <ArrowRight className="w-6 h-6 transform transition-transform duration-300 group-hover:translate-x-3" />
              </div>
              <div className="absolute inset-0 bg-white rounded-2xl blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-white border-t border-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Company */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="w-10 h-10 bg-black rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                    <div className="w-5 h-5 bg-white rounded-full"></div>
                  </div>
                  <div className="absolute inset-0 bg-black rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                </div>
                <span className="text-2xl font-bold text-black">NextStep</span>
              </div>
              <p className="text-black/70 text-lg">Your AI Career Companion</p>
              <div className="flex space-x-4">
                {[Github, Twitter, Linkedin].map((Icon, index) => (
                  <a key={index} href="#" className="group relative">
                    <div className="w-12 h-12 backdrop-blur-sm bg-black/5 border border-black/10 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-black/10">
                      <Icon className="w-6 h-6 text-black" />
                    </div>
                    <div className="absolute inset-0 bg-black/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Product */}
            <div>
              <h3 className="font-bold text-black mb-6 text-lg">Product</h3>
              <ul className="space-y-3">
                {['Home', 'How it Works', 'About Us'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-black/70 hover:text-black transition-colors duration-300 relative group">
                      {item}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Legal */}
            <div>
              <h3 className="font-bold text-black mb-6 text-lg">Legal</h3>
              <ul className="space-y-3">
                {['Privacy Policy', 'Terms of Service'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-black/70 hover:text-black transition-colors duration-300 relative group">
                      {item}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Newsletter */}
            <div>
              <h3 className="font-bold text-black mb-4 text-lg">Get Tech Career Insights</h3>
              <p className="text-black/70 mb-6">Weekly tips and resource recommendations</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-3 backdrop-blur-sm bg-black/5 border border-black/20 rounded-l-2xl focus:outline-none focus:border-black/40 transition-all duration-300"
                />
                <button className="bg-black text-white px-6 py-3 rounded-r-2xl hover:bg-black/80 transition-all duration-300 font-semibold">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-black/10 mt-16 pt-8 text-center">
            <p className="text-black/70">&copy; 2024 NextStep. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;