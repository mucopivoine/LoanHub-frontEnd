// import React from 'react';


function About() {
  return (
    <div className="flex justify-center items-center mx-auto sm:mb-80  ">
      <section className=" w-full max-w-screen-lg ">
        <div className="container  ">
          <h2 className="text-4xl font-bold text-center font-serif mt-32 ">
            About Us
          </h2>

          {/* Grid container for responsive layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center pt-10">
            {/* Card 1 */}
            <div className="flex flex-col justify-between h-full group transform hover:translate-y-[-10px] transition duration-300">
              <div className="bg-white p-8 rounded-lg shadow-gray-500 shadow-lg transition hover:border-red-500/50 hover:shadow-red-500/50">
                <div className="flex justify-center mb-6">
                  <img
                    src="/team.gif"
                    alt="Image 1"
                    className="w-32 h-32 rounded-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 font-serif animate-pulse">
                  Our Team
                </h3>
                <p className="text-gray-600 text-center">
                  Meet the passionate team driving the Umwalimu Loan Hub
                  forward, dedicated to providing financial solutions.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col justify-between h-full group transform hover:translate-y-[-10px] transition duration-300">
              <div className="bg-white p-8 rounded-lg  shadow-gray-500 shadow-lg transition hover:border-red-500/50 hover:shadow-red-500/50">
                <div className="flex justify-center mb-6">
                  <img
                    src="/mission.gif"
                    alt="Image 2"
                    className="w-32 h-32 rounded-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 font-serif animate-pulse">
                  Our Mission
                </h3>
                <p className="text-gray-600 text-center">
                  Empowering educators through accessible loan services,
                  supporting their personal and professional growth.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col justify-between h-full group transform hover:translate-y-[-10px] transition duration-300">
              <div className="bg-white p-8 rounded-lg shadow-gray-500 shadow-lg transition hover:border-red-500/50 hover:shadow-red-500/50">
                <div className="flex justify-center mb-6">
                  <img
                    src="/hey.jpg"
                    alt="Image 3"
                    className="w-32 h-32 rounded-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 font-serif animate-pulse ">
                  Our Values
                </h3>
                <p className="text-gray-600 text-center">
                  Integrity, Innovation, and Empathy guide us in serving
                  educators with respect and understanding.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col justify-between h-full group transform hover:translate-y-[-10px] transition duration-300">
              <div className="bg-white p-8 rounded-lg   shadow-gray-500 shadow-lg transition hover:border-red-500/50 hover:shadow-red-500/50 ">
                <div className="flex justify-center mb-6">
                  <img
                    src="/last.gif"
                    alt="Image 4"
                    className="w-32 h-32 rounded-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-center mb-4 font-serif animate-pulse">
                  Our Vision
                </h3>
                <p className="text-gray-600 text-center">
                  Transforming education by facilitating financial
                  opportunities, ensuring educators prosperity .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
