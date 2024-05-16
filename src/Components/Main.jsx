import Services from "./Services";
import Contacts from "./Contacts";
import About from "./About"
import { motion } from 'framer-motion';



function Main() {
  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 bg-gray-100 h-[52rem] rounded-b-xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full mt-16">
              <motion.img
                src="/teacher.jpg"
                alt="Teacher"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="w-full object-cover inset-0 h-[40rem] rounded-b-xl "
              />
            </div>

            <div className="lg:py-24 mt-40">
              <h2 className="text-3xl font-bold font-serif sm:text-4xl ">
                Teacher Loans Made Easy!
              </h2>

              <motion.p
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="mt-4 text-gray-600 font-sans-serif"
              >
                Welcome to Umwalimu Loan Hub, your platform for accessing tailored financial support designed specifically
                for educators. We understand the unique financial needs of teachers and are here to help you access the
                funds you need to enhance your career and personal life. Our platform makes it easy for you to apply for
                a loan online, empowering you to take control of your financial future. Explore our range of loan options
                and financial tools created with teachers in mind. Join us in supporting educators to thrive!
              </motion.p>

              <a
                href="#"
                className="mt-8 font-bold inline-block rounded bg-red-500 px-12 py-3 text-sm text-white transition hover:bg-red-500 focus:outline-none focus:ring focus:ring-gray-400"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </section>
      <About/>
      <Services/>
      <Contacts/>
      

    </div>
  );

}

export default Main;
