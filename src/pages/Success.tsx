import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Award, Users, TrendingUp, ArrowRight, Rocket, Star, Lightbulb } from 'lucide-react';

const Success: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Award className="h-10 w-10 text-blue-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Success Stories</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              We're just getting started, but the future is bright. These spaces will soon be filled 
              with incredible stories of students who dared to dream and build solutions that matter.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Stats */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Journey Begins Now</h2>
            <p className="text-xl text-gray-600">
              Every great story starts with a single step. Here's what we're building together.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Rocket className="h-10 w-10 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">Your Story</div>
              <div className="text-gray-600">Future Student Startups</div>
              <p className="text-sm text-gray-500 mt-2">The first success story could be yours</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Users className="h-10 w-10 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">Unlimited</div>
              <div className="text-gray-600">Lives to Impact</div>
              <p className="text-sm text-gray-500 mt-2">The potential is boundless</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Award className="h-10 w-10 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">Coming Soon</div>
              <div className="text-gray-600">Awards & Recognition</div>
              <p className="text-sm text-gray-500 mt-2">Excellence will be celebrated</p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Success Stories Placeholder */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Future Success Stories</h2>
            <p className="text-xl text-gray-600">
              This is where your achievements will shine. The stage is set, the spotlight is ready.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-gray-100">
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <Lightbulb className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500 font-medium">Your Project Here</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                      Coming Soon
                    </span>
                    <div className="flex gap-1">
                      <Star className="h-4 w-4 text-gray-300" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Your Innovation Awaits</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    This space is reserved for the next breakthrough solution created by an EthicBizz student.
                  </p>
                  
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-1">
                      <strong>Created by:</strong> Future Innovator
                    </p>
                    <p className="text-sm text-gray-600 mb-1">
                      <strong>School:</strong> Your School Here
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Grade:</strong> 9-12
                    </p>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-3 mb-4">
                    <p className="text-sm font-medium text-green-800 mb-1">Future Impact:</p>
                    <p className="text-sm text-green-700">Ready to change the world</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">Innovation</span>
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">Ethics</span>
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">Impact</span>
                  </div>
                  
                  <div className="text-center">
                    <p className="text-blue-600 font-semibold text-sm">Story Coming Soon</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action for First Stories */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Be the First</h2>
            <p className="text-xl text-gray-600">
              The first success stories are the most memorable. Will yours be among them?
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Start Your Journey</h3>
              <p className="text-gray-600 mb-6">Join one of our programs and begin building your future today.</p>
              <Link
                to="/programs"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center transition-colors"
              >
                Explore Programs <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Build & Create</h3>
              <p className="text-gray-600 mb-6">Work on real projects that solve meaningful problems in your community.</p>
              <Link
                to="/events"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center transition-colors"
              >
                Join Events <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Make History</h3>
              <p className="text-gray-600 mb-6">Become one of the first students featured in our success stories.</p>
              <Link
                to="/contact"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold inline-flex items-center transition-colors"
              >
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Inspirational Quote */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <blockquote className="text-3xl font-bold mb-6">
            "Every expert was once a beginner. Every pro was once an amateur. Every icon was once an unknown."
          </blockquote>
          <p className="text-xl mb-8 text-blue-100">
            Your success story starts with a single decision to begin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/programs"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold inline-flex items-center transition-colors"
            >
              Start Your Story <ArrowRight className="ml-2 h-5 w-5" />
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