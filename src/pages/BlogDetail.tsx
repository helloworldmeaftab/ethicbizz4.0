import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock, Share2, Twitter, Linkedin, Facebook } from 'lucide-react';

const BlogDetail: React.FC = () => {
  const { slug } = useParams();

  // In a real app, this would fetch data based on the slug
const articleData = {
  'ethical-ai-education': {
    title: 'The Future of Ethical AI in Education',
    author: {
      name: 'Sarash Mishra',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Sarash is the founder of EthicBizz and a passionate advocate for ethical technology education. With over 15 years of experience in education and technology, he believes in preparing students for a future where ethics and innovation go hand in hand.'
    },
    date: 'December 15, 2024',
    readTime: '8 min read',
    category: 'Ethics in AI',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['AI', 'Ethics', 'Education', 'Future'],
    content: `<!-- Same long HTML content already provided -->`,
    relatedPosts: [
      {
        title: "Building Tomorrow's Leaders Today",
        slug: 'building-tomorrows-leaders',
        image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        title: 'How EthicBizz Aligns with NEP 2020 Goals',
        slug: 'nep-2020-alignment',
        image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
      }
    ]
  },

  'building-tomorrows-leaders': {
    title: "Building Tomorrow's Leaders Today",
    author: {
      name: 'Sarash Mishra',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Sarash is a lifelong educator focused on leadership, ethics, and sustainable development. He founded EthicBizz to transform students into agents of change.'
    },
    date: 'January 5, 2025',
    readTime: '7 min read',
    category: 'Leadership',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Leadership', 'Youth', 'Empowerment'],
    content: `
      <p class="text-lg text-gray-700 leading-relaxed mb-6">
        Today’s students are tomorrow’s leaders—but only if we give them the right tools. At EthicBizz, leadership isn't just about titles. It’s about service, empathy, decision-making, and the courage to do what’s right, not what’s easy.
      </p>
      <h2 class="text-2xl font-bold text-gray-900 mb-4">The Shift from Authority to Influence</h2>
      <p class="text-gray-700 leading-relaxed mb-6">
        In our leadership modules, students learn to influence through ideas, not position. We train them to speak up for justice, to rally teams for social good, and to lead with integrity.
      </p>
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Hands-On Leadership</h2>
      <p class="text-gray-700 leading-relaxed mb-6">
        Every EthicBizz student leads a real-world project—from community cleanups to youth financial literacy workshops. These aren’t simulations—they're real impact moments.
      </p>
      <blockquote class="border-l-4 border-blue-500 pl-6 my-8 italic text-gray-700 text-lg">
        "Leadership is practiced not so much in words as in attitude and in actions."
      </blockquote>
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Outcome: Confidence with Purpose</h2>
      <p class="text-gray-700 leading-relaxed mb-6">
        Our programs consistently show students becoming confident public speakers, effective team players, and thoughtful change agents. They don’t just lead—they inspire.
      </p>
    `,
    relatedPosts: [
      {
        title: 'The Future of Ethical AI in Education',
        slug: 'ethical-ai-education',
        image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400'
      },
      {
        title: 'How EthicBizz Aligns with NEP 2020 Goals',
        slug: 'nep-2020-alignment',
        image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
      }
    ]
  }
};


  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <Link
            to="/blog"
            className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Blog
          </Link>
          
          <div className="mb-6">
            <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
              {article.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {article.title}
          </h1>
          
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <img
                src={article.author.image}
                alt={article.author.name}
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <p className="font-semibold text-gray-900">{article.author.name}</p>
                <p className="text-gray-600 text-sm">{article.author.role}</p>
              </div>
            </div>
            
            <div className="text-right">
              <div className="flex items-center text-gray-600 text-sm mb-1">
                <Calendar className="h-4 w-4 mr-2" />
                {article.date}
              </div>
              <div className="flex items-center text-gray-600 text-sm">
                <Clock className="h-4 w-4 mr-2" />
                {article.readTime}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="mb-12">
        <div className="max-w-6xl mx-auto px-4">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
              
              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Share */}
              <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Share2 className="h-5 w-5 mr-2" />
                  Share Article
                </h3>
                <div className="space-y-3">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-blue-500 transition-colors"
                  >
                    <Twitter className="h-5 w-5 mr-3" />
                    Share on Twitter
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <Linkedin className="h-5 w-5 mr-3" />
                    Share on LinkedIn
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-blue-700 transition-colors"
                  >
                    <Facebook className="h-5 w-5 mr-3" />
                    Share on Facebook
                  </a>
                </div>
              </div>
              
              {/* Author Bio */}
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">About the Author</h3>
                <div className="flex items-center mb-4">
                  <img
                    src={article.author.image}
                    alt={article.author.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{article.author.name}</p>
                    <p className="text-purple-600 text-sm">{article.author.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{article.author.bio}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Related Articles</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {article.relatedPosts.map((post, index) => (
              <Link
                key={index}
                to={`/blog/${post.slug}`}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                    {post.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Enjoyed This Article?</h2>
          <p className="text-xl mb-8 text-purple-100">
            Subscribe to our newsletter for more insights on ethical business education.
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
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;