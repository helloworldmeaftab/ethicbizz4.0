import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, Trophy, Clock, ArrowRight, CheckCircle, MapPin, Star, Code, Lightbulb } from 'lucide-react';

const Events: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    grade: '',
    school: '',
    event: '',
    team: '',
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

  const upcomingEvents = [
    {
      id: 'ai-hackathon',
      title: 'AI for Good Hackathon',
      date: 'January 15-17, 2025',
      time: '48 hours',
      location: 'EthicBizz Campus, Bangalore',
      type: 'Hackathon',
      description: 'Build AI solutions that address real social and environmental challenges',
      prizes: '₹50,000 in prizes + Internship opportunities',
      participants: '200+ students',
      status: 'Open',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: [
        'Mentorship from Microsoft AI experts',
        'Access to Azure AI services',
        'Focus on UN SDG alignment',
        'Pitch to industry judges'
      ],
      schedule: [
        { time: 'Day 1 - 9:00 AM', activity: 'Opening ceremony and team formation' },
        { time: 'Day 1 - 11:00 AM', activity: 'Problem statements revealed' },
        { time: 'Day 2 - 10:00 AM', activity: 'Mentor check-ins and guidance' },
        { time: 'Day 3 - 2:00 PM', activity: 'Final presentations and judging' }
      ]
    },
    {
      id: 'startup-weekend',
      title: 'Startup Weekend',
      date: 'February 5-7, 2025',
      time: '54 hours',
      location: 'IIT Delhi Campus',
      type: 'Startup Simulation',
      description: 'Transform your idea into a viable business in just 54 hours',
      prizes: 'Incubation opportunities + ₹25,000 seed funding',
      participants: '150+ aspiring entrepreneurs',
      status: 'Open',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: [
        'Lean startup methodology',
        'Business model canvas workshop',
        'Customer validation techniques',
        'Investor pitch training'
      ],
      schedule: [
        { time: 'Friday - 6:00 PM', activity: 'Idea pitches and team formation' },
        { time: 'Saturday - 9:00 AM', activity: 'Customer discovery and validation' },
        { time: 'Sunday - 11:00 AM', activity: 'Business model refinement' },
        { time: 'Sunday - 5:00 PM', activity: 'Final pitches to investors' }
      ]
    },
    {
      id: 'sustainability-challenge',
      title: 'Sustainability Challenge',
      date: 'March 12-14, 2025',
      time: '3 days',
      location: 'UNICEF Office, Mumbai',
      type: 'Social Impact',
      description: 'Create innovative solutions for environmental sustainability',
      prizes: 'Implementation funding up to ₹1,00,000',
      participants: '100+ change makers',
      status: 'Coming Soon',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: [
        'Partnership with UNICEF',
        'Focus on climate action',
        'Real implementation opportunities',
        'Global impact potential'
      ],
      schedule: [
        { time: 'Day 1', activity: 'Problem deep-dive and research' },
        { time: 'Day 2', activity: 'Solution design and prototyping' },
        { time: 'Day 3', activity: 'Impact measurement and presentation' }
      ]
    }
  ];

  const pastEvents = [
    {
      title: 'EdTech Innovation Challenge',
      date: 'November 2024',
      participants: '180 students',
      winner: 'StudyBuddy AI - Personalized Learning Assistant',
      impact: 'Now used in 50+ schools',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'HealthTech Hackathon',
      date: 'October 2024',
      participants: '220 students',
      winner: 'HealthConnect - Rural Telemedicine Platform',
      impact: '500+ consultations completed',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'FinTech for Good',
      date: 'September 2024',
      participants: '160 students',
      winner: 'MicroSave - Digital Savings for Rural Communities',
      impact: '1000+ users onboarded',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const eventGuidelines = [
    {
      title: 'Eligibility',
      points: [
        'Students in grades 9-12',
        'Individual or team participation (max 4 members)',
        'Basic programming knowledge preferred',
        'Passion for solving real problems'
      ]
    },
    {
      title: 'What to Bring',
      points: [
        'Laptop with development environment',
        'Chargers and necessary cables',
        'Notebook for ideation',
        'Positive attitude and team spirit'
      ]
    },
    {
      title: 'What We Provide',
      points: [
        'Meals and refreshments',
        'Mentorship and technical support',
        'Development resources and APIs',
        'Presentation equipment'
      ]
    },
    {
      title: 'Judging Criteria',
      points: [
        'Innovation and creativity (25%)',
        'Technical implementation (25%)',
        'Social impact potential (25%)',
        'Presentation and pitch (25%)'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Calendar className="h-10 w-10 text-purple-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Events & Challenges</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Join hackathons, startup weekends, and innovation challenges where you'll solve real problems, 
              build amazing projects, and compete for exciting prizes and opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#register"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors"
              >
                Register for Events <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#upcoming"
                className="bg-white hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-lg font-semibold border border-gray-300 inline-flex items-center transition-colors"
              >
                View Schedule <Calendar className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="upcoming" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-600">
              Don't miss these exciting opportunities to showcase your skills
            </p>
          </div>
          
          <div className="space-y-12">
            {upcomingEvents.map((event, index) => (
              <div key={event.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        event.status === 'Open' 
                          ? 'bg-green-100 text-green-600' 
                          : 'bg-yellow-100 text-yellow-600'
                      }`}>
                        {event.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                        {event.type === 'Hackathon' ? <Code className="h-6 w-6 text-purple-600" /> : <Lightbulb className="h-6 w-6 text-purple-600" />}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{event.title}</h3>
                        <p className="text-purple-600 font-medium">{event.type}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">{event.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center">
                        <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                        <span className="text-gray-700 text-sm">{event.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-gray-400 mr-2" />
                        <span className="text-gray-700 text-sm">{event.time}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                        <span className="text-gray-700 text-sm">{event.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-5 w-5 text-gray-400 mr-2" />
                        <span className="text-gray-700 text-sm">{event.participants}</span>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-4 mb-6">
                      <div className="flex items-center mb-2">
                        <Trophy className="h-5 w-5 text-purple-600 mr-2" />
                        <span className="font-semibold text-gray-900">Prizes & Rewards:</span>
                      </div>
                      <p className="text-gray-700">{event.prizes}</p>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      {event.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                    
                    <button
                      className={`w-full px-6 py-3 rounded-lg font-semibold transition-colors ${
                        event.status === 'Open' 
                          ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                          : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      }`}
                      disabled={event.status !== 'Open'}
                    >
                      {event.status === 'Open' ? 'Register Now' : 'Registration Opens Soon'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Past Event Highlights</h2>
            <p className="text-xl text-gray-600">
              Amazing projects and real impact from our previous events
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4">{event.date}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Participants:</span>
                    <span className="font-semibold">{event.participants}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-600">Winner:</span>
                    <p className="font-semibold text-purple-600">{event.winner}</p>
                  </div>
                </div>
                
                <div className="bg-green-50 rounded-lg p-3">
                  <p className="text-sm font-medium text-green-800 mb-1">Real Impact:</p>
                  <p className="text-sm text-green-700">{event.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Guidelines */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Event Guidelines</h2>
            <p className="text-xl text-gray-600">
              Everything you need to know before participating
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eventGuidelines.map((guideline, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{guideline.title}</h3>
                <ul className="space-y-2">
                  {guideline.points.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="register" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Register for Events</h2>
            <p className="text-xl text-gray-600">
              Secure your spot in our upcoming events and challenges
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="_web3forms" value="eb41a6dc-0668-45ab-8c96-27e0a0d0ccea" />
              <input type="hidden" name="_redirect" value={`${window.location.origin}/thank-you?type=student`} />
              <input type="hidden" name="_subject" value="New Event Registration" />
              
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Select Grade</option>
                    <option value="9">Grade 9</option>
                    <option value="10">Grade 10</option>
                    <option value="11">Grade 11</option>
                    <option value="12">Grade 12</option>
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="event" className="block text-sm font-medium text-gray-700 mb-2">
                    Event Interest *
                  </label>
                  <select
                    id="event"
                    name="event"
                    required
                    value={formData.event}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Select Event</option>
                    <option value="ai-hackathon">AI for Good Hackathon</option>
                    <option value="startup-weekend">Startup Weekend</option>
                    <option value="sustainability-challenge">Sustainability Challenge</option>
                    <option value="all">All upcoming events</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="team" className="block text-sm font-medium text-gray-700 mb-2">
                    Team Participation
                  </label>
                  <select
                    id="team"
                    name="team"
                    value={formData.team}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Select Option</option>
                    <option value="individual">Individual</option>
                    <option value="have-team">I have a team</option>
                    <option value="need-team">I need a team</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                  Previous Experience
                </label>
                <textarea
                  id="experience"
                  name="experience"
                  rows={3}
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Any hackathons, coding competitions, or relevant projects..."
                />
              </div>

              <div>
                <label htmlFor="goals" className="block text-sm font-medium text-gray-700 mb-2">
                  What do you hope to achieve? *
                </label>
                <textarea
                  id="goals"
                  name="goals"
                  required
                  rows={4}
                  value={formData.goals}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Your goals and expectations from participating in events..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                Register for Events
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Innovate?</h2>
          <p className="text-xl mb-8 text-purple-100">
            Join hundreds of students who are building solutions to real-world problems through our events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors"
            >
              Have Questions? <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/success"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors"
            >
              See Past Winners <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;