import { useParallax } from 'react-scroll-parallax';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './App.css'
import CustomNav from './components/CustomNav';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import SkillsSection from './widgets/SkillsSection';
import { Navigation } from 'swiper/modules';
import Footer from './widgets/Footer';

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
      <section id="home" className="bg-linear-to-br from-teal-50 via-teal-100 to-cyan-50 py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold-100 text-black mb-6">
              Learn by doing. Build skills that matter. Create impact that lasts.
            </h1>
            <p className="text-xl font-extralight text-gray-600 mb-8">
              One digital platform to develop in-demand skills, gain hands-on experience, and prepare for the future of work through projects, collaboration, and global exposure.
            </p>
            <div className="flex gap-4">
              {/* <Link to="/login" className="bg-teal-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-teal-700 transition">
                Start Learning Today
              </Link> */}
              <Link to="/login" className="border-2 border-teal-600 text-teal-600 px-8 py-3 rounded-lg text-lg hover:bg-teal-50 transition">
                Start Learning Today
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="bg-teal-200 w-full h-96 relative">
              {/* Bottom Left */}
              <div ref={parallax.ref} className="absolute bottom-0 left-0 w-1/2 h-1/2 flex justify-center items-center rounded-lg overflow-hidden">
                <img 
                  src="/studentsLearning.jpg" 
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

      <SkillsSection />

      {/* Courses Preview Section */}
      <section id="courses" className="py-10 items-center px-4">
        <div className='bg-gray-800 rounded-3xl min-h-20 max-w-6xl mx-auto p-6 md:p-20'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-2'>
            <div className='flex flex-col gap-10 justify-center'>
              <h3 className='text-white text-3xl font-bold'>Our Approach</h3>
              <div className='grid grid-cols-2 gap-2'>
                <div className='text-white font-light mb-2 flex flex-row gap-2'><Icon icon="ph:path-light" style={{fontSize: '20px', color: 'teal'}} />Learning Pathways</div>
                <div className='text-white font-light mb-2 flex flex-row gap-2'><Icon icon="la:project-diagram" style={{fontSize: '20px', color: 'teal'}} />Project & Experience Hub</div>
                <div className='text-white font-light mb-2 flex flex-row gap-2'><Icon icon="ri:team-line" style={{fontSize: '20px', color: 'teal'}} />Team Leadership & Collaboration</div>
                <div className='text-white font-light mb-2 flex flex-row gap-2'><Icon icon="ri:user-community-line" style={{fontSize: '20px', color: 'teal'}} />Community & Mentorship</div>
                <div className='text-white font-light mb-2 flex flex-row gap-2'><Icon icon="solar:accessibility-broken" style={{fontSize: '20px', color: 'teal'}} />Accessibility and Inclusivity</div>
              </div>
            </div>
            <div className='items-center rounded-2xl overflow-hidden'>
              <img src='/blackman.jpg' className='w-full' />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="who-its-for" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto gap-12">
          <div className="text-left mb-12">
            <h2 className="text-4xl font-bold-100 text-center text-gray-500 mb-8">Who its for</h2>
            <h6 className='font-thin text-center text-gray-700 mb-5'>We focus on four core capability areas that power employability:</h6>
              <hr className='hr mb-16'/>
          </div>
          <Swiper
            slidesPerView={4}
            modules={[Navigation]}
            navigation
            spaceBetween={20}
            pagination={{ clickable: true }}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="rounded-xl overflow-hidden flex flex-col">
               <div className='image-div rounded-lg min-h-50' style={{backgroundImage: 'url("/students.jpg")', backgroundPosition: 'center', backgroundSize: 'cover'}}></div>
                <div className="pt-4 pr-2">
                  <h3 className="text-lg font-bold-600 text-gray-800 mb-2">Students & Young People</h3>
                  <p className="text-gray-600 font-thin">
                    Build practical skills, global experience, and employability; no matter where you’re starting from.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-xl overflow-hidden flex flex-col">
                <div className='image-div rounded-lg min-h-50' style={{backgroundImage: 'url("/intern.jpg")', backgroundPosition: 'center', backgroundSize: 'cover'}}></div>
                <div className="pt-4 pr-2">
                  <h3 className="text-lg font-bold-600 text-gray-800 mb-2">Interns & Early-Career Talent</h3>
                  <p className="text-gray-600 font-thin">
                    Gain structured experience and project-based learning that complements formal education and internships.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-xl overflow-hidden flex flex-col">
               <div className='image-div rounded-lg min-h-50' style={{backgroundImage: 'url("/ngos.jpg")', backgroundPosition: 'center', backgroundSize: 'cover'}}></div>
                <div className="pt-4 pr-2">
                  <h3 className="text-lg font-bold-600 text-gray-800 mb-2">Organisations & NGOs</h3>
                  <p className="text-gray-600 font-thin">
                    Access motivated youth talent, host digital or hybrid projects, and track real impact.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-xl overflow-hidden flex flex-col">
               <div className='image-div rounded-lg min-h-50' style={{backgroundImage: 'url("/mentor.jpg")', backgroundPosition: 'center', backgroundSize: 'cover'}}></div>
                <div className="pt-4 pr-2">
                  <h3 className="text-lg font-bold-600 text-gray-800 mb-2">Mentors & Professionals</h3>
                  <p className="text-gray-600 font-thin">
                    Share expertise, support emerging talent, and stay connected to a global skills ecosystem.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-teal-600 to-cyan-500">
        <div className="w-auto mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Your Future?</h2>
          <p className="text-xl text-teal-50 mb-8">
            Learn by doing. Build skills that matter. Create impact that lasts.
          </p>
          <Link to="/learn/home" className="bg-white text-teal-600 px-10 py-4 rounded-lg text-lg font-bold hover:bg-teal-50 transition">
            Get Started
          </Link>
          <Link to="/learn/home" className="bg-white text-teal-600 px-10 py-4 rounded-lg text-lg font-bold hover:bg-teal-50 transition mx-5">
            Partner With Us
          </Link>
          <Link to="/learn/home" className="bg-white text-teal-600 px-10 py-4 rounded-lg text-lg font-bold hover:bg-teal-50 transition">
            Request a Demo
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-teal-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-teal-800 mb-12">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              {/* <div className="text-3xl mb-4">📧</div> */}
              <h3 className="text-xl font-bold text-teal-800 mb-2">Email</h3>
              <p className="text-gray-700">contact@skillbuilder.com</p>
            </div>
            <div>
              {/* <div className="text-3xl mb-4">📱</div> */}
              <h3 className="text-xl font-bold text-teal-800 mb-2">Phone</h3>
              <p className="text-gray-700">+1 (555) 123-4567</p>
            </div>
            <div>
              {/* <div className="text-3xl mb-4">📍</div> */}
              <h3 className="text-xl font-bold text-teal-800 mb-2">Location</h3>
              <p className="text-gray-700">123 Career Street, Learning City, LC 12345</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
