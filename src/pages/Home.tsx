import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Users,
  BookOpen,
  Award,
  Briefcase,
  Play,
  CheckCircle,
  Star,
  Calendar,
} from 'lucide-react';

const Home: React.FC = () => {
  const [stats, setStats] = useState({
    students: 0,
    projects: 0,
    mentors: 0,
    startups: 0,
  });

  // Animate counters on page load
  useEffect(() => {
    const duration = 2000;
    const targetStats = {
      students: 2500,
      projects: 480,
      mentors: 150,
      startups: 67,
    };

    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setStats({
        students: Math.floor(targetStats.students * progress),
        projects: Math.floor(targetStats.projects * progress),
        mentors: Math.floor(targetStats.mentors * progress),
        startups: Math.floor(targetStats.startups * progress),
      });

      if (progress === 1) clearInterval(timer);
    }, 16);

    return () => clearInterval(timer);
  }, []);

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'ECP Graduate',
      project: 'EcoTrack - Carbon Footprint App',
      quote:
        "EthicBizz transformed my idea into a real app that's helping 1000+ users track their carbon footprint.",
      image:
        'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Arjun Patel',
      role: 'SSP Student',
      project: 'AgriTech Startup',
      quote:
        'The mentorship and real-world projects prepared me for launching my own AgriTech startup at 17.',
      image:
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Ananya Singh',
      role: 'YDP Alumni',
      project: 'AI Study Assistant',
      quote:
        "Starting with YDP in Grade 9, I built an AI study assistant that's now used in 50+ schools.",
      image:
        'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  const blogPosts = [
    {
      title: 'The Future of Ethical AI in Education',
      excerpt:
        'Exploring how AI can be responsibly integrated into learning environments while maintaining human values.',
      author: 'Sarash Mishra',
      date: 'Dec 15, 2024',
      image:
        'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
      slug: 'ethical-ai-education',
    },
    {
      title: "Building Tomorrow's Leaders Today",
      excerpt:
        'Why combining ethics with entrepreneurship creates more sustainable and impactful businesses.',
      author: 'Dr. Rajesh Kumar',
      date: 'Dec 12, 2024',
      image:
        'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      slug: 'building-tomorrows-leaders',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <iframe
            src="https://www.youtube.com/embed/Cm7ma_28o3Y?si=2tQaRK137GCF_n0d"
            className="w-full h-full object-cover"
            allow="autoplay; encrypted-media"
            allowFullScreen
            style={{ pointerEvents: 'none' }}
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Building{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
              Ethical
            </span>{' '}
            Leaders
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Empowering students from Grades 9-12 with real-world skills, ethical
            frameworks, and entrepreneurial mindsets to create positive impact
            in the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/programs"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center transition-all hover:scale-105"
            >
              Explore Programs <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/success"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center transition-all hover:scale-105 border border-white/20"
            >
              <Play className="mr-2 h-5 w-5" /> Success Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Mission</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            At EthicBizz, we believe that the future belongs to those who can
            combine business acumen with ethical leadership. Our comprehensive
            programs prepare students not just for careers, but for creating
            meaningful change in the world.
          </p>
          <blockquote className="text-2xl italic text-blue-600 font-medium max-w-3xl mx-auto">
            "Ethics in business is not about restriction—it's about creating
            sustainable value that benefits everyone."
            <footer className="text-lg text-gray-700 mt-4 not-italic">
              — Sarash Mishra, Founder
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Our Three Core Pillars
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ethical Professional Core (EPC)
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Building strong ethical foundations through Theory of Knowledge
                principles, Harvard Business cases, and UN SDG frameworks.
              </p>
              <Link
                to="/programs/epc"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                <Briefcase className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ethical Real-World Application (ERWA)
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Hands-on experience through hackathons, startup simulations, and
                partnerships with industry leaders like Microsoft and IIT.
              </p>
              <Link
                to="/programs/erwa"
                className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-700"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ethical Capstone Project (ECP)
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Culminating in real-world projects where students research,
                prototype, pitch, and launch solutions to actual problems.
              </p>
              <Link
                to="/programs/ecp"
                className="inline-flex items-center text-green-600 font-semibold hover:text-green-700"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Bold Beginning */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 animate-pulse">
            🌟 Our Journey Is Just Beginning
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-8">
            We haven’t launched the numbers yet — because we’re building
            something real, something that matters. <br />
            The impact starts <em>now</em>, and you're right on time to be part
            of it.
          </p>
          <p className="text-md md:text-lg text-blue-200">
            🚀 Students, mentors, projects, dreams —{' '}
            <span className="italic">everything</span> begins from Day 1. And
            this is it.
          </p>
        </div>
      </section>

      {/* Future Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Student Success Stories — In The Making
            </h2>
            <p className="text-xl text-gray-600">
              Real students. Real impact.{' '}
              <span className="font-semibold">Soon.</span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                🚀 Your Name Here
              </h3>
              <p className="text-gray-600 italic mb-4">
                “This is where your story begins. Projects, mentorship, and
                breakthroughs — all waiting for you.”
              </p>
              <div className="text-blue-600 font-semibold text-sm">
                Future Project Pioneer
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                🌟 Yet to Be Written
              </h3>
              <p className="text-gray-600 italic mb-4">
                “The spotlight is ready. The stage is yours. Let your journey
                spark the next generation.”
              </p>
              <div className="text-blue-600 font-semibold text-sm">
                Next-Gen Innovator
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                🎯 Impact Starts With You
              </h3>
              <p className="text-gray-600 italic mb-4">
                “We’re not telling stories yet — we’re building legends. And it
                starts with your first step.”
              </p>
              <div className="text-blue-600 font-semibold text-sm">
                Trailblazer in Progress
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-500 text-lg">
              This section will soon be filled with real stories from real
              students who dared to begin.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Teasers */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Latest Insights
            </h2>
            <p className="text-xl text-gray-600">
              Thought leadership on ethics, education, and entrepreneurship
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-8">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    {post.date} • By {post.author}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
                  >
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/blog"
              className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors"
            >
              View All Articles <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Shape the Future?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of students who are already building tomorrow's
            ethical businesses today.
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
              Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
