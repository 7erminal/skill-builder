import { ParallaxBanner, useParallax } from 'react-scroll-parallax';
import './App.css'
import CustomNav from './components/CustomNav';

function App() {
  const parallax = useParallax<HTMLDivElement>({
    translateX: [0, 0, 'easeOutQuint'],
    translateY: [20, -60, 'easeInQuint'],
  });

  const parallax2 = useParallax<HTMLDivElement>({
    translateX: [0, 0, 'easeOutQuint'],
    translateY: [-20, 60, 'easeInQuint'],
  });

  return (
    <div className="bg-white">
      {/* Navbar */}
      <CustomNav />

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-teal-50 via-teal-100 to-cyan-50 py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-teal-800 mb-6">
              Empower Your Career with Workplace Skills
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Learn industry-relevant skills through professionally crafted video courses designed to transform young graduates into workplace-ready professionals.
            </p>
            <div className="flex gap-4">
              <button className="bg-teal-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-teal-700 transition">
                Start Learning Today
              </button>
              <button className="border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-lg text-lg hover:bg-teal-50 transition">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="bg-teal-200 w-full h-96 relative">
              {/* Bottom Left */}
              <div ref={parallax.ref} className="absolute bottom-0 left-0 w-1/2 h-1/2 flex justify-center items-center rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" 
                  alt="Learning" 
                  className="w-[90%] h-[90%] object-cover"
                />
              </div>
              
              {/* Top Right */}
              <div ref={parallax2.ref} className="absolute top-0 right-0 w-1/2 h-1/2 flex justify-center items-center rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" 
                  alt="Learning" 
                  className="w-[90%] h-[90%] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-teal-800 mb-16">Why Choose SkillBuilder?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-teal-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="text-4xl mb-4">🎥</div>
              <h3 className="text-2xl font-bold text-teal-800 mb-4">Expert-Curated Video Content</h3>
              <p className="text-gray-700">
                Access professionally produced video courses created by industry experts with years of real-world experience.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-cyan-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="text-4xl mb-4">💼</div>
              <h3 className="text-2xl font-bold text-teal-800 mb-4">Workplace-Ready Skills</h3>
              <p className="text-gray-700">
                Learn practical skills that employers demand. From communication to technical expertise, we cover it all.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-teal-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-2xl font-bold text-teal-800 mb-4">Track Your Progress</h3>
              <p className="text-gray-700">
                Monitor your learning journey with detailed progress tracking, certificates, and skill assessments.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-cyan-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold text-teal-800 mb-4">Lifetime Access</h3>
              <p className="text-gray-700">
                Learn at your own pace with lifetime access to course materials, including future updates.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-teal-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-2xl font-bold text-teal-800 mb-4">Community Support</h3>
              <p className="text-gray-700">
                Connect with fellow learners, share insights, and grow together in our supportive community.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-cyan-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-teal-800 mb-4">Career Advancement</h3>
              <p className="text-gray-700">
                Boost your career prospects with certifications and skills that stand out to employers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Preview Section */}
      <section id="courses" className="py-20 px-4 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-teal-800 mb-4">Featured Learning Paths</h2>
          <p className="text-center text-gray-700 text-lg mb-16 max-w-2xl mx-auto">
            Explore our comprehensive collection of video courses designed to equip young graduates with essential workplace skills.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Course Card 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="bg-teal-300 h-40 flex items-center justify-center">
                <span className="text-6xl">💻</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-teal-800 mb-2">Digital Literacy</h3>
                <p className="text-gray-700 mb-4">Master essential tools and technologies used in modern workplaces.</p>
                <div className="text-teal-600 font-semibold">12 videos • 4 hours</div>
              </div>
            </div>

            {/* Course Card 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="bg-cyan-300 h-40 flex items-center justify-center">
                <span className="text-6xl">🗣️</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-teal-800 mb-2">Communication Skills</h3>
                <p className="text-gray-700 mb-4">Develop professional communication, presentation, and interpersonal skills.</p>
                <div className="text-teal-600 font-semibold">15 videos • 5 hours</div>
              </div>
            </div>

            {/* Course Card 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="bg-teal-300 h-40 flex items-center justify-center">
                <span className="text-6xl">📊</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-teal-800 mb-2">Data & Analytics</h3>
                <p className="text-gray-700 mb-4">Learn to work with data, analyze trends, and make informed decisions.</p>
                <div className="text-teal-600 font-semibold">18 videos • 6 hours</div>
              </div>
            </div>

            {/* Course Card 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="bg-cyan-300 h-40 flex items-center justify-center">
                <span className="text-6xl">💡</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-teal-800 mb-2">Problem Solving</h3>
                <p className="text-gray-700 mb-4">Develop critical thinking and creative problem-solving techniques.</p>
                <div className="text-teal-600 font-semibold">10 videos • 3.5 hours</div>
              </div>
            </div>

            {/* Course Card 5 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="bg-teal-300 h-40 flex items-center justify-center">
                <span className="text-6xl">⏰</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-teal-800 mb-2">Time Management</h3>
                <p className="text-gray-700 mb-4">Master productivity techniques and prioritization strategies.</p>
                <div className="text-teal-600 font-semibold">8 videos • 2.5 hours</div>
              </div>
            </div>

            {/* Course Card 6 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="bg-cyan-300 h-40 flex items-center justify-center">
                <span className="text-6xl">👔</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-teal-800 mb-2">Professional Ethics</h3>
                <p className="text-gray-700 mb-4">Understand workplace ethics, compliance, and professional conduct.</p>
                <div className="text-teal-600 font-semibold">9 videos • 3 hours</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="bg-teal-200 rounded-lg overflow-hidden shadow-xl w-full h-96">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" 
                alt="About Us" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-teal-800 mb-6">About SkillBuilder</h2>
            <p className="text-gray-700 text-lg mb-4">
              SkillBuilder is dedicated to empowering young graduates by bridging the gap between academic learning and workplace requirements.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              Our platform offers a carefully curated selection of video courses created by industry professionals who understand what employers are looking for. We focus on practical, real-world skills that will make an immediate impact on your career.
            </p>
            <p className="text-gray-700 text-lg mb-6">
              Whether you're just graduating or early in your career, SkillBuilder provides the tools, knowledge, and support you need to succeed in today's competitive job market.
            </p>
            <div className="flex space-x-8">
              <div>
                <div className="text-3xl font-bold text-teal-600">500+</div>
                <div className="text-gray-700">Video Lessons</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-600">50+</div>
                <div className="text-gray-700">Courses</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-teal-600">10K+</div>
                <div className="text-gray-700">Active Learners</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <ParallaxBanner
          layers={[
            {
              image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop',
              speed: -20,
            },
            {
              speed: -10,
              children: (
                <div className="flex items-center justify-center h-96 bg-black/40">
                  <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                      Unlock Your Potential
                    </h2>
                    <p className="text-xl text-teal-50 mb-6">
                      Experience interactive learning with stunning visuals
                    </p>
                  </div>
                </div>
              ),
            },
          ]}
          className="aspect-video"
        />
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-teal-600 to-cyan-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Career?</h2>
          <p className="text-xl text-teal-50 mb-8">
            Join thousands of young professionals who are already advancing their careers with SkillBuilder.
          </p>
          <button className="bg-white text-teal-600 px-10 py-4 rounded-lg text-lg font-bold hover:bg-teal-50 transition">
            Start Your Learning Journey
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-teal-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-teal-800 mb-12">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-3xl mb-4">📧</div>
              <h3 className="text-xl font-bold text-teal-800 mb-2">Email</h3>
              <p className="text-gray-700">contact@skillbuilder.com</p>
            </div>
            <div>
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-teal-800 mb-2">Phone</h3>
              <p className="text-gray-700">+1 (555) 123-4567</p>
            </div>
            <div>
              <div className="text-3xl mb-4">📍</div>
              <h3 className="text-xl font-bold text-teal-800 mb-2">Location</h3>
              <p className="text-gray-700">123 Career Street, Learning City, LC 12345</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-4">&copy; 2024 SkillBuilder. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-teal-200 transition">Privacy Policy</a>
            <a href="#" className="hover:text-teal-200 transition">Terms of Service</a>
            <a href="#" className="hover:text-teal-200 transition">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
