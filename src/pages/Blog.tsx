import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Posts', count: 24 },
    { id: 'leadership', name: 'Leadership', count: 8 },
    { id: 'innovation', name: 'Innovation', count: 7 },
    { id: 'ethics', name: 'Ethics in AI', count: 5 },
    { id: 'education', name: 'Education', count: 4 }
  ];

  const blogPosts = [
    {
      id: 'ethical-ai-education',
      title: 'The Future of Ethical AI in Education',
      excerpt: 'Exploring how artificial intelligence can be responsibly integrated into learning environments while maintaining human values and promoting critical thinking.',
      author: 'Sarash Mishra',
      authorRole: 'Founder & CEO',
      authorImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: 'December 15, 2024',
      readTime: '8 min read',
      category: 'ethics',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['AI', 'Ethics', 'Education', 'Future'],
      featured: true
    },
    {
      id: 'building-tomorrows-leaders',
      title: 'Building Tomorrow\'s Leaders Today',
      excerpt: 'Why combining ethics with entrepreneurship creates more sustainable and impactful businesses that benefit all stakeholders.',
      author: 'Dr. Rajesh Kumar',
      authorRole: 'Program Director',
      authorImage: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: 'December 12, 2024',
      readTime: '6 min read',
      category: 'leadership',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Leadership', 'Entrepreneurship', 'Ethics'],
      featured: true
    },
    {
      id: 'student-innovation-spotlight',
      title: 'Student Innovation Spotlight: EcoTrack Success Story',
      excerpt: 'How Priya Sharma\'s carbon footprint tracking app is making a real difference in environmental awareness among young people.',
      author: 'Priya Sharma',
      authorRole: 'Head of Curriculum',
      authorImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: 'December 10, 2024',
      readTime: '5 min read',
      category: 'innovation',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Innovation', 'Environment', 'Student Success'],
      featured: false
    },
    {
      id: 'nep-2020-alignment',
      title: 'How EthicBizz Aligns with NEP 2020 Goals',
      excerpt: 'Understanding how our programs support the National Education Policy\'s vision for holistic and multidisciplinary education.',
      author: 'Dr. Anita Desai',
      authorRole: 'Education Policy Advisor',
      authorImage: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: 'December 8, 2024',
      readTime: '7 min read',
      category: 'education',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['NEP 2020', 'Policy', 'Education Reform'],
      featured: false
    },
    {
      id: 'mentorship-impact',
      title: 'The Power of Mentorship in Student Development',
      excerpt: 'How industry professionals are shaping the next generation through meaningful mentorship relationships.',
      author: 'Vikram Singh',
      authorRole: 'Senior Mentor',
      authorImage: 'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: 'December 5, 2024',
      readTime: '6 min read',
      category: 'leadership',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Mentorship', 'Development', 'Industry'],
      featured: false
    },
    {
      id: 'hackathon-culture',
      title: 'Building a Culture of Innovation Through Hackathons',
      excerpt: 'Why hackathons are more than competitions—they\'re catalysts for creative problem-solving and collaboration.',
      author: 'Meera Gupta',
      authorRole: 'Events Coordinator',
      authorImage: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400',
      date: 'December 3, 2024',
      readTime: '5 min read',
      category: 'innovation',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Hackathons', 'Innovation', 'Collaboration'],
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">EthicBizz Insights</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Thought leadership on ethics, education, innovation, and the future of business. 
              Insights from our team, mentors, and the broader EthicBizz community.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles, authors, or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            
            {/* Category Filters */}
            <div className="flex items-center gap-2 overflow-x-auto">
              <Tag className="h-5 w-5 text-gray-400 flex-shrink-0" />
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-purple-600 text-white'
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

      {/* Featured Posts */}
      {selectedCategory === 'all' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Featured Articles</h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover"
                  />
                  
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium mr-4">
                        {categories.find(c => c.id === post.category)?.name}
                      </span>
                      <span className="text-gray-500 text-sm">{post.readTime}</span>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 hover:text-purple-600 transition-colors">
                      <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </h2>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img
                          src={post.authorImage}
                          alt={post.author}
                          className="w-10 h-10 rounded-full object-cover mr-3"
                        />
                        <div>
                          <p className="font-semibold text-gray-900">{post.author}</p>
                          <p className="text-gray-600 text-sm">{post.authorRole}</p>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <p className="text-gray-600 text-sm">{post.date}</p>
                        <Link
                          to={`/blog/${post.id}`}
                          className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold text-sm mt-1"
                        >
                          Read More <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            {selectedCategory === 'all' ? 'Latest Articles' : `${categories.find(c => c.id === selectedCategory)?.name} Articles`}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                      {categories.find(c => c.id === post.category)?.name}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-purple-600 transition-colors">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        src={post.authorImage}
                        alt={post.author}
                        className="w-8 h-8 rounded-full object-cover mr-2"
                      />
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{post.author}</p>
                        <p className="text-gray-600 text-xs">{post.date}</p>
                      </div>
                    </div>
                    
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold text-sm"
                    >
                      Read <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No articles found matching your criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchTerm('');
                }}
                className="mt-4 text-purple-600 hover:text-purple-700 font-semibold"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl mb-8 text-purple-100">
            Get the latest insights on ethical business education delivered to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="bg-white text-purple-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
          
          <p className="text-purple-200 text-sm mt-4">
            No spam, unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Blog;