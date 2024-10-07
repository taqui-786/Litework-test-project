'use client'

import { useState } from "react"
import { usePathname } from "next/navigation"
import { 
  LayoutGrid, 
  Phone, 
  User, 
  Briefcase, 
  Users, 
  Calendar, 
  FileText, 
  Book, 
  Settings, 
  Info, 
  LogOut,
  ChevronDown,
  ChevronRight
} from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

const sidebarItems = [
  { icon: LayoutGrid, label: "Dashboard" , href:"/" },
  { icon: Phone, label: "Felicity Activity", href:"/felicityactivity" },
  { icon: User, label: "My Tasks", href:"/mytask" },
  { icon: Briefcase, label: "My Jobs", href:"/myjobs" },
  { icon: Users, label: "Customers", href:"/customers" },
  { icon: Calendar, label: "Calendar", href:"/calendar" },
  { icon: FileText, label: "Invoices", href:"/invoices" },
  { icon: Book, label: "Knowledge", hasSubItems: false, href:"/Knowledge" },
  { icon: Users, label: "Team", href:"/team" },
  { icon: Settings, label: "Settings", href:"/setting", spacing:true },
  { icon: Info, label: "Info", href:"/info" },
  { icon: LogOut, label: "Log Out", href:"/logout" },
]

export default function Sidebar() {
  const [knowledgeExpanded, setKnowledgeExpanded] = useState(false)
  
const pathname = usePathname()

  return (
    <aside className="w-60 bg-white h-screen flex flex-col border-r border-gray-200">
      <div className="p-4 mb-6">
        <h1 className="text-2xl font-bold text-blue-500 text-center"> LightWork</h1>
      </div>
      <nav className="flex-1 px-4">
        {sidebarItems.map((item, index) => (
          <div key={index} className={item.spacing ? "mt-32" :"mt-1"}>
            <Link href={item.href}
              className={cn(
                "w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-700 rounded-md",
                pathname === item.href && "bg-gray-900 text-white hover:bg-gray-800 hover:text-white" 
              )}
              onClick={() => {
                if (item.hasSubItems) {
                  setKnowledgeExpanded(!knowledgeExpanded)
                }
              }}
            >
              <item.icon className="w-5 h-5 mr-3" />
              <span className="flex-1 text-left">{item.label}</span>
              {item.hasSubItems && (
                knowledgeExpanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />
              )}
            </Link>
            {item.hasSubItems && knowledgeExpanded && (
              <div className="ml-8 mt-1">
                <button className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Sub-item 1
                </button>
                <button className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Sub-item 2
                </button>
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  )
}
