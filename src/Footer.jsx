import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGooglePlay,
  FaApple,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#111111] text-white rounded-t-[40px] mt-20">

      <div className="max-w-7xl mx-auto px-8 py-20">

        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-12">

          <h1 className="text-5xl font-bold">
            Let's Connect with us
          </h1>

          <div className="flex gap-4 mt-8 md:mt-0">

            <button className="bg-gradient-to-r from-purple-500 to-indigo-500 px-8 py-3 rounded-full font-semibold hover:scale-105 transition">
              Get Started
            </button>

            <button className="border border-gray-500 px-8 py-3 rounded-full hover:bg-white hover:text-black transition">
              Contact Us
            </button>

          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mt-16">

          <div>

            <h2 className="text-3xl font-bold text-purple-400">
              MediCare
            </h2>

            <p className="text-gray-400 mt-5 leading-7">
              Delivering quality healthcare through
              secure online consultations and
              advanced medical technology.
            </p>

            
            <div className="mt-8 flex">

              <input
                type="email"
                placeholder="Enter email..."
                className="flex-1 bg-[#1d1d1d] rounded-l-full px-5 py-3 outline-none"
              />

              <button className="bg-purple-600 px-6 rounded-r-full hover:bg-purple-700 transition">
                Subscribe
              </button>

            </div>

            
            <div className="flex gap-4 mt-8">

              <button className="flex items-center gap-3 bg-[#1d1d1d] px-5 py-3 rounded-xl hover:bg-purple-600 transition">

                <FaApple />

                App Store

              </button>

              <button className="flex items-center gap-3 bg-[#1d1d1d] px-5 py-3 rounded-xl hover:bg-purple-600 transition">

                <FaGooglePlay />

                Google Play

              </button>

            </div>

          </div>

          
          <div>

            <h3 className="font-bold text-lg mb-5">
              Company
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Doctors</li>
              <li className="hover:text-white cursor-pointer">News</li>

            </ul>

          </div>

          
          <div>

            <h3 className="font-bold text-lg mb-5">
              Services
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li className="hover:text-white cursor-pointer">
                Appointments
              </li>

              <li className="hover:text-white cursor-pointer">
                Online Consultation
              </li>

              <li className="hover:text-white cursor-pointer">
                Emergency
              </li>

              <li className="hover:text-white cursor-pointer">
                Pharmacy
              </li>

            </ul>

          </div>

          
          <div>

            <h3 className="font-bold text-lg mb-5">
              Solutions
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li className="hover:text-white cursor-pointer">
                Hospitals
              </li>

              <li className="hover:text-white cursor-pointer">
                Clinics
              </li>

              <li className="hover:text-white cursor-pointer">
                Healthcare AI
              </li>

              <li className="hover:text-white cursor-pointer">
                Insurance
              </li>

            </ul>

          </div>

          
          <div>

            <h3 className="font-bold text-lg mb-5">
              Resources
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li className="hover:text-white cursor-pointer">
                Help Center
              </li>

              <li className="hover:text-white cursor-pointer">
                Privacy
              </li>

              <li className="hover:text-white cursor-pointer">
                Terms
              </li>

              <li className="hover:text-white cursor-pointer">
                Contact
              </li>

            </ul>

          </div>

        </div>

        <div className="border-t border-gray-700 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500">
            © 2026 MediCare. All Rights Reserved.
          </p>

          <div className="flex gap-4 mt-6 md:mt-0">

            <div className="w-10 h-10 rounded-full bg-[#1d1d1d] flex items-center justify-center hover:bg-purple-600 cursor-pointer transition">
              <FaFacebookF />
            </div>

            <div className="w-10 h-10 rounded-full bg-[#1d1d1d] flex items-center justify-center hover:bg-purple-600 cursor-pointer transition">
              <FaTwitter />
            </div>

            <div className="w-10 h-10 rounded-full bg-[#1d1d1d] flex items-center justify-center hover:bg-purple-600 cursor-pointer transition">
              <FaInstagram />
            </div>

            <div className="w-10 h-10 rounded-full bg-[#1d1d1d] flex items-center justify-center hover:bg-purple-600 cursor-pointer transition">
              <FaLinkedinIn />
            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;