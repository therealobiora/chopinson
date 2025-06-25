import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto max-w-[95%] px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          {/* Left - Copyright */}
          <div className="text-center lg:text-left hidden sm:flex">
            <p className="text-sm sm:text-base text-gray-700">
              © 2025 Chopinson Bar & Events. All rights reserved.
            </p>
          </div>

          {/* Center - Contact Info */}
          <div className="flex flex-col sm:flex-row items-center text-sm text-gray-700 gap-2 sm:gap-6 text-center">
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-green-600" />
              <span>Chopinsonkitchen@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-green-600" />
              <span>+234 903 613 6550</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-green-600" />
              <span>+234 806 446 9678</span>
            </div>
          </div>

          {/* Right - Social Media */}
          <div className="flex gap-4 text-green-600 text-lg">
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </Link>
          </div>
          <div className="text-center lg:text-left flex sm:hidden">
            <p className="text-sm sm:text-base text-gray-700">
              © 2025 Chopinson Bar & Events. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
