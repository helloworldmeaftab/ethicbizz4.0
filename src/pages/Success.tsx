import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, TrendingUp, ArrowRight, ExternalLink, Filter, Search } from 'lucide-react';

const Success: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Projects', count: 67 },
    { id: 'ai', name: 'AI & Technology', count: 23 },
    { id: 'social', name: 'Social Impact', count: 18 },
    { id: 'environment', name: 'Environment', count: 12 },
    { id: 'education', name: 'Education', count: 8 },
    { id: 'healthcare', name: 'Healthcare', count: 6 }
  ];

  const successStories = [
    {
      id: 'ecotrack',
      title: 'EcoTrack - Carbon Footprint App',
      student: 'Priya Sharma',
      grade: 'Grade 12',
      school: 'Delhi Public School',
      category: 'environment',
      description: 'Mobile app that tracks personal carbon footprint and gamifies sustainable living',
      impact: '1000+ active users, 15% average carbon reduction',
      technologies: ['React Native', 'Firebase', 'Machine Learning'],
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
      awards: ['Best Environmental Solution', 'People\'s Choice Award'],
      mentor: 'Dr. Rajesh Kumar, Environmental Scientist',
      slug: 'ecotrack-carbon-footprint-app'
    },
    {
      id: 'studybuddy',
      title: 'StudyBuddy - AI Learning Assistant',
      student: 'Arjun Patel',
      grade: 'Grade 11',
      school: 'Kendriya Vidyalaya',
      category: 'ai',
      description: 'AI-powered study companion that adapts to individual learning styles',
      impact: 'Used in 50+ schools, 25% improvement in test scores',
      technologies: ['Python', 'TensorFlow', 'Natural Language Processing'],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      awards: ['Best AI Innovation', 'Microsoft AI Award'],
      mentor: 'Priya Sharma, AI Engineer at Google',
      slug: 'studybuddy-ai-learning-assistant'
    },
    {
      id: 'healthconnect',
      title: 'HealthConnect - Rural Healthcare Platform',
      student: 'Ananya Singh',
      grade: 'Grade 12',
      school: 'DAV Public School',
      category: 'healthcare',
      description: 'Telemedicine platform connecting rural patients with urban doctors',
      impact: '500+ consultations, 3 rural clinics onboarded',
      technologies: ['React', 'Node.js', 'WebRTC', 'MongoDB'],
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      awards: ['Best Healthcare Solution', 'UNICEF Recognition'],
      mentor: 'Dr. Meera Gupta, Telemedicine Specialist',
      slug: 'healthconnect-rural-healthcare'
    },
    {
      id: 'farmsmart',
      title: 'FarmSmart - Agricultural IoT Solution',
      student: 'Rajesh Kumar',
      grade: 'Grade 11',
      school: 'Modern School',
      category: 'environment',
      description: 'IoT sensors for smart irrigation and crop monitoring',
      impact: '30% water savings, 20 farms using the system',
      technologies: ['Arduino', 'IoT Sensors', 'Mobile App', 'Data Analytics'],
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
      awards: ['Best IoT Innovation', 'Sustainability Award'],
      mentor: 'Vikram Singh, AgriTech Entrepreneur',
      slug: 'farmsmart-agricultural-iot'
    },
    {
      id: 'skillbridge',
      title: 'SkillBridge - Vocational Training Platform',
      student: 'Kavya Reddy',
      grade: 'Grade 12',
      school: 'Narayana School',
      category: 'education',
      description: 'Online platform connecting youth with vocational training opportunities',
      impact: '2000+ students trained, 80% job placement rate',
      technologies: ['Vue.js', 'Laravel', 'Payment Gateway', 'Video Streaming'],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      awards: ['Best Education Platform', 'Social Impact Award'],
      mentor: 'Anita Desai, EdTech Consultant',
      slug: 'skillbridge-vocational-training'
    },
    {
      id: 'safespace',
      title: 'SafeSpace - Mental Health Support App',
      student: 'Rohit Sharma',
      grade: 'Grade 11',
      school: 'Ryan International',
      category: 'social',
      description: 'Anonymous peer support platform for teenage mental health',
      impact: '5000+ users, 24/7 crisis support available',
      technologies: ['Flutter', 'Firebase', 'AI Chatbot', 'Encryption'],
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      awards: ['Best Social Impact', 'Mental Health Innovation Award'],
      mentor: 'Dr. Priya Patel, Clinical Psychologist',
      slug: 'safespace-mental-health-app'
    }
  ];

  const filteredStories = successStories.filter(story => {
    const matchesCategory = selectedCategory === 'all' || story.category === selectedCategory;
    const matchesSearch = story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         story.student.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         story.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const stats = [
    { label: 'Student Startups', value: '67+', icon: <TrendingUp className="h-8 w-8 text-blue-600" /> },
    { label: 'Lives Impacted', value: '50,000+', icon: <Users className="h-8 w-8 text-green-600" /> },
    { label: 'Awards Won', value: '120+', icon: <Award className="h-8 w-8 text-purple-600" /> }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Award className="h-10 w-10 text-blue-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Student Success Stories</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Discover how EthicBizz students are creating real solutions to meaningful problems, 
              launching successful startups, and making a positive impact in their communities.
            </p>
            
            {/* Stats */}
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects, students, or technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            {/* Category Filters */}
            <div className="flex items-center gap-2 overflow-x-auto">
              <Filter className="h-5 w-5 text-gray-400 flex-shrink-0" />
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story) => (
              <div key={story.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-gray-100">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                      {categories.find(c => c.id === story.category)?.name}
                    </span>
                    <div className="flex gap-1">
                      {story.awards.slice(0, 1).map((award, idx) => (
                        <Award key={idx} className="h-4 w-4 text-yellow-500" />
                      ))}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{story.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{story.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-1">
                      <strong>Created by:</strong> {story.student}
                    </p>
                    <p className="text-sm text-gray-600 mb-1">
                      <strong>School:</strong> {story.school}
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Grade:</strong> {story.grade}
                    </p>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-3 mb-4">
                    <p className="text-sm font-medium text-green-800 mb-1">Impact:</p>
                    <p className="text-sm text-green-700">{story.impact}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {story.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                    {story.technologies.length > 3 && (
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        +{story.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <Link
                    to={`/success/${story.slug}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    Read Full Story <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {filteredStories.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No projects found matching your criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchTerm('');
                }}
                className="mt-4 text-blue-600 hover:text-blue-700 font-semibold"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Featured Mentor Quote */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <blockquote className="text-2xl italic text-gray-700 mb-6">
            "What amazes me most about EthicBizz students is not just their technical skills, 
            but their commitment to creating solutions that truly matter. They're not just building apps—they're building a better world."
          </blockquote>
          <div className="flex items-center justify-center">
            <img
              src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100"
              alt="Dr. Rajesh Kumar"
              className="w-16 h-16 rounded-full object-cover mr-4"
            />
            <div className="text-left">
              <p className="font-semibold text-gray-900">Dr. Rajesh Kumar</p>
              <p className="text-gray-600">Senior Data Scientist, Microsoft</p>
              <p className="text-blue-600 text-sm">EthicBizz Mentor</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Create Your Success Story?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of students who are already building solutions that matter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/programs"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors"
            >
              Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors"
            >
              Get Guidance <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Success;