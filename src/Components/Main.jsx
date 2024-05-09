// import React from 'react'

function Main() {
  return (
    <div><section>
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 bg-gray-100 h-[65rem]">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full ">
          <img src="/happy.jpg" className=" inset-0 h-full w-full object-cover"/>
        </div>
  
        <div className="lg:py-24">
          <h2 className="text-3xl font-bold sm:text-4xl">Teacher Loans Made Easy</h2>
  
          <p className="mt-4 text-gray-600">
          Welcome to Umwalimu loan hub, where teachers find financial support tailored to their needs.
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