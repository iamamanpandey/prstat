// import { GoogleAuthProvider } from "firebase/auth";
"use client";
import { Card, Button } from "flowbite-react";
import Link from "next/link";

const DashboardPage = () => {
  return (
    <div className="my-4">
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Dashboard
      </h2>
      <div>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Card className="max-w-sm">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <Link href="/dashboard/workout" className="bg-green-500 text-white px-4">
              Create an Empty Workout
              <svg
                className="-mr-1 ml-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
