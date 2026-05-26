import React from "react";
import { Toaster } from "react-hot-toast";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LoginLanding from "./pages/LoginLanding";
import Attendance from "./pages/Attendance";
import Leave from "./pages/Leave";
import Payslips from "./pages/Payslips";
import Layout from "./pages/Layout";
import Settings from "./pages/Settings";
import PrintPayslips from "./pages/PrintPayslips";
import Employees from "./pages/Employees";
import LoginForm from "./components/LoginForm";

const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/login" element={<LoginLanding />} />
        <Route path="/login/admin" element={<LoginForm  role="admin" title="Admin Portal" subtitle="Sign in to manage the organization"/>} />
        <Route path="/login/employee" element={<LoginForm role="employee" title="Employee Portal" subtitle="Sign in to manage access yout account"/>} />
        
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/payslips" element={<Payslips />} />
          <Route path="/leave" element={<Leave />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
        <Route path="/print/payslips/:id" element={<PrintPayslips />} />

        {/* If the user visits an undefined route, automatically redirect them to '/dashboard'
           and replace the current history entry to prevent going back to the invalid route */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </>
  );
};

export default App;
