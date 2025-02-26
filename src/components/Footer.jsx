import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-6xl mx-auto px-5">
        {/* Footer Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Brand Name (Left Side) */}
          <div className="text-left">
            <h2 className="text-2xl font-bold">Noor Fragrance</h2>
          </div>

          {/* Contact Info & Social Links (Right Side) */}
          <div className="text-right">
            <h3 className="text-xl font-semibold">
              <Link to="/contact" className="hover:underline">Contact Us</Link>
            </h3>
            <p className="text-gray-400">Email: contact@noorfragrance.com</p>
            <p className="text-gray-400">Phone: +91 9876543210</p>
            
            {/* Social Media Links */}
            <div className="flex justify-end gap-4 mt-3">
              <a href="#" className="text-gray-400 hover:text-blue-500 text-2xl">
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 text-2xl">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-2xl">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom - Left Aligned */}
        <div className="mt-6 border-t border-gray-700 pt-3 flex justify-start">
          <p className="text-gray-500 text-sm">
            &copy; 2025 Noor Fragrance | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

