"use client";
import BottomNavbar from "../components/BottomNavbar";

const DashboardLayout = ({ children }) => {
  return (
    <main className="mx-auto max-w-3xl  pt-4 pb-16">
      <div>
        {children}
        <BottomNavbar/>
      </div>
    </main>
  );
};

export default DashboardLayout;
