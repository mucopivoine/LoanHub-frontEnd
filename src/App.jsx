// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import Sidebar from './Components/Sidebar';
import ContactUs from './Pages/ContactUs';
import { PieChart } from 'recharts';
import Forgotps from './Components/Forgotps';
import TableComponent from './Pages/Tablecomponent';
import ViewTeacher from './Pages/ViewTeacher';
import ViewManager from './Pages/ViewManagers';
import Analytics from './Pages/Analytics';
import ManageLoans from './Components/ManageLoans';
import Barnav from './Components/Barnav';
import Teachers from './Pages/Teachers';
import Loans from './Pages/Loans';
import ManagerDash from './Pages/ManagerDash';
import Addmanager from './Pages/Addmanager';
import ViewData from './Pages/ViewData';
import TeacherLoans from './Pages/TeacherLoans';
import TeacherContact from './Pages/TeacherContact';
import ManageTeachers from './Pages/ManageTechers';
import TeacherProfile from './Components/TeacherProfile';
import ViewTeachers from './Components/ViewTeachers';
import TeacherDetails from './Pages/TeacherDetails';
import Teacher from './Pages/Teacher'
import AuthRoute from './Pages/AuthRoute'
import SignUp from './Components/SignUp'
import Forgot from './Components/Forgot'
import Login from './Components/Login'
import Reset from './Components/Reset'
import Call from './Components/Call'
import About from './Components/About'
import OtpInput from './Components/OtpInput'
import Otpconfirm from './Components/Otpconfirm'
import Main from './Components/Main'
import Services from './Components/Services'
import Contacts from './Components/Contacts'
import ViewDataForm from './Pages/ViewData'
import Logout from './Components/Logout'
import Navbar from './Components/Navbar'
import Dashboards from './Pages/Dahboards'
import MainDash from './Components/MainDash/MainDash'
import RightSide from './Components/RightSide/RightSide'
import LoanManagement from './Pages/LoanManagement'
import Graph from './Components/Graphs/Graph'
// import Settings from './Pages/Settings'
import NewDash from "./Pages/NewDash"
import Pie from './Pages/Pie'
// import TeacherDetails from './Pages/TeacherDetails';
import Database from './Components/Database';
import Approves from './Pages/Approves ';
import AddTeacherdtl from './Pages/AddTeacherdtl';
import AllLoans from './Components/AllLoans/AllLoans';
import Manager from './Components/Manager';
import Profile from './Forms/Profile';
import TeacherAnalytics from './Pages/TeacherAnalytics';
import LoanDetails from './Components/AllLoans/LoanDetails';
import MostRequestedLoans from './Pages/MostrequestedLoans';
import UserignUp from './Components/Usersignup';
import Otpuser from './Components/Otpuser';
import ProtectedRoute from './Components/ProtectedRoute';
import Loanresponse from './Components/AllLoans/Loanresonse';
import ManagerAnalytics from './Pages/MnageAnalytics';
import AddUser from './Components/User/AddUser';
import Databasemg from './Components/Databasemg';
import Mnguser from './Components/User/Mnguser';
import Mngloans from './Components/AllLoans/Mngloans';
import Mngdetails from './Components/AllLoans/MngDetails';
import Mngresponse from './Components/AllLoans/Mngresponse';



function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Call />}>
          <Route index element={<Main />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contacts />} />
          <Route path="services" element={<Services />} />   
          <Route path="/auth" element={<AuthRoute />}>
 
              <Route path="signin" element={<Login />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="forgot" element={<Forgot />} />
              <Route path="forgotps" element={<Forgotps />} />
              <Route path='reset' element={<Reset />} />
              <Route path="otpinput" element={<OtpInput />} />
              <Route path="otpconfirm" element={<Otpconfirm />} />
              <Route path="logout" element={<Logout />} />
              <Route path="otpuser" element={<Otpuser />} />
              <Route path="usersignup" element={<UserignUp/>}/>
          </Route>
          </Route>
        <Route path="/layout" element={<Layout />}>
          <Route path="teacherloans" element={<TeacherLoans />} />
          <Route path="viewteacher" element={<ViewTeacher />} />
          <Route path="viewdata" element={<ViewData />} />
          <Route path="approves" element={<Approves />} />
          <Route path="addteacherdtl" element={<AddTeacherdtl />} />
          <Route path="teachercontact" element={<TeacherContact />} />
          <Route path="manageteachers" element={<ManageTeachers />} />
          <Route path="teacherprofile" element={<TeacherProfile/>} />
          <Route path="teacheranalytics" element={<TeacherAnalytics />} />
        </Route>

        <Route path="/admin" element={<Dashboards />}>
          <Route path="navbar" element={<Navbar />} />
          {/* <Route path="teacherprofile/:id" element={<TeacherDetails />} /> */}
          <Route path="manager" element={<Manager />} />
          <Route path="Pie" element={<Pie />} />
          <Route path="allLoans" element={<AllLoans />} />
          <Route path="NewDash" element={<NewDash />} />
          <Route path="database" element={<Database />} />
          <Route path="teacher" element={<Teacher />} />
          <Route path="viewdata" element={<ViewDataForm />} />
          <Route path="maindash" 
        element={ <MainDash /> } />
    
          <Route path="rightside" element={<RightSide />} />
          <Route path="loanmanage" element={<LoanManagement />} />
          <Route path="graph" element={<Graph />} />
          <Route path="sidebar" element={<Sidebar />} />
          <Route path="piechart" element={<PieChart />} />
          <Route path="table" element={<TableComponent />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="viewteacher" element={<ViewTeacher />} />
          <Route path="viewmanager" element={<ViewManager />} />
          <Route path="viewteachers" element={<ViewTeachers />} />
          <Route path="addmanager" element={<Addmanager />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="manageloans" element={<ManageLoans />} />
          <Route path="profile" element={<Profile />} />
          <Route path="loanresponse" element={<Loanresponse/>}/>
          <Route path="loanDetails/:id" element={<LoanDetails />} />
          <Route path="database/adduser" element={<AddUser/>} />  
        </Route>
        <Route path="/barnav" element={<Barnav />}>
          <Route path="managerdash" element={<ManagerDash />} />
          <Route path="teachers" element={<Teachers />} />
          <Route path="loans" element={<Loans />} />
          <Route path="manageAnalytics" element={<ManagerAnalytics />} />
          <Route path="teacher" element={<Teacher />} />
          <Route path="viewdata" element={<ViewDataForm />} />
          <Route path="mostrequestedloans" element={<MostRequestedLoans/>}/>
          <Route path="databasemg" element={<Databasemg/>}/>
          <Route path="manageloans" element={<ManageLoans/>}/>
          <Route path="databasemg/mnguser" element={<Mnguser/>}/>
          <Route path="mngloans" element={<Mngloans/>}/>
          <Route path="mngdetails/:id" element={<Mngdetails/>}/>
          <Route path="mngdetails/:id/mngresponse" element={<Mngresponse/>}/>
          </Route>
      </Routes>
    </Router>
  )
  }
  export default App;







