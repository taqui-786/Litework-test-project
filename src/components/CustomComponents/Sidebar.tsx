"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  LayoutGrid,
  Phone,
  User,
  BriefcaseBusiness,
  Users,
  UserRoundCog,
  Calendar,
  NotebookTabs,
  BookMinus,
  Settings,
  Info,
  LogOut,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const sidebarItems = [
  { icon: LayoutGrid, label: "Dashboard", href: "/" },
  { icon: Phone, label: "Felicity Activity", href: "/felicityactivity" },
  { icon: User, label: "My Tasks", href: "/mytask" },
  { icon: BriefcaseBusiness, label: "My Jobs", href: "/myjobs" },
  { icon: UserRoundCog, label: "Customers", href: "/customers" },
  { icon: Calendar, label: "Calendar", href: "/calendar" },
  { icon: NotebookTabs, label: "Invoices", href: "/invoices" },
  {
    icon: BookMinus,
    label: "Knowledge",
    hasSubItems: true,
    href: "#",
  },
  { icon: Users, label: "Team", href: "/team" },
  { icon: Settings, label: "Settings", href: "/setting", spacing: true },
  { icon: Info, label: "Info", href: "/info" },
  { icon: LogOut, label: "Log Out", href: "/logout" },
];

export default function Sidebar() {
  const [knowledgeExpanded, setKnowledgeExpanded] = useState(false);

  const pathname = usePathname();

  const isActive = (href:string) => {
    if (href === '/') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };


  return (
    <aside className="w-60 bg-white h-screen flex flex-col border-r border-gray-200">
      <div className="p-4 mb-6">
        <div className="w-full flex items-center justify-center gap-1.5 mt-1">
          <svg
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.2545 0.652953C9.69601 0.107054 8.79095 0.107058 8.23249 0.652955L0.419239 8.29041L0.598987 8.46741L0.419238 8.29041C0.150919 8.55269 0 8.90863 0 9.27996V16.468C0 17.1081 0.530625 17.6255 1.18319 17.6255C1.83576 17.6255 2.36638 17.1081 2.36638 16.468V9.65966L9.24349 2.93729L10.5921 4.2556L4.75165 9.96468C4.48333 10.227 4.33241 10.5829 4.33241 10.9542V16.2265C4.33241 17 4.97364 17.6255 5.76265 17.6255H17.0567C17.8457 17.6255 18.487 17 18.487 16.2265V9.27996C18.487 8.90863 18.3361 8.5527 18.0677 8.2904L10.2545 0.652953ZM6.69879 15.3105V11.3339L12.2661 5.89189L16.1206 9.65966V15.3105H6.69879Z"
              fill="#22BCFF"
            />
          </svg>
          <span className="text-xl font-bold text-[#22BCFF] text-center">
            LightWork
          </span>
        </div>
      </div>
      <nav className="flex-1 px-4">
        {sidebarItems.map((item, index) => (
          <div key={index} className={item.spacing ? "mt-32" : "mt-1"}>
            <Link
              href={item.href}
              className={cn(
                "w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-700 rounded-md",
                (isActive(item.href) && 
                  "bg-primary text-white hover:bg-gray-800 hover:text-white" )
              )}
              
              onClick={() => {
                if (item.hasSubItems) {
                  setKnowledgeExpanded(!knowledgeExpanded);
                }
              }}
            >
              <item.icon className="w-5 h-5 mr-3" />
              <span className="flex-1 text-left">{item.label}</span>
              {item.hasSubItems &&
                (knowledgeExpanded ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                ))}
            </Link>
            {item.hasSubItems && knowledgeExpanded && (
              <div className="ml-8 mt-1">
                <button className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Sub-item 1
                </button>
                
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}
