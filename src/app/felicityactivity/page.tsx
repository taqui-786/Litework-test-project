import { FelicityActivityPage } from '@/components/FelicityactivityComponent/FelicityActivityPage'
import React from 'react'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'LightWork | FelicityActivity',
  description: '',
}
function page() {
  return (
    <FelicityActivityPage/>
  )
}

export default page