import FeatureCard from "./FeatureCard";
import { FaHeartbeat, FaUserMd, FaHospital } from "react-icons/fa";

function Features() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 py-20 transition-colors duration-300">

      <div className="max-w-7xl mx-auto px-6">

        
        <div className="text-center">

          <span className="bg-purple-100 text-purple-700 dark:bg-purple-800 dark:text-purple-200 px-5 py-2 rounded-full font-semibold">
            Why Choose Us
          </span>

          <h1 className="text-5xl font-bold mt-6 text-gray-900 dark:text-gray-100">
            Discover Our
            <span className="text-purple-600"> Premium Features</span>
          </h1>

          <p className="text-gray-500 dark:text-gray-300 mt-5 text-lg max-w-3xl mx-auto">
            Experience smarter healthcare with online consultations,
            AI-powered reports, secure medical records, and 24/7 support.
          </p>

        </div>

        
        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <div className="hover:-translate-y-3 transition duration-300">
            <FeatureCard
              title="Online Consultation"
              image="https://tse4.mm.bing.net/th/id/OIP.92agYh1RsLGbSWMYEay6ugHaFj?r=0&pid=Api&h=220&P=0"
            />
          </div>

          <div className="hover:-translate-y-3 transition duration-300">
            <FeatureCard
              title="Medical Records"
              image="https://tse2.mm.bing.net/th/id/OIP.8e7o7lM4dkqz0u0cM2vu4QHaFj?r=0&pid=Api&h=220&P=0"
            />
          </div>

          <div className="hover:-translate-y-3 transition duration-300">
            <FeatureCard
              title="Emergency Support"
              image="https://tse4.mm.bing.net/th/id/OIP.92agYh1RsLGbSWMYEay6ugHaFj?r=0&pid=Api&h=220&P=0"
            />
          </div>

        </div>

        <div className="mt-20 bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden transition-colors duration-300">

          <div className="grid md:grid-cols-2 items-center">

            
            <div>
              <img
                src="https://tse4.mm.bing.net/th/id/OIP.j0Uh8hEy1_VYB8d2Vu72ugHaFj?r=0&pid=Api&h=220&P=0"
                alt="Healthcare example illustration"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>

            
            <div className="p-10">

              <h2 className="text-4xl font-bold">
                Healthcare Made
                <span className="text-purple-600"> Simple</span>
              </h2>

              <p className="text-gray-500 dark:text-gray-300 mt-5 leading-8">
                Our platform connects patients with trusted doctors,
                allowing instant appointments, online consultations,
                secure medical reports, and continuous healthcare support.
              </p>

              

              <button className="mt-10 bg-purple-600 text-white px-8 py-4 rounded-full hover:bg-purple-700 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                Explore More →
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Features;