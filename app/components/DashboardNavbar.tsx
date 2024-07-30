"use client";

import { Avatar, Navbar } from "flowbite-react";

export function DashboardNavbar() {
  return (
    <Navbar fluid rounded className="bg-white border-b py-4">
      <Navbar.Brand href="https://flowbite-react.com">
        {/* <img
          src="/favicon.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        /> */}
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </Navbar.Brand>
      <Avatar
        alt="User settings"
        img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
        rounded
        flex-end
      />
      <div className="flex md:order-2"></div>
    </Navbar>
  );
}
