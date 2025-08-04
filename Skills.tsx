import React from 'react';
import { Code, Database, Globe, Smartphone } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Globe className="w-8 h-8" />,
      skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Design', 'Web Development'],
    },
    {
      title: 'System Administration',
      icon: <Code className="w-8 h-8" />,
      skills: ['System Management', 'Server Administration', 'Network Configuration', 'Troubleshooting', 'IT Support', 'Infrastructure'],
    },
    {
      title: 'Currently Learning',
      icon: <Database className="w-8 h-8" />,
      skills: ['Blockchain Technology', 'Cybersecurity', 'AI Agents', 'Advanced React', 'TypeScript', 'Node.js'],
    },
    {
      title: 'Tools & Technologies',
      icon: <Smartphone className="w-8 h-8" />,
      skills: ['Git', 'VS Code', 'Chrome DevTools', 'npm', 'Command Line', 'Version Control'],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          Skills & Technologies
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-blue-400 mb-4">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-slate-700/50 rounded-lg px-3 py-2 text-slate-300 text-sm"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

