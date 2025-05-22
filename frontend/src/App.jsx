import { Routes, Route } from "react-router-dom";
import Register from "./Landing/components/Register";
import Login from "./Landing/components/Login";
import MainPages from "./Landing/components/MainPages";
import StudentDashboard from "./studentsComponents/components/StudentDashboard";
import StudentProfile from "./studentsComponents/components/StudentProfile";
import SchedulePage from "./studentsComponents/components/SchedulePage";
import ApplyForJobs from "./studentsComponents/components/ApplyForJobs";
import JobDetails from "./studentsComponents/components/jobView/JobDetails";
import JobApplied from "./studentsComponents/components/JobApplied";
import SupportChat from "./studentsComponents/components/Supportchat";
import Layout from "./Landing/hr/Lay";

// // HR Pages
// import AllJob from "./Landing/hr/pag/AllJob";
// import Application from "./Landing/hr/pag/Application";
// import Aprovedstudent from "./Landing/hr/pag/Aprovedstudent";
// import DataRequest from "./Landing/hr/pag/DataRequest";
// import GetProfile from "./Landing/hr/pag/GetProfile";
// import Hiring from "./Landing/hr/pag/Hiring";
// import Postjob from "./Landing/hr/pag/Postjob";
// import Profile from "./Landing/hr/pag/Profile";
// import QuickHire from "./Landing/hr/pag/QuickHire";
// import Schedule from "./Landing/hr/pag/Schedule";
// import StudentOnHold from "./Landing/hr/pag/StudentOnHold";

import "./App.css";

function StudentLayout({ children }) {
  return (
    <>
      {children}
      <SupportChat />
    </>
  );
}

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<MainPages />} />

      {/* HR / Hire Routes
      <Route path="/hire" element={<Layout />}>
        <Route path="all-jobs" element={<AllJob />} />
        <Route path="applications" element={<Application />} />
        <Route path="approved-students" element={<Aprovedstudent />} />
        <Route path="data-request" element={<DataRequest />} />
        <Route path="get-profile" element={<GetProfile />} />
        <Route path="hiring" element={<Hiring />} />
        <Route path="post-job" element={<Postjob />} />
        <Route path="profile" element={<Profile />} />
        <Route path="quick-hire" element={<QuickHire />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="student-on-hold" element={<StudentOnHold />} />
      </Route> */}

      {/* Student Routes */}
      <Route
        path="/profile"
        element={
          <StudentLayout>
            <StudentProfile />
          </StudentLayout>
        }
      />
      <Route
        path="/schedule"
        element={
          <StudentLayout>
            <SchedulePage />
          </StudentLayout>
        }
      />
      <Route
        path="/apply-for-jobs"
        element={
          <StudentLayout>
            <ApplyForJobs />
          </StudentLayout>
        }
      />
      <Route
        path="/apply-for-jobs/job-details/:id"
        element={
          <StudentLayout>
            <JobDetails />
          </StudentLayout>
        }
      />
      <Route
        path="/applied-jobs"
        element={
          <StudentLayout>
            <JobApplied />
          </StudentLayout>
        }
      />
    </Routes>
  );
}

export default App;
