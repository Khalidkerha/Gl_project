import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WorkTableApp from './Mohami_profile/worktable/worktable_app';
import EditProfilApp from "./Mohami_profile/edit_profile/edit_profil_app";

function App() {
  return (
    <Router>
   <Routes>
      <Route element={<WorkTableApp/>} exact path="/"  />
      <Route exact path="/worktable" element={<WorkTableApp/>} />
      <Route exact path="/edit_profil" element={<EditProfilApp/>} />
</Routes>
    </Router>
  );
}

export default App;
