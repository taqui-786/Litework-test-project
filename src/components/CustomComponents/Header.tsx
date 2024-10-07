import React from 'react'
import { Input } from "@/components/ui/input"
import UserProfileMenu from './UserProfileMenu'
import NotificationBell from './HeaderWithNotifications'
import { Search } from 'lucide-react'
function Header() {
  return (
    <header className="flex justify-between items-center  px-5 py-4 border-b ">
    <div className="relative w-1/2">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      <Input
        type="text"
        placeholder="Search properties, leads, contacts and more"
        className="pl-10 w-full"
      />
    </div>
    <div className="flex items-center space-x-7">
      <NotificationBell/>
      <UserProfileMenu/> 
    </div>
  </header>
  )
}

export default Header