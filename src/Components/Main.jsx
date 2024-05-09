// import React from 'react'

function Main() {
  return (
    <div><section>
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 bg-gray-100 h-[65rem]">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full ">
          <img src="/teacher.jpg" className=" inset-0 h-full w-full object-cover"/>
        </div>
  
        <div className="lg:py-24">
          <h2 className="text-3xl font-bold sm:text-4xl">Teacher Loans Made Easy </h2>
  
          <p className="mt-4 text-gray-600" id="animation">
          
          Welcome to Umwalimu Loan Hub, your platform for accessing tailored financial support designed specifically for educators.
          We understand the unique financial needs of teachers and are here to help you access the funds you need to enhance your career and personal life. Our platform makes it easy for you to apply for a loan online, empowering you to take control of your financial future. Explore our range of loan options and financial tools created with teachers in mind. Join us in supporting educators to thrive!
          </p>
  
          <a
            href="#"
            className="mt-8 inline-block rounded bg-red-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-red-500 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default Main