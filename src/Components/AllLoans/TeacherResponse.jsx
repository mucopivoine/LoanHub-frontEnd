import { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';

function TeacherResponse() {
  const teachers = [
    { id: 1, name: "Teacher", content: "John Doe is requesting a loan to further his education. He plans to use the funds to enroll in a professional development program that will enhance his teaching skills. The program includes various workshops and courses that focus on advanced teaching methodologies, technology integration in the classroom, and curriculum development. John has been a dedicated teacher for over 10 years and believes that this additional training will significantly benefit his students." },
    // You can add more teacher objects here
  ];

  const [modalContent, setModalContent] = useState(null);

  const openModal = (teacher) => {
    setModalContent(teacher);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <div>
      <div className="container bg-white">
        <h2 className="text-4xl font-bold text-center font-serif mt-32">
          Response
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center pt-10">
          
          {teachers.map(teacher => (
            <div key={teacher.id} className="flex flex-col justify-between h-full group transform hover:translate-y-[-10px] transition duration-300 max-w-lg">
              <div className="bg-white p-8 rounded-lg shadow-gray-500 shadow-lg transition hover:border-blue-500/50 hover:shadow-blue-500/50">
                {!modalContent && (
                  <>
                    <div className="flex justify-center mb-6">
                      <FaUserCircle className="w-32 h-32 text-gray-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-center mb-4 font-serif animate-pulse">
                      {teacher.name}
                    </h3>
                  </>
                )}
                <button 
                  className="text-blue-800 text-center mb-4 font-serif px-4 py-2 text-lg"
                  onClick={() => openModal(teacher)}
                >
                  View More
                </button>
              </div>
            </div>
          ))}

          {/* Card 2 */}
          <div className="flex flex-col justify-between h-full group transform hover:translate-y-[-10px] transition duration-300 max-w-lg">
            <div className="bg-white p-8 rounded-lg shadow-gray-500 shadow-lg transition hover:border-blue-500/50 hover:shadow-blue-500/50">
              {/* <div className="flex justify-center mb-6">
                <FaUserCircle className="w-32 h-32 text-gray-500" />
              </div> */}
              <h3 className="text-2xl font-bold text-center mb-4 font-serif animate-pulse">
                Response
              </h3>
              <div className="text-gray-600 text-center">
                <p>Empowering educators through accessible loan services, supporting their personal and professional growth.</p>
                <p>Names</p>
                <p>Email lo</p>
              </div>
            </div>
          </div>

        </div>

        {modalContent && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg max-w-lg w-full mx-auto relative">
              <button onClick={closeModal} className="absolute top-2 right-2 text-gray-700 hover:text-gray-900">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 6L18 18" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <h3 className="text-2xl font-bold mb-4">{modalContent.name}</h3>
              <p className="text-gray-700">{modalContent.content}</p>
              <div className="mt-4">
                <p>Loan Amount: $5,000</p>
                <p>Purpose: Professional Development</p>
                <p>Duration: 6 months</p>
                <p>Repayment Plan: Monthly installments</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default TeacherResponse;
