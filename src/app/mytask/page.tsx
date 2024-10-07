import MyTaskPage from '@/components/MyTaskComponent/MyTasksPage'
import React from 'react'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'LightWork | My Tasks',
  description: '',
}
function page() {
  return (
    <MyTaskPage/>
  )
}

export default page