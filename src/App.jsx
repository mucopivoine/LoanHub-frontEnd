import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Layout/Layout'
import Manager from './Pages/ManagerDash'
import Manager from './Pages/Manager'
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
import Barchart from './Pages/Barchart'
import Sidebar from './Components/Sidebar'
import ContactUs from './Pages/ContactUs'
// import LoanRatesPage from './Pages/LoanRatesPage'
import { PieChart } from 'recharts'
import TableComponent from './Pages/Tablecomponent'
import ViewTeacher from './Pages/ViewTeacher'
import ViewManager from './Pages/ViewManagers'
import Analytics from './Pages/Analytics'
import ManageLoans from './Components/ManageLoans'
import Barnav from './Components/Barnav'
import Teachers from './Pages/Teachers'
import Loans from './Pages/Loans'
import ManagerDash from './Pages/ManagerDash'
import MnageAnalytics from './Pages/MnageAnalytics'
import Addmanager from './Pages/Addmanager'
import Settings from './Pages/Settings'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Call />}>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="contact" element={<Contacts />} />
          <Route path="services" element={<Services />} />
          <Route path="/auth" element={<AuthRoute />}>
            <Route path="signin" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="forgot" element={<Forgot />} />
            <Route path="reset" element={<Reset />} />
            <Route path="otpinput" element={<OtpInput />} />
            <Route path="otpconfirm" element={<Otpconfirm />} />
            <Route path="logout" element={<Logout />} /></Route>
        </Route>
        <Route path="/layout" element={<Layout />}>

          <Route path="teacher" element={<Teacher />} />
          <Route path="viewdata" element={<ViewDataForm />} />
          <Route path="manager" element={<Manager />} />
          

        </Route>
        <Route path="/admin" element={<Dashboards />}>
          {/* <Route path="dashboard" element={<Dashboard />} /> */}
          <Route path="navbar" element={<Navbar />} />

          <Route path="manager" element={<Manager />} />
          <Route path="teacher" element={<Teacher />} />
          <Route path="viewdata" element={<ViewDataForm />} />
        </Route>
        <Route path="/admin" element={<Dashboards />}>
          
          {/* <Route path="navbar" element={<Navbar />} /> */}

          <Route path="teacher" element={<Teacher />} />
          <Route path="viewdata" element={<ViewDataForm />} />
          <Route path="maindash" element={<MainDash />} />
          <Route path="rightside" element={<RightSide />} />
          <Route path="loanmanage" element={<LoanManagement />} />
          <Route path="graph" element={<Graph />} />
          <Route path='sidebar' element={<Sidebar />} />
          <Route path="piechart" elemnt={<PieChart />} />
          <Route path="table" element={<TableComponent/>}/>
          {/* <Route path="loanratespage" element={<LoanRatesPage/>}/> */}
          <Route path="contactus" element={<ContactUs />} />
          <Route path="viewteacher" element={<ViewTeacher />} />
          <Route path="viewmanager" element={<ViewManager/>} />
          <Route path="addmanager" element={<Addmanager/>} />
          <Route path="analytics" element={<Analytics/>} />
          <Route path="manageloans" element={<ManageLoans/>} />
          <Route path="settings" element={<Settings/>} />
        </Route>
        <Route path="/barnav" element={<Barnav/>}>
        <Route path="managerdash" element={<ManagerDash/>}/>
        <Route path="barnav" element={<Barnav/>}/>
        <Route path="teachers" element={<Teachers/>}/>
        <Route path="loans" element={<Loans/>} />
        
        <Route path="manageAnalytics" element={<MnageAnalytics/>}/>
        </Route>
      </Routes>
    </Router>
  )
}
export default App