function Maps(){
    return(<section className="min-h-screen w-full bg-gray-100 flex items-center justify-center px-8 py-10">

  <div className="w-full h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex bg-white">

    <div className="w-2/3 relative">

      <img
        src="https://images.unsplash.com/photo-1524661135-423995f22d0b"
        alt="Hospital map background"
        loading="lazy"
        className="w-full h-full object-cover"
      />

      
      <div className="absolute top-6 left-6 bg-white rounded-full px-5 py-3 shadow-xl flex items-center gap-3">

        🔍

        <input
          placeholder="Search nearby hospitals..."
          className="outline-none w-64"
        />

      </div>

      
      <div className="absolute bottom-8 left-8 bg-white rounded-2xl shadow-xl p-5 w-72">

        <h2 className="font-bold text-xl">
          Dr. Mike Wilson
        </h2>

        <p className="text-gray-500">
          Cardiologist
        </p>

        <div className="mt-3 flex justify-between">

          <span className="text-green-600">
            ★ 4.9
          </span>

          <button className="bg-purple-600 text-white px-4 py-2 rounded-full">
            Book
          </button>

        </div>

      </div>

    </div>

    <div className="w-1/3 bg-white p-10   overflow-y-auto">

      <p className="text-purple-600 font-semibold">
        HEALTHCARE PLATFORM
      </p>

      <h1 className="text-4xl font-bold mt-4 leading-tight">
        Additional
        <br />
        Medical
        <br />
        Features
      </h1>

      <p className="text-gray-500 mt-6 leading-8">
        Everything you need to manage your health from one platform.
      </p>

      <div className="mt-10 space-y-6 text-center">

        <div className="flex gap-4 items-start">

         
          <div>

            <h3 className="font-semibold">
              Health Assessment
            </h3>

            <p className="text-gray-500 text-sm">
              AI-powered health monitoring.
            </p>

          </div>

        </div>

        <div className="flex gap-4 items-start">

        
          <div>

            <h3 className="font-semibold">
              Health Records
            </h3>

            <p className="text-gray-500 text-sm">
              Secure cloud storage.
            </p>

          </div>

        </div>

        <div className="flex gap-4 items-start">

         

          <div>

            <h3 className="font-semibold">
              Emergency Contact
            </h3>

            <p className="text-gray-500 text-sm">
              One tap emergency support.
            </p>

          </div>

        </div>

        <div className="flex gap-4 items-start">

         

          <div>

            <h3 className="font-semibold">
              Appointment Booking
            </h3>

            <p className="text-gray-500 text-sm">
              Book doctors instantly.
            </p>

          </div>

        </div>

      </div>

      <button className="mt-12 w-full bg-purple-600 text-white py-4 rounded-xl hover:bg-purple-700 transition duration-300">
        Learn More →
      </button>

    </div>

  </div>
  </section>
  )
}
export default Maps