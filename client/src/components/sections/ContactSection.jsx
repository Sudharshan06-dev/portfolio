import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Calendar, MessageCircle, Send, User, Coffee } from 'lucide-react';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      description: "Drop me a line anytime",
      value: "sudharshan.madhavan1998@outlook.com",
      action: "mailto:sudharshan.madhavan1998@outlook.com",
      color: "from-red-400 to-red-600"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      description: "Based in",
      value: "Fullerton, California, US",
      action: "#",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: "GitHub",
      description: "Check out my code",
      value: "Sudharshan Github",
      action: "https://github.com/yourusername",
      color: "from-gray-400 to-gray-600"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      description: "Let's connect professionally",
      value: "Sudharshan LinkedIn",
      action: "https://github.com/Sudharshan06-dev",
      color: "from-blue-500 to-blue-700"
    },
  ];

  const aboutMe = {
    introduction: "I'm a passionate Cloud and Backend engineer with expertise in modern web technologies. I love building scalable applications and solving complex problems through code.",
    interests: [
      "Cloud Architecture",
      "Backend Development",
      "System Design",
      "Full Stack Development",
    ],
    availability: "Currently open to new opportunities and exciting projects!",
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const submitContactForm = async (contactFormData) => {

    try {

      const response = await fetch('http://127.0.0.1:8000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: contactFormData?.name,
          email: contactFormData?.email,
          subject: contactFormData?.subject,
          message: contactFormData?.message,
        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      return data.message || "I'm sorry, I couldn't process that request.";

    } catch (error) {
      console.error('Error sending message to backend:', error);
      return "I'm sorry, I'm having trouble connecting right now. Please try again later or email me directly.";
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);

    if (!formData.email || !formData.name || !formData.message) {
      alert('Please fill all the necessary details below!!!');
      return
    }

    // You can integrate with email services like EmailJS, Formspree, etc.
    submitContactForm(formData)
    alert('Test');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-12 sm:mb-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
          Get In Touch
        </h1>
        <p className="text-slate-400 text-lg sm:text-xl">Let's connect and create something amazing together</p>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-6 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* About Me Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10 mb-12"
        >
          <div className="flex items-center mb-6">
            <User className="w-8 h-8 text-cyan-400 mr-3" />
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              About Me
            </h2>
          </div>

          <div className="grid md gap-2">
            <div>
              <p className="text-slate-300 text-base sm:text-lg mb-6 leading-relaxed">
                {aboutMe.introduction}
              </p>
              <div className="mb-6">
                <h3 className="text-blue-400 font-semibold text-lg mb-3">What I'm passionate about:</h3>
                <div className="flex flex-wrap gap-2">
                  {aboutMe.interests.map((interest, i) => (
                    <span
                      key={i}
                      className="bg-gradient-to-r from-slate-700/80 to-slate-600/80 border border-slate-600/50 px-3 py-1 rounded-full text-sm text-slate-200 font-medium"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Methods Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, idx) => (
            <motion.a
              key={idx}
              href={method.action}
              target={method.action.startsWith('http') ? '_blank' : '_self'}
              rel={method.action.startsWith('http') ? 'noopener noreferrer' : ''}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-800/70 hover:border-slate-600/50 transition-all duration-300 group"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {method.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
              <p className="text-slate-400 text-sm mb-2">{method.description}</p>
              <p className="text-cyan-300 font-medium text-sm">{method.value}</p>
            </motion.a>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10"
        >
          <div className="flex items-center mb-6">
            <Send className="w-8 h-8 text-cyan-400 mr-3" />
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Send Me a Message
            </h2>
          </div>

          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-slate-300 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-300 font-medium mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-medium mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200 resize-none"
                placeholder="Tell me about your project or idea..."
              />
            </div>

            {/* <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl"
            >
              Send Message
            </button> */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection;