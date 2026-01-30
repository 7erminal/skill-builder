import React, { useState } from "react";
import { Link } from "react-router-dom";

const CustomNav: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return <nav className="bg-teal-50 shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-teal-600">SkillBuilder</Link>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-teal-600 transition">Home</a>
            <a href="#courses" className="text-gray-700 hover:text-teal-600 transition">Explore the Platform</a>
            <Link to="/about" className="text-gray-700 hover:text-teal-600 transition">About</Link>
            <a href="#contact" className="text-gray-700 hover:text-teal-600 transition">Partner With Us</a>
          </div>
          <Link to="/login" className="hidden md:block bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition">
            Get Started
          </Link>
          <button 
            className="md:hidden text-teal-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-teal-50 px-4 py-4 space-y-2">
            <a href="#home" className="block text-gray-700 hover:text-teal-600">Home</a>
            <a href="#features" className="block text-gray-700 hover:text-teal-600">Features</a>
            <a href="#courses" className="block text-gray-700 hover:text-teal-600">Courses</a>
            <a href="#about" className="block text-gray-700 hover:text-teal-600">About</a>
            <a href="#contact" className="block text-gray-700 hover:text-teal-600">Contact</a>
            <Link to="/login" className="w-full bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700">
              Get Started
            </Link>
          </div>
        )}
      </nav>
}

export default CustomNav;