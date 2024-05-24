

import Sidemenu from '../Components/Sidemenu';
import TeacherProfile from '../Components/TeacherProfile';

const loanTypes = [
  {
    type: 'Short Term Loan',
    description: 'Loans that need to be repaid within a year.',
    rate: '5%',
    duration: 'Up to 1 year'
  },
  {
    type: 'Long Term Loan',
    description: 'Loans with repayment periods longer than one year.',
    rate: '10%',
    duration: '1 to 10 years'
  },
  {
    type: 'Emergency Loan',
    description: 'Loans for urgent and unexpected expenses.',
    rate: '7%',
    duration: 'Up to 6 months'
  },
  {
    type: 'Development Loan',
    description: 'Loans for projects aimed at development and growth.',
    rate: '8%',
    duration: '5 to 15 years'
  }
];

function TeacherLoans() {
  return (
    <>
      <Sidemenu />
    
      <div className="lg:ml-[19%] flex justify-center min-h-screen ">
        <div className="mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4 text-center">Available Loans</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loanTypes.map((loan, index) => (
              <div key={index} className= " bg-white p-6 rounded shadow-md">
                <h2 className="text-xl font-bold mb-2">{loan.type}</h2>
                <p className="text-gray-700 mb-2">{loan.description}</p>
                <p className="text-gray-700"><strong>Rate:</strong> {loan.rate}</p>
                <p className="text-gray-700"><strong>Duration:</strong> {loan.duration}</p>
              </div>
            ))}
          </div>
        </div>
        <TeacherProfile/>
      </div>
     
    </>
  );
}

export default TeacherLoans;
