import React from 'react';
// import { Link } from 'react-router-dom';
import './Footer.css';
import { Link as ScrollLink } from 'react-scroll'; // Import react-scroll's Link
import  Facebook  from '../../Icons/facebook.png'
import  Instagram  from '../../Icons/instagram.png'
import  Twitter  from '../../Icons/twitter.png'
import  Linkedin  from '../../Icons/linkedin.png'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: pawanbeniwal012@gmail.com</p>
          <p>Phone: 7900956259</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="https://www.facebook.com/profile.php?id=100069534045314" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://www.instagram.com/pawanbeniwal536/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.linkedin.com/in/pawan-beniwal-a38327305" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            {/* <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li> */}
            <li>
            <ScrollLink to="home" smooth={true} duration={500} className="text-white cursor-pointer">
              Home
            </ScrollLink>
            </li>
            <li>
            <ScrollLink to="courses" smooth={true} duration={500} className="text-white cursor-pointer">
              Courses
                
            </ScrollLink>
            </li>
            <li>

            <ScrollLink to="about" smooth={true} duration={500} className="text-white cursor-pointer">
              About
            </ScrollLink>
            </li>
            <li>

            <ScrollLink to="blog" smooth={true} duration={500} className="text-white cursor-pointer">
              Blog
            </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Notes Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;