import FeatureCard from "./FeatureCard";
import { FaArrowRight, FaPhoneAlt, FaUserMd, FaHeartbeat } from "react-icons/fa";
import Maps from "./Maps";
import CTA from "./CTA";

function Coll() {
  const companies = [
    "Google",
    "Microsoft",
    "Amazon",
    "Meta",
    "Netflix",
    "Adobe",
    "IBM",
    "Oracle",
  ];

  const doctors = [
    {
      name: "Mikis",
      role: "Medical Specialist",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Nguyen",
      role: "Medical Specialist",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Flores",
      role: "Dental Consultant",
      image: "https://randomuser.me/api/portraits/men/41.jpg",
    },
  ];

  return (
    <div className="w-full bg-white dark:bg-gray-900 transition-colors duration-300">

      <section className="min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">

          <div className="grid md:grid-cols-3 gap-6">

            <FeatureCard
              title="Online Prescription Services"
              image="https://www.slideteam.net/wp/wp-content/uploads/2022/12/Patient-Healthcare-Digital-Transformation-Dashboard.png"
            />

            <FeatureCard
              title="Online Global Services"
              image="https://cdn.dribbble.com/userupload/43115442/file/original-fab0b07bbd65def7ef429279f18e09aa.png?crop=0x0-2400x1800&format=webp&resize=1000x750&vertical=center"
            />

            <FeatureCard
              title="Explore More Amazing Services"
              image="https://i.pinimg.com/originals/12/9b/e2/129be27f6d79c2347d8a324c0f44a4a6.png"
            />

          </div>

          <div className="text-center mt-16">

            <h1 className="text-4xl font-bold">
              Trusted by 100+ Global Companies
            </h1>

            <p className="text-gray-500 mt-3">
              Connecting thousands of patients with healthcare providers.
            </p>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-12">

            {companies.map((company) => (
              <div key={company} className="bg-gray-100 dark:bg-gray-800 rounded-xl p-5 text-center shadow transition-colors duration-300">
                <h2 className="font-semibold text-gray-900 dark:text-gray-100">{company}</h2>
              </div>
            ))}

          </div>

        </div>
      </section>

      <section className="min-h-screen flex flex-col items-center">

        <div className="max-w-7xl mx-auto px-6 w-full">

          <h1 className="text-5xl font-bold text-center mb-16">
            Collaborate with our Best Consultant by Online
          </h1>

          <div className="grid md:grid-cols-3 gap-8">

            {doctors.map((doctor) => (

              <div key={doctor.name} className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 text-center transition-colors duration-300">

                <img
                  src={doctor.image}
                  alt={`Photo of ${doctor.name}`}
                  loading="lazy"
                  className="w-24 h-24 rounded-full mx-auto"
                />

                <h2 className="text-2xl font-bold mt-5 text-gray-900 dark:text-gray-100">{doctor.name}</h2>

                <p className="text-purple-600 dark:text-purple-300">{doctor.role}</p>

                <p className="text-gray-500 dark:text-gray-300 mt-4">One popular procedure involves using saline solution.</p>

                <button className="mt-6 w-12 h-12 rounded-full bg-purple-600 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">→</button>

              </div>

            ))}

          </div>

        </div>
        <div className="text-center max-w-4xl px-6 p-6">

          <h1 className="text-3xl font-bold p-4">
            Patients can consult with healthcare providers
            from the comfort of their homes.
          </h1>

          <p className="text-gray-500 text-lg mt-6 p-2">
            Eliminating travel time and costs while reducing waiting
            times with instant online consultations.
          </p>

          <button className="mt-10 bg-purple-600 text-white px-8 py-4 rounded-full">
            Get Started →
          </button>

        </div>

      </section>

    

      <Maps />

      <CTA />


 

  </div>



  );
}

export default Coll;