import Link from 'next/link'
import { ArrowLeft, Frown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-white px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4 animate-bounce">404</h1>
        <Frown className="w-16 h-16 text-gray-600 mb-4 mx-auto" />
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">Oops! Page not found</h2>
        <p className="text-xl text-gray-600 mb-8">
          The page you are looking for does nnt exist or has been moved.
        </p>
        <Link
          href="/"
          className={cn(buttonVariants())}
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Go back home
        </Link>
      </div>
    </div>
  )
}