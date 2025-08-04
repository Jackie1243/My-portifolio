import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex justify-center space-x-6 mb-6">
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
          
          <p className="text-slate-400 flex items-center justify-center space-x-2">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>by Jackie MUKAMISHA</span>
          </p>
          
          <p className="text-slate-500 text-sm mt-2">
            © 2025 Jackie MUKAMISHA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
