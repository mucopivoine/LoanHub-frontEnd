import { useState } from 'react';

const Services = () => {
  const services = [
    { id: 1, title: "Flexible Loan Options", img: "/photo1.jpg", content: "We offer personalized loan solutions tailored to meet the unique financial needs of teachers, ensuring flexibility and affordability." },
    { id: 2, title: "Easy Application Process", img: "/two.jpg", content: "Our streamlined and user-friendly application process allows teachers to quickly and efficiently apply for loans with minimal paperwork." },
    { id: 3, title: "Supportive Financial Guidance", img: "/change.jpg", content: "We provide comprehensive financial advice and support to help teachers manage their loans effectively and achieve their financial goals." },
  ];

  const [modalContent, setModalContent] = useState(null);

  const openModal = (service) => {
    setModalContent(service);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <div className="max-w-screen-2xl mx-auto px-4 md:px-14 ">
      <div className="text-center my-8">
        <h2 className="font-serif text-4xl font-bold text-center mt-32">Our Services</h2>
        <p className="text-sm text-neutralGrey mb-8 w-3/4 mx-auto text-gray-600 font-sans-serif">
          This is a brief description of our services. We offer financial solutions to meet your needs.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between">
        {services.map(service => (
          <div key={service.id} className="mx-auto relative mb-12 cursor-pointer">
            <img src={service.img} alt="" className="hover:scale-95 transition-all duration-300 rounded-b-xl rounded-t-xl" />
            <div className="text-center px-4 py-8 bg-white shadow-lg rounded-md md:w-3/4 mx-auto absolute left-0 right-0 -bottom-6">
              <h3>{service.title}</h3>
              <div className="flex items-center gap-8 justify-center">
                <button onClick={() => openModal(service)} className="font-bold text-red-500 hover:text-red-800">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="11" viewBox="0 0 17 11" fill="none" className="inline-block ml-2">
                    <path d="M12 0.399L16 5.399L12 10.399" stroke="#4CAF4F" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {modalContent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-lg mx-auto relative">
            <button onClick={closeModal} className="absolute top-2 right-2 text-gray-700 hover:text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 6L18 18" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <h3 className="text-2xl font-bold mb-4">{modalContent.title}</h3>
            <p className="text-gray-700">{modalContent.content}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
