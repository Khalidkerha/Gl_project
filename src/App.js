import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutApp from './user_profile/About/about_app';
import HomeApp from './user_profile/home page/home_page_app';
import LawyerDirectoryApp from "./user_profile/lawyery directory/lawyerderectory_app";
import Result from "./user_profile/resutl_page/result_app";
import DeatailApp from "./user_profile/deatil info/detail_app";
import ReviewApp from "./user_profile/review lawyer/review_app";
function App() {
  return (
    <Router>
   <Routes>
      <Route element={<HomeApp/>} exact path="/"  />
      <Route exact path="/Home" element={<HomeApp/>} />
      <Route exact path="/About_us" element={<AboutApp/>} />
      <Route exact path="/Lawyer_directory" element={<LawyerDirectoryApp/>} />
      <Route exact path="/result" element={<Result/>} />
      <Route exact path="/Detail_App" element={<DeatailApp/>} />
      <Route exact path="/review" element={<ReviewApp/>} />
</Routes>
    </Router>
  );
}

export default App;
