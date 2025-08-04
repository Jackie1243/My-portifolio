import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">
              Jackie MUKAMISHA
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Frontend Engineer from Kigali, Rwanda. Recent Software Engineering graduate passionate about creating beautiful web experiences with modern technologies.
          </p>
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/jackiemukamisha"
              className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6 text-white" />
            </a>
            <a
              href="https://www.linkedin.com/in/mukamisha-jackie"
              className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6 text-white" />
            </a>
            <a
              href="mailto:jackiemukamisha@gmail.com"
              className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-colors duration-200"
            >
              <Mail className="w-6 h-6 text-white" />
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToAbout}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200"
            >
              Learn More About Me
            </button>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold rounded-lg transition-all duration-200"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-8 h-8 text-white" />
      </button>
    </section>
  );
};

export default Hero;
