"use client";

import { Sidebar } from "flowbite-react";
import Link from "next/link";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";

const navigation = [
  {name:"Dashboard", href:"/dashboard"},
  { name: "Profile", href: "/dashboard/profile" },
  { name: "History", href: "/dashboard/history" },
  { name: "Workout", href: "/dashboard/workout" },
  { name: "Exercise", href: "/dashboard/exercise" },
  { name: "Measures", href: "/dashboard/measures" },
];
export function SidebarComponent() {
  return (
    <Sidebar aria-label="Sidebar with logo branding example " className="flex h-full flex-col justify-between py-2">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          {navigation?.map((item) => (
            <Link  key={item.href} href={item.href}>
            <Sidebar.Item  href={item.href} icon={HiChartPie} className="py-4">
              {item.name}
            </Sidebar.Item>
            </Link>
          ))}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
