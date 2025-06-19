import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Clock, Award, BookOpen, Code, Shield, TrendingUp, ArrowRight, CheckCircle, Play } from 'lucide-react';

const YDP: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    grade: '',
    school: '',
    track: '',
    experience: '',
    goals: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form will be submitted to Web3Forms
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const tracks = [
    {
      name: 'Artificial Intelligence',
      icon: <Code className="h-6 w-6" />,
      description: 'Explore machine learning, data science, and AI applications in business',
      projects: ['Chatbot Development', 'Predictive Analytics', 'AI Ethics Research'],
      color: 'blue'
    },
    {
      name: 'Business & Entrepreneurship',
      icon: <TrendingUp className="h-6 w-6" />,
      description: 'Learn business fundamentals, startup methodologies, and market analysis',
      projects: ['Business Plan Creation', 'Market Research', 'Financial Modeling'],
      color: 'green'
    },
    {
      name: 'Cybersecurity',
      icon: <Shield className="h-6 w-6" />,
      description: 'Understand digital security, ethical hacking, and data protection',
      projects: ['Security Audit', 'Ethical Hacking Lab', 'Privacy Policy Design'],
      color: 'red'
    },
    {
      name: 'Web Development',
      icon: <BookOpen className="h-6 w-6" />,
      description: 'Build modern websites and web applications with latest technologies',
      projects: ['Personal Portfolio', 'Business Website', 'E-commerce Platform'],
      color: 'purple'
    }
  ];

  const curriculum = [
    {
      phase: 'Orientation',
      duration: '2 weeks',
      topics: [
        'Program introduction and goal setting',
        'Ethical frameworks in technology',
        'Career exploration across all tracks',
        'Team formation and collaboration'
      ]
    },
    {
      phase: 'Specialization',
      duration: '12 weeks',
      topics: [
        'Deep dive into chosen track',
        'Hands-on skill development',
        'Industry mentor sessions',
        'Weekly project milestones'
      ]
    },
    {
      phase: 'Project Development',
      duration: '8 weeks',
      topics: [
        'Capstone project planning',
        'Implementation and testing',
        'Peer review and feedback',
        'Final presentation preparation'
      ]
    },
    {
      phase: 'Showcase',
      duration: '2 weeks',
      topics: [
        'Project presentations',
        'Portfolio development',
        'Certificate ceremony',
        'Alumni network onboarding'
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Riya Sharma',
      school: 'Delhi Public School',
      track: 'AI',
      quote: 'YDP opened my eyes to the possibilities in AI. I built my first chatbot and now I\'m planning to study computer science.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Arjun Patel',
      school: 'Kendriya Vidyalaya',
      track: 'Business',
      quote: 'The entrepreneurship track taught me how to think like a founder. I\'ve already started a small online business!',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Ananya Singh',
      school: 'DAV Public School',
      track: 'Web Dev',
      quote: 'I never thought I could code, but YDP made it so accessible. Now I\'m building websites for local businesses.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const getTrackColor = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      red: 'bg-red-100 text-red-600',
      purple: 'bg-purple-100 text-purple-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <span className="text-blue-600 font-semibold">Youth Development Program</span>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Discover Your Future Career Path</h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Perfect for students in Grades 9-10, YDP introduces you to real-world careers 
                through hands-on modules in AI, Business, Cybersecurity, and Web Development.
              </p>
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>6 months program</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="h-5 w-5 mr-2" />
                  <span>1200+ alumni</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Award className="h-5 w-5 mr-2" />
                  <span>Industry certification</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#apply"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors"
                >
                  Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="#curriculum"
                  className="bg-white hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-lg font-semibold border border-gray-300 inline-flex items-center transition-colors"
                >
                  <Play className="mr-2 h-5 w-5" /> View Curriculum
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Students working on projects"
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-lg">
                <div className="text-2xl font-bold text-blue-600">4</div>
                <div className="text-sm text-gray-600">Career Tracks</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Tracks */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Track</h2>
            <p className="text-xl text-gray-600">
              Explore four exciting career paths with hands-on projects and expert mentorship
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {tracks.map((track, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${getTrackColor(track.color)}`}>
                  {track.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{track.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{track.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Sample Projects:</h4>
                  <ul className="space-y-2">
                    {track.projects.map((project, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{project}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Timeline */}
      <section id="curriculum" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Program Curriculum</h2>
            <p className="text-xl text-gray-600">
              24-week journey from exploration to specialization
            </p>
          </div>
          
          <div className="space-y-8">
            {curriculum.map((phase, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div className="flex items-center mb-4 md:mb-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{phase.phase}</h3>
                      <p className="text-blue-600 font-medium">{phase.duration}</p>
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {phase.topics.map((topic, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Student Testimonials Placeholder */}
<section className="py-20">
  <div className="max-w-7xl mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Success Story Begins Here</h2>
      <p className="text-xl text-gray-600">
        We’re just getting started — and *your* journey could be the first story we share.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {[1, 2, 3].map((_, index) => (
        <div
          key={index}
          className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg flex flex-col items-center justify-center text-center"
        >
          <div className="w-16 h-16 rounded-full bg-gray-200 mb-4 flex items-center justify-center text-gray-500 text-xl">
            🚀
          </div>
          <blockquote className="text-gray-700 mb-6 italic">
            "This could be your story. The path to your dream career starts here."
          </blockquote>
          <div>
            <div className="font-semibold text-gray-900">Coming Soon</div>
            <div className="text-gray-600 text-sm">Future Graduate</div>
            <div className="text-blue-600 font-medium text-sm">YDP Track</div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Application Form */}
      <section id="apply" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Join YDP Today</h2>
            <p className="text-xl text-gray-600">
              Take the first step towards an exciting career in technology and business
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="_web3forms" value="eb41a6dc-0668-45ab-8c96-27e0a0d0ccea" />
              <input type="hidden" name="_redirect" value={`${window.location.origin}/thank-you?type=student`} />
              <input type="hidden" name="_subject" value="New YDP Application" />
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="grade" className="block text-sm font-medium text-gray-700 mb-2">
                    Current Grade *
                  </label>
                  <select
                    id="grade"
                    name="grade"
                    required
                    value={formData.grade}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Grade</option>
                    <option value="9">Grade 9</option>
                    <option value="10">Grade 10</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="school" className="block text-sm font-medium text-gray-700 mb-2">
                  School Name *
                </label>
                <input
                  type="text"
                  id="school"
                  name="school"
                  required
                  value={formData.school}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="track" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Track *
                </label>
                <select
                  id="track"
                  name="track"
                  required
                  value={formData.track}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select Track</option>
                  <option value="ai">Artificial Intelligence</option>
                  <option value="business">Business & Entrepreneurship</option>
                  <option value="cybersecurity">Cybersecurity</option>
                  <option value="webdev">Web Development</option>
                </select>
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                  Previous Experience (Optional)
                </label>
                <textarea
                  id="experience"
                  name="experience"
                  rows={3}
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Any coding, business, or related experience..."
                />
              </div>

              <div>
                <label htmlFor="goals" className="block text-sm font-medium text-gray-700 mb-2">
                  Career Goals *
                </label>
                <textarea
                  id="goals"
                  name="goals"
                  required
                  rows={4}
                  value={formData.goals}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="What career interests you and why do you want to join YDP?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Questions About YDP?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Our admissions team is here to help you understand if YDP is the right fit for your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors"
            >
              Contact Admissions <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/programs"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors"
            >
              Explore Other Programs <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default YDP;