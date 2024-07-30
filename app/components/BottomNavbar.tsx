import React from "react";
import { useRouter } from "next/navigation";
const BottomNavbar = () => {
  const navigation = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Profile", href: "/dashboard/profile" },
    { name: "History", href: "/dashboard/history" },
    { name: "Workout", href: "/dashboard/workout" },
    { name: "Exercise", href: "/dashboard/exercise" },
    { name: "Measures", href: "/dashboard/measures" },
  ];
  const router = useRouter()
  return (
    <div className="btm-nav" >
      {navigation.map((item) => (
        <button key={item?.name}  onClick={()=>router.push(item.href)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          <span className="btm-nav-label">{item.name}</span>
        </button>
      ))}
    </div>
  );
};

export default BottomNavbar;
