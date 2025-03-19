
import { motion } from 'framer-motion';
import { Users, BarChart2, Shield, ChevronRight, Menu, Mail, Phone, MapPin, CheckCircle2, Briefcase, Code2, Globe2, Clock, Sparkles, GraduationCap } from 'lucide-react';

const features = [
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "Employee Management",
    description: "Streamline your workforce management with powerful tools and insights."
  },
  {
    icon: <BarChart2 className="w-6 h-6 text-primary" />,
    title: "Performance Analytics",
    description: "Track and optimize employee performance with real-time analytics."
  },
  {
    icon: <Shield className="w-6 h-6 text-primary" />,
    title: "Secure & Compliant",
    description: "Enterprise-grade security ensuring your data is protected."
  }
];

const benefits = [
  "Time and attendance tracking",
  "Employee self-service portal",
  "Performance review management",
  "Leave management system",
  "Recruitment and onboarding",
  "Custom reporting tools",
  "Mobile accessibility"
];

const internshipBenefits = [
  "Hands-on experience with modern React development",
  "Mentorship from senior developers",
  "Flexible remote work schedule",
  "Learning and development opportunities",
  "Work on real production projects",
  "Networking opportunities",
  "Certificate upon completion",
  "Potential for future employment"
];

const internshipRequirements = [
  "Basic knowledge of React.js",
  "Understanding of JavaScript/TypeScript",
  "Familiarity with HTML/CSS",
  "Good problem-solving skills",
  "Strong willingness to learn",
  "Ability to work independently",
  "Good communication skills",
  "Internet connection for remote work"
];

function App() {
  return (
    <div className="min-h-screen bg-black font-sans">
      {/* Navigation */}
      <nav className="fixed w-full z-50 glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            <div className="flex items-center">
              <img src="../public/synchash.png" alt="Synch Hash" className="h-9 w-auto" />
              <span className="ml-2 text-base font-semibold text-white">Synch Hash</span>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <a href="#features" className="text-sm text-gray-300 hover:text-white transition-colors">Features</a>
                <a href="#about" className="text-sm text-gray-300 hover:text-white transition-colors">About</a>
                <a href="#careers" className="text-sm text-gray-300 hover:text-white transition-colors">Careers</a>
                <a href="#contact" className="text-sm text-gray-300 hover:text-white transition-colors">Contact</a>
                <button className="button-gradient text-white px-4 py-1.5 rounded-full text-sm font-medium transition-all hover:scale-[1.02] active:scale-[0.98]" 
                onClick={() => {
                  alert("Sorry to inform that synchash is still under development.")
                }}>
                  Get Started
                </button>
              </div>
            </div>
            <div className="md:hidden">
              <Menu className="h-5 w-5 text-gray-300" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden pt-32 pb-20">
        <div className="hero-gradient absolute inset-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl sm:text-7xl font-semibold tracking-tight mb-6">
              <span className="gradient-text">Revolutionize your</span>
              <br />workforce management.
            </h1>
            <p className="text-gray-400 text-xl sm:text-2xl max-w-3xl mx-auto mb-10 tracking-tight">
              Streamline your employees tasks with our intelligent employment management system.
            </p>
            <motion.button
              onClick={() => {
                alert("Sorry to inform that synchash is still under development.")
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full text-lg font-medium inline-flex items-center space-x-2 transition-colors"
            >
              <span>Try it free</span>
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-semibold mb-6">Powerful Features</h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              Everything you need to manage your workforce effectively in one place.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="feature-gradient p-8 rounded-3xl glass-effect"
              >
                <div className="glass-effect w-12 h-12 rounded-2xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-semibold mb-8">About Synch Hash</h2>
              <p className="text-gray-400 text-xl leading-relaxed mb-10">
                Synch Hash is revolutionizing the way businesses manage their workforce. Our comprehensive employment management system combines cutting-edge technology with user-friendly interfaces.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-300 text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden glass-effect p-1">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="Team collaboration"
                  className="w-full h-full object-cover rounded-[22px]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-semibold mb-6">Join Our Team</h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              Help us shape the future of workforce management. We're looking for passionate individuals to join our team.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-effect rounded-3xl p-8 mb-12"
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-semibold mb-2">React Developer Intern</h3>
                <div className="flex flex-wrap items-center gap-6 text-gray-400">
                  <div className="flex items-center">
                    <Globe2 className="w-5 h-5 mr-2" />
                    <span>Worldwide Remote</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>Flexible Hours</span>
                  </div>
                  <div className="flex items-center">
                    <GraduationCap className="w-5 h-5 mr-2" />
                    <span>Unpaid Internship</span>
                  </div>
                  <div className="flex items-center">
                    <Sparkles className="w-5 h-5 mr-2" />
                    <span>Learning Opportunity</span>
                  </div>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full text-base font-medium transition-colors"
              >
                <a href="https://forms.gle/GXZYe9zD6zhGYhXs7" target='_blank'>Apply Now</a>
              </motion.button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h4 className="text-xl font-semibold mb-4 flex items-center">
                  <Code2 className="w-5 h-5 mr-2 text-primary" />
                  Requirements
                </h4>
                <div className="space-y-3">
                  {internshipRequirements.map((requirement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-300">{requirement}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-4 flex items-center">
                  <Briefcase className="w-5 h-5 mr-2 text-primary" />
                  What You'll Gain
                </h4>
                <div className="space-y-3">
                  {internshipBenefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <img src="/logo.svg" alt="Synch Hash" className="h-6 w-auto" />
              <span className="ml-2 text-base font-semibold text-white">Synch Hash</span>
            </div>
            <div className="text-gray-500 text-sm">
              © 2024 Synch Hash. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;