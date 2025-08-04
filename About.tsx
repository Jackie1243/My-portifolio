import React from 'react';
import { User, MapPin, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-64 h-64 mx-auto md:mx-0 bg-gradient-to-br from-blue-400 to-orange-400 rounded-full flex items-center justify-center">
                <User className="w-32 h-32 text-white" />
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                I'm Jackie MUKAMISHA, a passionate Frontend Engineer who graduated in October 2024 with a Bachelor's degree in Software Engineering. 
                I have 1 year of experience as a System Administrator, which gave me valuable insights into system operations and infrastructure.
              </p>
              
              <p className="text-lg text-slate-300 leading-relaxed">
                Currently, I'm expanding my expertise by taking courses in Blockchain, Cybersecurity, and AI Agents while actively 
                building websites using JavaScript, HTML, CSS, and React.js. I'm passionate about learning cutting-edge technologies 
                and creating innovative web solutions.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span className="text-slate-300">Kigali, Rwanda</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-blue-400" />
                  <span className="text-slate-300">Available for new opportunities</span>
                </div>
              </div>
              
              <a
                href="mailto:jackiemukamisha@gmail.com"
                className="inline-block px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
