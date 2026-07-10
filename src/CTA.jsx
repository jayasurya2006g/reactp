import { FaArrowRight, FaPhoneAlt, FaUserMd, FaHeartbeat } from "react-icons/fa";

function CTA() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-700 via-indigo-600 to-blue-600 flex items-center justify-center px-6">

      <div className="relative max-w-7xl w-full overflow-hidden rounded-[40px]">

        <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl"></div>

        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center px-12 py-20">

          <div className="text-white">

            <span className="bg-white/20 backdrop-blur-md px-5 py-2 rounded-full">Trusted Healthcare Platform</span>

            <h1 className="text-6xl font-extrabold leading-tight mt-8">
              Your Health,
              <br />
              Our Highest
              <span className="text-yellow-300"> Priority.</span>
            </h1>

            <p className="mt-8 text-lg text-purple-100 leading-8">
              Book appointments with certified doctors, access online
              consultations, manage medical records, and receive quality
              healthcare anytime, anywhere.
            </p>

            <div className="flex gap-5 mt-10">

              <button className="bg-white text-purple-700 px-8 py-4 rounded-full font-semibold hover:scale-105 transition flex items-center gap-3">
                Make Appointment
                <FaArrowRight />
              </button>

              <button className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-purple-700 transition flex items-center gap-3">
                <FaPhoneAlt />
                Contact Us
              </button>

            </div>

          </div>

          <div className="relative flex justify-center">

            <div className="bg-white/15 backdrop-blur-xl rounded-3xl p-10 w-[380px] shadow-2xl">

              <div className="flex justify-between items-center">

                <div>

                  <h2 className="text-white text-3xl font-bold">25K+</h2>

                  <p className="text-purple-100">Happy Patients</p>

                </div>

                <FaHeartbeat className="text-red-300 text-5xl" />

              </div>

              <div className="mt-10">

                <div className="flex items-center gap-4 mb-8">

                  <div className="bg-white p-4 rounded-full text-purple-600">
                    <FaUserMd />
                  </div>

                  <div>

                    <h3 className="text-white font-bold">450+ Doctors</h3>

                    <p className="text-purple-100 text-sm">Certified Specialists</p>

                  </div>

                </div>

                <div className="flex items-center gap-4">

                  <div className="bg-white p-4 rounded-full text-purple-600">❤️</div>

                  <div>

                    <h3 className="text-white font-bold">99% Satisfaction</h3>

                    <p className="text-purple-100 text-sm">Trusted Worldwide</p>

                  </div>

                </div>

              </div>

            </div>

            <div className="absolute -top-6 -right-6 bg-yellow-400 text-black px-5 py-3 rounded-2xl shadow-xl font-bold">⭐ Rated 4.9/5</div>

            <div className="absolute -bottom-6 -left-6 bg-white text-purple-700 px-6 py-3 rounded-2xl shadow-xl font-semibold">🩺 24/7 Online Care</div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default CTA;
