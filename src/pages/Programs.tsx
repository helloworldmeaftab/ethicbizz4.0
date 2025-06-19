import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Award, Briefcase, Target, ArrowRight, CheckCircle, Clock } from 'lucide-react';

const Programs: React.FC = () => {
  const programs = [
    {
      id: 'ydp',
      title: 'Youth Development Program (YDP)',
      subtitle: 'Grades 9-10',
      description: 'Introduction to real-world careers through hands-on modules in AI, Business, Cybersecurity, and Web Development.',
      duration: '6 months',
      students: '1200+',
      icon: <Users className="h-8 w-8" />,
      color: 'blue',
      features: [
        'Career exploration across 4 major fields',
        'Hands-on projects and portfolios',
        'Industry mentor guidance',
        'Certification upon completion'
      ],
      link: '/programs/ydp'
    },
    {
      id: 'ssp',
      title: 'Senior Secondary Program (SSP)',
      subtitle: 'Grades 11-12',
      description: 'Career-focused training with specialized tracks in AI, UX Design, Business, and Cybersecurity.',
      duration: '2 years',
      students: '800+',
      icon: <BookOpen className="h-8 w-8" />,
      color: 'teal',
      features: [
        'Year 1: Exploration and skill building',
        'Year 2: Execution and capstone project',
        'Industry internship opportunities',
        'College application portfolio support'
      ],
      link: '/programs/ssp'
    },
    {
      id: 'epc',
      title: 'Ethical Professional Core (EPC)',
      subtitle: 'Foundation Program',
      description: 'Ethics-powered framework using Theory of Knowledge principles, Harvard cases, and UN SDG alignment.',
      duration: 'Integrated',
      students: 'All programs',
      icon: <Target className="h-8 w-8" />,
      color: 'green',
      features: [
        'Theory of Knowledge (TOK) methodology',
        'Harvard Business School case studies',
        'UN SDG project alignment',
        'Ethical decision-making frameworks'
      ],
      link: '/programs/epc'
    },
    {
      id: 'erwa',
      title: 'Ethical Real-World Application (ERWA)',
      subtitle: 'Practical Experience',
      description: 'Hands-on experience through hackathons, startup simulations, and partnerships with industry leaders.',
      duration: 'Ongoing',
      students: 'All levels',
      icon: <Briefcase className="h-8 w-8" />,
      color: 'purple',
      features: [
        'Monthly hackathons and competitions',
        'Startup simulation workshops',
        'NGO collaboration projects',
        'Microsoft and IIT partnerships'
      ],
      link: '/programs/erwa'
    },
    {
      id: 'ecp',
      title: 'Ethical Capstone Project (ECP)',
      subtitle: 'Final Project',
      description: 'Culminating project where students research, prototype, pitch, and launch solutions to real problems.',
      duration: '6 months',
      students: '500+',
      icon: <Award className="h-8 w-8" />,
      color: 'orange',
      features: [
        'Research and problem identification',
        'Prototype development',
        'Investor-style pitch presentations',
        'Launch support and mentorship'
      ],
      link: '/programs/ecp'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600 hover:bg-blue-200',
      teal: 'bg-teal-100 text-teal-600 hover:bg-teal-200',
      green: 'bg-green-100 text-green-600 hover:bg-green-200',
      purple: 'bg-purple-100 text-purple-600 hover:bg-purple-200',
      orange: 'bg-orange-100 text-orange-600 hover:bg-orange-200'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getBorderColor = (color: string) => {
    const colors = {
      blue: 'border-blue-200 hover:border-blue-300',
      teal: 'border-teal-200 hover:border-teal-300',
      green: 'border-green-200 hover:border-green-300',
      purple: 'border-purple-200 hover:border-purple-300',
      orange: 'border-orange-200 hover:border-orange-300'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getButtonColor = (color: string) => {
    const colors = {
      blue: 'bg-blue-600 hover:bg-blue-700',
      teal: 'bg-teal-600 hover:bg-teal-700',
      green: 'bg-green-600 hover:bg-green-700',
      purple: 'bg-purple-600 hover:bg-purple-700',
      orange: 'bg-orange-600 hover:bg-orange-700'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Programs</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive educational pathways designed to develop ethical business leaders 
            through progressive skill-building, real-world application, and meaningful impact.
          </p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Path</h2>
            <p className="text-xl text-gray-600">
              From exploration to execution, our programs grow with you
            </p>
          </div>

          <div className="grid gap-8">
            {programs.map((program, index) => (
              <div
                key={program.id}
                className={`bg-white rounded-2xl shadow-lg border-2 ${getBorderColor(program.color)} hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-4">
                        <div className={`w-16 h-16 rounded-xl flex items-center justify-center mr-4 ${getColorClasses(program.color)}`}>
                          {program.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{program.title}</h3>
                          <p className="text-gray-600 font-medium">{program.subtitle}</p>
                        </div>
                      </div>
                      
                      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        {program.description}
                      </p>

                      <div className="flex flex-wrap gap-6 mb-6">
                        <div className="flex items-center text-gray-600">
                          <Clock className="h-5 w-5 mr-2" />
                          <span>{program.duration}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Users className="h-5 w-5 mr-2" />
                          <span>{program.students} students</span>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-3 mb-6">
                        {program.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="lg:ml-8 flex-shrink-0">
                      <Link
                        to={program.link}
                        className={`inline-flex items-center px-8 py-4 rounded-lg text-white font-semibold transition-colors ${getButtonColor(program.color)}`}
                      >
                        Learn More <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Flow */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Your Learning Journey</h2>
          
          <div className="relative">
            {/* Flow line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-300 to-teal-300 transform -translate-y-1/2"></div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center relative">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <span className="text-blue-600 font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Foundation</h3>
                <p className="text-gray-600">Start with EPC to build ethical frameworks and critical thinking skills.</p>
              </div>
              
              <div className="text-center relative">
                <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <span className="text-teal-600 font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Exploration</h3>
                <p className="text-gray-600">Choose YDP or SSP based on your grade level and interests.</p>
              </div>
              
              <div className="text-center relative">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <span className="text-purple-600 font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Application</h3>
                <p className="text-gray-600">Participate in ERWA activities for hands-on experience and networking.</p>
              </div>
              
              <div className="text-center relative">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <span className="text-orange-600 font-bold text-xl">4</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Impact</h3>
                <p className="text-gray-600">Complete your ECP to launch a real solution and make measurable impact.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of students who are already building the future through ethical innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/join"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors"
            >
              Apply Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors"
            >
              Ask Questions <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;