// import React from 'react';

const Services = () => {
  const services = [
    { id: 1, title: "Creating Streamlined Safeguard Process", img: "/photo1.jpg" },
    { id: 2, title: "Creating Streamlined Safeguard Process", img: "/two.jpg" },
    { id: 3, title: "Creating Streamlined Safeguard Process", img: "/change.jpg" },
  ];

  return (
    <div className="max-w-screen-2xl mx-auto px-4 md:px-14 ">
      <div className="text-center my-8">
        <h2 className="font-serif text-4xl font-bold text-center  mt-32">Our Services</h2>
        <p className="text-sm text-neutralGrey mb-8 w-3/4 mx-auto text-gray-600 font-sans-serif">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between ">
        {services.map(service => (
          <div key={service.id} className="mx-auto relative mb-12 cursor-pointer ">
            <img src={service.img} alt="" className="hover:scale-95 transition-all duration-300 rounded-b-xl rounded-t-xl"/>
            <div className="text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-6">
              <h3 >{service.title}</h3>
              <div className="flex items-center gap-8 justify-center">
                <a href="/" className="font-bold text-red-500  hover:text-red-800">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="11" viewBox="0 0 17 11" fill="none" className="inline-block ml-2">
                    <path d="M12 0.399L16 5.399L12 10.399" stroke="#4CAF4F" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
