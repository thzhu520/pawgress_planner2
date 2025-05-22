import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";
import AddEditPet from "./components/AddEditPet";
import PetDetails from "./components/PetDetails";
import TaskHistory from "./components/TaskHistory";
import AddTask from "./components/AddTask";
import Faq from "./components/Faq";
import Navbar from "./components/Navbar"; 

function Layout({ children, darkMode, setDarkMode }: any) {
    const location = useLocation();
    const hideNavbar = ["/", "/login", "/signup"].includes(location.pathname);
  
    return (
        <>
          {!hideNavbar && <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />}
          {children}
        </>
      );
    }

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`App ${darkMode ? "dark" : ""}`}>
      <Router>
        <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/add-edit-pet" element={<AddEditPet />} />
            <Route path="/pet-details" element={<PetDetails />} />
            <Route path="/task-history" element={<TaskHistory />} />
            <Route path="/add-task" element={<AddTask />} />
            <Route path="/faq" element={<Faq />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
