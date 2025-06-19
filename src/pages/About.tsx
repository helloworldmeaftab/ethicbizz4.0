import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, Globe, Target, Download, ExternalLink } from 'lucide-react';

const About: React.FC = () => {
  const timeline = [
    {
      year: '2022',
      title: 'Foundation',
      description: 'EthicBizz was founded with a vision to integrate ethics into business education for young minds.'
    },
    {
      year: '2023',
      title: 'First Programs Launch',
      description: 'Launched YDP and SSP programs, reaching 500+ students across 25 schools.'
    },
    {
      year: '2024',
      title: 'Expansion & Partnerships',
      description: 'Partnered with Microsoft, IIT, and leading NGOs. Reached 2000+ students.'
    },
    {
      year: '2025',
      title: 'Global Impact',
      description: 'Currently impacting 2500+ students with 150+ mentors and 67 student-led startups.'
    }
  ];

  const team = [
    {
      name: 'Sarash Mishra',
      role: 'Founder & Director, EthicBizz',
      bio: 'Visionary educator and sole founder of EthicBizz, leading the platform’s mission to redefine ethical business education.',
      image: 'https://assets.pinterest.com/ext/embed.html?id=1152428992155023167',
      linkedin: 'https://www.linkedin.com/in/sarash-mishra/'
    }
  ];

  const partners = [
    { name: 'Microsoft', logo: '🔵', description: 'Technology partnership for AI and cloud resources' },
    { name: 'IIT Delhi', logo: '🎓', description: 'Academic collaboration and research initiatives' },
    { name: 'UNICEF', logo: '🌍', description: 'Youth development and education programs' },
    { name: 'Ashoka University', logo: '📚', description: 'Liberal arts education and social entrepreneurship' },
    { name: 'Teach for India', logo: '✏️', description: 'Educational outreach and teacher training' },
    { name: 'CII', logo: '🏢', description: 'Industry connections and career guidance' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About EthicBizz</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to create the next generation of ethical business leaders 
            who will shape a more sustainable and equitable world through responsible innovation.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                To integrate ethical thinking into business education for students aged 14-18, 
                preparing them to become responsible leaders who create sustainable value for society.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that combining rigorous business skills with strong ethical foundations 
                creates leaders who don't just succeed—they make a positive difference.
              </p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-teal-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                A world where every business leader prioritizes ethical decision-making, 
                creating sustainable prosperity that benefits all stakeholders.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We envision graduating students who launch startups, join corporations, 
                and lead organizations with an unwavering commitment to doing good while doing well.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px h-full w-0.5 bg-blue-200"></div>
            {timeline.map((item, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-2">{item.year}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600 text-center mb-16">
            Passionate educators and industry experts committed to student success
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16 justify-center">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-6"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed mb-6">{member.bio}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  LinkedIn
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Partners</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{partner.logo}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{partner.name}</h3>
                <p className="text-gray-600">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Report CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Download Our Impact Report</h2>
          <p className="text-xl mb-8 text-blue-100">
            Get detailed insights into our programs, student outcomes, and measurable impact on communities.
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors">
            <Download className="mr-2 h-5 w-5" />
            Download Report (PDF)
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
