'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { AlertTriangle, ArrowLeft, RefreshCcw } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-red-100 to-white px-4">
      <div className="text-center">
        <AlertTriangle className="w-16 h-16 text-red-600 mb-4 mx-auto animate-pulse" />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Oops! Something went wrong</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          We are sorry, but an unexpected error occurred. Our team has been notified and is working on it.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => reset()}
            className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-red-600 rounded-full hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-300"
          >
            <RefreshCcw className="w-5 h-5 mr-2" />
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 text-lg font-medium text-red-600 bg-white border-2 border-red-600 rounded-full hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go back home
          </Link>
        </div>
      </div>
    </div>
  )
}