import { FaStar, FaHeadset } from "react-icons/fa";
function Box() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 transition-colors duration-300">
      <div className="flex h-[90vh] rounded-3xl overflow-hidden shadow-2xl">

        
         <div className="w-[60%] bg-gradient-to-br from-pink-200 via-pink-200 to-purple-200 dark:from-purple-900 dark:via-indigo-900 dark:to-blue-900 flex flex-col justify-center items-center text-center px-16">

      <p className="text-gray-600 dark:text-purple-200 text-sm mb-4">
        Your Health, Our Priority
      </p>

      <h1 className="text-6xl font-bold text-gray-900 dark:text-white leading-tight">
        Get Premium <br />
        Medical Care <br />
        For Your Best <br />
        Health
    </h1>

      <p className="mt-6 text-gray-600 dark:text-gray-300 text-lg max-w-xl">
        Doctors are available every day to provide personalized care,
        online consultations and health guidance.
      </p>

      <button className="mt-10 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
        Book Appointment
      </button>

</div>

        
  <div className="relative w-[40%] bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 flex justify-center items-center overflow-hidden">

  <div className="absolute w-64 h-64 bg-white/10 rounded-full -top-20 -left-20 blur-xl"></div>
  <div className="absolute w-72 h-72 bg-pink-300/20 rounded-full -bottom-24 -right-24 blur-xl"></div>

  <img
    src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=740"
    alt="Doctor illustration"
    loading="lazy"
    className="w-[80%] rounded-3xl shadow-2xl z-10"
  />

  <div className="absolute top-8 right-6 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3">

    <div className="bg-yellow-100 p-3 rounded-full">
      <FaStar className="text-yellow-500 text-xl" />
    </div>

    <div>
      <h3 className="font-bold text-lg">4.9 / 5</h3>
      <p className="text-gray-500 text-sm">Patient Rating</p>
    </div>

  </div>

  <div className="absolute bottom-8 left-6 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3">

    <div className="bg-purple-100 p-3 rounded-full">
      <FaHeadset className="text-purple-600 text-xl" />
    </div>

    <div>
      <h3 className="font-bold">24/7 Care</h3>
      <p className="text-gray-500 text-sm">Online Consultation</p>
    </div>

  </div>

 </div>
</div>
    </div>
  );
}

export default Box;