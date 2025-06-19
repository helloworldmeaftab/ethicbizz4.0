import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle, Home, ArrowRight, Mail, Calendar } from 'lucide-react';

const ThankYou: React.FC = () => {
  const location = useLocation();
  const [message, setMessage] = useState({
    title: 'Thank You!',
    subtitle: 'We\'ve received your message',
    description: 'We appreciate you reaching out to us. Our team will review your message and get back to you within 48 hours.',
    nextSteps: [
      'Check your email for a confirmation message',
      'Our team will review your inquiry',
      'Expect a response within 48 hours'
    ]
  });

  useEffect(() => {
    // Customize message based on the referrer or URL parameters
    const params = new URLSearchParams(location.search);
    const type = params.get('type') || 'general';

    switch (type) {
      case 'mentor':
        setMessage({
          title: 'Thanks for Applying as a Mentor!',
          subtitle: 'Your mentor application has been received',
          description: 'Thank you for your interest in mentoring our students. We\'re excited about the possibility of having you join our mentor community.',
          nextSteps: [
            'Review your application confirmation email',
            'Our team will evaluate your background',
            'If selected, we\'ll schedule an interview within 1 week',
            'Successful mentors will receive onboarding materials'
          ]
        });
        break;
      case 'student':
        setMessage({
          title: 'Welcome to EthicBizz!',
          subtitle: 'Your program application is submitted',
          description: 'Congratulations on taking the first step towards ethical leadership. We\'re thrilled to have you apply to our programs.',
          nextSteps: [
            'Check your email for application details',
            'Complete any additional requirements if needed',
            'Admissions team will review your application',
            'You\'ll hear back from us within 5-7 business days'
          ]
        });
        break;
      case 'school':
        setMessage({
          title: 'Thank You for Your Interest!',
          subtitle: 'School partnership inquiry received',
          description: 'We\'re excited about the opportunity to partner with your school and bring EthicBizz programs to your students.',
          nextSteps: [
            'Our partnerships team will review your inquiry',
            'We\'ll schedule a discovery call within 3 business days',
            'Discuss customization options for your school',
            'Provide a detailed partnership proposal'
          ]
        });
        break;
      case 'job':
        setMessage({
          title: 'Application Received!',
          subtitle: 'Your resume has been received',
          description: 'Thank you for your interest in joining the EthicBizz team. We\'re always looking for passionate individuals who share our mission.',
          nextSteps: [
            'HR team will review your application',
            'Initial screening if you meet requirements',
            'Interview process for qualified candidates',
            'We\'ll keep you updated throughout the process'
          ]
        });
        break;
      default:
        // Keep default message
        break;
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>

          {/* Main Message */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {message.title}
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            {message.subtitle}
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            {message.description}
          </p>

          {/* Next Steps */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-blue-600" />
              What happens next?
            </h3>
            <ul className="space-y-3">
              {message.nextSteps.map((step, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3 mt-0.5 flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="bg-blue-50 rounded-xl p-6 mb-8">
            <div className="flex items-center justify-center mb-3">
              <Mail className="h-5 w-5 text-blue-600 mr-2" />
              <span className="font-semibold text-gray-900">Need immediate assistance?</span>
            </div>
            <p className="text-gray-600 text-sm mb-3">
              If you have urgent questions or need to make changes to your submission:
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <a
                href="mailto:hello@ethicbizz.org"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                hello@ethicbizz.org
              </a>
              <span className="hidden sm:inline text-gray-400">•</span>
              <a
                href="https://wa.me/918045678900"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                WhatsApp Support
              </a>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center transition-colors"
            >
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
            <Link
              to="/programs"
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold flex items-center justify-center transition-colors"
            >
              Explore Programs <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          {/* Social Links */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-3">Follow us for updates:</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;