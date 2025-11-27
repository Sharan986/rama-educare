import {
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa6";
import { IoLogoTiktok } from "react-icons/io5";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white py-14 mb-30 pt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* LEFT SECTION */}
        <div>
          <div className="flex items-center gap-2">
            <Image
              src="/dsn2.jpg" 
              alt="EduFor Logo"
              width={32}
              height={32}
            />
            <h2 className="text-2xl font-medium text-gray-900">RamaEducare</h2>
          </div>

          <p className="mt-4 text-xl text-gray-600 max-w-lg">
            We will help you to study at your dream University.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-4 mt-6 text-gray-700">
            <FaInstagram size={22} className="hover:text-black cursor-pointer" />
            <IoLogoTiktok size={22} className="hover:text-black cursor-pointer" />
            <FaXTwitter size={22} className="hover:text-black cursor-pointer" />
            <FaYoutube size={22} className="hover:text-black cursor-pointer" />
            <FaLinkedin size={22} className="hover:text-black cursor-pointer" />
          </div>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-2xl font-medium text-gray-900 mb-4">Services</h3>
          <ul className="space-y-2 text-gray-700">
            
            <li className="text-lg">Scholarships</li>
            <li className="text-lg">Personal Statement</li>
            <li className="text-lg">Career Counselling</li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="text-2xl font-medium text-gray-900 mb-4">Company</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="text-lg">About us</li>
            <li className="text-lg">Contact us</li>
          
            <li>FAQ</li>
            
          </ul>
        </div>

        {/* LEGAL */}
        <div>
          <h3 className="text-2xl font-medium text-gray-900 mb-4">Legal</h3>
          <ul className="space-y-3 text-gray-700">
           
            <li className="text-lg">Privacy Policy</li>
            <li className="text-lg">Terms & Conditions</li>
          </ul>
        </div>
       
      </div>
    </footer>
  );
}
