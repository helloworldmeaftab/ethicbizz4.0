import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Award, Target, Lightbulb, Presentation, ArrowRight, CheckCircle, Users, FileText } from 'lucide-react';

const ECP: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    grade: '',
    school: '',
    project: '',
    problem: '',
    solution: '',
    impact: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const phases = [
    {
      title: 'Research & Problem Identification',
      duration: '6 weeks',
      icon: <Target className="h-8 w-8" />,
      color: 'blue',
      activities: [
        'Market research and user interviews',
        'Problem statement development',
        'Stakeholder analysis',
        'Feasibility assessment',
        'Ethical impact evaluation'
      ],
      deliverables: ['Research Report', 'Problem Statement', 'User Personas']
    },
    {
      title: 'Solution Design & Prototyping',
      duration: '8 weeks',
      icon: <Lightbulb className="h-8 w-8" />,
      color: 'green',
      activities: [
        'Solution ideation and validation',
        'Technical architecture design',
        'Prototype development',
        'User testing and feedback',
        'Iteration and refinement'
      ],
      deliverables: ['Working Prototype', 'Technical Documentation', 'User Feedback Report']
    },
    {
      title: 'Business Planning & Pitch Preparation',
      duration: '6 weeks',
      icon: <Presentation className="h-8 w-8" />,
      color: 'purple',
      activities: [
        'Business model development',
        'Financial projections',
        'Go-to-market strategy',
        'Pitch deck creation',
        'Presentation coaching'
      ],
      deliverables: ['Business Plan', 'Pitch Deck', 'Financial Model']
    },
    {
      title: 'Launch & Impact Measurement',
      duration: '4 weeks',
      icon: <Award className="h-8 w-8" />,
      color: 'orange',
      activities: [
        'Product launch execution',
        'User acquisition and onboarding',
        'Impact measurement and tracking',
        'Feedback collection and analysis',
        'Future roadmap planning'
      ],
      deliverables: ['Launched Product', 'Impact Report', 'Growth Plan']
    }
  ];

  const mentorSupport = [
    {
      type: 'Technical Mentors',
      description: 'Industry experts providing technical guidance',
      expertise: ['Software Development', 'AI/ML', 'Hardware Design', 'Data Science']
    },
    {
      type: 'Business Mentors',
      description: 'Entrepreneurs and business leaders',
      expertise: ['Business Strategy', 'Marketing', 'Finance', 'Operations']
    },
    {
      type: 'Domain Experts',
      description: 'Specialists in various fields and industries',
      expertise: ['Healthcare', 'Education', 'Environment', 'Social Impact']
    },
    {
      type: 'Pitch Coaches',
      description: 'Presentation and communication experts',
      expertise: ['Public Speaking', 'Storytelling', 'Investor Pitching', 'Demo Creation']
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <span className="text-orange-600 font-semibold text-lg">Pillar III</span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Ethical Capstone Project</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              The culminating experience where students research, prototype, pitch, and launch 
              real solutions to meaningful problems. Transform your learning into lasting impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#apply"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors"
              >
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <Link
                to="/success"
                className="bg-white hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-lg font-semibold border border-gray-300 inline-flex items-center transition-colors"
              >
                View Success Stories <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project Phases */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Four-Phase Journey</h2>
            <p className="text-xl text-gray-600">
              Structured approach from problem identification to solution launch
            </p>
          </div>

          <div className="space-y-8">
            {phases.map((phase, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1">
                    <div className="flex items-center mb-4">
                      <div className={`w-16 h-16 rounded-xl flex items-center justify-center mr-4 ${getColorClasses(phase.color)}`}>
                        {phase.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{phase.title}</h3>
                        <p className="text-gray-600 font-medium">{phase.duration}</p>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-1">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Activities:</h4>
                    <ul className="space-y-2">
                      {phase.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-1">
                    <h4 className="font-semibold text-gray-900 mb-3">Deliverables:</h4>
                    <ul className="space-y-2">
                      {phase.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="flex items-center">
                          <FileText className="h-4 w-4 text-blue-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentor Support */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Expert Mentorship</h2>
            <p className="text-xl text-gray-600">
              Dedicated support from industry professionals throughout your journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mentorSupport.map((mentor, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{mentor.type}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{mentor.description}</p>
                <div className="space-y-1">
                  {mentor.expertise.map((skill, idx) => (
                    <div key={idx} className="text-sm text-gray-500">{skill}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ECP;
