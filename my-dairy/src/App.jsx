import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import AuthPage from "./pages/authPage"; // <-- new combined page
import Home from "./pages/home";

// simple auth check function (for now with localStorage)
const isAuthenticated = () => {
  return !!localStorage.getItem("token"); // true if token exists
};

function App() {
  return (
    <>
      <Routes>
        {/* Signup */}
        <Route path="/" element={<AuthPage mode="signup" />} />

        {/* Login */}
        <Route path="/login" element={<AuthPage mode="login" />} />

        {/* Protected route for Home */}
        <Route
          path="/home"
          element={
            isAuthenticated() ? <Home /> : <Navigate to="/login" replace />
          }
        />
      </Routes>

      {/* Toast Notifications */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
