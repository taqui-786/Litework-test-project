import React from 'react'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'LightWork | My Tasks',
  description: '',
}
function page() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            This is task Page
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Dive into the heart of your data and unlock powerful insights with our intuitive task.
          </p>
        </div>
        
      </div>
    </div>
  </section> )
}

export default page