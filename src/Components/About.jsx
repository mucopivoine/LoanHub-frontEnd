

function About() {
  return (
    <div>
       


    <div className="flex justify-center items-center h-screen">
      <section className="py-20 w-full max-w-screen-lg">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mt-32">About Us</h2>

          {/* Grid container for responsive layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center pt-10">
            {/* Card 1 */}
            <div className="relative group">
              <div className="bg-white p-8 rounded-lg shadow-lg border-4 border-gradient-to-br from-red-500 to-red-700 hover:bg-red-700 transition-colors duration-300">
                <div className="flex justify-center mb-6">
                  <img src="path/to/image1.jpg" alt="Image 1" className="w-32 h-32 rounded-full object-cover" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-4">Our Team</h3>
                <p className="text-gray-600 text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative group">
              <div className="bg-white p-8 rounded-lg shadow-lg border-4 border-gradient-to-br from-blue-500 to-indigo-700 hover:bg-indigo-700 transition-colors duration-300">
                <div className="flex justify-center mb-6">
                  <img src="path/to/image2.jpg" alt="Image 2" className="w-32 h-32 rounded-full object-cover" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-4">Our Mission</h3>
                <p className="text-gray-600 text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="relative group">
              <div className="bg-white p-8 rounded-lg shadow-lg border-4 border-gradient-to-br from-green-500 to-green-700 hover:bg-green-700 transition-colors duration-300">
                <div className="flex justify-center mb-6">
                  <img src="path/to/image3.jpg" alt="Image 3" className="w-32 h-32 rounded-full object-cover" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-4">Our Values</h3>
                <p className="text-gray-600 text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="relative group">
              <div className="bg-white p-8 rounded-lg shadow-lg border-4 border-gradient-to-br from-yellow-500 to-yellow-700 hover:bg-yellow-700 transition-colors duration-300">
                <div className="flex justify-center mb-6">
                  <img src="path/to/image4.jpg" alt="Image 4" className="w-32 h-32 rounded-full object-cover" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-4">Our Vision</h3>
                <p className="text-gray-600 text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
 
    </div>
    
  );
}

export default About;